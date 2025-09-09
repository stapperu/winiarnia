const aboutusBtn = document.querySelector(".aboutus");
const prizesBtn = document.querySelector(".prizes");
const locationsBtn = document.querySelector(".aboutus");
const contactBtn = document.querySelector(".aboutus");
const modal = document.querySelector(".modal");
const modalText=document.querySelector(".modal-text")
let modalPhotoBucket = document.querySelector(".modal-photo");
let modalTextBucket = document.querySelector(".modal-text");
let modalH2Bucket = document.querySelector(".modal-h2");
const modalWineSection=document.querySelector(".modal-wine-section")
const locationPopup = document.querySelector(".location-popup");
const addressBtn = document.querySelector(".addressBtn");
const navButtons = document.querySelectorAll("button");

const wines = [
  {
    wineName: "chardonnay pw",
    wineDescritpion: "chardonnay pw description Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, tempora. Fugiat sunt dicta repudiandae, nam nisi obcaecati aliquid quis, laboriosam facere odio sit rerum ipsum impedit veniam placeat voluptates, ab asperiores. Quo obcaecati, eaque repellat a et maxime animi asperiores consequuntur tempora. Rerum, suscipit tempora architecto delectus mollitia debitis quis id dolor iusto quae laudantium a.",
    winePhoto: "./src/img/chardonnay-pw-winnica-preto.jpg",
  },
  {
    wineName: "gewurztraminer pw",
    wineDescritpion: "gewurztraminer pw description Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, tempora. Fugiat sunt dicta repudiandae, nam nisi obcaecati aliquid quis, laboriosam facere odio sit rerum ipsum impedit veniam placeat voluptates, ab asperiores. Quo obcaecati, eaque repellat a et maxime animi asperiores consequuntur tempora. Rerum, suscipit tempora architecto delectus mollitia debitis quis id dolor iusto quae laudantium a. Eligendi ullam, dolores saepe similique rerum fugit veritatis quae inventore dolore, eos animi ea!",
    winePhoto: "./src/img/gewurztraminer-pw-winnica-preto.jpg",
  },
  {
    wineName: "pinot-noir-barrique",
    wineDescritpion: "pinot-noir-barrique description Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, tempora. Fugiat sunt dicta repudiandae, nam nisi obcaecati aliquid quis, laboriosam facere odio sit rerum ipsum impedit veniam placeat voluptates, ab asperiores.",
    winePhoto: "./src/img/pinot-noir-barrique-winnica-preto.jpg",
  },
  {
    wineName: "regent-barrique",
    wineDescritpion: "regent-barrique description Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, tempora. Fugiat sunt dicta repudiandae, nam nisi obcaecati aliquid quis, laboriosam facere odio sit rerum ipsum impedit veniam placeat voluptates, ab asperiores. Quo obcaecati, eaque repellat a et maxime animi asperiores consequuntur tempora. Rerum, suscipit tempora architecto delectus.",
    winePhoto: "./src/img/regent-barrique-winnica-preto.jpg",
  },
  {
    wineName: "rose pw",
    wineDescritpion: "rose pw description Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, tempora. Fugiat sunt dicta repudiandae, nam nisi obcaecati aliquid quis, laboriosam facere odio sit rerum ipsum impedit veniam placeat voluptates, ab asperiores. Quo obcaecati, eaque repellat a et maxime animi asperiores consequuntur tempora.",
    winePhoto: "./src/img/rose-pw-winnica-preto.jpg",
  },
  {
    wineName: "solaris",
    wineDescritpion: "solaris description Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, tempora. Fugiat sunt dicta repudiandae, nam nisi obcaecati aliquid quis, laboriosam facere odio sit rerum ipsum impedit veniam placeat voluptates, ab asperiores. Quo obcaecati, eaque repellat a et maxime animi asperiores consequuntur tempora. Rerum, suscipit tempora architecto delectus mollitia debitis quis id dolor iusto quae laudantium a. Eligendi ullam, dolores saepe similique rerum fugit veritatis quae inventore dolore, eos animi ea!",
    winePhoto: "./src/img/solaris-winnica-preto.jpg",
  },
  {
    wineName: "souvignier-gris",
    wineDescritpion: "souvignier-gris description Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, tempora. Fugiat sunt dicta repudiandae, nam nisi obcaecati aliquid quis, laboriosam facere odio sit rerum ipsum impedit veniam placeat voluptates, ab asperiores. Quo obcaecati, eaque repellat a et maxime animi asperiores consequuntur tempora. Rerum, suscipit tempora architecto delectus mollitia debitis quis id dolor iusto quae laudantium a.",
    winePhoto: "./src/img/souvignier-gris-winnica-preto.jpg",
  },
];

