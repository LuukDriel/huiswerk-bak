# Eindopdracht - Sunny Travels

Sunny Travels is een React-applicatie waarmee je eenvoudig vakanties kunt bekijken en boeken. De applicatie is gebouwd met Vite, React, React Router en Tailwind CSS.

## Features

- Overzicht van vakantiebestemmingen met zoekfunctie
- Gedetailleerde pagina per vakantie met extra foto's (lightbox/carrousel)
- Boekingsformulier met validatie en bevestiging
- Responsive design met Tailwind CSS
- Moderne React code (functionele componenten, hooks, router)

## Installatie en opstarten

### Vereisten

- [Node.js](https://nodejs.org)

### Installatie

1. ga naar de projectmap:

   ``` 
   cd "Sunny Travels"
   ```

2. Installeer de modules

   ```
   npm install
   ```

### Ontwikkelserver starten

Start de ontwikkelserver met:

```
npm run dev
```

De applicatie is nu bereikbaar op [http://localhost:5173] (of een andere poort als 5173 bezet is).


## Projectstructuur

- `src/App.jsx` - Hoofdcomponent met routing en vakantiedata
- `src/components/` - Losse React componenten (Cards, VacationDetail, Booking)
- `src/index.css` - Tailwind CSS import
- `vite.config.js` - Vite configuratie
- `package.json` - Projectinformatie en scripts

## Gebruikte technologieën

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)