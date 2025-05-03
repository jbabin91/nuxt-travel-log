<template>
  <header class="navbar bg-primary text-primary-content">
    <nav class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        daisyUI
      </NuxtLink>
    </nav>
    <div class="navbar-end flex gap-4">
      <AppThemeToggle />
      <AuthButton />
    </div>
  </header>
</template>
