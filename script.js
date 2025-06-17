const ICONE_TITOLI = [
    "CHINATOWN", "MOSCOVA", "PORTA VENEZIA", "PORTA VENEZIA",
];
const ICONE_IMGS = [
    "meiJiaLe.jpg"         , "milanoHoliday.jpg"       , "mochiMochi.jpg",
    "perbelliniBistrot.jpg", "volemoseBene.jpg"        , "daFortunata.jpg",
    "riadMajorelle.jpg"    , "mourad.jpg"              , "medina.jpg",
    "mosodna.jpg"          , "adulis.jpg"              , "hdmora.jpg",
];

const LOCALI_DESCRIZIONI = [
    "Mei Jia Le offre molti stuzzichini tipici accompagnati da un' atmosfera deliziosa<br><a href='https://www.tripadvisor.it/Restaurant_Review-g187849-d26358884-Reviews-Mei_Jia_Le-Milan_Lombardy.html' target='_blank'>link</a>",
    "Milano Holiday offre stuzzichini vari, tra cui alcuni appena fatti, e dal gusto delizioso<br><a href='https://www.scattidigusto.it/milan-holiday-supermercato-cinese-con-bancone-e-dehors-in-paolo-sarpi' target='_blank'>link</a>",
    "Mochi Mochi \u00e8 il posto perfetto per provare vari dolci tipici tra cui i famossimi mochi<br><a href='https://vivimilano.corriere.it/ristoranti/pasticcerie/mochi-mochi/' target='_blank'>link</a>",
    "La locanda Berbellini Bistrot offre un' esperienza unica e totalmente italiana<br><a href='https://locandaperbellini.it/' target='_blank'>link</a>",
    "Nel ristorante Volemose Bene \u00e8 possibile avere pranzi indimenticabili con un' atmosfera italiana<br><a href='https://www.volemosebenemilano.it/' target='_blank'>link</a>",
    "Nell' Osteria de Fortunata si possono provare sapori autentici e tradizionali e gusti che non deludono<br><a href='https://www.osteriadafortunata.it/menu-milano/' target='_blank'>link</a>",
    "Riad Majorelle offre un' esperienza di puro piacere dove potrei provare molti piatti marocchini<br><a href='https://www.tripadvisor.it/Restaurant_Review-g187849-d16691638-Reviews-Riad_Majorelle_Bistrot-Milan_Lombardy.html' target='_blank'>link</a>",
    "prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova",
    "prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova",
    "prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova",
    "prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova",
    "prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova prova",
];
const LOCALI_COLORI_SFONDI = [
    "red", "lime", "cornflowerblue", "orange",
]

const IMG_MAPPA = document.getElementById("imgMappa");
const SCHEDA_INFO = document.getElementById("divSchedaInfo");
const SCHEDA_INFO_EXTRA = document.createElement("div");
SCHEDA_INFO_EXTRA.id = "divSchedaInfoExtra";

let iconaCliccataI  = -1;
let localeCliccatoI = -1;

function schedaInfoAggiungiImg(localeSrc, localeI) {
    const img = document.createElement("input");
    img.type = "image";
    img.src = `imgs/${localeSrc}`;

    img.addEventListener(
        "click", () => {
            if (localeCliccatoI == localeI) {
                localeCliccatoI = -1;
                SCHEDA_INFO_EXTRA.replaceChildren();
                return;
            }

            localeCliccatoI = localeI;
            SCHEDA_INFO_EXTRA.replaceChildren();

            const divSx = document.createElement("div");

            const divSxImg = document.createElement("img");
            divSxImg.src = img.src

            divSx.appendChild(divSxImg);

            const divDx = document.createElement("div");

            let divDxHTML = "";
            LOCALI_DESCRIZIONI[localeI].match(/<[^>]+>|[^\s<>]+/g).forEach(
                (parola, i) => {
                    if (parola.charAt(0) === "<") {
                        divDxHTML += parola;
                    } else {
                        divDxHTML += `
                            <span class="parolaFadeIn" style="animation-delay: ${i * 0.1}s">
                            ${parola}
                            </span>
                        `;
                    }
                }
            )
            divDx.innerHTML = divDxHTML;

            const divExtraInfo = document.createElement("div");
            divExtraInfo.id = "a"
            divExtraInfo.appendChild(divSx);
            divExtraInfo.appendChild(divDx);

            SCHEDA_INFO_EXTRA.appendChild(divExtraInfo)

            const divBordoSopra    = document.createElement("div");
            const divBordoDestra   = document.createElement("div");
            const divBordoSinistra = document.createElement("div");
            const divBordoSotto    = document.createElement("div");
            divBordoSopra.style.backgroundColor    = LOCALI_COLORI_SFONDI[Math.floor(localeI / 3)];
            divBordoDestra.style.backgroundColor   = LOCALI_COLORI_SFONDI[Math.floor(localeI / 3)];
            divBordoSotto.style.backgroundColor    = LOCALI_COLORI_SFONDI[Math.floor(localeI / 3)];
            divBordoSinistra.style.backgroundColor = LOCALI_COLORI_SFONDI[Math.floor(localeI / 3)];
            divBordoSopra.className    = "bordoDisegnatoSopra";
            divBordoDestra.className   = "bordoDisegnatoDestra";
            divBordoSotto.className    = "bordoDisegnatoSotto";
            divBordoSinistra.className = "bordoDisegnatoSinistra";

            SCHEDA_INFO_EXTRA.appendChild(divBordoSopra);
            SCHEDA_INFO_EXTRA.appendChild(divBordoDestra);
            SCHEDA_INFO_EXTRA.appendChild(divBordoSinistra);
            SCHEDA_INFO_EXTRA.appendChild(divBordoSotto);
        }
    );

    return img;
}

