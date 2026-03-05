# Carbon Energy Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)
![Version](https://img.shields.io/badge/version-3.3.5-blue.svg)

Repository: [https://github.com/PROGNET-SK/carbon-energy-card](https://github.com/PROGNET-SK/carbon-energy-card)

## License

This project is licensed under the **PolyForm Noncommercial License 1.0.0** (`LICENSE`).
Commercial use / resale requires a separate agreement (`COMMERCIAL-LICENSE.md`).

**[Install directly (HACS)][install]** · Support: [![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg?style=for-the-badge&logo=paypal)](https://paypal.me/giorgiosalierno) · [![GitHub Sponsors](https://img.shields.io/badge/Sponsor-PROGNET-SK-pink?style=for-the-badge&logo=github-sponsors)](https://github.com/sponsors/PROGNET-SK)  
*Send as donation; other payment methods will be refunded.*

[install]: https://my.home-assistant.io/redirect/hacs_repository/?owner=PROGNET-SK&repository=carbon-energy-card&category=frontend

[![Open your Home Assistant instance and add this repository to HACS](https://my.home-assistant.io/badges/hacs_repository.svg)][install]

![Carbon Energy Card](https://raw.githubusercontent.com/PROGNET-SK/carbon-energy-card/main/Images/screen.jpg)

*Carbon Energy Card – main view with energy flows, PV, battery, grid, and house*

---

## English

### Overview

Carbon Energy Card is a Home Assistant custom Lovelace card that displays animated energy flows (PV, battery, grid, load, heat pump, EV), aggregates PV strings and batteries, and supports optional EV charging and heat pump metrics. It includes **House Management** (cameras, lights, temperature, humidity, security keypad), **interactive popups** with toggles, round buttons (Echo Alive, Text toggle, HOME), **PRO** features (motion-based text visibility, overlay images, custom flows), **Import & Export** for config backup, and recent enhancements.

### What's new in 3.3.3

- **Gallery:** Share your dashboard templates to the community and browse templates shared by others. From the editor, use **"Share to gallery"** to submit a template (name, description, author, email, rules). One share per user per month. **"Top"** shows the most popular templates; a 30-day timer resets and notifies the winner.
- **Bug fix – Text button:** The text toggle button no longer disappears when the HOME button is off.
- **Clock color:** You can now change the color of the digital clock from the editor.
- **Bug fix – Inverter ↔ House flow:** Corrected the energy flow display between inverter and house.
- **Bug fix – Solar forecast SVG:** The solar forecast icon (sun/rain) is now always visible when solar forecast is enabled, even when "Hide texts" is on.
- **PV Box and Grid Box:** You can now disable PV Box and Grid Box directly from their respective sections in the editor.

### What's new in 3.1.2

- **🛡️ Never Lose Your Config Again:** Import & Export buttons let you save your setup locally and restore it instantly. Your data is finally safe.
- **Expanded string support:** Up to 9 strings for complex setups.
- **Smart flow visibility:** Flow line automatically disappears when wattage drops below threshold, keeping the dashboard clean.
- **Drag & Drop interface:** PV Box and Grid Box sections are now fully drag-and-drop — move and arrange them exactly where you like.
- **Customizable Array 2:** You can now modify the text within Array 2.
- **Bug fixes:** Fixed #212, #208.

### What's new in 3.0

- **Security keypad (PIN):** In House Management → Security you can assign a **keypad** entity. The keypad shows a PIN pad with **colors that change by state** (e.g. armed, disarmed, pending).
- **Camera fullscreen on motion:** When motion is detected (e.g. via your motion sensor), the **camera popup can expand to fullscreen** so you see the feed on the whole screen.
- **Custom thresholds:** In **Colori Flussi** (Flow colors) you can set **flow visibility threshold**, **PV animation threshold** (disable PV animation below a power value in W), and **grid animation threshold**.
- **Counter animation: house or inverter:** You can choose whether the **animated counter** shows **house consumption** or **inverter** (e.g. total PV) — configurable in the editor.
- **10 custom flow slots:** PRO section now supports **10 custom energy flows** (was 5), each with sensor, path, color, direction, and threshold.
- **Overlay and flows in PRO and Preview:** **Overlay images** and **custom flows** can be edited both in the **PRO** section and in the **Preview carbon (drag)** — drag to position overlays and flows in the preview.
- **Custom background:** You can use **your own background** by **uploading an image** (URL or local path), or **generate one with IA** using tokens (PRO). No need to use only the built-in backgrounds.
- **Editable array text:** The **text shown next to each PV/array** can be **customized** (e.g. “Stringa 1”, “Array 2”) from the editor.
- **Box Grid and Box PV – choose what to show:** **Grid box** and **PV box** now let you **choose what to display** (e.g. power, daily, or custom sensors) so you can show exactly what you need.
- **Home temperature sensor:** A **house temperature sensor** can be displayed on the card (e.g. living room temperature).
- **Digital clock:** An **optional digital clock** shows the current time on the card (style and position configurable).
- **All texts drag-and-drop:** **Every text label** on the card (PV, battery, grid, load, etc.) is **draggable** in the editor preview so you can place them exactly where you want.
- **Russian and Portuguese:** The card and editor are fully translated into **Russian** and **Portuguese** (in addition to EN, IT, DE, FR, NL, SK).
- **Fix #188 (GitHub):** Resolved the issue reported in [GitHub #188](https://github.com/PROGNET-SK/carbon-energy-card/issues/188).

### Performance note (important for Raspberry Pi / low-power kiosks)

- **Where performance is measured**: the card runs in the **browser** (frontend). If you use a Raspberry Pi as a kiosk (Chromium), performance/INP depends on the Pi’s browser.
- **`performance_mode: low`**: some heavy animation styles are **automatically simplified** to keep the UI responsive (better INP).  
  In particular, **`shimmer` / `arrows` / `fluid_flow`** will fall back to **`dots`** in low mode.
- **`performance_mode: auto`**: default is “balanced”, but on low-power clients it can **auto-downgrade to low** for responsiveness.
- **Want all styles anyway?** Set **`performance_mode: high`** (more CPU/GPU usage).

### Installation

**One-click install (HACS):**  
[![Open your Home Assistant instance and add this repository to HACS](https://my.home-assistant.io/badges/hacs_repository.svg)][install]  
Click the badge → your Home Assistant opens → the repo is added to HACS. Then go to **HACS → Frontend**, search **Carbon Energy Card**, and install. Finally: **Dashboard → Edit → Add card → Carbon Energy Card**.

**HACS (manual):**
1. HACS → Frontend → Custom repositories → Add `https://github.com/PROGNET-SK/carbon-energy-card` (category: Dashboard).
2. Search **Carbon Energy Card**, install it.
3. Dashboard → Edit → Add card → **Carbon Energy Card**.

**Manual (no HACS):** Place `carbon-energy-card.js` and `lumina_background.png` in `/config/www/community/carbon-energy-card/`, add the Lovelace resource, restart Home Assistant.

### Minimal configuration

```yaml
type: custom:carbon-energy-card
sensor_pv1: sensor.solar_production
sensor_daily: sensor.daily_production
sensor_bat1_soc: sensor.battery_soc
sensor_bat1_power: sensor.battery_power
sensor_home_load: sensor.home_consumption
sensor_grid_power: sensor.grid_power
background_image: /local/community/carbon-energy-card/lumina_background.png
```

Use the card’s visual editor (Edit → carbon) to configure entities, colors, and options.

---

### Latest features – how to use them

#### 1. House Management (cameras, lights, temperature, humidity)

- **HOME button:** A round **HOME** button appears on the card (together with Echo Alive and Text toggle, if enabled). Click it to open a **collapsible panel** on the right with **5 icons**: Camera, Lights, Temperature, Security, Humidity.
- **Assign entities:** In the editor, open the **“House Management”** section. Configure up to **6 entities per icon**:
  - **`house_camera_1` … `house_camera_6`:** Camera entities. Click the **Camera** icon → popup with a grid of your cameras.
  - **`house_lights_1` … `house_lights_6`:** Lights or switches. Click **Lights** → list with **ON / OFF** buttons.
  - **`house_temperature_1` … `house_temperature_6`:** Temperature sensors. Click **Temperature** → list with names and values (°C).
  - **`house_humidity_1` … `house_humidity_6`:** Humidity sensors. Click **Humidity** → list with names and values (%).
  - **`house_security_1` … `house_security_6`:** Security keypad (PIN). Click **Security** → keypad with PIN; **colors change by state** (armed, disarmed, pending, etc.).

**Cameras popup:**
- Each camera has a **▶ Start** and **■ Stop** button. Streams **do not** start automatically; click **▶ Start** to begin.
- If the camera supports it, the card uses **live streaming** (`ha-camera-stream`). Otherwise it shows **refreshed snapshots**.
- Close the popup with the **×** button or by clicking the dark overlay. Always click **■ Stop** before closing to free resources, or the card will stop streams automatically when you close.

**Lights popup:**
- Each light/switch shows its state (On/Off) and **ON** / **OFF** buttons. The card calls `light.turn_on` / `light.turn_off` or `switch.turn_on` / `switch.turn_off` automatically.

---

#### 2. Interactive popups (PV, Battery, Grid, House, Inverter)

- **Clickable areas:** Click on **PV** (daily badge / solar panels), **Battery**, **Grid**, **House**, or **Inverter** to open the corresponding popup.
- **Up to 6 lines per popup:** In the editor, use `sensor_popup_pv_1` … `sensor_popup_pv_6` (and similar for `house`, `bat`, `grid`, `inverter`). You can set custom names (`sensor_popup_pv_1_name`, etc.) and colors.
- **Toggles in popups:** If you assign **active entities** (e.g. lights, switches), the popup shows **toggles** to turn them on/off directly from the popup, without opening another card.
- **Closing:** Click the **popup background** (the semi‑transparent rect), not the content, to close. This keeps the popup easy to use without accidental closes.

---

#### 3. Echo Alive (Echo Show / Alexa)

- **Purpose:** Keeps the dashboard alive on **Echo Show** devices. The Silk browser tends to suspend or close the page; Echo Alive prevents that.
- **How to use:** Enable **`enable_echo_alive`** in the editor (Pulsanti e visibilità testi / Buttons and text visibility). A **round button** appears first on the left. On Echo Show, keep the dashboard open on a view that uses carbon with Echo Alive enabled; the card will ping the page to avoid suspension.

---

#### 4. Text toggle and “Clean mode”

- **Text toggle:** Enable **`enable_text_toggle_button`** to show a round **Text** button. Click it to **show or hide** all text labels (PV, battery, grid, etc.) and enjoy a **clean**, graphic‑only view.
- **Initial state:** You can hide texts by default and reveal them only when needed via the toggle.

---

#### 5. Battery: flow vs charge/discharge mode

- **`battery_power_mode`** in the editor:
  - **`flow`** (default): One sensor **with sign** (`sensor_battery_flow`). **Positive** = charging (flow toward battery), **negative** = discharging (flow toward inverter).
  - **`charge_discharge`**: Two separate sensors, `sensor_battery_charge` and `sensor_battery_discharge`. Charge → flow toward battery, discharge → flow toward inverter.

---

#### 5b. Battery SOC “grid” (6‑segment bar) + toggle

- **What it is:** a 6‑segment SOC bar shown on the battery overlay (looks like a “grid” on the battery).
- **Toggle:** enable/disable from the editor with **`battery_overlay_enabled`** (it also enables the battery overlay image).
- **Position/size:** `battery_overlay_x`, `battery_overlay_y`, `battery_overlay_width`, `battery_overlay_height`, `battery_overlay_opacity`.

---

#### 6. Animation style (shimmer, dashes, dots, arrows)

- **`animation_style`** (in **Colori flussi** / Flow colors, or **Stili animazioni**):  
  **`shimmer`** (default), **`dashes`**, **`dots`**, **`arrows`**.
- **`animation_speed_factor`:** Adjust speed (e.g. `1` = normal, `2` = faster). Use `0` to pause animations.

---

#### 6b. Performance mode (General Settings)

- In **General Settings** you can choose the performance profile with **`performance_mode`**:
  - `auto` (default): balanced
  - `low`: lower CPU usage (lighter animations)
  - `high`: smoothest animations (more CPU)

---

#### 7. Solar forecast (PRO)

- **Purpose:** Show **estimated solar production** with a **cyan holographic sun** and a status label (lots/moderate/little sun).
- **How to enable:** In the editor, open the **PRO** section and set:
  - `solar_forecast_enabled: true`
  - `sensor_solar_forecast: sensor.xxx` (your forecast sensor)
  - `solar_forecast_max_power` (e.g., 10000 W)
- **Position & style:** Adjust `solar_forecast_x`, `solar_forecast_y`, `solar_forecast_color` (default **#00FFFF**), and `solar_forecast_size`.
- **Tip:** If the sun doesn’t appear, the forecast icon (sun/rain) is always visible when solar forecast is enabled. If values don't appear, check that the sensor has a numeric value.

---

#### 8. Gallery (share and browse templates)

- **What it is:** The **Gallery** lets you **share** your carbon dashboard configuration as a template and **browse** templates shared by other users. You can apply a template to get a ready-made layout and then customize it.
- **How to share:** In the card **editor**, open the **Gallery** section and click **"Share to gallery"**. Fill in: **template name**, **description**, **author name**, **email** (for contact), and accept the **rules**. Your current dashboard configuration is sent to the gallery. **Limit:** one share per user per month.
- **How to use a template:** In the Gallery, browse the list or use **"Top"** to see the most popular templates. Click a template to view details and **Apply** to load it into your card (you can then edit it as usual).
- **Top & winner:** The **"Top"** shows templates ranked by popularity. A **30-day timer** runs; when it ends, the top template's author is notified as the winner for that period, then the timer resets.

---

#### 9. PRO section (optional extras)

PRO features require a **PRO password** (`pro_password`), unlocked via the editor’s PRO section (PayPal support).

- **Text visibility motion sensor (`text_visibility_sensor`):**  
  Set a **motion** entity (e.g. `binary_sensor.corridoio_motion`). When motion is detected, **texts appear** and stay visible for **60 seconds** after the last motion. Ideal for **wall tablets with a camera**: texts show only when someone is in front of the device.  
  If you use the **Text toggle** to show texts, visibility is controlled only by the button (no motion timeout).

- **Overlay images:**  
  Add up to **10 transparent PNGs** over the main background (e.g. second car, pool, wind turbine). Configure **`overlay_image`** … **`overlay_image_10`**, position, size, and opacity in the PRO section. Overlay and custom flows can also be edited in **Preview carbon (drag)**.

---

#### Visual editor: Drag & Drop (overlay images + background)

- Enable the carbon visual preview: turn on **“Preview carbon (drag)”** in the editor.
- **Overlay images (PRO):** drag inside the preview to update X/Y (`overlay_image_x`, `overlay_image_y`, and images 2–5).
- **Background:** drag inside the preview to update `background_image_x` / `background_image_y`.

- **Custom flows:**  
  Up to **10 custom energy flows** with their own sensor, path, color, and direction. Use **`custom_flow_1_enabled`** … **`custom_flow_10_enabled`**, **`custom_flow_1_sensor`** … **`custom_flow_10_sensor`**, path (or preset), color, threshold. Editable in PRO and in **Preview carbon (drag)**.

- **Custom text:**  
  Up to **5 custom text labels** with optional sensor values, position, color, and font size.

- **Solar forecast:**  
  Enable **`solar_forecast_enabled`**, set **`sensor_solar_forecast`**, and tune **`solar_forecast_max_power`**, position, and color (**default #00FFFF**).

---

### Quick reference

| Feature | Where to configure | What it does |
|--------|-------------------|--------------|
| House Management | Editor → **House Management** | Cameras, lights, temperature, humidity, security keypad (PIN) via HOME panel |
| Security keypad (PIN) | **House Management** → Security | Keypad with PIN; colors by state (armed/disarmed/pending) |
| Camera fullscreen on motion | **PRO** / motion sensor | Camera popup expands to fullscreen when motion detected |
| Custom thresholds | **Colori Flussi** (Flow colors) | PV / flow / grid animation thresholds (W) |
| Counter: house or inverter | Editor | Animated counter shows house consumption or inverter (PV) |
| 10 custom flows | **PRO** section | Up to 10 custom energy flows; editable in PRO and Preview |
| Overlay (10 images) | **PRO** + **Preview carbon (drag)** | Up to 10 overlay images; drag to position in preview |
| Custom background | Editor / **PRO** | Upload your image or generate with IA (tokens) |
| Day/Night background | Editor → **Day/Night** | Night image URL; auto switch by sun; upload to `www/community/carbon-energy-card/` |
| 4 batteries (SVG + fill) | Editor → **Batteries** | Up to 4 independent batteries with SVG logo and SOC fill |
| Text colors (auto, house) | Editor | Individual colors for PV/battery/grid texts; house absorption text color |
| Array text | Editor | Customize text next to each PV/array |
| Box Grid / Box PV content | **Grid Box** / **PV Box** | Choose what to show (power, daily, custom sensors) |
| Home temperature | Editor | Display house temperature sensor on card |
| Digital clock | Editor | Optional digital clock on card |
| All texts drag-and-drop | **Preview carbon (drag)** | Every text label draggable in editor preview |
| Interactive popups | **Popup** options (`sensor_popup_*`) | PV, Battery, Grid, House, Inverter popups with toggles |
| Echo Alive | **`enable_echo_alive`** | Keeps dashboard alive on Echo Show |
| Text toggle | **`enable_text_toggle_button`** | Show/hide all texts (clean mode) |
| Performance mode | **General Settings** → **`performance_mode`** | Choose `auto` / `low` / `high` performance profile |
| Battery mode | **`battery_power_mode`** | `flow` or `charge_discharge` |
| Battery SOC grid | **`battery_overlay_enabled`** | Toggle battery overlay + 6‑segment SOC grid |
| Animation style | **`animation_style`** | `shimmer`, `dashes`, `dots`, `arrows` |
| Gallery | Editor → **Gallery** | Share your template to the gallery; browse and apply templates from others; Top & 30-day winner |
| Solar forecast | **PRO** section | Estimated solar production + holographic sun (icon always visible) |
| PRO (motion, overlay, etc.) | **PRO** section + **`pro_password`** | Motion-based text, overlay images, custom flows/text |
| Languages | **Language** (editor) | EN, IT, DE, FR, NL, **RU**, **PT**, **SK** |

---

### Troubleshooting

- **Card not showing:** Ensure the Lovelace resource is added and clear the browser cache.
- **Values at zero:** Check entity IDs and that entities exist and are available.
- **Cameras 403 / not loading:** Cameras must expose `access_token` (most HA camera integrations do). Use **■ Stop** before closing the camera popup.
- **Editor slow:** Increase **`update_interval`** or reduce dashboard refresh frequency.
- **Images not downloaded with HACS:** HACS installs only the JavaScript file (`.js`). To use the default backgrounds, download the images from the [**dist** folder](https://github.com/PROGNET-SK/carbon-energy-card/tree/main/dist) (e.g. `lumina_background.png`, `lumina_background1.png`), place them in `/config/www/community/carbon-energy-card/`, then reload the dashboard. Links: [lumina_background.png](https://github.com/PROGNET-SK/carbon-energy-card/raw/main/dist/lumina_background.png), [lumina_background1.png](https://github.com/PROGNET-SK/carbon-energy-card/raw/main/dist/lumina_background1.png).

---

## Slovenčina

### Prehľad

Carbon Energy Card je vlastná karta Lovelace pre Home Assistant, ktorá zobrazuje animované toky energie (PV, batéria, sieť, záťaž, tepelné čerpadlo, EV), agreguje PV stringy a batérie a podporuje voliteľné metriky nabíjania EV a tepelného čerpadla. Obsahuje **Správu domácnosti** (kamery, svetlá, teplota, vlhkosť, bezpečnostná klávesnica), **interaktívne vyskakovacie okná** s prepínačmi, okrúhle tlačidlá (Echo Alive, Prepínač textu, DOMOV), **PRO** funkcie (viditeľnosť textového zobrazenia na základe pohybu, obrázky prekrytia, vlastné toky), **Import a export** pre zálohu konfigurácie a najnovšie vylepšenia.

### Čo je nové vo verzii 3.3.3

- **Galéria:** Zdieľajte svoje šablóny dashboardov s komunitou a prehliadajte si tie od iných. Z editora použite **"Share to gallery"** na odoslanie šablóny (názov, popis, autor, email, pravidlá). Jedno zdieľanie na používateľa mesačne. **"Top"** ukazuje najobľúbenejšie šablóny; 30-dňový časovač sa resetuje a upozorní víťaza.
- **Oprava chyby – Textové tlačidlo:** Prepínač textu už nezmizne, keď je tlačidlo DOMOV vypnuté.
- **Farba hodín:** Teraz môžete zmeniť farbu digitálnych hodín priamo v editore.
- **Oprava chyby – Tok Menič ↔ Dom:** Opravené zobrazenie toku energie medzi meničom a domom.
- **Oprava chyby – SVG solárna predpoveď:** Ikona solárnej predpovede (slnko/dážď) je teraz vždy viditeľná, keď je solárna predpoveď povolená, aj keď je zapnuté "Skryť texty".
- **PV Box a Grid Box:** Boxy pre fotovoltiku a sieť môžete teraz zakázať priamo z ich príslušných sekcií v editore.

### Čo je nové vo verzii 3.1.2

- **🛡️ Už nikdy nestratíte svoju konfiguráciu:** Tlačidlá Import a Export vám umožnia lokálne uložiť vašu zostavu a okamžite ju obnoviť. Vaše dáta sú konečne v bezpečí.
- **Rozšírená podpora stringov:** Až 9 stringov pre komplexné inštalácie.
- **Inteligentná viditeľnosť toku:** Línia toku automaticky zmizne, keď výkon klesne pod nastavenú hranicu, čím udržuje dashboard čistý.
- **Rozhranie Drag & Drop:** Sekcie PV Box a Grid Box sú teraz plne ovládateľné pomocou "potiahni a pusť" — presuňte a usporiadajte ich presne tam, kam chcete.
- **Prispôsobiteľný Array 2:** Teraz môžete upraviť text v rámci Array 2.
- **Opravy chýb:** Opravené #212, #208.

### Čo je nové vo verzii 3.0

- **Bezpečnostná klávesnica (PIN):** V Správa domácnosti → Bezpečnosť môžete priradiť entitu **keypad**. Klávesnica zobrazuje číselník PIN s **farbami, ktoré sa menia podľa stavu** (napr. zapnuté, vypnuté, čakajúce).
- **Kamera na celú obrazovku pri pohybe:** Keď je detegovaný pohyb (napr. pomocou pohybového senzora), **vyskakovacie okno kamery sa môže roztiahnuť na celú obrazovku**, aby ste jasne videli záznam.
- **Vlastné prahové hodnoty:** V kategórii farieb tokov môžete nastaviť **prah viditeľnosti toku**, **prah animácie PV** a **prah animácie siete**.
- **Animácia počítadla: dom alebo menič:** Môžete si vybrať, či **animované počítadlo** zobrazuje **spotrebu domu** alebo **meniča** (napr. celkové PV).
- **10 vlastných slotov pre toky:** PRO sekcia teraz podporuje **10 vlastných energetických tokov** (predtým 5).
- **Prekrytia a toky v PRO a Náhľade:** **Prekrývajúce obrázky** a **vlastné toky** je možné upravovať v sekcii PRO aj pomocou potiahnutia v náhľade.
- **Vlastné pozadie:** Môžete použiť **vlastné pozadie** pomocou URL alebo nahratia obrázka.
- **Upraviteľný text array:** **Text zobrazený vedľa každého PV/array** je možné **prispôsobiť**.
- **Ruština a Portugalčina:** Karta a editor sú preložené do ďalších jazykov.

### Poznámka k výkonu (dôležité pre Raspberry Pi / slabšie zariadenia)

- **Kde sa meria výkon**: karta beží v **prehliadači** (frontend).
- **`performance_mode: low`**: niektoré náročné štýly animácií sú **automaticky zjednodušené**, aby bola zachovaná odozva UI (napríklad prechod z `shimmer` na `dots`).
- **`performance_mode: auto`**: predvolený vyvážený režim. Automaticky sa podtaktuje pri slabšom výkone klienta.

### Inštalácia

**Inštalácia jedným kliknutím (HACS):**  
Vo vašom Home Assistant inštalácií prejdite do HACS, pridajte repozitár a nainštalujte **Carbon Energy Card**. Pridajte kartu na Dashboard.

**HACS (manuálne):**
1. HACS → Frontend → Vlastné repozitáre → Pridať `https://github.com/PROGNET-SK/carbon-energy-card` (kategória: Dashboard).
2. Vyhľadajte **Carbon Energy Card** a nainštalujte ju.
3. Dashboard → Upraviť → Pridať kartu → **Carbon Energy Card**.

### Minimálna konfigurácia

```yaml
type: custom:carbon-energy-card
sensor_pv1: sensor.solar_production
sensor_daily: sensor.daily_production
sensor_bat1_soc: sensor.battery_soc
sensor_bat1_power: sensor.battery_power
sensor_home_load: sensor.home_consumption
sensor_grid_power: sensor.grid_power
background_image: /local/community/carbon-energy-card/lumina_background.png
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
