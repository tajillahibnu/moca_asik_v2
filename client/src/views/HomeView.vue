<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-neutral-50 dark:bg-neutral-950 p-4 space-y-4">
    <h1 class="text-3xl font-bold tracking-tighter">Welcome to Sekolah Beta</h1>
    <Card class="w-[350px]">
      <CardHeader>
        <CardTitle>Getting Started</CardTitle>
        <CardDescription>Vue + Shadcn UI</CardDescription>
      </CardHeader>
      <CardContent>
        <p class="text-sm text-muted-foreground">
          Explore the User Guide to see available components.
        </p>
      </CardContent>
      <CardFooter>
        <RouterLink to="/userguide">
          <Button class="w-full">
            View User Guide
          </Button>
        </RouterLink>
      </CardFooter>
    </Card>
  </div>
</template>
