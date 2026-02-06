import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/lib/axios'

// Global state (outside function ensuring singleton behavior if needed)
const user = ref(null)
const isLoggedIn = ref(false)

export function useAuth() {
    const router = useRouter()
    const isLoading = ref(false)
    const errors = ref<Record<string, string[]> | null>(null)

    const fetchUser = async () => {
        try {
            const response = await api.get('/api/user')
            user.value = response.data.data ? response.data.data : response.data
            isLoggedIn.value = true
        } catch (error) {
            user.value = null
            isLoggedIn.value = false
        }
    }

    const login = async (credentials: Record<string, any>) => {
        isLoading.value = true
        errors.value = null

        try {
            // 1. Login
            const response = await api.post('/api/login', credentials)

            // 2. Store Token
            // ApiResponseTrait wraps data in a 'data' property, so we check both paths
            // Path 1: response.data.data.access_token (standard trait)
            // Path 2: response.data.access_token (fallback)
            const token = response.data?.data?.access_token || response.data?.access_token

            if (!token) {
                console.error('Token extraction failed. Response:', response.data)
                throw new Error('Access token not found in response')
            }

            localStorage.setItem('access_token', token)

            // 3. Fetch User
            await fetchUser()

            // 4. Redirect
            router.push('/dashboard')
        } catch (error: any) {
            // Capture validation errors to display inline
            if (error.response?.status === 422) {
                errors.value = error.response.data.errors
            }
            // Other errors are handled by global axios interceptor
        } finally {
            isLoading.value = false
        }
    }

    const logout = async () => {
        try {
            await api.post('/api/logout')
            // Toaster will show success message from backend
        } catch (error) {
            // Global interceptor handles error toast
        } finally {
            // Always clear local state
            localStorage.removeItem('access_token')
            user.value = null
            isLoggedIn.value = false
            router.push('/login')
        }
    }

    return {
        user,
        isLoggedIn,
        isLoading,
        errors,
        login,
        logout,
        fetchUser
    }
}
