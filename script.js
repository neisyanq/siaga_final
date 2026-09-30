/* =========================================================
   KARHUTLA - LOGIKA HALAMAN LEVEL
   ========================================================= */

let currentLevel =
  Number(localStorage.getItem("currentLevel")) || 1;

const totalLevels = 5;

let skorTotal =
  Number(localStorage.getItem("skorTotal")) || 0;

const gameArea = document.getElementById("game-area");
const levelNumberEl = document.getElementById("level-number");
const progressEl = document.getElementById("progress");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

let levelSudahDikerjakan =
  localStorage.getItem(`level${currentLevel}Selesai`) === "true";


/* =========================================================
   LOAD LEVEL
   ========================================================= */

function loadLevel(level) {

  const key = "level" + level;
  const data = naskahPerLevel[key];

  if (!data) {
    gameArea.innerHTML = `
      <div class="loading-level">
        <h2>Data level tidak ditemukan.</h2>
        <p>Periksa kembali file data-naskah.js.</p>
      </div>
    `;
    return;
  }

  currentLevel = level;

  localStorage.setItem(
    "currentLevel",
    currentLevel
  );

  levelSudahDikerjakan =
    localStorage.getItem(
      `level${currentLevel}Selesai`
    ) === "true";


  /* -------------------------
     HEADER LEVEL
  ------------------------- */

  levelNumberEl.textContent = level;

  const progressPersen =
    (level / totalLevels) * 100;

  progressEl.style.width =
    progressPersen + "%";


  const levelTitleProgress =
    document.getElementById(
      "level-title-progress"
    );

  if (levelTitleProgress) {
    levelTitleProgress.textContent =
      "Level " + level + ": " + data.judul;
  }


  const scoreHeader =
    document.getElementById(
      "score-header"
    );

  if (scoreHeader) {
    scoreHeader.textContent =
      localStorage.getItem("skorTotal") || 0;
  }


  updateLevelDots(level);


  /* -------------------------
     NAVIGASI
  ------------------------- */

  btnPrev.disabled =
    level === 1;

  if (
    levelSudahDikerjakan &&
    level < totalLevels
  ) {
    btnNext.disabled = false;
  } else {
    btnNext.disabled = true;
  }


  /* =====================================================
     MEMBUAT ISI LEVEL
     ===================================================== */

  let html = "";


  /* -------------------------
     JUDUL LEVEL
  ------------------------- */

  html += `
    <section class="level-title-box">

      <p class="eyebrow">
        MISI SIAGA BENCANA
      </p>

      <h2>
        Level ${level}: ${data.judul}
      </h2>

    </section>
  `;


  /* -------------------------
     NARASI
  ------------------------- */

  html += `
    <section class="narasi-box">

      <h3>📚 Narasi</h3>
  `;

  data.narasiPembuka.forEach(
    function(paragraf) {

      html += `
        <p>${paragraf}</p>
      `;

    }
  );

  html += `
    </section>
  `;


  /* -------------------------
     DIALOG
  ------------------------- */

  html += `
    <section class="dialog-box">

      <h3>💬 Dialog</h3>
  `;

  data.dialog.forEach(
    function(dialog) {

      html += `
        <div class="dialog-item">

          <strong>
            ${dialog.tokoh}
          </strong>

          <p>
            ${dialog.teks}
          </p>

        </div>
      `;

    }
  );

  html += `
    </section>
  `;


  /* -------------------------
     MATERI
  ------------------------- */

  html += `
    <section class="materi-wrapper">

      ${data.teksMateri}

    </section>
  `;


  /* -------------------------
     TUGAS
  ------------------------- */

  html += `
    <section class="tugas-box">

      <h3>✏️ Tugas Kamu</h3>

      <p>
        ${data.instruksiTugas}
      </p>

    </section>
  `;


  /* =====================================================
     SOAL
     ===================================================== */

  html += `
    <section class="soal-box">

      <div class="soal-header">

        <div>
          <p class="soal-kicker">
            TANTANGAN LEVEL ${level}
          </p>

          <h3>
            📝 Uji Pemahamanmu
          </h3>
        </div>

        <span class="soal-badge">
          ${data.soal.length} Soal
        </span>

      </div>
  `;


  data.soal.forEach(
    function(soal, index) {

      html += `
        <div
          class="soal-item"
          data-soal="${index}"
        >
      `;


      /* =========================
         PILIHAN GANDA
      ========================= */

      if (
        soal.tipe === "pilihan-ganda"
      ) {

        html += `
          <div class="nomor-soal">
            SOAL ${index + 1}
          </div>

          <p class="soal-pertanyaan">
            ${soal.pertanyaan}
          </p>

          <div class="pilihan-ganda">
        `;


        soal.pilihan.forEach(
          function(
            pilihan,
            pilihanIndex
          ) {

            const huruf =
              String.fromCharCode(
                65 + pilihanIndex
              );

            html += `
              <label
                class="opsi-jawaban"
              >

                <input
                  type="radio"
                  name="soal${index}"
                  value="${pilihanIndex}"
                >

                <span class="opsi-huruf">
                  ${huruf}
                </span>

                <span class="opsi-text">
                  ${pilihan}
                </span>

              </label>
            `;

          }
        );


        html += `
          </div>
        `;
      }


      /* =========================
         ISIAN
      ========================= */

      if (
        soal.tipe === "isian"
      ) {

        html += `
          <div class="nomor-soal">
            SOAL ${index + 1}
          </div>

          <p class="soal-pertanyaan">
            ${soal.pertanyaan}
          </p>

          <textarea
            class="esai-textarea jawaban-isian"
            placeholder="Tuliskan jawabanmu di sini..."
          ></textarea>
        `;
      }


      /* =========================
         ESAI
      ========================= */

      if (
        soal.tipe === "esai"
      ) {

        html += `
          <div class="nomor-soal">
            SOAL ${index + 1}
          </div>

          <p class="soal-pertanyaan">
            ${soal.pertanyaan}
          </p>
        `;


        if (soal.rubrik) {

          html += `
            <div class="rubrik-box">

              <strong>
                📌 Ketentuan Jawaban
              </strong>

              <ul>
          `;


          if (soal.rubrik.panjang) {
            html += `
              <li>
                ${soal.rubrik.panjang}
              </li>
            `;
          }


          if (soal.rubrik.alasan) {
            html += `
              <li>
                ${soal.rubrik.alasan}
              </li>
            `;
          }


          if (soal.rubrik.persamaan) {
            html += `
              <li>
                ${soal.rubrik.persamaan}
              </li>
            `;
          }


          if (soal.rubrik.perbedaan) {
            html += `
              <li>
                ${soal.rubrik.perbedaan}
              </li>
            `;
          }


          if (soal.rubrik.relevansi) {
            html += `
              <li>
                ${soal.rubrik.relevansi}
              </li>
            `;
          }


          html += `
              </ul>

            </div>
          `;
        }


        html += `
          <textarea
            class="esai-textarea"
            placeholder="Tuliskan jawabanmu di sini..."
          ></textarea>
        `;
      }


      /* =========================
         KLASIFIKASI
      ========================= */

      if (
        soal.tipe === "klasifikasi"
      ) {

        html += `
          <div class="nomor-soal">
            SOAL ${index + 1}
          </div>

          <p class="soal-pertanyaan">
            Kelompokkan tindakan berikut
            ke kolom
            <strong>Tepat</strong>
            atau
            <strong>Tidak Tepat</strong>.
          </p>

          <div class="klasifikasi-petunjuk">
            💡 Klik kartu tindakan untuk
            memindahkannya ke kolom lainnya.
          </div>

          <div class="klasifikasi-container">

            <div
              class="klasifikasi-kolom"
              data-kolom="belum"
            >

              <h4>
                📋 Pilih Tindakan
              </h4>

              <div class="klasifikasi-items">
              </div>

            </div>


            <div
              class="klasifikasi-kolom"
              data-kolom="tepat"
            >

              <h4>
                ✅ Tindakan Tepat
              </h4>

              <div class="klasifikasi-items">
              </div>

            </div>


            <div
              class="klasifikasi-kolom"
              data-kolom="salah"
            >

              <h4>
                ❌ Tindakan Tidak Tepat
              </h4>

              <div class="klasifikasi-items">
              </div>

            </div>

          </div>
        `;

      }


      html += `
        </div>
      `;

    }
  );


  html += `
    </section>
  `;


  /* -------------------------
     TOMBOL SUBMIT
  ------------------------- */

  html += `
    <button
      class="btn-submit"
      id="btn-submit"
      onclick="submitJawaban()"
    >
      ✓ Kirim Jawaban
    </button>
  `;


  /* -------------------------
     FEEDBACK
  ------------------------- */

  html += `
    <div
      id="feedback"
      class="feedback-box"
      style="display:none;"
    ></div>
  `;


  /* -------------------------
     NARASI PENUTUP
  ------------------------- */

  html += `
    <section
      class="narasi-penutup"
      id="narasi-penutup"
      style="display:none;"
    >

      <h3>
        🎉 Level Selesai!
      </h3>

      <p>
        ${data.narasiPenutup}
      </p>

    </section>
  `;


  /* -------------------------
     MASUKKAN KE HALAMAN
  ------------------------- */

  gameArea.innerHTML = html;


  /* -------------------------
     SETUP KLASIFIKASI
  ------------------------- */

  setupKlasifikasi(data);


  /* -------------------------
     JIKA SUDAH PERNAH SELESAI
  ------------------------- */

  if (levelSudahDikerjakan) {

    btnNext.disabled =
      level >= totalLevels;

  }

}


