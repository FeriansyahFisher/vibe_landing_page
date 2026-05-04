<script setup>
const packages = [
  {
    name: 'SERVE',
    label: 'Starter',
    price: 250000,
    features: [
      'Lapangan 1 set (maks. 1 jam)',
      'Sewa 2x raket',
      '2x Drink & Snack',
      '10 Membership Poin',
    ],
    popular: false,
  },
  {
    name: 'RALLY',
    label: 'Most Popular',
    price: 400000,
    features: [
      'Lapangan 2 set (maks. 2 jam)',
      'Sewa 2x raket',
      '4x Drink & Snack',
      '20 Membership Poin',
      'Wasit Profesional',
    ],
    popular: true,
  },
  {
    name: 'GRAND SLAM',
    label: 'Premium',
    price: 500000,
    features: [
      'Lapangan 3 set (maks. 3 jam)',
      'Sewa 4x raket',
      '4x Drink & Snack',
      '40 Membership Poin',
      'Wasit Profesional',
    ],
    popular: false,
  },
]

const formatPrice = (price) => {
  return `Rp ${price.toLocaleString('id-ID')}`
}
</script>

<template>
  <section id="pricing" class="py-20 bg-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          PAKET HARGA
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Pilih paket yang sesuai dengan kebutuhan bermain Anda
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="(pkg, index) in packages"
          :key="index"
          :class="[
            'glass-card p-6 relative transition-all duration-300 hover:scale-105',
            pkg.popular ? 'border-primary ring-2 ring-primary/30' : 'hover:border-primary/50'
          ]"
        >
          <div v-if="pkg.popular" class="absolute -top-3 left-1/2 -translate-x-1/2">
            <span class="bg-primary text-dark text-xs font-bold px-4 py-1 rounded-full">
              {{ pkg.label }}
            </span>
          </div>

          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold text-white mb-2">{{ pkg.name }}</h3>
            <span :class="['inline-block px-3 py-1 rounded-full text-xs', pkg.popular ? 'bg-primary/20 text-primary' : 'bg-white/10 text-gray-400']">
              {{ pkg.label }}
            </span>
          </div>

          <div class="text-center mb-6">
            <div class="text-4xl font-bold text-white">{{ formatPrice(pkg.price) }}</div>
            <div class="text-gray-400 text-sm">per paket</div>
          </div>

          <ul class="space-y-3 mb-6">
            <li
              v-for="(feature, fIndex) in pkg.features"
              :key="fIndex"
              class="flex items-center gap-2 text-gray-300 text-sm"
            >
              <svg class="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              {{ feature }}
            </li>
          </ul>

          <button
            :class="[
              'w-full py-3 rounded-full font-semibold transition-all duration-300',
              pkg.popular ? 'bg-primary text-dark hover:bg-green-400' : 'bg-white/10 text-white hover:bg-white/20'
            ]"
          >
            Pilih Paket
          </button>
        </div>
      </div>
    </div>
  </section>
</template>