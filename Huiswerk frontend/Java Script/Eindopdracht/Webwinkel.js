let winkelmand = [];
// De prijzen
const prijzen = {
    Laptop: 500,
    Telefoon: 300,
    Tablet: 200
};

// Zorgt dat de site asyncroon werkt
async function Producttoevoegen(product) {
    const hoeveelheid = parseInt(document.getElementById(`${product.toLowerCase()}-aantal`).value);
    
    if (hoeveelheid > 0) {
        await new Promise(resolve => setTimeout(resolve, 500)); // 500ms vertraging
        winkelmand.push({ product, hoeveelheid });
        UpdateWinkelmand();
    }
}

async function VerwijderProduct(index) {
    await new Promise(resolve => setTimeout(resolve, 500)); // 500ms vertraging
    winkelmand.splice(index, 1);
    UpdateWinkelmand();
}

async function UpdateWinkelmand() {
    const winkelmandElement = document.getElementById('winkelmand-items');
    const totaalElement = document.getElementById('totaal-prijs');
    const afrekenenBtn = document.getElementById('afrekenen-btn');

    winkelmandElement.innerHTML = '';

    if (winkelmand.length === 0) {
        winkelmandElement.innerHTML = '<li>Uw winkelmand is leeg.</li>';
        totaalElement.textContent = 'Totaal: €0';
        afrekenenBtn.disabled = true;
        return;
    }

    // Voegt de producten toe aan de winkelmand en rekent totaal prijs uit
    let totaalPrijs = 0;

    for (const [index, item] of winkelmand.entries()) {
        const { product, hoeveelheid } = item;
        const listItem = document.createElement('li');
        listItem.textContent = `${product} - €${prijzen[product]} x ${hoeveelheid}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Verwijderen';
        deleteButton.style.marginLeft = '10px';
        deleteButton.onclick = async () => {
            await VerwijderProduct(index);
        };

        listItem.appendChild(deleteButton);
        winkelmandElement.appendChild(listItem);

        totaalPrijs += prijzen[product] * hoeveelheid;
    }

    totaalElement.textContent = `Totaal: €${totaalPrijs}`;
    afrekenenBtn.disabled = false;
}

// afrekenen functie
async function Afrekenen() {
    const afrekenenBtn = document.getElementById('afrekenen-btn');
    const totaalElement = document.getElementById('totaal-prijs');
    
    afrekenenBtn.disabled = true; // Schakelt de knop uit
    totaalElement.textContent = 'Wachten op verwerking...'; // Veranderd de tekst

    await new Promise(resolve => setTimeout(resolve, 500)); // 500ms wachten

    alert("Bedankt voor het bestellen!");
    winkelmand = [];
    UpdateWinkelmand();
}
