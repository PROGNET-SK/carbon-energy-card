# Carbon Energy Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)
![Version](https://img.shields.io/badge/version-1.0.1-blue.svg)

Repository: [https://github.com/PROGNET-SK/carbon-energy-card](https://github.com/PROGNET-SK/carbon-energy-card)

## License

This project is licensed under the **PolyForm Noncommercial License 1.0.0** (`LICENSE`).
Commercial use / resale requires a separate agreement (`COMMERCIAL-LICENSE.md`).

Support: [![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg?style=for-the-badge&logo=paypal)](https://paypal.me/giorgiosalierno) · [![GitHub Sponsors](https://img.shields.io/badge/Sponsor-PROGNET-SK-pink?style=for-the-badge&logo=github-sponsors)](https://github.com/sponsors/PROGNET-SK)  
*Send as donation; other payment methods will be refunded.*

![Carbon Energy Card](https://raw.githubusercontent.com/PROGNET-SK/carbon-energy-card/main/Images/screen.jpg)

*Carbon Energy Card – main view with energy flows, PV, battery, grid, and house*

---
### Prehľad

Carbon Energy Card je vlastná karta Lovelace pre Home Assistant, ktorá zobrazuje animované toky energie (PV, batéria, sieť, záťaž, tepelné čerpadlo, EV), agreguje PV stringy a batérie a podporuje voliteľné metriky nabíjania EV a tepelného čerpadla. Obsahuje **Správu domácnosti** (kamery, svetlá, teplota, vlhkosť, bezpečnostná klávesnica), **interaktívne vyskakovacie okná** s prepínačmi, okrúhle tlačidlá (Echo Alive, Prepínač textu, DOMOV), **PRO** funkcie (viditeľnosť textového zobrazenia na základe pohybu, obrázky prekrytia, vlastné toky), **Import a export** pre zálohu konfigurácie a najnovšie vylepšenia.

### Poznámka k výkonu (dôležité pre Raspberry Pi / slabšie zariadenia)

- **Kde sa meria výkon**: karta beží v **prehliadači** (frontend).
- **`performance_mode: low`**: niektoré náročné štýly animácií sú **automaticky zjednodušené**, aby bola zachovaná odozva UI (napríklad prechod z `shimmer` na `dots`).
- **`performance_mode: auto`**: predvolený vyvážený režim. Automaticky sa podtaktuje pri slabšom výkone klienta.

### Inštalácia

**Inštalácia cez HACS (odporúčané):**

> ⚠️ Tento repozitár je **vlastný (custom) repozitár** a nie je zatiaľ zaradený do predvoleného zoznamu HACS.  
> Pridajte ho manuálne podľa krokov nižšie.

1. V Home Assistant otvorte **HACS → Frontend**.
2. Kliknite na **⋮ menu** (vpravo hore) → **Vlastné repozitáre**.
3. Vložte `https://github.com/PROGNET-SK/carbon-energy-card` a vyberte kategóriu **Dashboard**.
4. Kliknite **Pridať** → karta sa zobrazí v zozname → kliknite **Stiahnuť**.
5. **Dashboard → Upraviť → Pridať kartu → Carbon Energy Card**.

**Manuálne (bez HACS):** Stiahnite `carbon-energy-card.js` zo [priečinka dist](https://github.com/PROGNET-SK/carbon-energy-card/tree/main/dist), umiestnite ho do `/config/www/community/carbon-energy-card/`, pridajte Lovelace resource a reštartujte Home Assistant.

### Minimálna konfigurácia

```yaml
type: custom:carbon-energy-card
sensor_pv1: sensor.solar_production
sensor_daily: sensor.daily_production
sensor_bat1_soc: sensor.battery_soc
sensor_bat1_power: sensor.battery_power
sensor_home_load: sensor.home_consumption
sensor_grid_power: sensor.grid_power
background_image: /local/community/carbon-energy-card/carbon_background.png
```

Použite vizuálny editor karty (Úprava → carbon) pre konfiguráciu entít, farieb a možností.

---

### Najnovšie funkcie – ako ich používať

#### 1. Správa domácnosti (kamery, svetlá, teplota, vlhkosť)

- **Tlačidlo DOMOV:** Na karte sa zobrazí okrúhle tlačidlo **HOME**. Po kliknutí naň sa otvorí bočný panel obsahujúci **5 ikon**: Kamera, Svetlá, Teplota, Bezpečnosť, Vlhkosť.
- **Priradenie entít:** V editore otvorte sekciu **"Správa domácnosti"**. Nakonfigurujte až **6 entít na ikonu**.
- **Vyskakovacie okno kamier:** Každá kamera má tlačidlo štart a stop. Prehrávanie nezačína automaticky.
- **Vyskakovacie okno svetiel:** Každé svetlo zobrazuje stav a ovládacie prvky ZAPNUTÉ / VYPNUTÉ.

#### 2. Interaktívne vyskakovacie okná (PV, Batéria, Sieť, Dom, Invertor)

- **Klikateľné oblasti:** Kliknutím na tieto časti otvoríte príslušné okno.
- **Prepínače v oknách:** Umožňujú priame aktívne prepínanie spínačov alebo svetiel, bez otvárania ďalšej karty.

#### 3. Echo Alive (Echo Show / Alexa)

- **Účel:** Udržuje dashboard aktívny na zariadeniach **Echo Show**. Prehliadač Silk má tendenciu pozastaviť alebo zavrieť stránku; Echo Alive tomu zabraňuje.

#### 4. Prepínač textu a "Čistý režim"

- **Prepínač textu:** Povolí zobraziť/skryť všetky textové popisy, čím dosiahnete len grafické zobrazenie.

#### 5. Batéria: režim toku vs režim nabíjania/vybíjania

- Zvoľte, či používate **jeden senzor s formátom plus/mínus**, alebo **dva oddelené senzory** na nabíjanie a vybíjanie.

#### 6. Štýl animácie a výkon

- Vyberte z viacerých štýlov animácie tokov energie a upravte rýchlosť, alebo dolaďte celkový výkon ovládača.

#### 7. Solárna predpoveď (PRO)

- Zobrazte **odhadovanú solárnu produkciu** s farebným ikonickým slnkom a meničom slnečnej aktivity.

#### 8. Galéria a šablóny

- Vy a celá komunita môžete zdieľať zozbierané šablóny kariet priamo z editora. Nájdete tu zoznam inšpirácií vrátane odmien za najobľúbenejšie verzie.

#### 9. PRO sekcia

- PRO funkcie poskytujú pokročilé prvky ako detekciu pohybu (na tabletových inštaláciách), kde viditeľnosť textu zostáva na obmedzený čas aktívna, či až 10 vlastných prekrytí a energetických tokov. Vyžaduje PRO heslo.

---

### Riešenie problémov

- **Karta sa nezobrazuje:** Skontrolujte správnosť Lovelace a vyčistite medzipamäť prehliadača.
- **Hodnoty sú nulové:** Overte ID entít a či vaše senzory reálne existujú.
- **Chyba kamery 403:** Kamery musia podporovať `access_token`. Pred zatvorením vždy použite **Stop**.
- **Prehliadač reaguje pomaly:** Zvýšte `update_interval` v editore karty.

---

### Licencia a podpora

- **Licencia:** MIT. Úplné znenie - [LICENSE](LICENSE).
- **Hlásenia a požiadavky:** [GitHub](https://github.com/PROGNET-SK/carbon-energy-card).

© 2026 PROGNET-SK a prispievatelia.
