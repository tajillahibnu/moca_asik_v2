<script setup lang="ts">
import Sidebar from '@/components/admin/Sidebar.vue'
import { Bell, Search, User } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
</script>

<template>
    <div class="flex h-screen bg-slate-50 dark:bg-slate-950">
        <Sidebar />

        <div class="flex flex-1 flex-col overflow-hidden">
            <!-- Top Header -->
            <header
                class="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                <div class="flex items-center gap-4">
                    <!-- Mobile Menu Trigger would go here -->
                    <div class="relative w-96">
                        <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input type="search" placeholder="Search..."
                            class="w-full bg-slate-100 pl-9 dark:bg-slate-800 border-none focus-visible:ring-0 focus-visible:bg-white dark:focus-visible:bg-slate-950 transition-colors" />
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <Button variant="ghost" size="icon" class="text-slate-500 hover:text-slate-700">
                        <Bell class="h-5 w-5" />
                    </Button>
                    <div
                        class="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center border border-slate-300">
                        <User class="h-5 w-5 text-slate-500" />
                    </div>
                </div>
            </header>

            <!-- Main Content -->
            <main class="flex-1 overflow-y-auto p-6 md:p-8">
                <slot />
            </main>
        </div>
    </div>
</template>
