<script setup>
const testimonials = [
  {
    name: 'Andi Pratama',
    role: 'Pemain Rutin',
    rating: 5,
    text: 'Lapangan terbaik yang pernah saya mainkan! Bersih, fasilitas lengkap, dan pelayanan profesional. Pasti jadi langganan terus!',
    avatar: 'A'
  },
  {
    name: 'Sarah Wijaya',
    role: 'Pemain Amateur',
    rating: 5,
    text: 'Wasit profesional dan raket sewanya berkualitas. Tim saya sangat puas dengan pengalaman bermain di PadelZone. Sangat rekomen!',
    avatar: 'S'
  },
  {
    name: 'Budi Santoso',
    role: 'Corporate Player',
    rating: 4,
    text: 'Paket Grand Slam worth banget! Cocok untuk turnamen internal kantor kami. Fasilitas premium dan lokasi strategis. Akan booking lagi!',
    avatar: 'B'
  },
]
</script>

<template>
  <section class="py-20 bg-dark-light">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          APA KATA MEREKA
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Testimoni dari pelanggan setia PadelZone
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="glass-card-sm p-6"
        >
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-dark font-bold text-lg">
              {{ testimonial.avatar }}
            </div>
            <div>
              <h4 class="font-semibold text-white">{{ testimonial.name }}</h4>
              <p class="text-gray-400 text-sm">{{ testimonial.role }}</p>
            </div>
          </div>

          <div class="flex gap-1 mb-3">
            <svg
              v-for="star in 5"
              :key="star"
              class="w-4 h-4"
              :class="star <= testimonial.rating ? 'text-yellow-400' : 'text-gray-600'"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          <p class="text-gray-300 text-sm leading-relaxed">"{{ testimonial.text }}"</p>
        </div>
      </div>
    </div>
  </section>
</template>