const aboutusBtn = document.querySelector(".aboutus")
const prizesBtn = document.querySelector(".prizes")
const locationsBtn = document.querySelector(".aboutus")
const contactBtn = document.querySelector(".aboutus")
const modalPhoto = document.querySelector('.modal-photo')
const modalText = document.querySelector('.modal-text')
const modalH1 = document.querySelector('.modal-h1')
const locationPopup = document.querySelector('.location-popup')
const addressBtn=document.querySelector(".addressBtn")

function fillModal(modalPhoto,modalH1,modalText) {}

function openLocationPopup(){
    locationPopup.classList.toggle("show-map");
}


aboutusBtn.addEventListener("click", ()=>{console.log("navclicked");})
addressBtn.addEventListener("click",openLocationPopup)