/* =========================================================
   UPDATE DOT LEVEL
   ========================================================= */

function updateLevelDots(level) {

  const dots =
    document.querySelectorAll(
      ".level-dot"
    );

  dots.forEach(
    function(dot, index) {

      const nomor =
        index + 1;

      dot.classList.remove(
        "active-dot",
        "completed-dot"
      );

      if (nomor === level) {

        dot.classList.add(
          "active-dot"
        );

      }

      if (nomor < level) {

        dot.classList.add(
          "completed-dot"
        );

      }

    }
  );

}


/* =========================================================
   KLASIFIKASI
   ========================================================= */

function setupKlasifikasi(data) {

  data.soal.forEach(
    function(soal, soalIndex) {

      if (
        soal.tipe !== "klasifikasi"
      ) {
        return;
      }


      const itemContainer =
        gameArea.querySelector(
          `.soal-item[data-soal="${soalIndex}"]`
        );

      if (!itemContainer) return;


      const kolomBelum =
        itemContainer.querySelector(
          '[data-kolom="belum"] .klasifikasi-items'
        );

      const kolomTepat =
        itemContainer.querySelector(
          '[data-kolom="tepat"] .klasifikasi-items'
        );

      const kolomSalah =
        itemContainer.querySelector(
          '[data-kolom="salah"] .klasifikasi-items'
        );


      soal.items.forEach(
        function(item, itemIndex) {

          const kartu =
            document.createElement("div");

          kartu.className =
            "klasifikasi-item";

          kartu.dataset.jawaban =
            item.jawaban;

          kartu.dataset.index =
            itemIndex;

          kartu.textContent =
            item.teks;


          kartu.addEventListener(
            "click",
            function() {

              const parent =
                kartu.parentElement;


              if (
                parent === kolomBelum
              ) {

                if (
                  item.jawaban === "tepat"
                ) {

                  kolomTepat.appendChild(
                    kartu
                  );

                } else {

                  kolomSalah.appendChild(
                    kartu
                  );

                }

              } else {

                kolomBelum.appendChild(
                  kartu
                );

              }

            }
          );


          kolomBelum.appendChild(
            kartu
          );

        }
      );

    }
  );

}


