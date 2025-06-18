const ICONE_TITOLI = [
    "CHINATOWN", "MOSCOVA", "PORTA VENEZIA", "PORTA VENEZIA",
];
const ICONE_COLORI = [
    "red", "lime", "orange", "cornflowerblue",
];

const LOCALI_IMGS = [
    "meiJiaLe.jpeg"        , "milanoHoliday.jpeg"      , "mochiMochi.jpeg",
    "perbelliniBistrot.jpg", "volemoseBene.jpg"        , "daFortunata.jpeg",
    "mosobna.jpg"          , "adulis.jpg"              , "hdmona.jpg",
    "riadMajorelle.jpg"    , "mourad.jpg"              , "medina.jpg",
];
const LOCALI_NOMI = [
    "Mei Jia Le"        , "Milano Holiday"    , "Mochi Mochi",
    "Perbellini Bistrot", "Volemose Bene"     , "Osteria<br>da Fortunata",
    "Riad Majorelle"    , "Pasticceria Mourad", "La Medina",
    "Mosobna"           , "Adulis"            , "Hdmona",
];
const LOCALI_DESCRIZIONI = [
    "Mei Jia Le offre molti stuzzichini tipici con un un' atmosfera deliziosa.<br><br><a href='https://www.tripadvisor.it/Restaurant_Review-g187849-d26358884-Reviews-Mei_Jia_Le-Milan_Lombardy.html' target='_blank'>link</a>",
    "Milano Holiday offre stuzzichini vari, tra cui alcuni appena fatti, e dal gusto delizioso.<br><br><a href='https://www.scattidigusto.it/milan-holiday-supermercato-cinese-con-bancone-e-dehors-in-paolo-sarpi' target='_blank'>link</a>",
    "Mochi Mochi \u00e8 il posto perfetto per provare vari dolci tipici tra cui i famossimi mochi.<br><br><a href='https://vivimilano.corriere.it/ristoranti/pasticcerie/mochi-mochi/' target='_blank'>link</a>",
    "La locanda Berbellini Bistrot offre un' esperienza unica e totalmente italiana.<br><br><a href='https://locandaperbellini.it/' target='_blank'>link</a>",
    "Nel ristorante Volemose Bene \u00e8 possibile avere pranzi unici<br>con un'<br>atmosfera italiana.<br><br><a href='https://www.volemosebenemilano.it/' target='_blank'>link</a>",
    "Nell' Osteria da Fortunata ci sono sapori tradizionali italiani e gusti che non deludono.<br><br><a href='https://www.osteriadafortunata.it/menu-milano/' target='_blank'>link</a>",
    "Riad Majorelle offre un' esperienza di puro piacere dove potrei provare molti<br>piatti marocchini.<br><br><a href='https://www.tripadvisor.it/Restaurant_Review-g187849-d16691638-Reviews-Riad_Majorelle_Bistrot-Milan_Lombardy.html' target='_blank'>link</a>",
    "Nella Pasticceria Mourad avrai<br>un' esperienza sensoriale unica assagiando molti dolci marocchini.<br><br><a href='https://pasticceriamourad.com/' target='_blank'>link</a>",
    "La Medina \u00e8 perfetta per provare la<br>cucina tradizionale marocchina e cerimonia del t\u00e8.<br><br><a href='https://lamedina.it/' target='_blank'>link</a>",
    "A Mosobna potrai avere una cena eritrea intensa e conviviale e ti sembrer\u00e0 di essere in Africa.<br><br><a href='https://www.tripadvisor.it/Restaurant_Review-g187849-d15119859-Reviews-Mosobna-Milan_Lombardy.html' target='_blank'>link</a>",
    "Nell ristorante Adulis potrai avere il meglio della cucina eritrea con un' atmosfera<br>a tema.<br><br><a href='https://www.tripadvisor.it/Restaurant_Review-g187849-d1504728-Reviews-Adulis_Restaurant-Milan_Lombardy.html' target='_blank'>link</a>",
    "A Hdmona avrai un' esperienza tutto eritra ricchisima<br>di cultura<br>e spiecialit\u00e0.<br><br><a href='https://www.tripadvisor.it/Restaurant_Review-g187849-d17541357-Reviews-Ristorante_Hdmona-Milan_Lombardy.html' target='_blank'>link</a>",
];

