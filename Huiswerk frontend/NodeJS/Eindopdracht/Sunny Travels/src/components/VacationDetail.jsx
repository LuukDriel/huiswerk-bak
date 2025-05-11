import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function VacationDetail({ vacations }) {
    const { id } = useParams();
    const vacation = vacations.find((v) => v.id === Number(id));
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImg, setCurrentImg] = useState(0);

    if (!vacation) {
        return (
            <div className="text-center py-8">
                <p className="text-xl text-red-600">Vakantie niet gevonden.</p>
                <Link to="/" className="text-blue-600 underline">Terug naar overzicht</Link>
            </div>
        );
    }

    const openLightbox = (idx) => {
        setCurrentImg(idx);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);

    const prevImg = (e) => {
        e.stopPropagation();
        setCurrentImg((prev) => (prev === 0 ? vacation.extraImages.length - 1 : prev - 1));
    };

    const nextImg = (e) => {
        e.stopPropagation();
        setCurrentImg((prev) => (prev === vacation.extraImages.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="max-w-3xl mx-auto mt-10">
            {/* Hero afbeelding met overlay */}
            <div className="relative rounded-xl overflow-hidden shadow-lg mb-8">
                <img
                    src={vacation.image}
                    alt={vacation.destination}
                    className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                    <h2 className="text-4xl font-extrabold text-white drop-shadow mb-2">{vacation.destination}</h2>
                    <p className="text-2xl text-yellow-300 font-bold drop-shadow">€{vacation.price}</p>
                </div>
            </div>

            {/* Uitgebreide beschrijving */}
            <section className="mb-10">
                <h3 className="text-2xl font-semibold mb-2 text-blue-700">Over deze reis</h3>
                <p className="text-gray-800 text-lg">{vacation.longDescription}</p>
            </section>

            {/* Extra foto's met lightbox/carrousel */}
            {vacation.extraImages && vacation.extraImages.length > 0 && (
                <section className="mb-10">
                    <h3 className="text-xl font-semibold mb-3 text-blue-800">Impressie</h3>
                    <div className="flex gap-4 overflow-x-auto pb-2">
                        {vacation.extraImages.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Extra ${idx + 1}`}
                                className="h-32 w-56 object-cover rounded-lg shadow border-2 border-blue-100 flex-shrink-0 cursor-pointer transition hover:scale-105"
                                onClick={() => openLightbox(idx)}
                            />
                        ))}
                    </div>
                    {/* Lightbox overlay */}
                    {lightboxOpen && (
                        <div
                            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                            onClick={closeLightbox}
                        >
                            <button
                                onClick={prevImg}
                                className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-3xl rounded-full px-3 py-1 shadow"
                                aria-label="Vorige"
                            >
                                &#8592;
                            </button>
                            <img
                                src={vacation.extraImages[currentImg]}
                                alt={`Extra groot ${currentImg + 1}`}
                                className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg border-4 border-white"
                                onClick={e => e.stopPropagation()}
                            />
                            <button
                                onClick={nextImg}
                                className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-3xl rounded-full px-3 py-1 shadow"
                                aria-label="Volgende"
                            >
                                &#8594;
                            </button>
                            <button
                                onClick={closeLightbox}
                                className="absolute top-8 right-8 bg-white/80 hover:bg-white text-2xl rounded-full px-3 py-1 shadow"
                                aria-label="Sluiten"
                            >
                                &times;
                            </button>
                        </div>
                    )}
                </section>
            )}

            {/* Praktische informatie als info-banner */}
            <section className="mb-10">
                <div className="bg-gradient-to-r from-yellow-100 via-yellow-50 to-yellow-100 border-l-8 border-yellow-400 rounded-xl p-6 shadow-inner">
                    <h3 className="text-xl font-bold mb-2 text-yellow-800">Praktische informatie</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Inclusief vlucht en verblijf</li>
                        <li>Gratis annuleren tot 7 dagen voor vertrek</li>
                        <li>24/7 klantenservice</li>
                        <li>Vertrekdata: flexibel te kiezen</li>
                    </ul>
                </div>
            </section>

            {/* Actieknoppen */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Link
                    to={`/boeken/${vacation.id}`}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow transition text-lg text-center"
                >
                    Boek deze reis
                </Link>
                <Link
                    to="/"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow transition text-lg text-center"
                >
                    Terug naar overzicht
                </Link>
            </div>
        </div>
    );
}