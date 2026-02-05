<script setup lang="ts">
import {
    LayoutDashboard,
    Users,
    Settings,
    LogOut
} from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard', active: true },
    { icon: Users, label: 'Users', href: '#', active: false },
    { icon: Settings, label: 'Settings', href: '#', active: false },
]
</script>

<template>
    <aside class="hidden w-64 flex-col bg-slate-900 text-white md:flex">
        <div class="px-6 py-8 flex items-center gap-2 border-b border-white/10">
            <!-- Logo Icon -->
            <div class="h-8 w-8 rounded bg-white/10 flex items-center justify-center">
                <span class="font-bold text-lg">S</span>
            </div>
            <span class="text-xl font-bold tracking-tight">Sekolah Beta</span>
        </div>

        <nav class="flex-1 space-y-1 px-4 py-6">
            <a v-for="item in menuItems" :key="item.label" :href="item.href" :class="[
                'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                item.active
                    ? 'bg-white/10 text-white'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
            ]">
                <component :is="item.icon" class="h-5 w-5" />
                {{ item.label }}
            </a>
        </nav>

        <div class="p-4 border-t border-white/10">
            <Button variant="ghost" class="w-full justify-start text-slate-400 hover:text-white hover:bg-white/5">
                <LogOut class="mr-2 h-4 w-4" />
                Log out
            </Button>
        </div>
    </aside>
</template>
