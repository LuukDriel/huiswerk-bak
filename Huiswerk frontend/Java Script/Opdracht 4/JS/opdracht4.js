// Selecteer DOM-elementen
const newItemInput = document.getElementById("new-item");
const addItemButton = document.getElementById("add-item-btn");
const itemList = document.getElementById("item-list");
const removeItemButton = document.getElementById("remove-item-btn");
const descriptionParagraph = document.getElementById("description");
const changeTextButton = document.getElementById("change-text-btn");

// Voeg een nieuw item toe aan de lijst
addItemButton.addEventListener("click", () => {
    const newItemText = newItemInput.value.trim();
    if (newItemText) {
        const newItem = document.createElement("li");
        newItem.textContent = newItemText;
        itemList.appendChild(newItem);
        newItemInput.value = ""; // Maak het invoerveld leeg
    } else {
        alert("Het invoerveld mag niet leeg zijn!");
    }
});

// Verwijder het laatste item uit de lijst
removeItemButton.addEventListener("click", () => {
    const lastItem = itemList.lastElementChild;
    if (lastItem) {
        itemList.removeChild(lastItem);
    } else {
        alert("Er zijn geen items om te verwijderen!");
    }
});

// Wijzig de beschrijving
changeTextButton.addEventListener("click", () => {
    const newDescription = prompt("Voer de nieuwe beschrijving in:");
    if (newDescription !== null && newDescription.trim() !== "") {
        descriptionParagraph.textContent = newDescription.trim();
    } else {
        alert("De beschrijving kan niet leeg zijn!");
    }
});

// Extra uitdaging: Verander achtergrondkleur bij klikken op een item
itemList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.style.backgroundColor =
            event.target.style.backgroundColor === "lightgreen" ? "lightblue" : "lightgreen";
    }
});

// Extra uitdaging: Verwijder specifiek item bij klikken
itemList.addEventListener("dblclick", (event) => {
    if (event.target.tagName === "LI") {
        itemList.removeChild(event.target);
    }
});