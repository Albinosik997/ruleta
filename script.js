const przedmioty = [
    { nazwa: "Kiścień kobolda", rzadkosci: "Zwykły", wartosc: 14900, obrazek: "https://micc.garmory-cdn.cloud/obrazki/itemy/mie/miecz743.gif" },
    { nazwa: "Stalowa amatorszczyzna", rzadkosci: "Zwykły", wartosc: 15645, obrazek: "https://micc.garmory-cdn.cloud/obrazki/itemy/mie/miecz745.gif" },
    { nazwa: "Włócznia czaszek", rzadkosci: "Zwykły", wartosc: 14191, obrazek: "https://micc.garmory-cdn.cloud/obrazki/itemy/mie/miecz742.gif" },
    { nazwa: "Zbroja kobolda", rzadkosci: "Zwykły", wartosc: 17662, obrazek: "https://micc.garmory-cdn.cloud/obrazki/itemy/zbr/zbroja836.gif" },
    { nazwa: "Prosty miecz kobolda", rzadkosci: "Unikat", wartosc: 1234567, obrazek: "https://micc.garmory-cdn.cloud/obrazki/itemy/mie/miecz247.gif" },
    { nazwa: "Zamaszysty badziew", rzadkosci: "Unikat", wartosc: 765432, obrazek: "https://micc.garmory-cdn.cloud/obrazki/itemy/mie/miecz746.gif" },
    { nazwa: "Włócznia kolekcjonera czaszek", rzadkosci: "Unikat", wartosc: 987654, obrazek: "https://micc.garmory-cdn.cloud/obrazki/itemy/mie/miecz741.gif" },
    { nazwa: "Kuszotopór", rzadkosci: "Unikat", wartosc: 1500000, obrazek: "https://micc.garmory-cdn.cloud/obrazki/itemy/luk/luk198.gif" },
    { nazwa: "Koboldzie barachło", rzadkosci: "Unikat", wartosc: 1450000, obrazek: "https://micc.garmory-cdn.cloud/obrazki/itemy/luk/luk584.gif" },
    { nazwa: "Woskowy świder", rzadkosci: "Unikat", wartosc: 600000, obrazek: "https://micc.garmory-cdn.cloud/obrazki/itemy/roz/rozdzka171.gif" },
    { nazwa: "Gryzący sznurek", rzadkosci: "Unikat", wartosc: 850000, obrazek: "https://micc.garmory-cdn.cloud/obrazki/itemy/nas/naszyjnik869.gif" },
    { nazwa: "Zawieszka dyndających kości", rzadkosci: "Unikat", wartosc: 1100000, obrazek: "https://micc.garmory-cdn.cloud/obrazki/itemy/nas/naszyjnik868.gif" },
    { nazwa: "Majcher", rzadkosci: "Heroiczny", wartosc: 18500000, obrazek: "https://micc.garmory-cdn.cloud/obrazki/itemy/mie/miecz248.gif" },
    { nazwa: "Włócznia Foverka Turrima", rzadkosci: "Heroiczny", wartosc: 20000000, obrazek: "https://micc.garmory-cdn.cloud/obrazki/itemy/drz/wlocznia11.gif" },
    { nazwa: "Łuk Foverka Turrima", rzadkosci: "Heroiczny", wartosc: 22000000, obrazek: "https://micc.garmory-cdn.cloud/obrazki/itemy/luk/luk72.gif" },
    { nazwa: "Porzucony łuk myśliwego", rzadkosci: "Heroiczny", wartosc: 21000000, obrazek: "https://micc.garmory-cdn.cloud/obrazki/itemy/luk/luk199.gif" },
    { nazwa: "Hełm Foverka Turrima", rzadkosci: "Heroiczny", wartosc: 17500000, obrazek: "https://micc.garmory-cdn.cloud/obrazki/itemy/hel/helm82.gif" },
    { nazwa: "Buciory zwinności kobolda", rzadkosci: "Heroiczny", wartosc: 19000000, obrazek: "https://micc.garmory-cdn.cloud/obrazki/itemy/but/buty401.gif" },
    { nazwa: "Zielone cholewy szkodnika", rzadkosci: "Heroiczny", wartosc: 19500000, obrazek: "https://micc.garmory-cdn.cloud/obrazki/itemy/but/buty876.gif" },
    { nazwa: "Futrzane nabiodrki", rzadkosci: "Heroiczny", wartosc: 22000000, obrazek: "https://micc.garmory-cdn.cloud/obrazki/itemy/but/buty877.gif" },
    { nazwa: "Order naczelnego stwora", rzadkosci: "Heroiczny", wartosc: 20000000, obrazek: "https://micc.garmory-cdn.cloud/obrazki/itemy/neu/kam3gno.gif" },
    { nazwa: "Skradzione chodaki Jana", rzadkosci: "Legendarny", wartosc: 1000000000, obrazek: "https://micc.garmory-cdn.cloud/obrazki/itemy/but/buty99.gif" },
    { nazwa: "Klejnot turrimu", rzadkosci: "Legendarny", wartosc: 12000000000, obrazek: "https://micc.garmory-cdn.cloud/obrazki/itemy/nas/naszyjnik871.gif" },
    { nazwa: "Rozłupana czaszka Foverka", rzadkosci: "Legendarny", wartosc: 8000000000, obrazek: "https://micc.garmory-cdn.cloud/obrazki/itemy/nas/naszyjnik870.gif" }
];

