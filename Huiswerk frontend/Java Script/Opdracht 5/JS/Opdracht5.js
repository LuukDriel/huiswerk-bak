const voertuig = {
    merk: "Toyota",
    model: "Corolla",
    bouwjaar: 2015,
    kilometerstand: 80000,
};
console.log("Voertuig Object:", voertuig);

class Voertuig {
    constructor(merk, model, bouwjaar, kilometerstand) {
        this.merk = merk;
        this.model = model;
        this.bouwjaar = bouwjaar;
        this.kilometerstand = kilometerstand;
    }

    updateKilometerstand(nieuweKilometers) {
        this.kilometerstand += nieuweKilometers;
    }

    voertuigInfo() {
        return `Merk: ${this.merk}, Model: ${this.model}, Bouwjaar: ${this.bouwjaar}, Kilometerstand: ${this.kilometerstand} km`;
    }
}

const mijnVoertuig = new Voertuig("Ford", "Fiesta", 2018, 30000);
console.log("Voertuig Info (voor update):", mijnVoertuig.voertuigInfo());

mijnVoertuig.updateKilometerstand(5000);
console.log("Voertuig Info (na update):", mijnVoertuig.voertuigInfo());

class ElektrischVoertuig extends Voertuig {
    constructor(merk, model, bouwjaar, kilometerstand, batterijCapaciteit) {
        super(merk, model, bouwjaar, kilometerstand);
        this.batterijCapaciteit = batterijCapaciteit;
    }

    batterijInfo() {
        return `Batterijcapaciteit: ${this.batterijCapaciteit} kWh`;
    }
}

const mijnElektrischVoertuig = new ElektrischVoertuig("Tesla", "Model 3", 2022, 15000, 75);
console.log("Elektrisch Voertuig Info:", mijnElektrischVoertuig.voertuigInfo());
console.log(mijnElektrischVoertuig.batterijInfo());