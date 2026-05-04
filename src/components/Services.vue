<script setup>
const services = [
  {
    icon: '🏸',
    title: '6 Lapangan Standar Internasional',
    desc: 'Lapangan padel berstandar internasional dengan permukaan premium dan pencahayaan optimal'
  },
  {
    icon: '🎾',
    title: 'Penyewaan Raket',
    desc: 'Raket berkualitas tinggi siap pakai untuk semua level pemain, dari pemula hingga profesional'
  },
  {
    icon: '👕',
    title: 'Sewa Outfit',
    desc: 'Jersey dan perlengkapan padel lengkap tersedia untuk disewa dengan harga terjangkau'
  },
  {
    icon: '👨‍⚖️',
    title: 'Wasit Profesional',
    desc: 'Wasit bersertifikat untuk pertandingan resmi, turnamen, dan gelar warna'
  },
  {
    icon: '✨',
    title: 'Kebersihan Terjamin',
    desc: 'Lapangan selalu dibersihkan dan disanitasi sebelum digunakan, 保证 kebersihan maksimal'
  },
  {
    icon: '⭐',
    title: 'Fasilitas Premium',
    desc: 'Ruang ganti, shower, parkir luas, dan area tunggu nyaman untuk pengalaman bermain terbaik'
  },
]
</script>

<template>
  <section id="services" class="py-20 bg-dark-light">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          LAYANAN KAMI
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Semua yang Anda butuhkan untuk pengalaman bermain padel terbaik
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="glass-card-sm p-6 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
        >
          <div class="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:bg-primary/30 transition-colors">
            {{ service.icon }}
          </div>
          <h3 class="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
            {{ service.title }}
          </h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            {{ service.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>