# Group Task

---

# Strategi War Tim Enigma Camp

Kamu membuat modul JS untuk memutuskan strategi war di game Mobile Legends berdasarkan status tim.

## Aturan Strategi

1. Jika total gold tim ≥ 50000 dan jumlah turret musuh tersisa ≤ 3 → serang Lord.
2. Jika rata-rata HP hero tim < 40% → mundur dan recall.
3. Jika kill tim ≥ kill musuh + 10 → push semua lane.
4. Jika tidak memenuhi semua kondisi di atas → farming dulu.

## Data Awal

```javascript
let teamGold = [12000, 10500, 9800, 11000, 11200]; // gold tiap player
let enemyTurret = 2;
let teamHP = [80, 35, 25, 60, 90]; // persentase HP tiap hero
let teamKill = 40;
let enemyKill = 28;
```

## Tugas

1. Hitung total gold tim.
2. Hitung rata-rata HP tim.
3. Buat fungsi `decideStrategy()` untuk menentukan strategi berdasarkan aturan di atas.
4. Cetak strategi yang dipilih ke console.

## Output (Contoh)

```bash
Total gold tim: 54500
Rata-rata HP tim: 58
Strategi: Serang Lord!
```
