function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// ================================

// tying animation

const text = document.querySelector(".sec-text");

const textLoad = () =>{
  setTimeout(() =>{
    text.textContent = "Freelancer"
  }, 0);

  setTimeout(() =>{
    text.textContent = "React Developer"
  }, 5100);

  setTimeout(() =>{
    text.textContent = "Web Developer"
  }, 10100);

}

textLoad();
setInterval(textLoad, 15000);


// ================================

const hambuger = document.querySelector(".hambuger");
const aside = document.querySelector ("aside");

hambuger.addEventListener("click", () => {
  hambuger.classList.toggle("active");
  aside.classList.toggle("active");
})

document.querySelectorAll(".tablinks").forEach(n => n.
  addEventListener("click", () => {
    hambuger.classList.remove("active");
    aside.classList.remove("active");
  }))




