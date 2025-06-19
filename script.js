const ICONE_TITOLI = [
    "CHINATOWN", "MOSCOVA", "PORTA VENEZIA", "PORTA VENEZIA",
];
const ICONE_COLORI = [
    "red", "lime", "orange", "cornflowerblue",
];

const LOCALI_IMGS = [
    "meiJiaLe.webp"         , "milanoHoliday.webp", "mochiMochi.webp",
    "perbelliniBistrot.webp", "volemoseBene.webp" , "daFortunata.webp",
    "mosobna.webp"          , "adulis.webp"       , "hdmona.webp",
    "riadMajorelle.webp"    , "mourad.webp"       , "medina.webp",
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
const DIV_SCHEDA_INFO       = document.getElementById("divSchedaInfo");
const DIV_SCHEDA_INFO_EXTRA = document.getElementById("divSchedaInfoExtra");

let iconaCliccataI  = -1;
let localeCliccatoI = -1;

function schedaInfoAggiungiImg(localeSrc, localeI) {
    const div = document.createElement("div");
    div.innerHTML += LOCALI_NOMI[localeI] + "<br>";

    const img = document.createElement("input");
    img.type = "image";
    img.src = `imgs/${localeSrc}`;
    img.alt = LOCALI_NOMI[localeI];

    img.addEventListener(
        "click", () => {
            if (localeCliccatoI == localeI) {
                localeCliccatoI = -1;
                DIV_SCHEDA_INFO_EXTRA.replaceChildren();
                DIV_SCHEDA_INFO_EXTRA.style.display = "none";
                return;
            }

            localeCliccatoI = localeI;
            DIV_SCHEDA_INFO_EXTRA.replaceChildren();

            const divSx = document.createElement("div");
            divSx.id = "divExtraInfoSx";

            const divSxImg = document.createElement("img");
            divSxImg.src = img.src;
            divSxImg.alt = LOCALI_NOMI[localeI];

            DIV_SCHEDA_INFO_EXTRA.appendChild(divSxImg);

            let divDxHTML = "<br>";
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

            DIV_SCHEDA_INFO_EXTRA.innerHTML += divDxHTML;

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

            DIV_SCHEDA_INFO_EXTRA.appendChild(divBordoSopra);
            DIV_SCHEDA_INFO_EXTRA.appendChild(divBordoDestra);
            DIV_SCHEDA_INFO_EXTRA.appendChild(divBordoSinistra);
            DIV_SCHEDA_INFO_EXTRA.appendChild(divBordoSotto);
            DIV_SCHEDA_INFO_EXTRA.style.display = "block";
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
                DIV_SCHEDA_INFO.replaceChildren();
            }

            iconaCliccataI  = -1;
            localeCliccatoI = -1;
            DIV_SCHEDA_INFO_EXTRA.replaceChildren();
            DIV_SCHEDA_INFO_EXTRA.style.display = "none";

            const titolo = document.createElement("h1");
            titolo.innerHTML = ICONE_TITOLI[iconaI];
            DIV_SCHEDA_INFO.appendChild(titolo);

            const divImgs = document.createElement("div");
            divImgs.className = "schedaInfoImgs";

            const img1 = schedaInfoAggiungiImg(LOCALI_IMGS[(iconaI * 3) + 0], (iconaI * 3) + 0);
            const img2 = schedaInfoAggiungiImg(LOCALI_IMGS[(iconaI * 3) + 1], (iconaI * 3) + 1);
            const img3 = schedaInfoAggiungiImg(LOCALI_IMGS[(iconaI * 3) + 2], (iconaI * 3) + 2);
            divImgs.appendChild(img1);
            divImgs.appendChild(img2);
            divImgs.appendChild(img3);

            DIV_SCHEDA_INFO.appendChild(divImgs);
            DIV_SCHEDA_INFO.appendChild(DIV_SCHEDA_INFO_EXTRA);

            DIV_SCHEDA_INFO.style.opacity = 1.0;
        }
    );
    document.getElementById(iconaId).addEventListener(
        "mouseleave", () => {
            if (iconaCliccataI === -1) {
                DIV_SCHEDA_INFO.replaceChildren();
                DIV_SCHEDA_INFO.style.opacity = 0.0;
            }
        }
    );
    document.getElementById(iconaId).addEventListener(
        "mousemove", (event) => {
            if (iconaCliccataI === -1) {
                const mappaRet = IMG_MAPPA.getBoundingClientRect();
                const schedaInfoRet = DIV_SCHEDA_INFO.getBoundingClientRect();

                let schedaInfoX   = event.clientX + 5;
                const schedaInfoY = event.clientY + 5;
                if (schedaInfoX + schedaInfoRet.width > window.innerWidth) {
                    schedaInfoX = event.clientX - schedaInfoRet.width;
                }

                DIV_SCHEDA_INFO.style.left = ((schedaInfoX - mappaRet.x) / mappaRet.width  * 100) + "%";
                DIV_SCHEDA_INFO.style.top  = ((schedaInfoY - mappaRet.y) / mappaRet.height * 100) + "%";
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
            DIV_SCHEDA_INFO.replaceChildren();
        }

        iconaCliccataI  = -1;
        localeCliccatoI = -1;
        DIV_SCHEDA_INFO_EXTRA.replaceChildren();
        DIV_SCHEDA_INFO_EXTRA.style.display = "none";

        const titolo = document.createElement("h3");
        titolo.innerHTML = "SCUOLA ARTE & MESSAGGIO";
        DIV_SCHEDA_INFO.appendChild(titolo);
        DIV_SCHEDA_INFO.innerHTML += "Via Giuseppe Giusti, 42";

        const divImgs = document.createElement("div");
        divImgs.id = "schedaInfoImgsScuola";

        const divImgLogoScuola = document.createElement("div");
        const imgLogoScuola = document.createElement("img");
        imgLogoScuola.src = "imgs/logoScuola.webp";
        imgLogoScuola.alt = "Logo Scuola";
        divImgLogoScuola.appendChild(imgLogoScuola);

        const divImgLogoComune = document.createElement("div");
        const imgLogoComune = document.createElement("img");
        imgLogoComune.src = "imgs/logoComune.webp";
        imgLogoComune.alt = "Logo Comune";
        divImgLogoComune.appendChild(imgLogoComune);

        divImgs.appendChild(divImgLogoScuola);
        divImgs.appendChild(divImgLogoComune);
        DIV_SCHEDA_INFO.appendChild(divImgs);

        DIV_SCHEDA_INFO.innerHTML += "<br><a href='https://artemessaggio.comune.milano.it/' target='_blank'>link</a>";

        DIV_SCHEDA_INFO.style.opacity = 1.0;
    }
);
document.getElementById("iconaPartenza").addEventListener(
    "mouseleave", () => {
        if (iconaCliccataI === -1) {
            DIV_SCHEDA_INFO.replaceChildren();
            DIV_SCHEDA_INFO.style.opacity = 0.0;
        }
    }
);
document.getElementById("iconaPartenza").addEventListener(
    "mousemove", (event) => {
        if (iconaCliccataI === -1) {
            const mappaRet = IMG_MAPPA.getBoundingClientRect();
            DIV_SCHEDA_INFO.style.left = ((event.clientX - mappaRet.x) / mappaRet.width  * 100) + "%";
            DIV_SCHEDA_INFO.style.top  = ((event.clientY - mappaRet.y) / mappaRet.height * 100) + "%";
        }
    }
);

document.body.addEventListener(
    "click", () => {
        iconaCliccataI  = -1;
        localeCliccatoI = -1;
        DIV_SCHEDA_INFO.replaceChildren();
        DIV_SCHEDA_INFO.style.opacity = 0.0;
        DIV_SCHEDA_INFO_EXTRA.replaceChildren()
        DIV_SCHEDA_INFO_EXTRA.style.display = "none";
    }
)
inizializzaIcona(0, "iconaChinatown");
inizializzaIcona(1, "iconaMoscova");
inizializzaIcona(2, "iconaPortaVenezia1");
inizializzaIcona(3, "iconaPortaVenezia2");

DIV_SCHEDA_INFO.addEventListener(
    "click", (event) => {
        event.stopPropagation();
    }
)
