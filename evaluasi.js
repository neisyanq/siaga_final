const questions=[
 {q:"Informasi yang dinyatakan secara langsung dalam teks disebut ...",o:["makna tersurat","makna tersirat","opini","prediksi"],a:0},
 {q:"Salah satu penyebab karhutla yang disebutkan dalam materi adalah ...",o:["hujan deras setiap hari","musim kemarau panjang","salju","banjir bandang"],a:1},
 {q:"Mengapa lahan gambut mudah terbakar?",o:["mengandung bahan organik yang kering","selalu basah","tidak memiliki bahan organik","berada di perkotaan"],a:0},
 {q:"Saat kualitas udara tidak sehat, tindakan yang tepat adalah ...",o:["bermain di luar tanpa masker","tetap olahraga di luar","mengurangi aktivitas di luar","membakar sampah"],a:2},
 {q:"Informasi yang tidak dinyatakan secara langsung tetapi dapat disimpulkan dari teks disebut ...",o:["tersurat","tersirat","judul","data"],a:1},
 {q:"Pendapat kontra terhadap pembakaran lahan dapat didukung alasan ...",o:["asap mengganggu kesehatan","lebih cepat dan murah","tidak menimbulkan dampak","tidak memengaruhi lingkungan"],a:0},
 {q:"Untuk membandingkan dua sumber, hal yang perlu dicari adalah ...",o:["warna halaman","persamaan dan perbedaan informasi","nama pembaca","ukuran huruf"],a:1},
 {q:"Salah satu dampak karhutla pada materi adalah ...",o:["udara semakin sehat","jarak pandang terbatas","hujan salju","tanaman tumbuh lebih cepat"],a:1},
 {q:"Alasan dalam menyampaikan pendapat sebaiknya ...",o:["tidak berkaitan dengan topik","logis dan relevan","dibuat-buat","tanpa dasar"],a:1},
 {q:"Sikap pembaca terhadap informasi dari dua sumber sebaiknya ...",o:["langsung percaya tanpa memeriksa","membandingkan informasi","mengabaikan sumber","memilih berdasarkan judul saja"],a:1}
];

const form=document.getElementById("evaluationForm");
form.innerHTML=questions.map((x,i)=>`<div class="eval-question"><span>SOAL ${i+1}</span><h3>${x.q}</h3>${x.o.map((o,j)=>`<label><input type="radio" name="q${i}" value="${j}"><b>${String.fromCharCode(65+j)}</b>${o}</label>`).join("")}</div>`).join("");
document.getElementById("scoreHeader").textContent=localStorage.getItem("skorTotal")||0;

document.getElementById("submitEvaluation").addEventListener("click",()=>{
  let score=0, unanswered=0;
  questions.forEach((x,i)=>{
    const checked=document.querySelector(`input[name="q${i}"]:checked`);
    if(!checked){unanswered++;return;}
    if(Number(checked.value)===x.a) score+=10;
  });
  if(unanswered){alert(`Masih ada ${unanswered} soal yang belum dijawab.`);return;}
  localStorage.setItem("evaluasiSelesai","true");
  localStorage.setItem("skorEvaluasi",score);
  const total=(Number(localStorage.getItem("skorTotal"))||0)+score;
  localStorage.setItem("skorTotal",total);
  document.getElementById("submitEvaluation").disabled=true;
  document.getElementById("evaluationResult").innerHTML=`<div class="result-card ${score>=70?"pass":"retry"}"><h2>${score>=70?"🎉 Evaluasi Selesai!":"💪 Evaluasi Selesai"}</h2><p>Skor evaluasimu: <b>${score}/100</b></p><p>${score>=70?"Kamu dapat melanjutkan ke refleksi akhir.":"Tetap semangat. Kamu tetap dapat melanjutkan ke refleksi untuk menuliskan pemahamanmu."}</p><button class="btn-primary full" onclick="location.href='refleksi.html'">Lanjut ke Refleksi →</button></div>`;
  window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"});
});
function goDashboard(){location.href="dashboard.html";}