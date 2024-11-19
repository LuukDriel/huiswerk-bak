function berekenLeeftijd() {
    const geboortedatum = document.getElementById("birthdate").value; // Haal de geboortedatum op
    const output = document.getElementById("output"); // Selecteer de paragraaf voor output

    if (!geboortedatum) {
        // Als de gebruiker geen datum invult
        output.textContent = "Voer een geldige geboortedatum in.";
        return;
    }

    // Bereken de leeftijd
    const geboortedatumObj = new Date(geboortedatum);
    const vandaag = new Date();
    let leeftijd = vandaag.getFullYear() - geboortedatumObj.getFullYear();
    const maandVerschil = vandaag.getMonth() - geboortedatumObj.getMonth();

    if (maandVerschil < 0 || (maandVerschil === 0 && vandaag.getDate() < geboortedatumObj.getDate())) {
        leeftijd--;
    }

    // Bepaal de leeftijdscategorie met if-else statements
    if (leeftijd >= 0 && leeftijd <= 12) {
        output.textContent = `Je bent ${leeftijd} jaar oud en je bent een kind.`;
    } else if (leeftijd >= 13 && leeftijd <= 17) {
        output.textContent = `Je bent ${leeftijd} jaar oud en je bent een tiener.`;
    } else if (leeftijd >= 18) {
        output.textContent = `Je bent ${leeftijd} jaar oud en je bent een volwassene.`;
    } else {
        output.textContent = "De geboortedatum lijkt niet correct.";
    }
}