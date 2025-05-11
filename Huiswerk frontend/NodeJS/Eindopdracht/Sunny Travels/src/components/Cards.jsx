import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Cards({ vacations }) {
    const [search, setSearch] = useState("");

    // Filter vakanties op bestemming (case-insensitive)
    const filteredVacations = vacations.filter(v =>
        v.destination.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <div className="mb-8 flex justify-center">
                <input
                    type="text"
                    placeholder="Zoek op bestemming of land..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="border border-blue-300 rounded-lg px-4 py-2 w-full max-w-md shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredVacations.length === 0 ? (
                    <p className="col-span-full text-center text-gray-500">Geen vakanties gevonden.</p>
                ) : (
                    filteredVacations.map(vacation => (
                        <div key={vacation.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                            <img src={vacation.image} alt={vacation.destination} className="h-48 w-full object-cover" />
                            <div className="p-6 flex flex-col flex-1">
                                <h2 className="text-2xl font-bold mb-2 text-blue-800">{vacation.destination}</h2>
                                <p className="text-gray-700 mb-4 flex-1">{vacation.description}</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-lg font-semibold text-yellow-700">€{vacation.price} p.p</span>
                                    <Link
                                        to={`/vakantie/${vacation.id}`}
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition"
                                    >
                                        Bekijk
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}