const prawdopodobienstwa = [
    { rzadkosci: 'Zwykły', szansa: 0.5 },
    { rzadkosci: 'Unikat', szansa: 0.3 },
    { rzadkosci: 'Heroiczny', szansa: 0.15 },
    { rzadkosci: 'Legendarny', szansa: 0.05 }
];
const KOSZT_ZAKRETU = 50000000;
let portfel = 1000000000;

function aktualizujPortfel() {
    document.getElementById("wallet-amount").textContent = dodajSeparator(portfel);
}

function czyStacNaZakret() {
    return portfel >= KOSZT_ZAKRETU;
}

const ruletka = document.getElementById("ruletka");
const szerokoscPrzedmiotu = 100;
let isSpinning = false;
let wygenerowanePrzedmioty = [];

function generujPrzedmiot() {
    const los = Math.random();
    let suma = 0;

    for (const { rzadkosci, szansa } of prawdopodobienstwa) {
        suma += szansa;
        if (los < suma) {
            const przedmiotyZRzadkosci = przedmioty.filter(p => p.rzadkosci === rzadkosci);
            return przedmiotyZRzadkosci[Math.floor(Math.random() * przedmiotyZRzadkosci.length)];
        }
    }
    return przedmioty[0];
}

function generujListePrzedmiotow(ilosc) {
    const lista = [];
    for (let i = 0; i < ilosc; i++) {
        lista.push(generujPrzedmiot());
    }
    return lista;
}

function stworzElementPrzedmiotu(przedmiot) {
    const div = document.createElement("div");
    div.classList.add("przedmiot");
    div.classList.add(`rzadkosci-${przedmiot.rzadkosci.toLowerCase()}`);
    
    const img = document.createElement("img");
    img.src = przedmiot.obrazek;
    img.alt = przedmiot.nazwa;
    img.classList.add("obrazek");
    
    const nazwa = document.createElement("p");
    nazwa.textContent = przedmiot.nazwa;
    nazwa.classList.add("nazwa");
    
    div.appendChild(img);
    div.appendChild(nazwa);
    return div;
}

function odswiezPrzedmioty() {
    const viewportWidth = ruletka.parentElement.offsetWidth;
    const potrzebnePrzedmioty = Math.ceil((viewportWidth / szerokoscPrzedmiotu) * 3);
    
    while (wygenerowanePrzedmioty.length < potrzebnePrzedmioty) {
        const nowyPrzedmiot = generujPrzedmiot();
        wygenerowanePrzedmioty.push(nowyPrzedmiot);
        const element = stworzElementPrzedmiotu(nowyPrzedmiot);
        ruletka.appendChild(element);
    }
}

