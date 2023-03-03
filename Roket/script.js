const TombolLuncurRoket = document.querySelector(".btn");
const Roket = document.querySelector(".rocket-wrapper");
const Waktu = document.getElementById("WaktuPeluncuran");
const GambarRoket = document.querySelector("#GambarRoket");
var HitunganMundur = 6;

TombolLuncurRoket.addEventListener("click", ()=>{

    TombolLuncurRoket.style.display = "none";

    var interval = setInterval(function() {
        Waktu.innerHTML = --HitunganMundur;
        if(HitunganMundur <= -0){
            Waktu.style.display = "none";
            GambarRoket.className = "rocket"
            // Roket.innerHTML = "<img class='rocket' src='../Img/Roket.png' alt='Rocket'></img>";
            clearInterval(interval);
       }
    }, 1000);
});
