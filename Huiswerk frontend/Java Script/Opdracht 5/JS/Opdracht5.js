let car = {
    Merk: "Porsche",
    Model: "911",
    Bouwjaar: 2005,
    kilometerafstand: 10000
};

console.log(car);

class voertuig {
    constructor(merk, model, bouwjaar, kilometerafstand) {
        this.merk = merk;
        this.model = model;
        this.bouwjaar = bouwjaar;
        this.kilometerafstand = kilometerafstand;
    }
    getName() {
        return this.merk + " " + this.model;
    }
    updatekilometerafstand(nieuwkilometer) {
        this.kilometerafstand += nieuwkilometer;
    }
    voertuigInfo() {
        return `merk: ${this.merk}, Model: ${this.model}, Bouwjaar: ${this.bouwjaar}, Kilometerafstand: ${this.kilometerafstand}`;
    }
}

let mijnAuto = new Voertuig("Ford", "Fiesta", 2018, 30000);
console.log(mijnAuto.voertuigInfo()); // Toont de voertuiginfo
mijnAuto.updatekilometerafstand(5000); // Update kilometerstand
console.log(mijnAuto.voertuigInfo()); // Toont bijgewerkte info