function zakrecRuletka() {
    if (!czyStacNaZakret() || isSpinning) return;

    // Pobierz opłatę za zakręcenie
    portfel -= KOSZT_ZAKRETU;
    aktualizujPortfel();

    isSpinning = true;

    // Wyczyść poprzedni wynik
    document.getElementById("wynik").textContent = "";

    // Reset ruletki
    ruletka.innerHTML = '';
    wygenerowanePrzedmioty = generujListePrzedmiotow(50);

    // Dodaj wszystkie przedmioty do DOM
    wygenerowanePrzedmioty.forEach(przedmiot => {
        ruletka.appendChild(stworzElementPrzedmiotu(przedmiot));
    });

    // Parametry animacji
    let pozycja = 0;
    const czasKrecenia = 4000;
    const startTime = Date.now();
    const minObroty = 2;
    const pelnyObrot = wygenerowanePrzedmioty.length * szerokoscPrzedmiotu;
    const minimalnaOdleglosc = minObroty * pelnyObrot;
    const dodatkowaOdleglosc = Math.random() * pelnyObrot;
    const calkowitaOdleglosc = minimalnaOdleglosc + dodatkowaOdleglosc;

    function animate() {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / czasKrecenia, 1);

        // Funkcja ease-out cubic dla płynnego zatrzymania
        const easeOut = (t) => 1 - Math.pow(1 - t, 3);

        // Oblicz aktualną pozycję z efektem ease-out
        pozycja = calkowitaOdleglosc * easeOut(progress);
        ruletka.style.transform = `translateX(-${pozycja}px)`;

        // Dodawanie nowych przedmiotów w razie potrzeby
        const viewportWidth = ruletka.parentElement.offsetWidth;
        const widocznyObszar = pozycja + viewportWidth + 1000;
        const potrzebnePrzedmioty = Math.ceil(widocznyObszar / szerokoscPrzedmiotu);

        while (wygenerowanePrzedmioty.length < potrzebnePrzedmioty) {
            const dodatkowePrzedmioty = generujListePrzedmiotow(10);
            dodatkowePrzedmioty.forEach(przedmiot => {
                ruletka.appendChild(stworzElementPrzedmiotu(przedmiot));
                wygenerowanePrzedmioty.push(przedmiot); // Zamknięcie nawiasu poprawione tutaj
            });
        }

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            // Zakończenie animacji
            isSpinning = false;

            setTimeout(() => {
                // Oblicz pozycję wskaźnika względem ruletki
                const ruletkaRect = ruletka.getBoundingClientRect();
                const wskaznikPozycja = ruletka.parentElement.offsetWidth / 2;
                const absolutnaPozycja = pozycja + wskaznikPozycja;

                // Znajdź przedmiot pod wskaźnikiem
                const przedmiotyElements = ruletka.getElementsByClassName('przedmiot');
                let wybranyPrzedmiot = null;

                for (let i = 0; i < przedmiotyElements.length; i++) {
                    const element = przedmiotyElements[i];
                    const elementRect = element.getBoundingClientRect();
                    const elementCenter = elementRect.left + elementRect.width / 2;
                    const wskaznikAbsPos = ruletka.parentElement.getBoundingClientRect().left + wskaznikPozycja;

                    if (Math.abs(elementCenter - wskaznikAbsPos) < elementRect.width / 2) {
                        const index = Math.floor(i % wygenerowanePrzedmioty.length);
                        wybranyPrzedmiot = wygenerowanePrzedmioty[index];
                        break;
                    }
                }

                // Wyświetl wynik i zaktualizuj portfel
                if (wybranyPrzedmiot) {
                    // Dodaj wartość wylosowanego przedmiotu do portfela
                    portfel += wybranyPrzedmiot.wartosc;
                    aktualizujPortfel();

                    // Oblicz zysk/stratę
                    const profit = wybranyPrzedmiot.wartosc - KOSZT_ZAKRETU;
                    const profitText = profit >= 0 ? 
                        `Zysk: +${dodajSeparator(profit)}` : 
                        `Strata: ${dodajSeparator(profit)}`;
                    const profitClass = profit >= 0 ? 'profit-positive' : 'profit-negative';

                    document.getElementById("wynik").innerHTML = `
                        <div class="wynik-container ${wybranyPrzedmiot.rzadkosci.toLowerCase()}">
                            <h3>Wylosowano:</h3>
                            <div class="przedmiot-info">
                                <img src="${wybranyPrzedmiot.obrazek}" alt="${wybranyPrzedmiot.nazwa}" class="obrazek-wynik" />
                                <div class="przedmiot-details">
                                    <p class="przedmiot-nazwa">${wybranyPrzedmiot.nazwa}</p>
                                    <p class="przedmiot-wartosc">Wartość: ${dodajSeparator(wybranyPrzedmiot.wartosc)}</p>
                                    <p class="przedmiot-rzadkosc">Rzadkość: ${wybranyPrzedmiot.rzadkosci}</p>
                                    <p class="profit-info ${profitClass}">${profitText}</p>
                                </div>
                            </div>
                        </div>
                    `;
                }
            }, 50);
        }
    }

    requestAnimationFrame(animate);
}
document.addEventListener('DOMContentLoaded', () => {
    aktualizujPortfel();
    odswiezPrzedmioty();
});

// Pomocnicze funkcje, które powinny pozostać bez zmian
function generujPrzedmiot() {
    const los = Math.random();
    let suma = 0;

    for (const { rzadkosci, szansa } of prawdopodobienstwa) {
        suma += szansa;
        if (los < suma) {
            const przedmiotyZRzadkosci = przedmioty.filter(p => p.rzadkosci === rzadkosci);
            return przedmiotyZRzadkosci[Math.floor(Math.random() * przedmiotyZRzadkosci.length)];
        }
    }
    return przedmioty[0];
}

function generujListePrzedmiotow(ilosc) {
    const lista = [];
    for (let i = 0; i < ilosc; i++) {
        lista.push(generujPrzedmiot());
    }
    return lista;
}

function stworzElementPrzedmiotu(przedmiot) {
    const div = document.createElement("div");
    div.classList.add("przedmiot");
    div.classList.add(`rzadkosci-${przedmiot.rzadkosci.toLowerCase()}`);
    
    const img = document.createElement("img");
    img.src = przedmiot.obrazek;
    img.alt = przedmiot.nazwa;
    img.classList.add("obrazek");
    
    const nazwa = document.createElement("p");
    nazwa.textContent = przedmiot.nazwa;
    nazwa.classList.add("nazwa");
    
    div.appendChild(img);
    div.appendChild(nazwa);
    return div;
}

function dodajSeparator(liczba) {
    return liczba.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}


function dodajSeparator(liczba) {
    return liczba.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Inicjalizacja początkowa
odswiezPrzedmioty();