const IMG_MAPPA = document.getElementById("imgMappa");
const SCHEDA_INFO = document.getElementById("divSchedaInfo");
const SCHEDA_INFO_EXTRA = document.createElement("div");
SCHEDA_INFO_EXTRA.id = "divSchedaInfoExtra";

let iconaCliccataI  = -1;
let localeCliccatoI = -1;

function schedaInfoAggiungiImg(localeSrc, localeI) {
    const div = document.createElement("div");
    div.className = "schedaInfoImg";
    div.innerHTML += LOCALI_NOMI[localeI] + "<br>";

    const img = document.createElement("input");
    img.type = "image";
    img.src = `imgs/${localeSrc}`;
    img.alt = LOCALI_NOMI[localeI];

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
            divSx.id = "divExtraInfoSx";

            const divSxImg = document.createElement("img");
            divSxImg.src = img.src;
            divSxImg.alt = LOCALI_NOMI[localeI];

            divSx.appendChild(divSxImg);

            const divDx = document.createElement("div");
            divDx.id = "divExtraInfoDx";

            let divDxHTML = "";
            LOCALI_DESCRIZIONI[localeI].match(/<[^>]+>|[^\s<>]+/g).forEach(
                (parola, i) => {
                    if (parola.startsWith("<")) {
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
            divExtraInfo.id = "divExtraInfo";
            divExtraInfo.appendChild(divSx);
            divExtraInfo.appendChild(divDx);

            SCHEDA_INFO_EXTRA.appendChild(divExtraInfo);

            const divBordoSopra    = document.createElement("div");
            const divBordoDestra   = document.createElement("div");
            const divBordoSinistra = document.createElement("div");
            const divBordoSotto    = document.createElement("div");
            divBordoSopra.style.backgroundColor    = ICONE_COLORI[Math.floor(localeI / 3)];
            divBordoDestra.style.backgroundColor   = ICONE_COLORI[Math.floor(localeI / 3)];
            divBordoSotto.style.backgroundColor    = ICONE_COLORI[Math.floor(localeI / 3)];
            divBordoSinistra.style.backgroundColor = ICONE_COLORI[Math.floor(localeI / 3)];
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

    div.appendChild(img);

    return div;
}

function inizializzaIcona(iconaI, iconaId) {
    document.getElementById(iconaId).addEventListener(
        "click", (event) => {
            event.stopPropagation();
            iconaCliccataI = iconaI;
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
            titolo.innerHTML = ICONE_TITOLI[iconaI];
            SCHEDA_INFO.appendChild(titolo);

            const img1 = schedaInfoAggiungiImg(LOCALI_IMGS[(iconaI * 3) + 0], (iconaI * 3) + 0);
            const img2 = schedaInfoAggiungiImg(LOCALI_IMGS[(iconaI * 3) + 1], (iconaI * 3) + 1);
            const img3 = schedaInfoAggiungiImg(LOCALI_IMGS[(iconaI * 3) + 2], (iconaI * 3) + 2);
            SCHEDA_INFO.appendChild(img1);
            SCHEDA_INFO.appendChild(img2);
            SCHEDA_INFO.appendChild(img3);

            SCHEDA_INFO.appendChild(SCHEDA_INFO_EXTRA);

            SCHEDA_INFO.style.opacity = 1.0;
        }
    );
    document.getElementById(iconaId).addEventListener(
        "mouseleave", () => {
            if (iconaCliccataI === -1) {
                SCHEDA_INFO.replaceChildren();
                SCHEDA_INFO.style.opacity = 0.0;
            }
        }
    );
    document.getElementById(iconaId).addEventListener(
        "mousemove", (event) => {
            if (iconaCliccataI === -1) {
                let bodyRet  = document.body.getBoundingClientRect();
                let mappaRet = IMG_MAPPA.getBoundingClientRect();
                let schedaInfoRet = SCHEDA_INFO.getBoundingClientRect();

                let schedaInfoX = event.clientX + 10;
                let schedaInfoY = event.clientY + 10;
                if (schedaInfoX + schedaInfoRet.width > bodyRet.right) {
                    schedaInfoX = event.clientX - 10 - schedaInfoRet.width;
                }

                SCHEDA_INFO.style.left = (schedaInfoX - mappaRet.left) + "px";
                SCHEDA_INFO.style.top  = (schedaInfoY - mappaRet.top ) + "px";
            }
        }
    );
}

document.getElementById("iconaPartenza").addEventListener(
    "click", (event) => {
        event.stopPropagation();
        iconaCliccataI = -2;
    }
);
document.getElementById("iconaPartenza").addEventListener(
    "mouseenter", () => {
        if (iconaCliccataI === -2) {return;}

        if (iconaCliccataI !== -1) {
            SCHEDA_INFO.replaceChildren();
        }

        iconaCliccataI  = -1;
        localeCliccatoI = -1;
        SCHEDA_INFO_EXTRA.replaceChildren();

        const titolo = document.createElement("h1");
        titolo.className = "fontMedio";
        titolo.innerHTML = "SCUOLA<br>ARTE & MESSAGGIO";
        SCHEDA_INFO.appendChild(titolo);

        const divImg = document.createElement("div");
        divImg.className = "schedaInfoImg schedaInfoImgScuola";
        divImg.innerHTML += "Via Giuseppe Giusti, 42<br>";

        const imgLogoScuola = document.createElement("img");
        imgLogoScuola.src = "imgs/logoScuola.webp";
        imgLogoScuola.alt = "Logo Scuola";
        divImg.appendChild(imgLogoScuola);
        const imgLogoComune = document.createElement("img");
        imgLogoComune.src = "imgs/logoComune.webp";
        imgLogoComune.alt = "Logo Comune";
        divImg.appendChild(imgLogoComune);
        SCHEDA_INFO.appendChild(divImg);

        SCHEDA_INFO.innerHTML += "<br><a href='https://artemessaggio.comune.milano.it/' target='_blank'>link</a>";

        SCHEDA_INFO.style.opacity = 1.0;
    }
);
document.getElementById("iconaPartenza").addEventListener(
    "mouseleave", () => {
        if (iconaCliccataI === -1) {
            SCHEDA_INFO.replaceChildren();
            SCHEDA_INFO.style.opacity = 0.0;
        }
    }
);
document.getElementById("iconaPartenza").addEventListener(
    "mousemove", (event) => {
        if (iconaCliccataI === -1) {
            let bodyRet  = document.body.getBoundingClientRect();
            let mappaRet = IMG_MAPPA.getBoundingClientRect();
            let schedaInfoRet = SCHEDA_INFO.getBoundingClientRect();

            let schedaInfoX = event.clientX + 10;
            let schedaInfoY = event.clientY + 10;
            if (schedaInfoX + schedaInfoRet.width > bodyRet.right) {
                schedaInfoX = event.clientX - 10 - schedaInfoRet.width;
            }

            SCHEDA_INFO.style.left = (schedaInfoX - mappaRet.left) + "px";
            SCHEDA_INFO.style.top  = (schedaInfoY - mappaRet.top ) + "px";
        }
    }
);

IMG_MAPPA.addEventListener(
    "click", () => {
        iconaCliccataI  = -1;
        localeCliccatoI = -1;
        SCHEDA_INFO.replaceChildren();
        SCHEDA_INFO.style.opacity = 0.0;
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
