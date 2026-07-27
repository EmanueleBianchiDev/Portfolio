/* ==================================
   PORTFOLIO EMA
   JAVASCRIPT DEFINITIVO 1.0
================================== */



// ===============================
// DARK MODE
// ===============================


const themeButton = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");


// Carica il tema salvato

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeButton.textContent = "☀️ Tema chiaro";

}




themeButton.addEventListener("click", () => {


    document.body.classList.toggle("dark-mode");


    if(document.body.classList.contains("dark-mode")) {


        localStorage.setItem("theme","dark");

        themeButton.textContent = "☀️ Tema chiaro";


    } else {


        localStorage.setItem("theme","light");

        themeButton.textContent = "🌙 Tema scuro";


    }


});






// ===============================
// ANIMAZIONE SCORRIMENTO
// ===============================



const sections = document.querySelectorAll("section");



const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


    entry.target.style.opacity="1";

    entry.target.style.transform="translateY(0)";


}


});


},

{

threshold:0.15

}

);




sections.forEach(section=>{


section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition="0.8s";


observer.observe(section);


});







// ===============================
// ANNO AUTOMATICO FOOTER
// ===============================


const footerYear = document.querySelector("footer p");


if(footerYear){


footerYear.innerHTML =
"© " + new Date().getFullYear() + " Emanuele Bianchi";


}







// ===============================
// BLOCCO LINK SOCIAL VUOTI
// ===============================


const socialLinks =
document.querySelectorAll(".contact-box a");



socialLinks.forEach(link=>{


if(link.getAttribute("href") === "#"){


link.addEventListener("click",(e)=>{


e.preventDefault();


alert("Profilo social in aggiornamento");


});


}


});