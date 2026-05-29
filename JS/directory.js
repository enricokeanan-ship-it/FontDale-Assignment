const buttonFloor = document.querySelectorAll(".filter-btn");
const allBrands = document.querySelectorAll(".brand-slider img");
const allCategories = document.querySelectorAll(".brand-category");

function activeTheFloor(clickedFloor) {
  buttonFloor.forEach(function (floor) {
    floor.classList.remove("active");
  });
  clickedFloor.classList.add("active");
}

function filterBrands(floor) {
  allBrands.forEach(function (img) {
    if (floor === "all") {
      img.style.display = "block";
      return;
    }

    if (img.dataset.floor === floor) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}

function updateCategoryVisiblity() {
  allCategories.forEach(function (category) {
    const brandInCategory = category.querySelectorAll("img");

    let checkVisibility = false;

    brandInCategory.forEach(function (img) {
      if (img.style.display !== "none") {
        checkVisibility = true;
      }
    });

    if (checkVisibility) {
      category.style.display = "flex";
    } else {
      category.style.display = "none";
    }
  });
}

buttonFloor.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const floor = btn.textContent.trim().toLowerCase();
    activeTheFloor(btn);
    filterBrands(floor);
    updateCategoryVisiblity();
  });
});

const tenantData = {
  // LUXURY WATCH
  Rolex: {
    category: "Luxury Watch",
    floor: "Ground Floor",
    storeNumber: "GF-01",
    phone: "021 7278 1001",
  },
  TagHeuer: {
    category: "Luxury Watch",
    floor: "Ground Floor",
    storeNumber: "GF-02",
    phone: "021 7278 1002",
  },
  Tudor: {
    category: "Luxury Watch",
    floor: "Ground Floor",
    storeNumber: "GF-03",
    phone: "021 7278 1003",
  },
  Tissot: {
    category: "Luxury Watch",
    floor: "Ground Floor",
    storeNumber: "GF-04",
    phone: "021 7278 1004",
  },
  "Audemars-Piguet": {
    category: "Luxury Watch",
    floor: "Ground Floor",
    storeNumber: "GF-05",
    phone: "021 7278 1005",
  },
  Omega: {
    category: "Luxury Watch",
    floor: "Ground Floor",
    storeNumber: "GF-06",
    phone: "021 7278 1006",
  },
  Cartier: {
    category: "Luxury Watch",
    floor: "Ground Floor",
    storeNumber: "GF-07",
    phone: "021 7278 1007",
  },

  // BEAUTY
  "bath&bodyworks": {
    category: "Beauty, Health & Personal Care",
    floor: "Floor 1",
    storeNumber: "1-01",
    phone: "021 7278 2001",
  },
  Century: {
    category: "Beauty, Health & Personal Care",
    floor: "Floor 1",
    storeNumber: "1-02",
    phone: "021 7278 2002",
  },
  "Jo Malone": {
    category: "Beauty, Health & Personal Care",
    floor: "Ground Floor",
    storeNumber: "GF-08",
    phone: "021 7278 2003",
  },
  Kiehls: {
    category: "Beauty, Health & Personal Care",
    floor: "Floor 1",
    storeNumber: "1-03",
    phone: "021 7278 2004",
  },
  "L'Occitane": {
    category: "Beauty, Health & Personal Care",
    floor: "Floor 1",
    storeNumber: "1-04",
    phone: "021 7278 2005",
  },
  Sephora: {
    category: "Beauty, Health & Personal Care",
    floor: "Floor 1",
    storeNumber: "1-05",
    phone: "021 7278 2006",
  },
  sociolla: {
    category: "Beauty, Health & Personal Care",
    floor: "Floor 1",
    storeNumber: "1-06",
    phone: "021 7278 2007",
  },
  "The Body shops": {
    category: "Beauty, Health & Personal Care",
    floor: "Floor 1",
    storeNumber: "1-07",
    phone: "021 7278 2008",
  },
  Watsons: {
    category: "Beauty, Health & Personal Care",
    floor: "Floor 1",
    storeNumber: "1-08",
    phone: "021 7278 2009",
  },

  // FASHION
  Balenciaga: {
    category: "Fashion & Accessories",
    floor: "Ground Floor",
    storeNumber: "GF-09",
    phone: "021 7278 3001",
  },
  Burberry: {
    category: "Fashion & Accessories",
    floor: "Ground Floor",
    storeNumber: "GF-10",
    phone: "021 7278 3002",
  },
  Celine: {
    category: "Fashion & Accessories",
    floor: "Ground Floor",
    storeNumber: "GF-11",
    phone: "021 7278 3003",
  },
  Chanel: {
    category: "Fashion & Accessories",
    floor: "Ground Floor",
    storeNumber: "GF-12",
    phone: "021 7278 3004",
  },
  Dior: {
    category: "Fashion & Accessories",
    floor: "Ground Floor",
    storeNumber: "GF-13",
    phone: "021 7278 3005",
  },
  "Foot Joy": {
    category: "Fashion & Accessories",
    floor: "Floor 1",
    storeNumber: "1-09",
    phone: "021 7278 3006",
  },
  Gucci: {
    category: "Fashion & Accessories",
    floor: "Ground Floor",
    storeNumber: "GF-14",
    phone: "021 7278 3007",
  },
  Hermes: {
    category: "Fashion & Accessories",
    floor: "Ground Floor",
    storeNumber: "GF-15",
    phone: "021 7278 3008",
  },
  Prada: {
    category: "Fashion & Accessories",
    floor: "Ground Floor",
    storeNumber: "GF-16",
    phone: "021 7278 3009",
  },

  // ELECTRONICS
  Ibox: {
    category: "Electronics, IT & Gadgets",
    floor: "Floor 2",
    storeNumber: "2-01",
    phone: "021 7278 4001",
  },
  Eraphone: {
    category: "Electronics, IT & Gadgets",
    floor: "Floor 2",
    storeNumber: "2-02",
    phone: "021 7278 4002",
  },
  DJi: {
    category: "Electronics, IT & Gadgets",
    floor: "Floor 2",
    storeNumber: "2-03",
    phone: "021 7278 4003",
  },
  Samsung: {
    category: "Electronics, IT & Gadgets",
    floor: "Floor 2",
    storeNumber: "2-04",
    phone: "021 7278 4004",
  },
  Sony: {
    category: "Electronics, IT & Gadgets",
    floor: "Floor 2",
    storeNumber: "2-05",
    phone: "021 7278 4005",
  },
  Oppo: {
    category: "Electronics, IT & Gadgets",
    floor: "Floor 2",
    storeNumber: "2-06",
    phone: "021 7278 4006",
  },
  Vivo: {
    category: "Electronics, IT & Gadgets",
    floor: "Floor 2",
    storeNumber: "2-07",
    phone: "021 7278 4007",
  },
  "Xiao mi": {
    category: "Electronics, IT & Gadgets",
    floor: "Floor 2",
    storeNumber: "2-08",
    phone: "021 7278 4008",
  },
  Dyson: {
    category: "Electronics, IT & Gadgets",
    floor: "Floor 2",
    storeNumber: "2-09",
    phone: "021 7278 4009",
  },

  // BANKS
  BCA: {
    category: "Bank & Services",
    floor: "Ground Floor",
    storeNumber: "GF-17",
    phone: "021 7278 5001",
  },
  BNI: {
    category: "Bank & Services",
    floor: "Ground Floor",
    storeNumber: "GF-18",
    phone: "021 7278 5002",
  },
  CIMB: {
    category: "Bank & Services",
    floor: "Ground Floor",
    storeNumber: "GF-19",
    phone: "021 7278 5003",
  },
  Danamon: {
    category: "Bank & Services",
    floor: "Ground Floor",
    storeNumber: "GF-20",
    phone: "021 7278 5004",
  },
  Mandiri: {
    category: "Bank & Services",
    floor: "Ground Floor",
    storeNumber: "GF-21",
    phone: "021 7278 5005",
  },
  OCBC: {
    category: "Bank & Services",
    floor: "Ground Floor",
    storeNumber: "GF-22",
    phone: "021 7278 5006",
  },
  SinarMas: {
    category: "Bank & Services",
    floor: "Ground Floor",
    storeNumber: "GF-23",
    phone: "021 7278 5007",
  },

  // FOOD & BEVERAGE
  Chatime: {
    category: "Food & Beverage",
    floor: "Floor 2",
    storeNumber: "2-10",
    phone: "021 7278 6001",
  },
  "Haagen Dazs": {
    category: "Food & Beverage",
    floor: "Floor 2",
    storeNumber: "2-11",
    phone: "021 7278 6002",
  },
  "Monsieur Spoon": {
    category: "Food & Beverage",
    floor: "Floor 2",
    storeNumber: "2-12",
    phone: "021 7278 6003",
  },
  "Pizza Marzano": {
    category: "Food & Beverage",
    floor: "Floor 2",
    storeNumber: "2-13",
    phone: "021 7278 6004",
  },
  Remboelan: {
    category: "Food & Beverage",
    floor: "Floor 2",
    storeNumber: "2-14",
    phone: "021 7278 6005",
  },
  Shori: {
    category: "Food & Beverage",
    floor: "Floor 2",
    storeNumber: "2-15",
    phone: "021 7278 6006",
  },
  Starbucks: {
    category: "Food & Beverage",
    floor: "Ground Floor",
    storeNumber: "GF-24",
    phone: "021 7278 6007",
  },
  "Sushi Hiro": {
    category: "Food & Beverage",
    floor: "Floor 2",
    storeNumber: "2-16",
    phone: "021 7278 6008",
  },
  "Sushi Tei": {
    category: "Food & Beverage",
    floor: "Floor 2",
    storeNumber: "2-17",
    phone: "021 7278 6009",
  },
};

