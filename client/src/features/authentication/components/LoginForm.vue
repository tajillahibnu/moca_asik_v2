<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
</script>

<template>
    <Card>
        <CardHeader>
            <CardTitle class="text-2xl text-center">Sekolah Beta</CardTitle>
            <CardDescription class="text-center">
                Enter your email below to login to your account.
            </CardDescription>
        </CardHeader>
        <CardContent class="grid gap-4">
            <div class="grid gap-2">
                <Label for="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div class="grid gap-2">
                <Label for="password">Password</Label>
                <Input id="password" type="password" required />
            </div>
            <div class="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label for="remember"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Remember me
                </Label>
            </div>
        </CardContent>
        <CardFooter>
            <Button class="w-full">Sign in</Button>
        </CardFooter>
    </Card>
</template>
