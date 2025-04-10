import React from "react";
import Card from "./components/Card";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap : "wrap", justifyContent: "center" }}>
      <Card
        image="https://dummyimage.com/300x180"
        title="Vakantie aan zee"
        description="Geniet van de zon, zee en strand in deze prachtige kustbesteming."
      />
      <Card
        image="https://dummyimage.com/300x180"
        title="Stedentrip Parijs"
        description="Ontdek de lichtstad en bezoek iconische bezienswaardigheden."
      />
      <Card
        image="https://dummyimage.com/300x180"
        title="Avontuur in de bergen"
        description="Ga hiken in de bergen en geniet van de adembenemende uitzichten."
      />
    </div>
  );
}