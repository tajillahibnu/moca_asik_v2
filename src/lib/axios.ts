import axios, { type AxiosInstance } from 'axios'
import NProgress from 'nprogress'
import { toast } from '@/components/ui/toast'
import router from '@/router'

// Extend AxiosRequestConfig to include custom properties
declare module 'axios' {
    export interface AxiosRequestConfig {
        skipLoading?: boolean
        skipErrorToast?: boolean
        skipSuccessToast?: boolean
    }
}

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Accept': 'application/json',
    }
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    if (!config.skipLoading) {
        NProgress.start()
    }

    return config
})

api.interceptors.response.use(
    (response) => {
        if (!response.config.skipLoading) {
            NProgress.done()
        }

        // Handle Standard API Response (Success)
        if (response.data && response.data.status === 'success') {
            if (!response.config.skipSuccessToast && response.data.message) {
                toast({
                    title: 'Success',
                    description: response.data.message,
                    variant: 'default', // or 'success' if you add a variant
                    duration: 3000,
                })
            }
        }

        return response
    },
    (error) => {
        if (!error.config?.skipLoading) {
            NProgress.done()
        }

        const data = error.response?.data
        const status = error.response?.status
        const config = error.config

        // Handle Standard API Response (Error)
        const errorMessage = data?.message || error.message || 'An unexpected error occurred.'

        if (!config?.skipErrorToast) {
            // Validation Errors (422)
            if (status === 422 && data?.errors) {
                // Optionally list all errors, but usually just the main message or first error is enough for a toast
                // Let's rely on the form to show specific field errors, but show a general toast
                toast({
                    title: 'Validation Error',
                    description: errorMessage,
                    variant: 'destructive',
                })
            }
            // Unauthorized (401)
            else if (status === 401) {
                toast({
                    title: 'Session Expired',
                    description: 'Please login again.',
                    variant: 'destructive',
                })
                localStorage.removeItem('access_token')
                router.push('/login')
            }
            // General Error
            else {
                toast({
                    title: 'Error',
                    description: errorMessage,
                    variant: 'destructive',
                })
            }
        }

        return Promise.reject(error)
    }
)

export default api
