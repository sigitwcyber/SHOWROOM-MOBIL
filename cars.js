// Data mobil untuk katalog showroom
const carsData = [
    {
        id: 1,
        nama: "Porsche GT3 RS",
        merek: "SPORT",
        tahun: 2024,
        transmisi: "Otomatis",
        harga: 13000000000,
        gambar: "assets/images/icons/F9D62E45B045496DBC909B1A362B9DA1_4A3B5B18AE2F4CA799D84EF8EBBFCC30_CZ23V20OX0009-911-gt3-rs-driving-side.jpg",
        deskripsi: "Mobil sport premium dengan akselerasi luar biasa dan kenyamanan tingkat tinggi. Cocok untuk Anda yang berjiwa dinamis.",
        spesifikasi: { mesin: "Boxer 6-silinder", daya: "518 HP", bbm: "Pertamax Turbo", kapasitas: "2 Kursi" }
    },
    {
        id: 2,
        nama: "BMW M4 Competition",
        merek: "SPORT",
        tahun: 2024,
        transmisi: "Otomatis",
        harga: 1899000000,
        gambar: "assets/images/icons/41-bmw-m4-g82-competition-trackday-evo_main.jpg",
        deskripsi: "mobil sport dua pintu dengan atap yang bisa dibuka-tutup secara elektrik untuk pengalaman berkendara yang lebih santai namun tetap bertenaga..",
        spesifikasi: { mesin: "TwinPower Turbo 6-silinder segaris", daya: "530 HP", bbm: "Pertamax Turbo", kapasitas: "4 Kursi" }
    },
    {
        id: 3,
        nama: "Lamborghini Revuelto",
        merek: "HYPERCAR",
        tahun: 2025,
        transmisi: "Otomatis",
        harga: 52579767500,
        gambar: "assets/images/icons/Revoulto-Black.jpg.webp",
        deskripsi: "hypercar mobil ini memiliki spesifikassi yang melampaui batas tradisional supercar,.",
        spesifikasi: { mesin: "V12 Naturally Aspirated 6.5 liter", daya: "1.001 HP", bbm: "Pertamax Turbo", kapasitas: "2 Kursi" }
    },
    {
        id: 4,
        nama: "Ferrari SF90 Stradale",
        merek: "HYPERCAR",
        tahun: 2023,
        transmisi: "Otomatis",
        harga: 22992508500,
        gambar: "assets/images/icons/New-2026-McLaren-750S-Spider-TechLux.jpg",
        deskripsi: "mobil ini hypercar pertama ferrari yang menggunakan teknologo hybrid dan penggerak semua roda{AWD}",
        spesifikasi: { mesin: "plug-in hybrid ", daya: "986 HP", bbm: "Pertamax Turbo", kapasitas: "2 Kursi" }
    },
    {
        id: 5,
        nama: "McLaren 750s Spider",
        merek: "SUPERCAR",
        tahun: 2026,
        transmisi: "otomatis",
        harga: 6100000000,
        gambar: "assets/images/icons/New-2026-McLaren-750S-Spider-TechLux (1).jpg",
        deskripsi: "supercar atap terbuka bertenaga buas.",
        spesifikasi: { mesin: "V8 4.0 liter twin-turbocharged", daya: "740 HP", bbm: "Pertamax Turbo", kapasitas: "2 Kursi" }
    },
    {
        id: 6,
        nama: "Mustang GT350",
        merek: "SPort",
        tahun: 2025,
        transmisi: "Otomatis",
        harga: 1780000000,
        gambar: "assets/images/icons/LC1_6961-copy.webp",
        deskripsi: "model khusus ini memiliki fitur aerodinamis berspesifikasi trans-arm.",
        spesifikasi: { mesin: "V8 naturally aspirated 5,2 liter", daya: "526 HP", bbm: "Pertamax Turbo", kapasitas: "2 Kursi" }
    },
    {
        id: 7,
        nama: "BMW M3 COMPETITION",
        merek: "SPORT",
        tahun: 2025,
        transmisi: "Otomatis",
        harga: 2880000000,
        gambar: "assets/images/icons/BMW-M3-G80-1-1536x1150.jpg",
        deskripsi: "hadir dengan pembaruan signifikan, termasuk peningkatan tenaga mesin 3.0L twin turbo 6-silinder.",
        spesifikasi: { mesin: "3.0L twin turbo 6-silinder", daya: "523 HP", bbm: "Pertamax Turbo", kapasitas: "4 Kursi" }
    },
    {
        id: 8,
        nama: "Porsche cayman GTS",
        merek: "SPORT",
        tahun: 2015,
        transmisi: "Otomatis",
        harga: 1750000000,
        gambar: "assets/images/icons/2024.11.13-PORSCHE-CAYMAN-GTS-2015_1.jpg",
        deskripsi: "mobil sport bermesin tengah yang sangat dipuja karena performa murninya.",
        spesifikasi: { mesin: "3.4 liter naturally aspirated", daya: "340 HP", bbm: "Listrik", kapasitas: "2 Kursi" }
    },
    {
        id: 9,
        nama: "Ferrari 812",
        merek: "SUPERCAR",
        tahun: 2025,
        transmisi: "Otomatis",
        harga: 16500000000,
        gambar: "assets/images/icons/New-Ferrari-812-1160x691.avif",
        deskripsi: "mobil ini dirancang untuk kecepatan ekstrem.",
        spesifikasi: { mesin: "V12 naturally aspirated", daya: "789 HP", bbm: "Pertamax Turbo", kapasitas: "2 Kursi" }
    },
    {
        id: 10,
        nama: "BMW F30",
        merek: "Sport",
        tahun: 2017,
        transmisi: "Manual",
        harga: 289000000,
        gambar: "assets/images/icons/BMW-3-Series-Sedan--F30--LCI-5431_90.jpg",
        deskripsi: "Mobil legendaris dengan raungan mesin murni yang akan memacu adrenalin Anda di setiap tikungan.",
        spesifikasi: { mesin: "turbocharger", daya: "184 HP", bbm: "Pertamax Turbo", kapasitas: "4 Kursi" }
    },
    {
        id: 11,
        nama: "Toyota Alphard",
        merek: "SUV",
        tahun: 2025,
        transmisi: "Otomatis",
        harga: 1600000000,
        gambar: "assets/images/icons/alphard 2025_20250520.webp",
        deskripsi: "Kombinasi estetika urban modern dan ketangguhan SUV sejati. Pilihan tepat untuk keluarga urban.",
        spesifikasi: { mesin: "hybrid electric vehicle", daya: "180 HP", bbm: "Pertamax", kapasitas: "7 Kursi" }
    },
    {
        id: 12,
        nama: "Toyota 86 GT",
        merek: "SPORT",
        tahun: 2020,
        transmisi: "Otomatis",
        harga: 799000000,
        gambar: "assets/images/icons/OIP (1).webp",
        deskripsi: "mobil sport coupe penggerak roda belakang yang memadukan peforma gesit dan penanganan tajam.",
        spesifikasi: { mesin: "Boxer 2,0 liter naturally-aspirated", daya: "205 HP", bbm: "Pertamax Turbo", kapasitas: "4 Kursi" }
    }
]