/* =========================================================
   SUBMIT JAWABAN
   ========================================================= */

function submitJawaban() {

  const data =
    naskahPerLevel[
      "level" + currentLevel
    ];

  if (!data) return;


  let totalPoin = 0;
  let adaKesalahan = false;


  data.soal.forEach(
    function(soal, index) {


      /* =====================
         PILIHAN GANDA
      ===================== */

      if (
        soal.tipe === "pilihan-ganda"
      ) {

        const jawaban =
          document.querySelector(
            `input[name="soal${index}"]:checked`
          );


        if (!jawaban) {

          adaKesalahan = true;
          return;

        }


        if (
          Number(jawaban.value) ===
          soal.jawabanBenar
        ) {

          totalPoin += soal.poin;

        } else {

          adaKesalahan = true;

        }

      }


      /* =====================
         ISIAN
      ===================== */

      if (
        soal.tipe === "isian"
      ) {

        const textarea =
          gameArea.querySelector(
            `.soal-item[data-soal="${index}"] textarea`
          );


        if (!textarea) return;


        const jawaban =
          textarea.value
            .toLowerCase()
            .trim();


        if (!jawaban) {

          adaKesalahan = true;
          return;

        }


        const cocok =
          soal.jawabanBenar.some(
            function(kunci) {

              return jawaban.includes(
                kunci.toLowerCase()
              );

            }
          );


        if (cocok) {

          totalPoin += soal.poin;

        } else {

          adaKesalahan = true;

        }

      }


      /* =====================
         ESAI
      ===================== */

      if (
        soal.tipe === "esai"
      ) {

        const textarea =
          gameArea.querySelector(
            `.soal-item[data-soal="${index}"] textarea`
          );


        if (!textarea) return;


        const jawaban =
          textarea.value.trim();


        if (
          jawaban.length < 20
        ) {

          adaKesalahan = true;

        } else {

          /*
             Esai diberikan poin penuh
             apabila jawaban sudah cukup
             panjang untuk diperiksa.
          */

          totalPoin += soal.poin;

        }

      }


      /* =====================
         KLASIFIKASI
      ===================== */

      if (
        soal.tipe === "klasifikasi"
      ) {

        const soalElement =
          gameArea.querySelector(
            `.soal-item[data-soal="${index}"]`
          );


        if (!soalElement) return;


        const semuaItem =
          soalElement.querySelectorAll(
            ".klasifikasi-item"
          );


        if (
          semuaItem.length !==
          soal.items.length
        ) {

          adaKesalahan = true;
          return;

        }


        let benar = true;


        semuaItem.forEach(
          function(item) {

            const parent =
              item.closest(
                ".klasifikasi-kolom"
              );

            const kolom =
              parent.dataset.kolom;


            if (
              kolom !== item.dataset.jawaban
            ) {

              benar = false;

            }

          }
        );


        if (benar) {

          totalPoin += soal.poin;

        } else {

          adaKesalahan = true;

        }

      }

    }
  );


  /* =====================================================
     HASIL
     ===================================================== */

  skorTotal += totalPoin;

  localStorage.setItem(
    "skorTotal",
    skorTotal
  );


  const feedback =
    document.getElementById(
      "feedback"
    );


  const penutup =
    document.getElementById(
      "narasi-penutup"
    );


  const submitButton =
    document.getElementById(
      "btn-submit"
    );


  feedback.style.display =
    "block";


  if (!adaKesalahan) {

    feedback.className =
      "feedback-box feedback-benar";

    feedback.innerHTML = `
      <strong>🎉 Hebat!</strong>
      <p>
        Semua jawabanmu benar.
        Kamu mendapatkan
        <strong>+${totalPoin} poin</strong>.
      </p>
    `;

  } else {

    feedback.className =
      "feedback-box feedback-salah";

    feedback.innerHTML = `
      <strong>💡 Coba periksa kembali.</strong>
      <p>
        Beberapa jawaban masih perlu
        diperbaiki. Bacalah kembali
        teks sebelum mencoba lagi.
      </p>
    `;

  }


  document.getElementById(
    "score-header"
  ).textContent =
    skorTotal;


  /* =====================
     LEVEL SELESAI
  ===================== */

  if (!adaKesalahan) {

    localStorage.setItem(
      `level${currentLevel}Selesai`,
      "true"
    );

    if (currentLevel < totalLevels) {
      localStorage.setItem("unlockedLevel", String(Math.max(
        Number(localStorage.getItem("unlockedLevel")) || 1,
        currentLevel + 1
      )));
    }

    levelSudahDikerjakan =
      true;


    if (penutup) {

      penutup.style.display =
        "block";

    }


    if (
      currentLevel < totalLevels
    ) {

      btnNext.disabled =
        false;

    }


    if (
      currentLevel === totalLevels
    ) {

      if (
        typeof tampilkanFinishModal ===
        "function"
      ) {

        tampilkanFinishModal();

      }

    }


    if (submitButton) {

      submitButton.disabled =
        true;

      submitButton.textContent =
        "✓ Level Selesai";

    }

  }

}


