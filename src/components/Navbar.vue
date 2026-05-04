<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Tentang Kami', path: '/about' },
  { name: 'Event & Berita', path: '/#events' },
  { name: 'Hubungi Kami', path: '/contact' },
]
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-dark/80 backdrop-blur-xl border-b border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <RouterLink to="/" class="flex items-center gap-2">
          <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span class="text-dark font-bold text-xl">P</span>
          </div>
          <span class="text-xl font-bold text-white">PadelZone</span>
        </RouterLink>

        <div class="hidden md:flex items-center space-x-8">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-gray-300 hover:text-primary transition-colors"
          >
            {{ link.name }}
          </RouterLink>
          <button class="btn-primary">Booking Sekarang</button>
        </div>

        <button
          @click="isOpen = !isOpen"
          class="md:hidden p-2 text-gray-300 hover:text-white"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-show="isOpen" class="md:hidden bg-dark/95 backdrop-blur-xl border-t border-white/5">
        <div class="px-4 py-3 space-y-2">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="block py-2 text-gray-300 hover:text-primary transition-colors"
            @click="isOpen = false"
          >
            {{ link.name }}
          </RouterLink>
          <button class="btn-primary w-full mt-2">Booking Sekarang</button>
        </div>
      </div>
    </Transition>
  </nav>
</template>