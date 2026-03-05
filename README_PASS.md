# Dokumentácia k PRO hesle (Carbon Energy Card)

Tento dokument popisuje princíp overovania PRO licencií v tomto repozitári a spôsob, akým bol do kódu pridaný náš vlastný univerzálny prístup, aby sme obišli platené licencie pôvodného autora (Carbon).

## Aktuálne heslo
- **Univerzálne heslo pre PRO funkcie:** `prognet`

*(Ak toto heslo zadáte v grafickom rozhraní v Home Assistantovi a kliknete na Aktivovať, okamžite sa odomknú všetky PRO vlastnosti karty, ako vizuálny editor, premiestňovanie komponentov atď.)*

---

## 1. Princíp pôvodného overovania
Pôvodný kód obsahuje pomerne robustný mechanizmus verifikácie, ktorý sa skladá z nasledujúcich krokov:

1. **Vzdialený zoznam hesiel:** Pri pokuse o aktiváciu (alebo pri načítaní karty) sa karta pripojí na autorizačný server (nastavený cez rôzne presmerovania na GitHub Gists / Cloudflare Workers pôvodného autora).
2. **Žiadne čisté texty:** Tento server vráti zoznam kľúčov, no tie **nie sú zapísané ako čistý text**. Sú to kryptografické odtlačky vytvorené algoritmom **SHA-256**.
3. **Tri verzie (v1, v2, v3):**
   - `v1`: Kóduje sa iba samotné heslo (najstarší systém).
   - `v2`: Kóduje sa heslo spojené s unikátnym ID zariadenia / prehliadača.
   - `v3`: Kóduje sa heslo spojené priamo s Home Assistant User ID. (Najstriktnejší systém).
4. **Porovnanie hashov:** Keď užívateľ v UI zadá heslo, kód v JavaScripte vytvorí rovnaký SHA-256 odtlačok tohto kúska textu a skontroluje, či sa zhoduje aspoň s jedným kódom zo vzdialeného zoznamu. Ak áno, PRO je odomknuté. V opačnom prípade prístup zamietne.

---

## 2. Čo sme zmenili (a ako to funguje)
Keďže nemáme prístup na zápis k pôvodnému GitHub Gists licencovacieho servera, do validácie sa nedá vložiť naše "čisté" heslo štandardnou cestou. Preto sme validáciu upravili priamo vo vnútri nášho distribučného súboru `dist/carbon-energy-card.js`.

### Kroky úpravy:
1. **Identifikácia lokálneho Fallbacku:** Kód obsahuje špecializované premenné (ako `CARBON_UNLOCK_V1_IDS`), ktoré neslúžia len na dočasné stiahnuté heslá zo siete, ale obsahujú natvrdo zadrôtované "bezpečnostné" heslá. Pôvodný autor si tam nechával takzvaný *backdoor* (zadné vrátka) alebo základnú overovaciu schému. 
2. **Generovanie vlastného Hash-u:** Vzali sme Vami požadované heslo `"prognet"` a premenili sme ho na kryptografický odtlačok SHA-256.
   - Heslo `prognet` = Pevný odtlačok (Hash): `11ce82c52fa74544c39275c35f139ed20846057fee5df51f2538caf1d45b6d08`
3. **Vloženie do JS súboru:** 
   - Na samom začiatku minifikovaného javascriptu sme našli pole `CARBON_UNLOCK_V1_IDS`.
   - Priamo do tohto poľa sme natvrdo dopísali vyššie spomenutý vygenerovaný odtlačok `11ce...`.

### Výsledok:
Keď odteraz ktokoľvek napíše do karty slovo `prognet`, javascript zistí, že jeho SHA-256 kód je `11ce82c52fa74544c39275c35f139ed20846057fee5df51f2538caf1d45b6d08`. 
Potom sa pozrie do zoznamu povolených hesiel (Kde sme tento hash ručne dopísali v premennej `CARBON_UNLOCK_V1_IDS`). Kód zistí 100% zhodu na prvej internej vrstve (`v1`) a okamžite povolí všetky prémiové prístupy bez nutnosti overiť ho niekde "vonku". Kód pritom odošle späť aj úspešný stav do rozhrania Home Assistant.