/* =========================================================
   NAVIGASI SEBELUMNYA
   ========================================================= */

btnPrev.addEventListener(
  "click",
  function() {

    if (currentLevel > 1) {

      loadLevel(
        currentLevel - 1
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }

  }
);


/* =========================================================
   NAVIGASI BERIKUTNYA
   ========================================================= */

btnNext.addEventListener(
  "click",
  function() {

    if (
      currentLevel < totalLevels
    ) {

      const selesai =
        localStorage.getItem(
          `level${currentLevel}Selesai`
        ) === "true";


      if (!selesai) {

        alert(
          "Selesaikan level ini terlebih dahulu."
        );

        return;

      }


      loadLevel(
        currentLevel + 1
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }

  }
);


/* =========================================================
   TOMBOL HINT
   ========================================================= */

function tampilkanHint() {

  const modal =
    document.getElementById(
      "hintModal"
    );

  if (modal) {

    modal.classList.add(
      "show"
    );

  }

}


function tutupHint() {

  const modal =
    document.getElementById(
      "hintModal"
    );

  if (modal) {

    modal.classList.remove(
      "show"
    );

  }

}




/* =========================================================
   NAVIGASI DASHBOARD + REFLEKSI LEVEL
========================================================= */
function kembaliKeDashboard(){
  window.location.href = "dashboard.html";
}

function openReflectionModal(){
  const modal = document.getElementById("reflectionModal");
  const area = document.getElementById("levelReflection");
  if(area) area.value = localStorage.getItem(`refleksiLevel${currentLevel}`) || "";
  if(modal) modal.classList.add("show");
}

function closeReflectionModal(){
  const modal = document.getElementById("reflectionModal");
  if(modal) modal.classList.remove("show");
}

function saveLevelReflection(){
  const area = document.getElementById("levelReflection");
  const msg = document.getElementById("reflectionSaved");
  const text = area ? area.value.trim() : "";
  if(text.length < 10){
    alert("Refleksi minimal 10 karakter.");
    return;
  }
  localStorage.setItem(`refleksiLevel${currentLevel}`, text);
  if(msg) msg.textContent = "Refleksi level berhasil disimpan.";
  setTimeout(closeReflectionModal, 700);
}

/* =========================================================
   CEK LOGIN
   ========================================================= */

const namaPeserta =
  localStorage.getItem(
    "namaPeserta"
  );

const kelasPeserta =
  localStorage.getItem(
    "kelasPeserta"
  );


if (
  !namaPeserta ||
  !kelasPeserta
) {

  window.location.href =
    "login.html";

}


/* =========================================================
   LOAD AWAL
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    loadLevel(
      currentLevel
    );

  }
);