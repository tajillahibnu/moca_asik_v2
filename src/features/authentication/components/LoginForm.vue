<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const mode = import.meta.env.VITE_APP_MODE
</script>

<template>
    <div class="grid gap-6">
        <div class="grid gap-2 text-center">
            <h1 class="text-3xl font-bold">Login</h1>
            <p class="text-balance text-muted-foreground">
                Enter your email below to login to your portal
            </p>
        </div>
        <div class="grid gap-4">
            <div class="grid gap-2">
                <Label for="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div class="grid gap-2">
                <div class="flex items-center">
                    <Label for="password">Password</Label>
                    <a href="#" class="ml-auto inline-block text-sm underline">
                        Forgot your password?
                    </a>
                </div>
                <Input id="password" type="password" required />
            </div>
            <Button type="submit" class="w-full" @click="$router.push('/dashboard')">
                Login
            </Button>
        </div>
        <div class="mt-4 text-center text-sm">
            Don't have an account?
            <a href="#" class="underline">
                Sign up
            </a>
        </div>

        <!-- Development Hints -->
        <div v-if="mode === 'development'"
            class="mt-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm border border-dashed border-slate-300 dark:border-slate-700">
            <p class="font-semibold mb-3">Development Accounts</p>
            <div class="grid grid-cols-1 gap-3">
                <div class="grid grid-cols-[60px_1fr] gap-1 text-xs">
                    <span class="text-muted-foreground font-semibold">Admin:</span>
                    <span class="font-mono">admin@sekolahbeta.com</span>
                </div>
                <div class="grid grid-cols-[60px_1fr] gap-1 text-xs">
                    <span class="text-muted-foreground font-semibold">Guru:</span>
                    <span class="font-mono">guru@sekolahbeta.com</span>
                </div>
                <div class="grid grid-cols-[60px_1fr] gap-1 text-xs">
                    <span class="text-muted-foreground font-semibold">Siswa:</span>
                    <span class="font-mono">siswa@sekolahbeta.com</span>
                </div>
                <div
                    class="grid grid-cols-[60px_1fr] gap-1 text-xs pt-2 border-t border-slate-200 dark:border-slate-700">
                    <span class="text-muted-foreground">Pass:</span>
                    <span class="font-mono font-bold">password</span>
                </div>
            </div>
        </div>

        <div class="text-center text-xs text-muted-foreground mt-4">
            Protected by reCAPTCHA and subject to the
            <a href="#" class="underline hover:text-primary">Privacy Policy</a>
            and
            <a href="#" class="underline hover:text-primary">Terms of Service</a>.
        </div>
    </div>
</template>
