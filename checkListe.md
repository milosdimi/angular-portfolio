# Portfolio – TODO / Abgabe-Checklist

> Ziel: Alle Punkte abhaken, **bevor** das Portfolio abgegeben wird.

---

## 0) Projektabgabe – Final Check
- [ ] Alle Punkte dieser Liste sind erfüllt
- [ ] Letzter Full-Test vor Abgabe (Desktop + Mobile)
- [ ] Repo ist clean (keine unnötigen Dateien, keine Secrets)

---

## 1) Git-Workflow
- [ ] GitHub von Anfang an genutzt (Repo gepflegt)
- [ ] Nach jeder Coding-Session committen
- [ ] Klare, aussagekräftige Commit-Messages
- [ ] `.gitignore` korrekt (z. B. `/dist`, `/node_modules`, lokale Dateien)
- [ ] Repository ist aktuell & aufgeräumt

---

## 2) Allgemein
- [ ] Alle Features funktionieren fehlerfrei und wie erwartet
- [ ] Manuell getestet in aktuellen Browsern:
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge

---

## 3) User Experience (UX)
- [ ] Intuitives Feedback bei Interaktionen (Hover, Active, Focus)
- [ ] UI entspricht dem Figma-Prototyp (Farben, Abstände, Schatten)
- [ ] Transitions auf klickbaren Elementen: **75–125ms**
- [ ] Buttons haben `cursor: pointer`
- [ ] Inputs/Buttons ohne Standard-Border (Design-Style)
- [ ] Dezente Animationen beim Laden/Scrollen eingebaut
- [ ] Animationen nur:
  - [ ] für anklickbare Elemente (max. 125ms)
  - [ ] oder beim Scroll in neue Sektion

---

## 4) Technische Anforderungen
- [ ] Keine Konsolenfehler / Warnungen / Logs im Final Build
- [ ] Max. **400 Zeilen Code pro Datei**
- [ ] Dateinamen sind:
  - [ ] beschreibend/aussagekräftig
  - [ ] konsistent
- [ ] Angular Projektstruktur sauber:
  - [ ] Für **jede Sektion** eine eigene Komponente
- [ ] Impressum öffnet per RouterLink
- [ ] Impressum/Datenschutz nutzen **gleichen Header & Footer** wie Hauptseite
- [ ] Externe Links (Projekte/GitHub/LinkedIn) öffnen in neuem Tab:
  - [ ] `target="_blank"` + `rel="noopener noreferrer"`

---

## 5) Responsiveness
- [ ] Jede Seite funktioniert bis min. **320px**
- [ ] Mobile + Desktop funktionieren
- [ ] Kein “Fake-Responsive” durch `overflow: hidden` (nur für Animation/Text-overflow ok)
- [ ] Above-the-Fold Sektion auf Mobile immer **100vh**
- [ ] Content ist begrenzt auf **1920px oder 1440px** (Max-Width Container)

---

## 6) TypeScript / Clean Code
- [ ] Eine Funktion hat nur **eine Aufgabe**
- [ ] Funktionen max. **14 Zeilen** (HTML ausgenommen)
- [ ] Deutliche Funktionsnamen
- [ ] camelCase für Variablen/Funktionen/Dateinamen  
  - [ ] korrekt: `shoppingCart`  
  - [ ] falsch: `Shopping_Cart`
- [ ] Funktionen/Variablen beginnen klein
- [ ] 1–2 Leerzeilen Abstand zwischen Funktionen
- [ ] Max. **400 LOC** pro Datei
- [ ] Prägnante Dateinamen
- [ ] Extra Ordner für Bilder (`/assets/img` o.ä.)

---

## 7) Design
- [ ] Gleichmäßige Margins / Ränder
- [ ] Keine unnötigen Lücken/Abstände
- [ ] Sticky Header nur wenn wirklich nötig (Design-Entscheidung)

---

## 8) Fotos auf der Seite
- [ ] Fotos nicht verzerrt (`object-fit: cover/contain`)
- [ ] Fotos komprimiert (max. **500kb**)
- [ ] Professionelles Foto/ Pose + neutraler Hintergrund
- [ ] Kein Foto doppelt verwendet

---

## 9) Texte auf der Webseite
- [ ] Kein Lorem Ipsum
- [ ] Keine Serif-Schriftart (Schrift aus dem Design verwenden)
- [ ] Englische Texte gegengecheckt (ChatGPT/Grammarly o.ä.)
- [ ] Deutsche Texte geprüft (LanguageTool)
- [ ] Skills korrekt geschrieben (z. B. **JavaScript**)
- [ ] Sprache umschaltbar im Header/Responsive Menü:
  - [ ] Deutsch
  - [ ] Englisch

---

## 10) Projektsektion
- [ ] Projekte sind verlinkt und liegen auf eigenem Server (Subdomain)
- [ ] Projekte sind testbar & ohne offensichtliche Bugs
- [ ] Vorschaubilder passen zum Projekt/Design

---

## 11) Social Media
- [ ] LinkedIn & GitHub (ggf. Xing) funktionieren und sind korrekt verlinkt (`https://`)
- [ ] Facebook/Instagram/etc. sind **nicht** verlinkt

---

## 12) URL & Domain
- [ ] Eigene Domain genutzt (z. B. `https://vorname-nachname.de`)
- [ ] SSL-Zertifikat aktiv & HTTPS wird erzwungen
- [ ] Favicon ist nicht das Angular-Standard-Logo
- [ ] Seitentitel angepasst

---

