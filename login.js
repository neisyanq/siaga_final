document.getElementById("loginForm").addEventListener("submit",e=>{
 e.preventDefault(); const nama=document.getElementById("nama").value.trim(), kelas=document.getElementById("kelas").value;
 if(!nama||!kelas){document.getElementById("loginError").textContent="Nama dan kelas wajib diisi.";return;}
 const oldNama=localStorage.getItem("namaPeserta");
 if(oldNama && oldNama!==nama){["currentLevel","unlockedLevel","skorTotal","evaluasiSelesai","skorEvaluasi","refleksiAkhir","pembelajaranSelesai"].forEach(k=>localStorage.removeItem(k)); for(let i=1;i<=5;i++) localStorage.removeItem(`level${i}Selesai`);}
 localStorage.setItem("namaPeserta",nama); localStorage.setItem("kelasPeserta",kelas);
 if(!localStorage.getItem("unlockedLevel")) localStorage.setItem("unlockedLevel","1");
 if(!localStorage.getItem("currentLevel")) localStorage.setItem("currentLevel","1");
 if(!localStorage.getItem("skorTotal")) localStorage.setItem("skorTotal","0");
 location.href="dashboard.html";
});