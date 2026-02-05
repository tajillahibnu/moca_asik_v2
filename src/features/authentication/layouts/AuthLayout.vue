<script setup lang="ts">
// Auth Layout
</script>

<template>
    <div class="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
        <!-- Left Side: Branding & Context -->
        <div class="hidden bg-slate-900 lg:flex flex-col justify-between p-10 text-white dark:border-r">
            <div class="flex items-center text-lg font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-6 w-6">
                    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                </svg>
                Sekolah Beta
            </div>
            <div class="space-y-2">
                <blockquote class="space-y-2">
                    <p class="text-lg">
                        &ldquo;Pendidikan adalah senjata paling ampuh yang bisa Anda gunakan untuk mengubah
                        dunia.&rdquo;
                    </p>
                    <footer class="text-sm">Nelson Mandela</footer>
                </blockquote>
            </div>
            <div class="text-sm opacity-50">
                &copy; 2026 Sekolah Beta. All rights reserved.
            </div>
        </div>

        <!-- Right Side: Form -->
        <div class="flex items-center justify-center py-12">
            <div class="mx-auto grid w-[350px] gap-6">
                <slot />
            </div>
        </div>
    </div>
</template>
