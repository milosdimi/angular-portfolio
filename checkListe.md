# Portfolio – TODO / Abgabe-Checklist

> Ziel: Alle Punkte abhaken, **bevor** das Portfolio abgegeben wird.

---

## 0) Projektabgabe – Final Check
- [x] Alle Punkte dieser Liste sind erfüllt
- [x] Letzter Full-Test vor Abgabe (Desktop + Mobile)
- [x] Repo ist clean (keine unnötigen Dateien, keine Secrets)

---

## 1) Git-Workflow
- [x] GitHub von Anfang an genutzt (Repo gepflegt)
- [x] Nach jeder Coding-Session committen
- [x] Klare, aussagekräftige Commit-Messages
- [x] `.gitignore` korrekt (z. B. `/dist`, `/node_modules`, lokale Dateien)
- [x] Repository ist aktuell & aufgeräumt

---

## 2) Allgemein
- [x] Alle Features funktionieren fehlerfrei und wie erwartet
- [x] Manuell getestet in aktuellen Browsern:
  - [x] Chrome
  - [x] Firefox
  - [x] Safari
  - [x] Edge

---

## 3) User Experience (UX)
- [x] Intuitives Feedback bei Interaktionen (Hover, Active, Focus)
- [x] UI entspricht dem Figma-Prototyp (Farben, Abstände, Schatten)
- [x] Transitions auf klickbaren Elementen: **75–125ms**
- [x] Buttons haben `cursor: pointer`
- [x] Inputs/Buttons ohne Standard-Border (Design-Style)
- [x] Dezente Animationen beim Laden/Scrollen eingebaut
- [x] Animationen nur:
  - [x] für anklickbare Elemente (max. 125ms)
  - [x] oder beim Scroll in neue Sektion

---

## 4) Technische Anforderungen
- [x] Keine Konsolenfehler / Warnungen / Logs im Final Build
- [x] Max. **400 Zeilen Code pro Datei**
- [x] Dateinamen sind:
  - [x] beschreibend/aussagekräftig
  - [x] konsistent
- [x] Angular Projektstruktur sauber:
  - [x] Für **jede Sektion** eine eigene Komponente
- [x] Impressum öffnet per RouterLink
- [x] Impressum/Datenschutz nutzen **gleichen Header & Footer** wie Hauptseite
- [x] Externe Links (Projekte/GitHub/LinkedIn) öffnen in neuem Tab:
  - [x] `target="_blank"` + `rel="noopener noreferrer"`

---

## 5) Responsiveness
- [x] Jede Seite funktioniert bis min. **320px**
- [x] Mobile + Desktop funktionieren
- [x] Kein “Fake-Responsive” durch `overflow: hidden` (nur für Animation/Text-overflow ok)
- [x] Above-the-Fold Sektion auf Mobile immer **100vh**
- [x] Content ist begrenzt auf **1920px oder 1440px** (Max-Width Container)

---

## 6) TypeScript / Clean Code
- [x] Eine Funktion hat nur **eine Aufgabe**
- [x] Funktionen max. **14 Zeilen** (HTML ausgenommen)
- [x] Deutliche Funktionsnamen
- [x] camelCase für Variablen/Funktionen/Dateinamen  
  - [x] korrekt: `shoppingCart`  
  - [x] falsch: `Shopping_Cart`
- [x] Funktionen/Variablen beginnen klein
- [x] 1–2 Leerzeilen Abstand zwischen Funktionen
- [x] Max. **400 LOC** pro Datei
- [x] Prägnante Dateinamen
- [x] Extra Ordner für Bilder (`/assets/img` o.ä.)

---

## 7) Design
- [x] Gleichmäßige Margins / Ränder
- [x] Keine unnötigen Lücken/Abstände
- [x] Sticky Header nur wenn wirklich nötig (Design-Entscheidung)

---

## 8) Fotos auf der Seite
- [x] Fotos nicht verzerrt (`object-fit: cover/contain`)
- [x] Fotos komprimiert (max. **500kb**)
- [x] Professionelles Foto/ Pose + neutraler Hintergrund
- [x] Kein Foto doppelt verwendet

---

## 9) Texte auf der Webseite
- [x] Kein Lorem Ipsum
- [x] Keine Serif-Schriftart (Schrift aus dem Design verwenden)
- [x] Englische Texte gegengecheckt (ChatGPT/Grammarly o.ä.)
- [x] Deutsche Texte geprüft (LanguageTool)
- [x] Skills korrekt geschrieben (z. B. **JavaScript**)
- [x] Sprache umschaltbar im Header/Responsive Menü:
  - [x] Deutsch
  - [x] Englisch

---

## 10) Projektsektion
- [x] Projekte sind verlinkt und liegen auf eigenem Server (Subdomain)
- [x] Projekte sind testbar & ohne offensichtliche Bugs
- [x] Vorschaubilder passen zum Projekt/Design

---

## 11) Social Media
- [x] LinkedIn & GitHub (ggf. Xing) funktionieren und sind korrekt verlinkt (`https://`)
- [x] Facebook/Instagram/etc. sind **nicht** verlinkt

---

## 12) URL & Domain
- [x] Eigene Domain genutzt (z. B. `https://vorname-nachname.de`)
- [x] SSL-Zertifikat aktiv & HTTPS wird erzwungen
- [x] Favicon ist nicht das Angular-Standard-Logo
- [x] Seitentitel angepasst

---

## 13) Form Validation (Kontaktformular)
- [x] Validierung erst nach Verlassen (onBlur), nicht während Eingabe
- [x] Validierungs-Meldungen verursachen keine Layout-Shifts
- [x] Senden-Button nur aktiv wenn alles gültig (inkl. Datenschutz-Checkbox)
- [x] Browser-Autofill zerstört das Design nicht (Webkit)
- [x] Nach dem Senden: User bekommt Feedback (Success/Fail/Loading)

---

## 14) Häufige Fehler vermeiden
- [x] Above-the-Fold hat **100vh**
- [x] Hero-Bild wird in verschiedenen Auflösungen korrekt überlagert (nicht zu stark/gar nicht)
- [x] Form Validation vollständig
- [x] Header überdeckt keine Headlines nach Menü-Klick (Scroll-Offset)
- [x] Bilder komprimiert
- [x] Horizontale Designs scrollen nicht “kaputt” mit Mausrad
- [x] To-Top Pfeil unter Contacts ist verlinkt
- [x] Impressum & Datenschutz sind responsive
