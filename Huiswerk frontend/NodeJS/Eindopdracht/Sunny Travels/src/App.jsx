import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import VacationDetail from "./components/VacationDetail";
import Booking from "./components/Booking";

const vacations = [
    {
        id: 1,
        destination: "Zonvakantie naar Spanje",
        price: 499,
        description: "Geniet van de zon en het strand in Spanje.",
        image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        extraImages: [
            "https://images.unsplash.com/photo-1558642084-fd07fae5282e?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0",
            "https://images.unsplash.com/photo-1549643276-fdf2fab574f5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        longDescription: `Laat je verwennen door de Spaanse zon aan de prachtige Costa del Sol! Overdag geniet je van uitgestrekte zandstranden, een verfrissende duik in de Middellandse Zee en gezellige strandbars. ’s Avonds proef je de lokale keuken in sfeervolle tapasrestaurants en wandel je door authentieke dorpjes. Bezoek het historische Málaga, ontdek de witte dorpjes in het binnenland en maak een boottocht langs de kust. Deze vakantie is ideaal voor zonliefhebbers, gezinnen en iedereen die wil ontspannen in een mediterrane sfeer.`
    },
    {
        id: 2,
        destination: "Stedentrip naar Parijs",
        price: 299,
        description: "Ontdek de romantiek van Parijs.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
        extraImages: [
            "https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1471623432079-b009d30b6729?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        longDescription: `Ervaar de magie van Parijs! Bewonder de Eiffeltoren bij zonsondergang, wandel langs de Seine en bezoek wereldberoemde musea zoals het Louvre en Musée d'Orsay. Geniet van verse croissants in een typisch Frans café en ontdek de sfeervolle straatjes van Montmartre. Shop in chique boetieks, maak een boottocht over de Seine en sluit de dag af met een diner in een romantisch restaurant. Parijs is de perfecte bestemming voor cultuurliefhebbers, foodies en romantici.`
    },
    {
        id: 3,
        destination: "Avontuurlijke reis naar Thailand",
        price: 799,
        description: "Verken de prachtige natuur van Thailand.",
        image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        extraImages: [
            "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1690958808677-8f306e2a45d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        longDescription: `Ga op avontuur in het exotische Thailand! Trek door de groene jungle van Chiang Mai, bezoek eeuwenoude tempels en maak kennis met olifanten in een ethisch opvangcentrum. Ontdek bruisende markten in Bangkok, proef streetfood en vaar over de beroemde drijvende markten. Sluit je reis af op de paradijselijke eilanden van het zuiden, waar je kunt snorkelen, duiken en genieten van witte stranden. Deze reis biedt een unieke mix van cultuur, natuur en ontspanning.`
    },
    {
        id: 4,
        destination: "Cruise door de Cariben",
        price: 1299,
        description: "Ontspan op een luxe cruise door de Cariben.",
        image: "https://images.unsplash.com/photo-1511316695145-4992006ffddb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        extraImages: [
            "https://plus.unsplash.com/premium_photo-1661964304872-7b715cf38cd1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1678377402149-7e13cedccd4a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        longDescription: `Stap aan boord van een luxe cruise en ontdek de mooiste eilanden van de Cariben! Geniet van zon, zee en strand terwijl je langs tropische bestemmingen vaart. Ontspan in stijl met zwembaden, spa's en restaurants aan boord. Maak excursies naar parelwitte stranden, snorkel in kristalhelder water en verken kleurrijke onderwaterwerelden. Deze cruise is perfect voor liefhebbers van luxe, avontuur en ontspanning.`
    },
    {
        id: 5,
        destination: "Rondreis door Italië",
        price: 899,
        description: "Verken de mooiste steden van Italië.",
        image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        extraImages: [
            "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        longDescription: `Ontdek de rijke geschiedenis en cultuur van Italië tijdens een rondreis! Bezoek iconische steden zoals Rome, Florence en Venetië. Bewonder de Colosseum, het Vaticaan en de prachtige kunstwerken van Michelangelo. Geniet van authentieke Italiaanse gerechten, van pizza in Napels tot gelato in Florence. Maak een gondeltocht in Venetië en verken de schilderachtige dorpjes in Toscane. Deze reis is ideaal voor cultuurliefhebbers, foodies en romantici.`
    },
    {
        id: 6,
        destination: "Safari in Zuid-Afrika",
        price: 1499,
        description: "Ervaar de wilde natuur van Zuid-Afrika.",
        image: "https://plus.unsplash.com/premium_photo-1661936361131-c421746dcd0d?q=80&w=2159&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        extraImages: [
            "https://plus.unsplash.com/premium_photo-1661826792893-5b300391d34f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWZyaWNhfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        longDescription: `Ga op safari in het adembenemende Zuid-Afrika! Ontdek de Big Five in wereldberoemde nationale parken zoals Kruger en Addo. Maak spannende gamedrives, wandelingen en nachtsafari's onder begeleiding van ervaren gidsen. Geniet van luxe lodges, lokale gerechten en de prachtige natuur. Bezoek ook culturele dorpen en leer meer over de rijke geschiedenis van het land. Deze reis is perfect voor natuurliefhebbers en avonturiers.`
    }
];

export default function App() {
    return (
        <BrowserRouter>
            <div className="bg-gradient-to-br from-blue-100 via-white to-yellow-100 min-h-screen">
                <header className="relative shadow-lg">
                    <img
                        src="https://images.unsplash.com/photo-1616036740257-9449ea1f6605?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Sunny Travels banner"
                        className="w-full h-56 md:h-72 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-700/60 to-blue-400/40 flex flex-col items-center justify-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg mb-2">
                            <span className="inline-block align-middle mr-2">☀️</span>
                            Sunny Travels
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 font-medium mb-2 text-center max-w-xl">
                            Ontdek de mooiste vakantiebestemmingen en boek jouw droomreis eenvoudig online.
                        </p>
                        <div className="h-1 w-24 bg-yellow-300 rounded-full mt-2" />
                    </div>
                </header>
                <main className="container mx-auto px-4 py-8">
                    <Routes>
                        <Route path="/" element={<Cards vacations={vacations} />} />
                        <Route path="/vakantie/:id" element={<VacationDetail vacations={vacations} />} />
                        <Route path="/boeken/:id" element={<Booking vacations={vacations} />} />
                    </Routes>
                </main>
                <footer className="text-center text-gray-500 py-4 mt-8 border-t">
                    &copy; {new Date().getFullYear()} Sunny Travels. Alle rechten voorbehouden.
                </footer>
            </div>
        </BrowserRouter>
    );
}

