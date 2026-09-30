const nama = localStorage.getItem("namaPeserta");
const kelas = localStorage.getItem("kelasPeserta");

if (!nama || !kelas) window.location.href = "login.html";

const levelInfo = [
  ["🔍","Level 1","Detektif Asap","Makna tersurat"],
  ["🔥","Level 2","Menelusuri Penyebab","Makna tersirat"],
  ["✅","Level 3","Pilih Tindakan SIAGA","Klasifikasi tindakan"],
  ["💬","Level 4","Suaramu untuk Hutan","Pendapat pro/kontra"],
  ["⚖️","Level 5","Evaluator Informasi","Membandingkan sumber"]
];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("namaDashboard").textContent = nama;
  document.getElementById("kelasDashboard").textContent = kelas;
  document.getElementById("welcomeName").textContent = nama;
  updateDashboard();
  document.querySelectorAll(".modal").forEach(m => m.addEventListener("click", e => {
    if (e.target === m) m.classList.remove("show");
  }));
});

function openModal(id){ document.getElementById(id)?.classList.add("show"); }
function closeModal(id){ document.getElementById(id)?.classList.remove("show"); }

function getUnlocked(){
  return Math.min(5, Math.max(1, Number(localStorage.getItem("unlockedLevel")) || 1));
}

function startGame(){
  const allDone = localStorage.getItem("level5Selesai") === "true";
  if(allDone){
    window.location.href = "evaluasi.html";
    return;
  }
  const level = Math.min(5, Math.max(1, Number(localStorage.getItem("unlockedLevel")) || 1));
  localStorage.setItem("currentLevel", level);
  window.location.href = "level.html";
}

function openLevel(level){
  if(level > getUnlocked()){
    alert("Level ini masih terkunci. Selesaikan level sebelumnya terlebih dahulu.");
    return;
  }
  localStorage.setItem("currentLevel", level);
  window.location.href = "level.html";
}

function updateDashboard(){
  const unlocked = getUnlocked();
  const score = Number(localStorage.getItem("skorTotal")) || 0;
  document.getElementById("scoreDashboard").textContent = score;
  document.getElementById("progressTitle").textContent = unlocked === 5 && localStorage.getItem("level5Selesai")==="true" ? "Semua level selesai 🎉" : `Level ${unlocked} siap dikerjakan`;
  document.getElementById("progressText").textContent = unlocked === 5 && localStorage.getItem("level5Selesai")==="true" ? "Lanjutkan ke Evaluasi Akhir untuk menuntaskan pembelajaran." : "Selesaikan misi secara berurutan untuk membuka misi berikutnya.";

  const map = document.getElementById("levelMap");
  map.innerHTML = levelInfo.map((x,i)=>{
    const n=i+1, locked=n>unlocked, done=localStorage.getItem(`level${n}Selesai`)==="true";
    return `<button class="level-card ${locked?"locked":""} ${done?"done":""}" onclick="openLevel(${n})">
      <span class="level-icon">${locked?"🔒":x[0]}</span><small>${x[1]}</small><b>${x[2]}</b><em>${done?"✓ Selesai":x[3]}</em>
    </button>`;
  }).join("");
}

function logout(){
  localStorage.clear();
  window.location.href="login.html";
}