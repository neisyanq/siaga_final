// data-naskah.js
const naskahPerLevel = {
  level1: {
    judul: "Detektif Asap",
    narasiPembuka: [
      "Hari ini langit di Kalimantan terlihat kemerahan.",
      "Udara terasa sesak. Beberapa temanmu batuk-batuk.",
      "Raka menatap langit dari jendela kelas.",
      "“Kok langitnya jadi begini, ya?” tanya Raka.",
      "Sinta menjawab, “Kemungkinan ini karena kebakaran hutan dan lahan.”"
    ],
    dialog: [
      { tokoh: "Guru", teks: "Anak-anak, hari ini kita akan belajar tentang karhutla yang sedang terjadi di Kalimantan." },
      { tokoh: "Guru", teks: "Perhatikan gambar dan baca teks berikut dengan teliti." }
    ],
    teksMateri: `
      <div class="teks-box">
        <img src="assets/images/level1-langit.png" alt="Langit kemerahan karena kabut asap" class="teks-gambar">
        <h4>Teks Narasi: Detektif Asap</h4>
        <p>Hari ini langit di Kalimantan terlihat kemerahan. Udara terasa sesak. Beberapa temanmu batuk-batuk. Raka menatap langit dari jendela kelas. "Kok langitnya jadi begini, ya?" tanya Raka. Sinta menjawab, "Kemungkinan ini karena kebakaran hutan dan lahan."</p>
        <p>Guru menjelaskan bahwa ini adalah dampak dari karhutla yang terjadi di beberapa wilayah Kalimantan. Asap tebal membuat jarak pandang terbatas dan udara menjadi tidak sehat.</p>
      </div>
    `,
    instruksiTugas: "Bacalah teks narasi di atas. Jawablah soal berikut untuk menemukan makna tersurat!",
    soal: [
      {
        tipe: "isian",
        pertanyaan: "Sebutkan 3 tanda karhutla dari teks di atas!",
        jawabanBenar: ["langit kemerahan", "udara sesak", "batuk-batuk", "asap tebal", "jarak pandang terbatas"],
        poin: 20
      }
    ],
    narasiPenutup: "Bagus! Kamu sudah berhasil menemukan informasi tersurat. Sekarang kamu siap melangkah ke level berikutnya."
  },
  
  level2: {
    judul: "Menelusuri Penyebab",
    narasiPembuka: [
      "Raka dan Sinta ingin tahu, kenapa bisa terjadi karhutla di Kalimantan?",
      "Mereka membaca berita dan berbicara dengan warga sekitar.",
      "“Ternyata ada beberapa penyebab utama,” kata Sinta.",
      "“Ayo kita cari tahu apa saja!” ajak Raka."
    ],
    dialog: [
      { tokoh: "Raka", teks: "Katanya, musim kemarau panjang membuat lahan gambut jadi sangat kering." },
      { tokoh: "Sinta", teks: "Iya, ditambah lagi ada yang membuka lahan dengan cara membakar karena dianggap cepat dan murah." },
      { tokoh: "Guru", teks: "Sekarang baca teks eksplanasi berikut dan jawab soalnya!" }
    ],
    teksMateri: `
      <div class="teks-box">
        <img src="assets/images/level2-penyebab.png" alt="Ilustrasi penyebab karhutla" class="teks-gambar">
        <h4>Teks Eksplanasi: Penyebab Karhutla</h4>
        <p>Kebakaran hutan dan lahan (karhutla) terjadi karena beberapa faktor. Pertama, musim kemarau panjang membuat lahan gambut menjadi sangat kering. Kedua, fenomena El Nino menyebabkan suhu udara meningkat dan curah hujan menurun. Ketiga, sebagian warga membuka lahan dengan cara membakar karena dianggap cepat dan murah. Keempat, puntung rokok yang dibuang sembarangan di kawasan hutan dapat memicu api.</p>
        <p>Lahan gambut sangat mudah terbakar karena mengandung bahan organik yang kering. Jika sudah terbakar, api sulit dipadamkan karena berada di bawah permukaan tanah.</p>
      </div>
    `,
    instruksiTugas: "Bacalah teks eksplanasi di atas. Jawablah soal berikut untuk menemukan makna tersurat dan tersirat!",
    soal: [
      {
        tipe: "pilihan-ganda",
        pertanyaan: "Manakah yang BUKAN penyebab karhutla menurut teks?",
        pilihan: [
          "Musim kemarau panjang",
          "Fenomena El Nino",
          "Hujan deras setiap hari",
          "Membuka lahan dengan membakar"
        ],
        jawabanBenar: 2,
        poin: 15
      },
      {
        tipe: "isian",
        pertanyaan: "Mengapa lahan gambut mudah terbakar?",
        jawabanBenar: ["mengandung bahan organik yang kering", "bahan organik kering", "karena mengandung bahan organik"],
        poin: 15
      }
    ],
    narasiPenutup: "Hebat! Kamu sudah memahami penyebab karhutla. Saatnya melangkah lebih jauh."
  },
  
  level3: {
    judul: "Tepat atau Salah?",
    narasiPembuka: [
      "“Kita harus tahu apa yang harus dilakukan saat kabut asap,” kata Raka.",
      "“Iya, ada tindakan yang tepat dan ada yang salah,” tambah Sinta.",
      "Mereka membuka buku panduan kesiapsiagaan bencana."
    ],
    dialog: [
      { tokoh: "Guru", teks: "Bacalah teks prosedur berikut dengan teliti." },
      { tokoh: "Guru", teks: "Kemudian klasifikasikan tindakan yang tepat dan tidak tepat!" }
    ],
    teksMateri: `
      <div class="teks-box">
        <img src="assets/images/level3-prosedur.png" alt="Ilustrasi orang memakai masker" class="teks-gambar">
        <h4>Teks Prosedur: Langkah Saat Kabut Asap</h4>
        <ol>
          <li>Gunakan masker N95 atau KN95 saat beraktivitas di luar.</li>
          <li>Kurangi aktivitas di luar ruangan jika kualitas udara tidak sehat.</li>
          <li>Tutup jendela saat kualitas udara buruk.</li>
          <li>Segera ke fasilitas kesehatan jika sesak napas berat.</li>
          <li>Jangan panik, tapi tetap sigap.</li>
        </ol>
      </div>
    `,
    instruksiTugas: "Klasifikasikan 8 tindakan berikut ke kolom 'Tepat' atau 'Salah'!",
    soal: [
      {
        tipe: "klasifikasi",
        items: [
          { teks: "Pakai masker N95", jawaban: "tepat" },
          { teks: "Bermain di luar tanpa masker", jawaban: "salah" },
          { teks: "Menutup jendela", jawaban: "tepat" },
          { teks: "Panik dan berlari-lari", jawaban: "salah" },
          { teks: "Kurangi aktivitas di luar", jawaban: "tepat" },
          { teks: "Biarkan jendela terbuka", jawaban: "salah" },
          { teks: "Ke puskesmas jika sesak", jawaban: "tepat" },
          { teks: "Tetap olahraga di luar", jawaban: "salah" }
        ],
        poin: 20
      }
    ],
    narasiPenutup: "Luar biasa! Kamu sudah bisa membedakan tindakan yang tepat dan salah."
  },
  
  level4: {
    judul: "Pro-Kontra Membakar Lahan",
    narasiPembuka: [
      "“Ada warga yang masih membakar lahan,” kata Raka.",
      "“Tapi ada juga yang menentang,” kata Sinta.",
      "Mereka membaca dua pendapat berbeda."
    ],
    dialog: [
      { tokoh: "Guru", teks: "Bacalah dua pendapat berikut dengan teliti." },
      { tokoh: "Guru", teks: "Kemudian tuliskan pendapatmu sendiri dengan alasan yang logis!" }
    ],
    teksMateri: `
      <div class="teks-box">
        <img src="assets/images/level4-prokontra.jpg" alt="Ilustrasi warga membakar lahan" class="teks-gambar">
        <h4>Pendapat Pro:</h4>
        <p>"Membakar lahan itu cepat dan murah. Kami tidak punya alat berat untuk membuka lahan. Ini sudah cara tradisional yang dilakukan sejak dulu."</p>
        <h4>Pendapat Kontra:</h4>
        <p>"Membakar lahan sangat berbahaya. Asapnya mengganggu kesehatan, merusak lingkungan, dan memicu karhutla yang merugikan banyak orang."</p>
      </div>
    `,
    instruksiTugas: "Menurutmu, apakah membuka lahan dengan membakar itu boleh dilakukan? Tuliskan pendapatmu (pro atau kontra) dan berikan 2 alasan yang logis!",
    soal: [
      {
        tipe: "esai",
        pertanyaan: "Tuliskan pendapatmu (pro atau kontra) dan berikan 2 alasan yang logis!",
        rubrik: {
          panjang: "Minimal 3 kalimat",
          alasan: "Harus ada 2 alasan",
          relevansi: "Alasan harus logis dan relevan"
        },
        poin: 20
      }
    ],
    narasiPenutup: "Bagus! Kamu sudah bisa menyampaikan pendapat dengan alasan yang logis."
  },
  
  level5: {
    judul: "Detektif Informasi",
    narasiPembuka: [
      "“Sekarang kita bandingkan dua berita,” kata Raka.",
      "“Ayo kita cari persamaan dan perbedaannya!” ajak Sinta.",
      "Mereka membuka dua artikel berbeda."
    ],
    dialog: [
      { tokoh: "Guru", teks: "Bacalah dua teks berikut dengan teliti." },
      { tokoh: "Guru", teks: "Kemudian tuliskan 2 persamaan dan 2 perbedaan informasinya!" }
    ],
    teksMateri: `
      <div class="teks-box">
        <img src="assets/images/level5-berita1.jpg" alt="Ilustrasi berita karhutla" class="teks-gambar">
        <h4>Teks 1 (dari media web):</h4>
        <p>Karhutla di Kalimantan terjadi karena musim kemarau panjang dan El Nino. Sebagian warga membuka lahan dengan membakar. Dampaknya, kabut asap mengganggu kesehatan dan aktivitas sekolah.</p>
      </div>
      <div class="teks-box">
        <img src="assets/images/level5-berita2.png" alt="Ilustrasi kebakaran hutan" class="teks-gambar">
        <h4>Teks 2 (dari berita):</h4>
        <p>Kebakaran hutan di Kalimantan hanguskan ribuan hektare lahan. Kerugian ekonomi diperkirakan mencapai triliunan rupiah. Warga mengeluh sesak napas dan jarak pandang terbatas.</p>
      </div>
    `,
    instruksiTugas: "Bandingkan kedua teks di atas. Tuliskan 2 persamaan dan 2 perbedaan informasi tentang karhutla!",
    soal: [
      {
        tipe: "esai",
        pertanyaan: "Tuliskan 2 persamaan dan 2 perbedaan informasi dari kedua teks!",
        rubrik: {
          persamaan: "Harus ada 2 persamaan",
          perbedaan: "Harus ada 2 perbedaan",
          relevansi: "Harus relevan dengan teks"
        },
        poin: 20
      }
    ],
    narasiPenutup: "Selamat! Kamu telah menyelesaikan semua level dan menjadi Detektif Karhutla! Terima kasih sudah berkontribusi untuk udara yang lebih bersih."
  }
};