<script setup>
const posts = [
  {
    title: 'Turnamen PadelZone Open 2026',
    date: '1 Juni 2026',
    category: 'Event',
    desc: 'Turnamen terbuka pertama PadelZone dengan total hadiah 10 juta rupiah. terbuka untuk semua level pemain!'
  },
  {
    title: 'Tips Bermain Padel untuk Pemula',
    date: '20 Mei 2026',
    category: 'News',
    desc: 'Panduan lengkap untuk pemula yang baru mulai bermain padel. Mulai dari teknik dasar hingga strategi permainan.'
  },
  {
    title: 'Workshop Teknik Smash',
    date: '10 Juni 2026',
    category: 'Event',
    desc: 'Belajar teknik smash dari pelatih profesional berpengalaman. Terbatas untuk 20 peserta saja!'
  },
]

const getCategoryClass = (category) => {
  return category === 'Event'
    ? 'bg-primary/20 text-primary'
    : 'bg-blue-500/20 text-blue-400'
}
</script>

<template>
  <section id="events" class="py-20 bg-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          EVENT & BERITA
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Ikuti event terbaru dan baca tips seputar dunia padel
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="glass-card-sm p-6 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
        >
          <div class="flex items-center justify-between mb-4">
            <span :class="['px-3 py-1 rounded-full text-xs font-medium', getCategoryClass(post.category)]">
              {{ post.category }}
            </span>
            <span class="text-gray-400 text-sm">{{ post.date }}</span>
          </div>

          <h3 class="text-lg font-semibold text-white mb-3 group-hover:text-primary transition-colors">
            {{ post.title }}
          </h3>

          <p class="text-gray-400 text-sm mb-4 line-clamp-2">
            {{ post.desc }}
          </p>

          <a href="#" class="inline-flex items-center text-primary hover:text-green-400 transition-colors text-sm font-medium">
            Baca Selengkapnya
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <div class="text-center mt-8">
        <button class="btn-outline">Lihat Semua Event</button>
      </div>
    </div>
  </section>
</template>