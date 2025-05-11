import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Booking({ vacations }) {
    const { id } = useParams();
    const vacation = vacations.find((v) => v.id === Number(id));
    const [form, setForm] = useState({ naam: "", email: "", personen: 1, opmerkingen: "" });
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    if (!vacation) {
        return <div className="text-center py-8 text-red-600">Vakantie niet gevonden.</div>;
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(true);
        setTimeout(() => navigate("/"), 2500);
    };

    return (
        <div className="max-w-xl mx-auto mt-10 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Boek: {vacation.destination}</h2>
            <p className="mb-6 text-gray-700">Prijs per persoon: <span className="font-semibold text-yellow-700">€{vacation.price}</span></p>
            {success ? (
                <div className="text-green-700 text-xl font-semibold text-center">
                    Bedankt voor je boeking! Je ontvangt zo snel mogelijk een bevestiging per e-mail.
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">Naam</label>
                        <input
                            type="text"
                            name="naam"
                            required
                            value={form.naam}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Aankomst</label>
                        <input
                            type="date"
                            name="aankomst"
                            required
                            value={form.aankomst}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                        />
                        <div>
                            <label className="block mb-1 font-medium">Vertrek</label>
                            <input
                                type="date"
                                name="vertrek"
                                required
                                value={form.vertrek}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Aantal personen</label>
                        <input
                            type="number"
                            name="personen"
                            min="1"
                            max="20"
                            required
                            value={form.personen}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Opmerkingen (optioneel)</label>
                        <textarea
                            name="opmerkingen"
                            value={form.opmerkingen}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition"
                    >
                        Bevestig boeking
                    </button>
                </form>
            )}
        </div>
    );
}