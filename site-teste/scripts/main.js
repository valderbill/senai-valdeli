function mudarH1(){
    const novaH1 = document.querySelector("h1");
    novaH1.textContent = "Ola Mundo";
}


function verficarTime() {
let time = prompt("Digite seu time");
if (time == "mengo") {
    alert("Time do coração Flamengo");
    
} else {
    alert("Outro time não importa");
    window.location.href = "https://www.torcedorcarioca.com/clubes/outros-times/c"
   
} 
}

document.querySelector("img").addEventListener("click",verficarTime);