const aboutusBtn = document.querySelector(".aboutus");
const prizesBtn = document.querySelector(".prizes");
const locationsBtn = document.querySelector(".aboutus");
const contactBtn = document.querySelector(".aboutus");
const modal = document.querySelector(".modal");
let modalPhotoBucket = document.querySelector(".modal-photo");
let modalTextBucket = document.querySelector(".modal-text");
let modalH2Bucket = document.querySelector(".modal-h2");
const locationPopup = document.querySelector(".location-popup");
const addressBtn = document.querySelector(".addressBtn");
const navButtons = document.querySelectorAll("button");

const popups = [modal,locationPopup];

function closeModalAnywhere(e){
const isNavButton = Array.from(navButtons).some(button => button === e.target || button.contains(e.target));
if (!isNavButton) {
    modal.classList.remove("animatedSlide");
     modalH2Bucket.textContent = "";}
  }

const data = [
  {
    mName: "O nas",
    mText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consequuntur fugit illo impedit natus placeat corporis eaque nulla maiores alias obcaecati eveniet vitae, ex sed aperiam facere sint labore corrupti.",
    mPhoto: "",
  },
  {
    mName: "Nasze osiągnięcia",
    mText:
      "222Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consequuntur fugit illo impedit natus placeat corporis eaque nulla maiores alias obcaecati eveniet vitae, ex sed aperiam facere sint labore corrupti.",
    mPhoto: "",
  },
  {
    mName: "Organizacja eventów",
    mText:
      "33333Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consequuntur fugit illo impedit natus placeat corporis eaque nulla maiores alias obcaecati eveniet vitae, ex sed aperiam facere sint labore corrupti.",
    mPhoto: "",
  },
];

function fillModal(mName, mText, mPhoto) {
  modalH2Bucket.textContent = mName;
  modalTextBucket.textContent = mText;
  modalPhotoBucket.src = mPhoto;
}

function openLocationPopup() {
 
  locationPopup.classList.add("show-map");
}
function closeLocationPopupAnywhere(e){
  const isAddressBtn = addressBtn===e.target || addressBtn.contains(e.target);
  const isLocationPopup = locationPopup===e.target || locationPopup.contains(e.target);
  console.log(isLocationPopup);
  if(!isLocationPopup && locationPopup.classList.contains("show-map") && !isAddressBtn){locationPopup.classList.remove("show-map");
    console.log(locationPopup.classList.contains("show-map"));
}
}

navButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    if (e.target.textContent === modalH2Bucket.textContent) {
    //   modal.classList.remove("show");
      modal.classList.remove("animatedSlide");
      modalH2Bucket.textContent = "";
    } else {
    //   modal.classList.add("show");
      modal.classList.add("animatedSlide");
      if (e.target.textContent === "O nas") {
        fillModal(data[0].mName, data[0].mText, data[0].mPhoto);
      } else if (e.target.textContent === "Nasze osiągnięcia") {
        fillModal(data[1].mName, data[1].mText, data[1].mPhoto);
      } else if (e.target.textContent === "Organizacja eventów") {
        fillModal(data[2].mName, data[2].mText, data[2].mPhoto);
      }
    }
  })
);

addressBtn.addEventListener("click", openLocationPopup);
window.addEventListener("click", closeModalAnywhere)
window.addEventListener("click", closeLocationPopupAnywhere)
console.log(window);