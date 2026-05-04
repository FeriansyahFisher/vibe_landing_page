<template>
  <div class="pt-20 pb-16">
    <section class="max-w-4xl mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold text-white mb-6 text-center">Hubungi Kami</h1>
      <div class="glass-card p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 class="text-xl font-semibold text-white mb-4">Informasi Kontak</h2>
            <div class="space-y-4 text-gray-300">
              <p>📍 Alamat: Jl. Padel Indah No. 1, Jakarta</p>
              <p>📞 Telepon: +62 812-3456-7890</p>
              <p>📧 Email: info@padelzone.id</p>
              <p>🕐 Jam Operasional: 06.00 - 22.00 WIB</p>
            </div>
          </div>
          <div>
            <h2 class="text-xl font-semibold text-white mb-4">Kirim Pesan</h2>
            <form class="space-y-4">
              <input type="text" placeholder="Nama Anda" class="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary" />
              <input type="email" placeholder="Email Anda" class="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary" />
              <textarea placeholder="Pesan Anda" rows="4" class="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary"></textarea>
              <button type="button" class="btn-primary w-full">Kirim Pesan</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>