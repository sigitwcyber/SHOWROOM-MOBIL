document.addEventListener("DOMContentLoaded", () => {
    // 1. Loading Screen Premium
    const loader = document.getElementById("loading-screen");
    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            // Pemicu animasi hitung angka setelah loading hilang
            animateCounters();
        }, 800);
    });

    // 2. Slider Otomatis Hero Section
    const slides = document.querySelectorAll(".hero-section .slide");
    let currentSlide = 0;
    setInterval(() => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }, 5000);

    // 3. Sticky Navbar & Active Navigation Links
    const navbar = document.querySelector(".navbar");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        // Efek Sticky
        if (window.scrollY > 50) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }

        // Active Link sesuai posisi scroll
        let currentSection = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });

        // Tampilkan/Sembunyikan Tombol Back To Top
        const backToTopBtn = document.getElementById("back-to-top");
        if (window.scrollY > 600) {
            backToTopBtn.style.display = "flex";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // 4. Back To Top Action
    document.getElementById("back-to-top").addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 5. Mobile Hamburgermenu / Side Menu
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Tutup menu jika link diklik
    navLinks.forEach(link => link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    // 6. Dark Mode Toggle
    const themeToggleBtn = document.getElementById("dark-mode-toggle");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);
        if (currentTheme === "dark") {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }

    themeToggleBtn.addEventListener("click", () => {
        let theme = document.documentElement.getAttribute("data-theme");
        if (theme === "dark") {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });

    // 7. Render Katalog Mobil & Sistem Filter Real-time
    const carGrid = document.getElementById("car-grid");
    const searchInput = document.getElementById("search-input");
    const filterMerek = document.getElementById("filter-merek");
    const filterTahun = document.getElementById("filter-tahun");
    const filterHarga = document.getElementById("filter-harga");

    // Fungsi format mata uang Rupiah
    function formatRupiah(angka) {
        return "Rp " + angka.toLocaleString('id-ID');
    }

    // Fungsi menampilkan data mobil
    function displayCars(cars) {
        carGrid.innerHTML = "";
        if (cars.length === 0) {
            carGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 40px 0;">Mobil yang Anda cari tidak ditemukan.</p>`;
            return;
        }

        cars.forEach(car => {
            const carCard = document.createElement("div");
            carCard.classList.add("car-card");
            carCard.innerHTML = `
                <div class="car-img-wrapper">
                    <img src="${car.gambar}" alt="${car.nama}">
                </div>
                <div class="car-info">
                    <h3>${car.nama}</h3>
                    <div class="car-specs-brief">
                        <span><i class="fas fa-calendar-alt"></i> ${car.tahun}</span>
                        <span><i class="fas fa-cog"></i> ${car.transmisi}</span>
                        <span><i class="fas fa-car"></i> ${car.merek}</span>
                    </div>
                    <div class="car-price-row">
                        <span class="price-tag">${formatRupiah(car.harga)}</span>
                        <button class="btn-sm view-detail-btn" data-id="${car.id}">Detail</button>
                    </div>
                </div>
            `;
            carGrid.appendChild(carCard);
        });

        // Pasang ulang trigger event klik modal ke tombol baru
        setupModalTriggers();
    }

    // Fungsi Logika Penyaringan Filter & Cari
    function filterCars() {
        const query = searchInput.value.toLowerCase();
        const merekValue = filterMerek.value;
        const tahunValue = filterTahun.value;
        const hargaValue = filterHarga.value;

        const filtered = carsData.filter(car => {
            const matchNama = car.nama.toLowerCase().includes(query);
            const matchMerek = merekValue === "" || car.merek === merekValue;
            const matchTahun = tahunValue === "" || car.tahun.toString() === tahunValue;
            
            let matchHarga = true;
            if (hargaValue === "1bawah") matchHarga = car.harga < 1500000000;
            else if (hargaValue === "1keatas") matchHarga = car.harga >= 1500000000 && car.harga <= 3000000000;
            else if (hargaValue === "3keatas") matchHarga = car.harga > 3000000000;

            return matchNama && matchMerek && matchTahun && matchHarga;
        });

        displayCars(filtered);
    }

    // Pasang Event listener pengetikan & penyaringan filter
    searchInput.addEventListener("input", filterCars);
    filterMerek.addEventListener("change", filterCars);
    filterTahun.addEventListener("change", filterCars);
    filterHarga.addEventListener("change", filterCars);

    // Tampilkan semua mobil saat pertama kali dibuka
    displayCars(carsData);

    // 8. Modal Pop-up Detail Mobil
    const modal = document.getElementById("car-modal");
    const modalBody = document.getElementById("modal-body");
    const closeModalBtn = document.querySelector(".close-modal");

    function setupModalTriggers() {
        document.querySelectorAll(".view-detail-btn").forEach(button => {
            button.addEventListener("click", (e) => {
                const carId = parseInt(e.target.getAttribute("data-id"));
                const selectedCar = carsData.find(c => c.id === carId);
                
                if (selectedCar) {
                    // Buat isi popup detail
                    modalBody.innerHTML = `
                        <div class="modal-img">
                            <img src="${selectedCar.gambar}" alt="${selectedCar.nama}">
                        </div>
                        <div class="modal-details">
                            <h2>${selectedCar.nama}</h2>
                            <p class="modal-price">${formatRupiah(selectedCar.harga)}</p>
                            <p class="modal-desc">${selectedCar.deskripsi}</p>
                            <div class="spec-grid">
                                <div class="spec-item"><strong>Mesin/Daya Baterai</strong>${selectedCar.spesifikasi.mesin}</div>
                                <div class="spec-item"><strong>Tenaga Maksimal</strong>${selectedCar.spesifikasi.daya}</div>
                                <div class="spec-item"><strong>Bahan Bakar</strong>${selectedCar.spesifikasi.bbm}</div>
                                <div class="spec-item"><strong>Kapasitas</strong>${selectedCar.spesifikasi.kapasitas}</div>
                            </div>
                            <a href="https://wa.me/6281234567890?text=Halo%20Luxe%20Drive,%20saya%20tertarik%20dengan%20mobil%20${encodeURIComponent(selectedCar.nama)}" target="_blank" class="btn-wa">
                                <i class="fab fa-whatsapp"></i> Hubungi via WhatsApp
                            </a>
                        </div>
                    `;
                    modal.style.display = "flex";
                    document.body.style.overflow = "hidden"; // kunci scroll background page
                }
            });
        });
    }

    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // 9. Validasi Formulir Kontak JavaScript
    const contactForm = document.getElementById("contact-form");
    
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const namaInput = document.getElementById("nama");
        const emailInput = document.getElementById("email");
        const pesanInput = document.getElementById("pesan");

        let isValid = true;

        // Validasi Nama
        if (namaInput.value.trim() === "") {
            document.getElementById("error-nama").innerText = "Nama lengkap wajib diisi";
            isValid = false;
        } else {
            document.getElementById("error-nama").innerText = "";
        }

        // Validasi Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            document.getElementById("error-email").innerText = "Masukkan format email yang valid";
            isValid = false;
        } else {
            document.getElementById("error-email").innerText = "";
        }

        // Validasi Pesan
        if (pesanInput.value.trim() === "") {
            document.getElementById("error-pesan").innerText = "Pesan Anda tidak boleh kosong";
            isValid = false;
        } else {
            document.getElementById("error-pesan").innerText = "";
        }

        // Jika Lolos Validasi
        if (isValid) {
            alert(`Terima kasih ${namaInput.value}, pesan Anda telah berhasil dikirim! Tim sales kami akan segera menghubungi Anda.`);
            contactForm.reset();
        }
    });

    // 10. Bonus Animasi Counter Statistik Showroom
    function animateCounters() {
        const counters = document.querySelectorAll(".counter");
        counters.forEach(counter => {
            counter.innerText = "0";
            const updateCounter = () => {
                const target = +counter.getAttribute("data-target");
                const current = +counter.innerText;
                const increment = target / 50; // Kecepatan hitung

                if (current < target) {
                    counter.innerText = `${Math.ceil(current + increment)}`;
                    setTimeout(updateCounter, 30);
                } else {
                    counter.innerText = target + "+";
                }
            };
            updateCounter();
        });
    }
});