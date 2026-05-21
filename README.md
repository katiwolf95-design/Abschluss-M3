Abschlussprojekt M3 – Artist Portfolio Website

Projektbeschreibung

Dieses Projekt ist eine moderne Artist Portfolio Website, entwickelt mit React, Vite, Tailwind CSS und einem Strapi Headless CMS als Backend.

Ziel des Projekts war es, eine flexible und erweiterbare Webanwendung zu erstellen, in der Kunstwerke dynamisch über ein CMS verwaltet und im Frontend dargestellt werden können.

Die Website enthält:

eine Home-Seite mit ausgewählten Werken
eine Gallery mit dynamischem Grid-Layout
eine About-Seite
eine Contact-Seite mit Formular
eine Detailansicht für einzelne Artworks
globale Datenverwaltung über Context API
API-Anbindung an Strapi

Verwendete Technologien

Frontend
React
Vite
React Router DOM
Tailwind CSS
Context API
Hooks (useState, useEffect, useContext)
Backend
Strapi Headless CMS
REST API

Features

Dynamisches Laden von Artworks aus Strapi
Globale Datenverwaltung mit Context API
Wiederverwendbare React-Komponenten
Dynamische Routing-Struktur
Gallery Layout mit wechselnden Reihen (2er / 3er Grid)
Detailseiten für einzelne Kunstwerke
Kontaktformular mit Formular-Handling
Responsive Grundstruktur mit Tailwind CSS

Technische Umsetzung

Die Daten werden im Strapi CMS gespeichert und über die REST API im Frontend geladen.

Beim Start der Anwendung wird über useEffect ein API-Call ausgeführt.
Die geladenen Daten werden im Context gespeichert und anschließend in verschiedenen Komponenten verwendet.

Beispiel:

useEffect(() => {
    fetchArtworks();
}, []);

Die Bilder werden dynamisch aus Strapi geladen und im Gallery-Layout dargestellt.

Herausforderungen & Lösungen

Problem: Nicht alle Bilder wurden geladen

Strapi limitiert standardmäßig die Anzahl der zurückgegebenen Einträge.

Lösung:

Die Pagination wurde im API-Request angepasst:

/api/artworks?populate=*&pagination[pageSize]=100

Dadurch konnten alle benötigten Artworks korrekt geladen werden.

Projektstruktur

src/
 ├── components/
 ├── context/
 ├── pages/
 ├── App.jsx
 └── main.jsx

Installation

Frontend starten
npm install
npm run dev

Environment Variables

Eine .env Datei wird benötigt:

VITE_STRAPI_URL=http://localhost:1337

CMS Verwaltung

Die Inhalte und Bilder werden über das Strapi Backend verwaltet.

Das Frontend greift über API-Requests auf die Daten zu und rendert sie dynamisch in React-Komponenten.


Mögliche Erweiterungen:
Login / Authentifizierung
Dashboard für Admins
Erweiterte Filter- und Sortierfunktionen
Vollständige Responsiveness
Formular mit echtem Mailversand
Deployment der Anwendung

Entwickelt von

Katharina Wolf
Frontend Development & Design Project
Syntax Institut – Abschlussprojekt M3