## 13) Form Validation (Kontaktformular)
- [ ] Validierung erst nach Verlassen (onBlur), nicht während Eingabe
- [ ] Validierungs-Meldungen verursachen keine Layout-Shifts
- [ ] Senden-Button nur aktiv wenn alles gültig (inkl. Datenschutz-Checkbox)
- [ ] Browser-Autofill zerstört das Design nicht (Webkit)
- [ ] Nach dem Senden: User bekommt Feedback (Success/Fail/Loading)

---

## 14) Häufige Fehler vermeiden
- [ ] Above-the-Fold hat **100vh**
- [ ] Hero-Bild wird in verschiedenen Auflösungen korrekt überlagert (nicht zu stark/gar nicht)
- [ ] Form Validation vollständig
- [ ] Header überdeckt keine Headlines nach Menü-Klick (Scroll-Offset)
- [ ] Bilder komprimiert
- [ ] Horizontale Designs scrollen nicht “kaputt” mit Mausrad
- [ ] To-Top Pfeil unter Contacts ist verlinkt
- [ ] Impressum & Datenschutz sind responsive

<!--TODO-->

# Angular Portfolio

## ✅ Git & Repository
- [ ] Klare, aussagekräftige Commit-Messages verwenden
- [ ] .gitignore korrekt konfiguriert
- [ ] Repository regelmäßig committen und pushen

## ✅ Allgemeine Funktionen
- [ ] Alle Features funktionieren fehlerfrei
- [ ] Cross-Browser Testing (Chrome, Firefox, Safari, Edge)
- [ ] Keine Konsolenfehler oder -logs

## ✅ User Experience
- [ ] Intuitive Feedback bei Interaktionen (hover etc.)
- [ ] UI-Elemente entsprechen Figma-Design
- [ ] Transitions: 75ms-125ms auf anklickbaren Elementen
- [ ] Buttons: `cursor: pointer`
- [ ] Inputs/Buttons ohne Standard-Border
- [ ] Dezente Animationen beim Laden/Scrollen
- [ ] Nur sinnvolle Animationen (max. 125ms)

## ✅ Technische Anforderungen
- [ ] Max. 400 Zeilen Code pro Datei
- [ ] Aussagekräftige Dateinamen
- [ ] Konsistente Namenskonvention
- [ ] Pro Sektion eine Komponente
- [ ] Routerlink für Impressum
- [ ] Impressum/Datenschutz mit gleichem Header/Footer
- [ ] Externe Links öffnen in neuem Tab

## ✅ Responsiveness
- [ ] Funktion ab 320px Auflösung
- [ ] Mobile & Desktop optimiert
- [ ] Kein missbräuchliches `overflow:hidden`
- [ ] Above the Fold: immer 100vh
- [ ] Content auf max. 1920px/1440px begrenzt
- [ ] Mobile Geräte funktionsfähig

## ✅ TypeScript / Clean Code
- [ ] Funktionen: eine Aufgabe pro Funktion
- [ ] Funktionen: max. 14 Zeilen (HTML ausgenommen)
- [ ] Deutliche Funktionsnamen
- [ ] camelCase für Dateinamen, Variablen, Funktionen
- [ ] Kleinschreibung am Anfang von Funktionen/Variablen
- [ ] 1-2 Leerzeilen zwischen Funktionen
- [ ] Extra Ordner für Bilder (img/)

## ✅ Design
- [ ] Gleichmäßige Margins
- [ ] Keine unnötigen Abstände/Lücken
- [ ] Sticky Header wenn benötigt
- [ ] Konsistente Farben und Abstände

## ✅ Fotos
- [ ] Fotos nicht verzerrt (`object-fit: cover/contain`)
- [ ] Fotos komprimiert (max. 500kb)
- [ ] Professionelle Pose, neutraler Hintergrund
- [ ] Keine doppelten Fotos

## ✅ Texte
- [ ] Kein Lorem Ipsum
- [ ] Keine Serif-Schriftarten
- [ ] Englische Texte mit Grammarly/ähnlichem geprüft
- [ ] Deutsche Texte mit LanguageTool geprüft
- [ ] Korrekte Rechtschreibung (z.B. "JavaScript")
- [ ] Sprachumschaltung DE/EN implementiert

## ✅ Projektsektion
- [ ] Projekte verlinkt (eigene Subdomain)
- [ ] Projekte funktionieren bugfrei
- [ ] Vorschaubilder stimmig
- [ ] Projekte ausprobierbar

## ✅ Social Media
- [ ] LinkedIn und GitHub verlinkt (mit https://)
- [ ] Keine Facebook/Instagram Links

## ✅ URL & Domain
- [ ] Eigene Domain (z.B. https://vorname-nachname.de)
- [ ] SSL-Zertifikat eingerichtet
- [ ] SSL-Verbindung erzwungen
- [ ] Custom Favicon (nicht Angular-Standard)
- [ ] Angepasster Seitentitel

## ✅ Kontaktformular Validation
- [ ] Validation onBlur (nach Verlassen des Feldes)
- [ ] Validierungsmeldungen verursachen kein Layout-Shifting
- [ ] Senden-Button erst aktiv bei erfüllter Validation
- [ ] Datenschutz-Haken implementiert
- [ ] Autovervollständigung beeinträchtigt Design nicht
- [ ] Feedback nach Email-Versand

## ❌ Häufige Fehler vermeiden
- [ ] Above the Fold hat 100vh
- [ ] Bild wird nicht von Grafikelementen überlagert
- [ ] Form Validation komplett implementiert
- [ ] Header überdeckt keine Headlines nach Menü-Klick
- [ ] Bilder komprimiert
- [ ] Horizontale Designs mit Mausrad scrollbar
- [ ] To-Top Pfeil unter Contacts verlinkt
- [ ] Impressum und Datenschutz responsive