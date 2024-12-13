document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Voorkom standaard formulier verzenden

    // Haal waarden van het formulier op
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorMessage = document.getElementById("errorMessage");
    const successMessage = document.getElementById("successMessage");

    // Reset foutmeldingen
    errorMessage.textContent = "";
    successMessage.style.display = "none";

    // Validatiecriteria
    if (!name) {
        errorMessage.textContent = "Vul je naam in.";
        return;
    }

    if (!email || !email.includes("@")) {
        errorMessage.textContent = "Vul een geldig e-mailadres in.";
        return;
    }

    if (!phone || isNaN(phone)) {
        errorMessage.textContent = "Vul een geldig, numeriek telefoonnummer in.";
        return;
    }

    if (!message) {
        errorMessage.textContent = "Het berichtvak mag niet leeg zijn.";
        return;
    }

    // Toon de succesmelding met ingevoerde gegevens
    successMessage.style.display = "block";
    successMessage.textContent = `Bedankt voor je bericht, ${name}!\n\nWe hebben de volgende gegevens ontvangen:\n- E-mail: ${email}\n- Telefoonnummer: ${phone}\n- Bericht: ${message}`;
});