// Buat modal element
const modal = document.createElement("div");
modal.classList.add("tenant-modal-overlay");
modal.innerHTML = `
  <div class="tenant-modal">
    <button class="tenant-modal-close">&times;</button>
    <div class="tenant-modal-body">
      <div class="tenant-modal-logo-box">
        <img class="tenant-modal-logo" src="" alt="" />
      </div>
      <div class="tenant-modal-info">
        <p class="tenant-modal-category"></p>
        <h2 class="tenant-modal-name"></h2>
        <div class="tenant-modal-details">
          <div class="tenant-modal-row">
            <span class="tenant-modal-label">LOCATION:</span>
            <span class="tenant-modal-value" id="modal-floor"></span>
          </div>
          <div class="tenant-modal-row">
            <span class="tenant-modal-label">STORE NUMBER:</span>
            <span class="tenant-modal-value" id="modal-store"></span>
          </div>
          <div class="tenant-modal-row">
            <span class="tenant-modal-label">PHONE:</span>
            <span class="tenant-modal-value" id="modal-phone"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
document.body.appendChild(modal);

// Attach click ke semua logo di brand-slider
const allLogos = document.querySelectorAll(".brand-slider img");

allLogos.forEach(function (img) {
  img.style.cursor = "pointer";

  img.addEventListener("click", function () {
    const name = img.getAttribute("alt");
    const data = tenantData[name];

    if (!data) return;

    // Isi modal
    modal.querySelector(".tenant-modal-logo").src = img.src;
    modal.querySelector(".tenant-modal-logo").alt = name;
    modal.querySelector(".tenant-modal-name").textContent = name.toUpperCase();
    modal.querySelector(".tenant-modal-category").textContent = data.category;
    modal.querySelector("#modal-floor").textContent = data.floor;
    modal.querySelector("#modal-store").textContent = data.storeNumber;
    modal.querySelector("#modal-phone").textContent = data.phone;

    // Tampilkan modal
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  });
});

// Tutup modal
modal
  .querySelector(".tenant-modal-close")
  .addEventListener("click", function () {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  });

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
});
