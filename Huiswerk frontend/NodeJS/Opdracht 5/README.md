# Opdracht 5 - Productenlijst

## Installatie & Opstarten

### 1. Backend (server)

1. Open een terminal en ga naar de `server` map:
   ```
   cd server
   ```

2. Installeer de benodigde packages:
   ```
   npm install
   ```

3. Start de backend server:
   ```
   node server.js
   ```
   De server draait nu op [http://localhost:3001].

---

### 2. Frontend (client)

1. Open een nieuwe terminal en ga naar de `client` map:
   ```
   cd client
   ```

2. Installeer de benodigde packages:
   ```
   npm install
   ```

3. Start de frontend (React) app:
   ```
   npm run dev
   ```
   De app is nu bereikbaar op [http://localhost:5173] (of een andere poort die in de terminal wordt getoond).

---

## Gebruik

- Zorg dat **eerst de backend** draait, daarna de frontend.
- De productenlijst wordt automatisch opgehaald en weergegeven.

---

## Structuur

- `server/` : Express backend met producten API
- `client/` : React frontend

---

## Styling

De app maakt gebruik van een extern CSS-bestand (`client/src/App.css`) voor de opmaak van de productenlijst.  
Hierdoor worden de producten netjes en overzichtelijk weergegeven met onder andere een lichte achtergrond, afgeronde hoeken en een schaduweffect bij hoveren.  
Je kunt de styling aanpassen door het CSS-bestand te bewerken.

---

Veel succes!