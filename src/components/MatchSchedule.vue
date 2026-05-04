<script setup>
const matches = [
  { date: '15 Mei 2026', time: '14:00', match: 'Tim A vs Tim B', category: 'Turnamen Amateur' },
  { date: '22 Mei 2026', time: '16:00', match: 'Tim C vs Tim D', category: 'Turnamen Pro' },
  { date: '29 Mei 2026', time: '10:00', match: 'Tim E vs Tim F', category: 'Friendly Match' },
]

const getCategoryClass = (category) => {
  if (category.includes('Amateur')) return 'bg-primary/20 text-primary'
  if (category.includes('Pro')) return 'bg-blue-500/20 text-blue-400'
  return 'bg-white/10 text-gray-300'
}
</script>

<template>
  <section id="schedule" class="py-20 bg-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          JADWAL PERTANDINGAN TERDEKAT
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Jangan lewatkan keseruan menyaksikan atau berpartisipasi dalam pertandingan padel terdekat
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(match, index) in matches"
          :key="index"
          class="glass-card-sm p-6 hover:border-primary/50 transition-all duration-300 group"
        >
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm text-gray-400">{{ match.date }}</span>
            <span class="text-sm text-primary font-medium">{{ match.time }}</span>
          </div>
          <h3 class="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
            {{ match.match }}
          </h3>
          <span :class="['inline-block px-3 py-1 rounded-full text-xs font-medium', getCategoryClass(match.category)]">
            {{ match.category }}
          </span>
        </div>
      </div>

      <div class="text-center mt-8">
        <button class="btn-outline">Lihat Semua Jadwal</button>
      </div>
    </div>
  </section>
</template>