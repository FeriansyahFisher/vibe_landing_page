<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-primary-dark"></div>

    <div class="absolute inset-0 opacity-30">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 25% 25%, rgba(0, 200, 83, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(0, 200, 83, 0.1) 0%, transparent 50%);"></div>
    </div>

    <div class="relative z-10 text-center px-4 max-w-5xl mx-auto">
      <div class="glass-card p-8 md:p-16 shadow-2xl">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          SELAMAT DATANG DI<br />
          <span class="text-primary">PADELZONE</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Lapangan Padel Standar Internasional #1 dengan fasilitas lengkap,
          pelayanan profesional, dan pengalaman bermain terbaik untuk semua level.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="btn-primary text-lg px-8 py-4">
            Booking Sekarang
          </button>
          <button class="btn-outline text-lg px-8 py-4">
            Lihat Jadwal
          </button>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div class="flex flex-col items-center text-gray-400">
        <span class="text-sm mb-2">Scroll untuk explore</span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>