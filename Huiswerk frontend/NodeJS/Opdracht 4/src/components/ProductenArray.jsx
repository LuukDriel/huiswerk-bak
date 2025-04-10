import React, { useState } from "react";

export default function ProductenArray() {
    const [producten, setProducten] = useState([]);

    const addproduct = () => {
        setProducten([...producten, {
            id:producten.length,
            naam: producten,
            prijs: 0,
            voorraad: 0,
        }

        ]);
    };

    return (
        <div>
            <h2>Voeg producten toe</h2>
            <input
            type="text"
            value={producten}
            onChange={(e)=>setProducten(e.target.value)}
            />
            <button onclick={()=>addproduct()}>Voeg product toe</button>
            <ul>
                {producten.map((producten)=>(
                    <li key={producten.id}>{producten.naam}</li>
                ))}
            </ul>
        </div>
    );
}