function inizializzaIcona(iconaI, iconaId) {
    document.getElementById(iconaId).addEventListener(
        "click", (event) => {
            event.stopPropagation();
            iconaCliccataI = iconaI;
            let mappaRet = IMG_MAPPA.getBoundingClientRect();
            SCHEDA_INFO.style.left = (event.clientX - mappaRet.left + 10) + "px";
            SCHEDA_INFO.style.top  = (event.clientY - mappaRet.top  + 10) + "px";
        }
    );
    document.getElementById(iconaId).addEventListener(
        "mouseenter", () => {
            if (iconaCliccataI === iconaI) {return;}

            if (iconaCliccataI !== -1) {
                SCHEDA_INFO.replaceChildren();
            }

            iconaCliccataI  = -1;
            localeCliccatoI = -1;
            SCHEDA_INFO_EXTRA.replaceChildren();

            const titolo = document.createElement("h1");
            titolo.innerText = ICONE_TITOLI[iconaI];
            SCHEDA_INFO.appendChild(titolo);

            const img1 = schedaInfoAggiungiImg(ICONE_IMGS[(iconaI * 3) + 0], (iconaI * 3) + 0);
            const img2 = schedaInfoAggiungiImg(ICONE_IMGS[(iconaI * 3) + 1], (iconaI * 3) + 1);
            const img3 = schedaInfoAggiungiImg(ICONE_IMGS[(iconaI * 3) + 2], (iconaI * 3) + 2);
            SCHEDA_INFO.appendChild(img1);
            SCHEDA_INFO.appendChild(img2);
            SCHEDA_INFO.appendChild(img3);

            SCHEDA_INFO.appendChild(SCHEDA_INFO_EXTRA);

            SCHEDA_INFO.style.display = "block";
        }
    );
    document.getElementById(iconaId).addEventListener(
        "mouseleave", () => {
            if (iconaCliccataI === -1) {
                SCHEDA_INFO.replaceChildren();
                SCHEDA_INFO.style.display = "none";
            }
        }
    );
    document.getElementById(iconaId).addEventListener(
        "mousemove", (event) => {
            if (iconaCliccataI === -1) {
                let mappaRet = IMG_MAPPA.getBoundingClientRect();
                SCHEDA_INFO.style.left = (event.clientX - mappaRet.left + 10) + "px";
                SCHEDA_INFO.style.top  = (event.clientY - mappaRet.top  + 10) + "px";
            }
        }
    );
}

IMG_MAPPA.addEventListener(
    "click", () => {
        iconaCliccataI  = -1;
        localeCliccatoI = -1;
        SCHEDA_INFO.replaceChildren();
        SCHEDA_INFO.style.display = "none";
        SCHEDA_INFO_EXTRA.replaceChildren();
    }
)
inizializzaIcona(0, "iconaChinatown");
inizializzaIcona(1, "iconaMoscova");
inizializzaIcona(2, "iconaPortaVenezia1");
inizializzaIcona(3, "iconaPortaVenezia2");

SCHEDA_INFO.addEventListener(
    "click", (event) => {
        event.stopPropagation();
    }
)
