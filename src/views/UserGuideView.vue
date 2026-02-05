<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
</script>

<template>
  <div class="container mx-auto py-10 px-4 space-y-8">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold">User Guide & Component Showcase</h1>
      <RouterLink to="/">
        <Button variant="outline">Back to Home</Button>
      </RouterLink>
    </div>

    <!-- Buttons Section -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold tracking-tight">Buttons</h2>
      <div class="flex flex-wrap gap-4">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </section>

    <!-- Form Elements Section -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold tracking-tight">Form Elements</h2>
      <div class="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      
      <div class="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      
      <div class="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    </section>

    <!-- Cards Section -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold tracking-tight">Cards</h2>
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </section>

    <!-- Feedback Section -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold tracking-tight">Feedback & Status</h2>
      <div class="flex gap-4">
        <Badge>Default Badge</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
      
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </section>
  </div>
</template>
