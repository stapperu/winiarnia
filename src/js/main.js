const aboutusBtn = document.querySelector(".aboutus");
const prizesBtn = document.querySelector(".prizes");
const locationsBtn = document.querySelector(".aboutus");
const contactBtn = document.querySelector(".aboutus");
const modal = document.querySelector(".modal")
let modalPhotoBucket = document.querySelector(".modal-photo");
let modalTextBucket = document.querySelector(".modal-text");
let modalH2Bucket = document.querySelector(".modal-h2");
const locationPopup = document.querySelector(".location-popup");
const addressBtn = document.querySelector(".addressBtn");
const navButtons =document.querySelectorAll("button")
const data = [
	{
		mName: "O nas",
		mText:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consequuntur fugit illo impedit natus placeat corporis eaque nulla maiores alias obcaecati eveniet vitae, ex sed aperiam facere sint labore corrupti.",
		mPhoto: "./src/img/pretologo.jpg",
	},
	{
		mName: "Nasze osiągnięcia",
		mText:
			"222Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consequuntur fugit illo impedit natus placeat corporis eaque nulla maiores alias obcaecati eveniet vitae, ex sed aperiam facere sint labore corrupti.",
		mPhoto: "./src/img/wine1.png",
	},
	{
		mName: "Lokalizacja",
		mText:
			"33333Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consequuntur fugit illo impedit natus placeat corporis eaque nulla maiores alias obcaecati eveniet vitae, ex sed aperiam facere sint labore corrupti.",
		mPhoto: "./src/img/image.jpg"
	}
];

function fillModal(mName,mText,mPhoto) {
	modalH2Bucket.textContent = mName;
	modalTextBucket.textContent = mText;
	modalPhotoBucket.src=mPhoto;
}

function openLocationPopup() {
	locationPopup.classList.toggle("show-map");
}
navButtons.forEach((button)=>button.addEventListener("click", (e)=>{ 
    
    if(e.target.textContent===modalH2Bucket.textContent){ modal.classList.remove("show");modal.classList.remove("animatedSlide"); modalH2Bucket.textContent=""; } else {modal.classList.add("show"); modal.classList.add("animatedSlide");   if(e.target.textContent === "O nas"){
        fillModal(data[0].mName,data[0].mText,data[0].mPhoto);
        
    } else if (e.target.textContent === "Nasze osiągnięcia"){
        fillModal(data[1].mName,data[1].mText,data[1].mPhoto);
        
    } else if (e.target.textContent === "Lokalizacja"){
        fillModal(data[2].mName,data[2].mText,data[2].mPhoto);
        
    }}
    
  
}));

addressBtn.addEventListener("click", openLocationPopup);
