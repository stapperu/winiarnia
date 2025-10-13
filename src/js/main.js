const aboutusBtn = document.querySelector(".aboutus");
const prizesBtn = document.querySelector(".prizes");
const locationsBtn = document.querySelector(".aboutus");
const contactBtn = document.querySelector(".aboutus");
const modal = document.querySelector(".modal");
const modalText=document.querySelector(".modal-text")
let modalPhotoBucket = document.querySelector(".modal-photo");
let modalTextBucket = document.querySelector(".modal-text");
let modalH2Bucket = document.querySelector(".modal-h2");
const modalWineSection=document.querySelector(".modal-wine-section");
const locationPopup = document.querySelector(".location-popup");
const addressBtn = document.querySelector(".addressBtn");
const mapInfo=document.querySelector(".map-info");
const navButtons = document.querySelectorAll("button");

const wines = [
  {
    wineName: "chardonnay pw",
    wineDescritpion: "To eleganckie, wytrawne wino białe z odmiany Chardonnay, dojrzewające na osadzie drożdżowym, co nadaje mu kremowej tekstury i nut smakowych dojrzałych owoców, takich jak ananas i brzoskwinia, z delikatnymi akcentami maślanej wanilii. Idealne do dań rybnych lub serów miękkich, charakteryzuje się zrównoważoną kwasowością i długim finiszem.",
    winePhoto: "./src/img/chardonnay-pw-winnica-preto.webp",
  },
  {
    wineName: "gewurztraminer pw",
    wineDescritpion: "Wytrawny Gewürztraminer PW urzeka intensywnym aromatem róży, liczi i przypraw, z subtelną słodyczą w ustach przełamaną świeżą kwasowością. Doskonałe jako aperitif lub do kuchni azjatyckiej, wino to oferuje pełnię smaku i egzotyczny bukiet, typowy dla tej aromatycznej odmiany.",
    winePhoto: "./src/img/gewurztraminer-pw-winnica-preto.webp",
  },
  {
    wineName: "pinot-noir-barrique",
    wineDescritpion: "Ciemnorubinowe wino czerwone z Pinot Noir, dojrzewające w beczkach dębowych barrique, co wzbogaca je o nuty wiśni, jagód i subtelnego dymu z waniliowymi akcentami. Wytrawne, o jedwabistej taninowości i eleganckiej strukturze, doskonale komponuje się z dziczyzną lub pieczonym mięsem.",
    winePhoto: "./src/img/pinot-noir-barrique-winnica-preto.webp",
  },
  {
    wineName: "regent-barrique",
    wineDescritpion: "Regent Barrique to intensywne wino czerwone o głębokim rubinowym kolorze, fermentowane i leżakowane w dębowych beczkach, co podkreśla nuty czarnej porzeczki, czekolady i przypraw. Wytrawne, z mocnymi taninami i długim finiszem, idealnie pasuje do grillowanych mięs i serów pleśniowych.",
    winePhoto: "./src/img/regent-barrique-winnica-preto.webp",
  },
  {
    wineName: "rose pw",
    wineDescritpion: "Wytrawny róż PW o jasnym łososiowym odcieniu, z aromatami truskawek, malin i cytrusów, oferuje świeżą kwasowość i lekką mineralność. Lekkie i orzeźwiające, świetnie sprawdza się jako wino letnie do sałatek, owoców morza lub jako aperitif w ciepłe dni.",
    winePhoto: "./src/img/rose-pw-winnica-preto.webp",
  },
  {
    wineName: "solaris",
    wineDescritpion: "Solaris to wytrawne wino białe z odpornej odmiany hybrydowej, charakteryzujące się cytrusowymi i zielonymi nutami jabłka oraz tropikalnych owoców, z wysoką kwasowością i mineralnym finiszem. Odporne na choroby i klimat, idealne do lekkich dań wegetariańskich lub jako codzienne wino stołowe.",
    winePhoto: "./src/img/solaris-winnica-preto.webp",
  },
  {
    wineName: "souvignier-gris",
    wineDescritpion: "Souvignier Gris PW to wytrawne wino białe o złocistym kolorze, z bogatym bukietem marakui, grejpfruta i kwiatów, oferujące pełnię smaku i zrównoważoną strukturę. Hybrydowa odmiana o wysokiej jakości, doskonale komponuje się z daniami azjatyckimi lub owocami morza, podkreślając swoją aromatyczność i świeżość.",
    winePhoto: "./src/img/souvignier-gris-winnica-preto.webp",
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
      "<p>Zapraszamy do zapoznania się z materiałami na temat wina i prowadzenia winnicy - kompendium wiedzy o produkcji, degustacji i historii wina.</p><a href='../src/img/Wszystko-o-winie.pdf' download>Wszystko o winie<sub>.pdf</sub></a> <p>Założenie i prowadzenie winnicy – praktyczny poradnik dla osób zainteresowanych zakładaniem i zarządzaniem winnicą.</p><a href='../src/img/Zalozenie-i-prowadzenie-winnicy.pdf' download>Założenie i prowadzenie winnicy<sub>.pdf<sub></a> <span>Pobierz powyższe materiały, aby dowiedzieć się więcej!</span><h3> Zamujemy się również organizacją spotkań biznesowych, przyjęć jubileuszowych, ślubów/weseli... <h3>",
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

function clearWineSection() {
   div.removeChild(wineNameBucket);
          div.removeChild(winePhotoBucket);
          div.removeChild(wineDescBucket);
}

function fillModal(mName, mText, mPhoto) {
  modalH2Bucket.textContent = mName;
  modalTextBucket.innerHTML = mText;
  modalPhotoBucket.src = mPhoto;
}



function openLocationPopup() {
  locationPopup.classList.add("show-map");
  const googlemap=document.querySelector(".googlemap");
 if (window.innerWidth < 576 ){
  mapInfo.textContent="Dotknij gdziekolwiek aby zamknąć mapę";
  googlemap.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1467.95402047452!2d14.676847!3d52.389189!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4707a1c93302a75b%3A0xae18e317c5f6483e!2sWinnica%20Preto!5e1!3m2!1spl!2spl!4v1759082781007!5m2!1spl!2spl");
  googlemap.setAttribute("width","300");
  googlemap.setAttribute("height","200");
}
  else if(window.innerWidth < 768 ){
    mapInfo.textContent="Dotknij gdziekolwiek aby zamknąć mapę";
    googlemap.setAttribute("width","600");
    googlemap.setAttribute("height","400");
  } else { 
        mapInfo.textContent="Kliknij gdziekolwiek aby zamknąć mapę";
    googlemap.setAttribute("width","800");
    googlemap.setAttribute("height","600");}
}
console.log(window.innerWidth);
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
    if(!modalWineSection.querySelector(".wines")) {
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
        }}
      }
    }
  })
);
 
console.log(modalWineSection.querySelector(".wines"));

addressBtn.addEventListener("click", openLocationPopup);
window.addEventListener("click", closeModalAnywhere);
window.addEventListener("click", closeLocationPopupAnywhere);