const data = [
  {
    mName: "O nas",
    mText:
      "<p>Witajcie serdecznie w Winnicy PRETO.</p> <p>Jesteśmy regionalną firmą rodzinną, gdzie tworzone przez nas wina są owocem pasji, zaangażowania i szacunku do ziemi. Wszystkie nasze krzewy winorośli pielęgnowanie są z troską, a ręczne zbiory pozwalają nam na wyselekcjonowanie najlepszych owoców do kompozycji naszych trunków.</p><p> Winnica Preto; słowo to w języku portugalskim oznacza „czarny” – ten kolor stał się znakiem firmowym projektu, choć żadnych innych związków z Luzytanią tu nie ma. Znajduje się w Starych Biskupicach, ledwie 10 km od polsko-niemieckiego przejścia granicznego w Słubicach. </p> <p>W 2020 roku bracia Mirosław i Krzysztof Czakowie zasadzili pierwszych 5 hektarów, dobierając odmiany demokratycznie – wśród białych znajdziemy chardonnay, rieslinga, gewürztraminera, souvignier gris i solarisa, wśród czerwonych – pinot noir, dornfeldera, cabernet cortis, caberet dorsa i regenta.</p> ",
    mPhoto: "",
  },
  {
    mName: "Nasze osiągnięcia",
    mText:
      "<p>Naszą produkcję w ilości ponad dwudziestu tysięcy krzewów wyróżniają takie szczepy jak: Riesling, Gewurztraminer, Cabernet Cortis, Cabernet Dorsa, Souvignier Gris, Pinot Noir, Sauvignon Blanc, Solaris oraz Chardonnay.</p><p> Nasze wina tworzymy w całości we własnym zakresie, co oznacza, że od pielęgnacji krzewów, owoców, zbiorów, procesów destylacji, kupażu, butelkowania, etykietowania, marketingu i sprzedaży, jesteśmy obecni na każdym etapie szeroko pojętej produkcji wina.</p><p> Opowiemy Państwu o naszym udziale i sukcesach w konkursach krajowych i międzynarodowych, reprezentowaniu się na targach i imprezach winobraniowych oraz innych świętach wina.</p> ",
    mPhoto: "",
  },
  {
    mName: "Organizacja eventów",
    mText:
      "<p>Zapraszamy do zapoznania się z materiałami na temat wina i prowadzenia winnicy. Poniżej znajdziesz dwa dokumenty, które dostarczą Ci szczegółowych informacji:</p> <p>Wszystko o winie – kompendium wiedzy o produkcji, degustacji i historii wina.</p><a href='../src/img/Wszystko-o-winie.pdf' download>Wszystko o winie<sub>.pdf</sub></a> <p>Założenie i prowadzenie winnicy – praktyczny poradnik dla osób zainteresowanych zakładaniem i zarządzaniem winnicą.</p><a href='../src/img/Zalozenie-i-prowadzenie-winnicy.pdf' download>Założenie i prowadzenie winnicy<sub>.pdf<sub></a> <span>Pobierz powyższe materiały, aby dowiedzieć się więcej!</span><h3> Zamujemy się również organizacją spotkań biznesowych, przyjęć jubileuszowych, ślubów/weseli... <h3>",
    mPhoto: "",
  },
  {
    mName: "Nasze Wina",
    mText:"",
    mPhoto: "",
  },
];

const popups = [modal, locationPopup];

function closeModalAnywhere(e) {
  const isNavButton = Array.from(navButtons).some(
    (button) => button === e.target || button.contains(e.target)
  );
  if (!isNavButton) {
    modal.classList.remove("animatedSlide");
    modalH2Bucket.textContent = "";
    modalTextBucket.textContent = "";
      modalWineSection.style.display="none";
    
  }
}

function fillModal(mName, mText, mPhoto) {
  modalH2Bucket.textContent = mName;
  modalTextBucket.innerHTML = mText;
  modalPhotoBucket.src = mPhoto;
}



function openLocationPopup() {
  locationPopup.classList.add("show-map");
}
function closeLocationPopupAnywhere(e) {
  const isAddressBtn = addressBtn === e.target || addressBtn.contains(e.target);
  const isLocationPopup =
    locationPopup === e.target || locationPopup.contains(e.target);
  if (
    !isLocationPopup &&
    locationPopup.classList.contains("show-map") &&
    !isAddressBtn
  ) {
    locationPopup.classList.remove("show-map");
  }
}

navButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    if (e.target.textContent === modalH2Bucket.textContent) {
      //   modal.classList.remove("show");
      modal.classList.remove("animatedSlide");
      modalTextBucket.textContent = "";
      modalH2Bucket.textContent = "";
    } else {
      //   modal.classList.add("show");
      modal.classList.add("animatedSlide");
      if (e.target.textContent === "O nas") {
        fillModal(data[0].mName, data[0].mText, data[0].mPhoto);
        modalWineSection.style.display="none";
      } else if (e.target.textContent === "Nasze osiągnięcia") {
        fillModal(data[1].mName, data[1].mText, data[1].mPhoto);
        modalWineSection.style.display="none";
      } else if (e.target.textContent === "Organizacja eventów") {
        fillModal(data[2].mName, data[2].mText, data[2].mPhoto);
        modalWineSection.style.display="none";
      } else if (e.target.textContent === "Nasze wina") {
        fillModal(data[3].mName, data[3].mText, data[3].mPhoto);
        modalWineSection.style.display="grid";
    
        for (i = 0; i < wines.length; i++) {
          let div=document.createElement("div");
          let wineNameBucket=document.createElement("h3");
          let wineDescBucket=document.createElement("p");
          let winePhotoBucket=document.createElement("img");
          modalWineSection.appendChild(div);
          div.appendChild(wineNameBucket);
          div.appendChild(winePhotoBucket);
          div.appendChild(wineDescBucket);
          div.classList.add("wines");
          wineNameBucket.classList.add("wineName");
          wineDescBucket.classList.add("wineDescription");
          winePhotoBucket.classList.add("winePhoto");
          
          function fillWineSelection(wineName, wineDescription, winePhoto) {
  wineNameBucket.textContent = wineName;
  wineDescBucket.textContent = wineDescription;
  winePhotoBucket.setAttribute("src" ,winePhoto)
}

          
          fillWineSelection(
            wines[i].wineName,
            wines[i].wineDescritpion,
            wines[i].winePhoto
          );
        }
      }
    }
  })
);
 

addressBtn.addEventListener("click", openLocationPopup);
window.addEventListener("click", closeModalAnywhere);
window.addEventListener("click", closeLocationPopupAnywhere);
