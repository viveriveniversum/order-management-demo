# Opdracht: Order Management Dashboard

## Doel van de opdracht
Bouw een kleine maar functionele fullstack applicatie bestaande uit:  
- Een *Angular frontend* waarin een gebruiker orders kan bekijken en beheren.  
- Een *Express.js backend API* die de data serveert (en eventueel opslaat).  
- Gebruik van *AG-Grid* in de frontend voor het tonen en filteren van de data.

## Functionaliteit

### 1. Frontend – Angular + AG-Grid
- Bouw een pagina met AG-Grid waarin een lijst van "Orders" wordt weergegeven.  
- De kolommen zijn: *Order ID*, *Customer*, *Order Date*, *Status*, *Total Amount*.  
- Voeg filters en sortering toe per kolom.  
- Implementeer pagination of virtual scrolling bij grotere datasets.  
- Voeg een detailweergave toe (bijvoorbeeld via een uitklapbare rij of een modal) waarin de inhoud van de order zichtbaar is.

### 2. Backend – Express API
- Implementeer een eenvoudige REST API met de volgende endpoints:  
  - `GET /orders`  → retourneert een lijst met orders  
  - `GET /orders/:id`  → retourneert details van een specifieke order  
  - `POST /orders`  → (optioneel) accepteert een nieuwe order  
- Data mag in-memory worden opgeslagen of in een JSON-bestand.  
- Voeg eenvoudige error-handling en logging toe.

## Extra (optioneel)
- Voeg kolomselectie en CSV-export toe aan de AG-Grid.  
- Voeg een formulier toe met Angular reactive forms voor het aanmaken van een nieuwe order.  
- Toon hoe environment-specifieke instellingen worden beheerd (bijvoorbeeld API-URL per omgeving).  
- Voeg eenvoudige mock-authenticatie toe (bijvoorbeeld inlogformulier met tokens).

## Structuur en repository
Gebruik **één mono-repository** voor het project:

**Naam:** `order-management-demo`  
**Structuur:**
```
/client  → Angular frontend
/server  → Express backend
```

## Verwachting van oplevering
- Het project moet gepubliceerd zijn op GitHub met een duidelijke `README.md` waarin staat:  
  - Hoe het project opgestart kan worden  
  - Hoe frontend en backend samenwerken  
  - Wat wel en niet af is  
  - Korte toelichting op technische keuzes en structuur  
- Het project moet zonder aanpassingen lokaal kunnen draaien (`npm install`, `npm start`)

## Deadline en aanpak
Je krijgt **één week** de tijd om deze opdracht uit te voeren. Ik wil je vragen om je werk stapsgewijs te committen in de repository, zodat ik later goed kan terugzien hoe je te werk bent gegaan. Probeer je werk overzichtelijk en gestructureerd op te bouwen, zodat het eenvoudig te volgen is.

- *Dag 1–2:* Backend opzetten en werkende API  
- *Dag 3–4:* Frontend koppelen + AG-Grid integratie  
- *Dag 5:* Detailweergave en uitbreidingen  
- *Dag 6–7:* Cleanup, documentatie en optionele extra features

## Nuttige links
- Angular: [https://angular.io/docs](https://angular.io/docs)  
- Express.js: [https://expressjs.com/en/starter/installing.html](https://expressjs.com/en/starter/installing.html)  
- AG-Grid (Angular): [https://www.ag-grid.com/angular-data-grid/](https://www.ag-grid.com/angular-data-grid/)  
- TypeScript (als ondersteuning nodig is): [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
