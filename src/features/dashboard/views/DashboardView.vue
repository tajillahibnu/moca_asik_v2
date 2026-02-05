<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, GraduationCap, School, Activity } from 'lucide-vue-next'

const stats = [
    { label: 'Total Siswa', value: '1,234', icon: Users, change: '+12% from last month' },
    { label: 'Total Guru', value: '56', icon: GraduationCap, change: '+2 joined this week' },
    { label: 'Kelas', value: '12', icon: School, change: 'Active sessions' },
    { label: 'Active Users', value: '573', icon: Activity, change: '+201 since last hour' },
]
</script>

<template>
    <AdminLayout>
        <div class="flex flex-col gap-6">
            <div>
                <h1 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Dashboard</h1>
                <p class="text-slate-500 mt-2">Welcome back to the Sekolah Beta administration portal.</p>
            </div>

            <!-- Stats Grid -->
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card v-for="stat in stats" :key="stat.label">
                    <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle class="text-sm font-medium">
                            {{ stat.label }}
                        </CardTitle>
                        <component :is="stat.icon" class="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div class="text-2xl font-bold">{{ stat.value }}</div>
                        <p class="text-xs text-muted-foreground mt-1">
                            {{ stat.change }}
                        </p>
                    </CardContent>
                </Card>
            </div>

            <!-- Content Area Placeholder -->
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card class="col-span-4">
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div
                            class="h-[200px] flex items-center justify-center text-muted-foreground border-2 border-dashed rounded-lg bg-slate-50">
                            Chart Placeholder
                        </div>
                    </CardContent>
                </Card>
                <Card class="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div class="space-y-4">
                            <div v-for="i in 3" :key="i" class="flex items-center">
                                <div class="ml-4 space-y-1">
                                    <p class="text-sm font-medium leading-none">New student registered</p>
                                    <p class="text-xs text-muted-foreground">2 minutes ago</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </AdminLayout>
</template>
