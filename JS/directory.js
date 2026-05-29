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

// FontDale Directory - Complete Tenant Data with Descriptions
// Based on real brand research from verified sources

const tenantData = {
  // ===== LUXURY WATCH =====
  Rolex: {
    category: "Luxury Watch",
    floor: "Ground Floor",
    storeNumber: "GF-01",
    phone: "021 7278 1001",
    description:
      "Swiss luxury watchmaker founded in 1905, synonymous with precision and prestige. Famous for iconic models like Submariner and Daytona.",
  },
  Cartier: {
    category: "Luxury Watch",
    floor: "Ground Floor",
    storeNumber: "GF-02",
    phone: "021 7278 1002",
    description:
      "French luxury brand renowned for exquisite watches and jewelry. Founder of the modern wristwatch, celebrated for timeless elegance.",
  },
  Tudor: {
    category: "Luxury Watch",
    floor: "Ground Floor",
    storeNumber: "GF-03",
    phone: "021 7278 1003",
    description:
      "Swiss watch brand offering luxury timepieces at more accessible prices. Known for heritage and reliability since 1946.",
  },
  Omega: {
    category: "Luxury Watch",
    floor: "Ground Floor",
    storeNumber: "GF-04",
    phone: "021 7278 1004",
    description:
      "Prestigious Swiss watch manufacturer with over 160 years of heritage. Official timekeeper of Olympic Games and renowned for precision.",
  },
  TagHeuer: {
    category: "Luxury Watch",
    floor: "Ground Floor",
    storeNumber: "GF-05",
    phone: "021 7278 1005",
    description:
      "Swiss luxury watchmaker specializing in sports watches and chronographs. Known for precision timing and innovative design.",
  },
  Tissot: {
    category: "Luxury Watch",
    floor: "Ground Floor",
    storeNumber: "GF-06",
    phone: "021 7278 1006",
    description:
      "Swiss watch brand established in 1853, offering quality timepieces blending traditional craftsmanship with modern innovation.",
  },
  "Audemars Piguet": {
    category: "Luxury Watch",
    floor: "Ground Floor",
    storeNumber: "GF-07",
    phone: "021 7278 1007",
    description:
      "Elite Swiss watchmaker renowned for haute horlogerie and limited editions. Iconic for the Royal Oak sports watch.",
  },

  // ===== FASHION & ACCESSORIES =====
  Dior: {
    category: "Fashion & Accessories",
    floor: "Ground Floor",
    storeNumber: "GF-08",
    phone: "021 7278 3001",
    description:
      'French luxury fashion house founded 1946, revolutionized women\'s fashion with the iconic "New Look". Symbol of elegance and opulence.',
  },
  Gucci: {
    category: "Fashion & Accessories",
    floor: "Ground Floor",
    storeNumber: "GF-09",
    phone: "021 7278 3002",
    description:
      "Italian luxury brand established 1921, known for distinctive designs and craftsmanship. Pioneering house in modern luxury fashion.",
  },
  Prada: {
    category: "Fashion & Accessories",
    floor: "Ground Floor",
    storeNumber: "GF-10",
    phone: "021 7278 3003",
    description:
      "Italian luxury brand founded 1913, renowned for minimalist aesthetics and innovative materials. Leader in high fashion and accessories.",
  },
  Hermes: {
    category: "Fashion & Accessories",
    floor: "Ground Floor",
    storeNumber: "GF-11",
    phone: "021 7278 3004",
    description:
      "French ultra-luxury brand established 1837, famous for handcrafted leather goods and the iconic Birkin bag. Symbol of exclusivity.",
  },
  Chanel: {
    category: "Fashion & Accessories",
    floor: "Ground Floor",
    storeNumber: "GF-12",
    phone: "021 7278 3005",
    description:
      "French luxury fashion house founded 1910, iconic for the Little Black Dress and No. 5 perfume. Epitome of timeless sophistication.",
  },
  Burberry: {
    category: "Fashion & Accessories",
    floor: "Ground Floor",
    storeNumber: "GF-13",
    phone: "021 7278 3006",
    description:
      "British luxury brand established 1856, famous for iconic trench coats and plaid patterns. Blends heritage with contemporary style.",
  },
  Balenciaga: {
    category: "Fashion & Accessories",
    floor: "Ground Floor",
    storeNumber: "GF-14",
    phone: "021 7278 3007",
    description:
      "Spanish luxury fashion house known for avant-garde designs and bold silhouettes. Renowned for innovative approach to luxury fashion.",
  },
  Celine: {
    category: "Fashion & Accessories",
    floor: "Ground Floor",
    storeNumber: "GF-15",
    phone: "021 7278 3008",
    description:
      "French luxury brand founded 1945, celebrated for minimalist elegance and exquisite leather goods. Hallmark of understated luxury.",
  },
  "Foot Joy": {
    category: "Fashion & Accessories",
    floor: "Floor 1",
    storeNumber: "1-09",
    phone: "021 7278 3009",
    description:
      "A leading global brand in golf equipment. Focusing on innovative, high-tech golf shoes, gloves, and apparel to provide maximum comfort and performance on the course.",
  },

  // ===== BEAUTY, HEALTH & PERSONAL CARE =====
  Sephora: {
    category: "Beauty, Health & Personal Care",
    floor: "Floor 1",
    storeNumber: "1-01",
    phone: "021 7278 2001",
    description:
      "Global beauty retailer offering curated selection of makeup, skincare, and fragrance from leading brands. Destination for beauty enthusiasts.",
  },
  "Bath & Body Works": {
    category: "Beauty, Health & Personal Care",
    floor: "Floor 1",
    storeNumber: "1-02",
    phone: "021 7278 2002",
    description:
      "American beauty brand specializing in body care products and fragrances. Known for seasonal collections and aromatic experiences.",
  },
  Watsons: {
    category: "Beauty, Health & Personal Care",
    floor: "Floor 1",
    storeNumber: "1-03",
    phone: "021 7278 2003",
    description:
      "Leading Asia-Pacific health and beauty retailer offering pharmacy, cosmetics, and wellness products. Trusted care destination.",
  },
  Kiehls: {
    category: "Beauty, Health & Personal Care",
    floor: "Floor 1",
    storeNumber: "1-04",
    phone: "021 7278 2004",
    description:
      "American premium skincare brand established 1851, renowned for dermatologist-tested products and natural ingredients.",
  },
  "L'Occitane": {
    category: "Beauty, Health & Personal Care",
    floor: "Floor 1",
    storeNumber: "1-05",
    phone: "021 7278 2005",
    description:
      "French beauty brand celebrating Provence heritage, famous for lavender and natural skincare. Premium botanical products.",
  },
  Century: {
    category: "Beauty, Health & Personal Care",
    floor: "Floor 1",
    storeNumber: "1-06",
    phone: "021 7278 2007",
    description:
      "Leading pharmacy and health & beauty product provider in Indonesia. Offering a wide range of trusted medicines, vitamins, and personal care essentials.",
  },
  sociolla: {
    category: "Beauty, Health & Personal Care",
    floor: "Floor 1",
    storeNumber: "1-07",
    phone: "021 7278 2008",
    description:
      "Indonesia's most complete beauty shopping destination. Offering a wide selection of original makeup, skincare, and perfumes from renowned local and international brands.",
  },
  "The Body shops": {
    category: "Beauty, Health & Personal Care",
    floor: "Floor 1",
    storeNumber: "1-08",
    phone: "021 7278 2009",
    description:
      "British beauty brand championing an ethical and eco-friendly concept. Known for its natural, 100% vegetarian, and cruelty-free body, face, and fragrance products.",
  },
  "Jo Malone": {
    category: "Beauty, Health & Personal Care",
    floor: "Ground Floor",
    storeNumber: "GF-16",
    phone: "021 7278 2006",
    description:
      "British luxury fragrance brand known for fresh, layerable scents. Iconic for minimalist design and sophisticated aromas.",
  },

  // ===== ELECTRONICS, IT & GADGETS =====
  Samsung: {
    category: "Electronics, IT & Gadgets",
    floor: "Floor 2",
    storeNumber: "2-01",
    phone: "021 7278 4001",
    description:
      "South Korean technology leader offering smartphones, televisions, and home appliances. Pioneer in digital innovation.",
  },
  Sony: {
    category: "Electronics, IT & Gadgets",
    floor: "Floor 2",
    storeNumber: "2-02",
    phone: "021 7278 4002",
    description:
      "Japanese electronics giant known for high-quality audio, cameras, and gaming products. Leader in entertainment technology.",
  },
  iBox: {
    category: "Electronics, IT & Gadgets",
    floor: "Floor 2",
    storeNumber: "2-03",
    phone: "021 7278 4003",
    description:
      "Premium Apple retailer offering iPhones, MacBooks, and accessories. Authorized distributor of Apple products.",
  },
  DJI: {
    category: "Electronics, IT & Gadgets",
    floor: "Floor 2",
    storeNumber: "2-04",
    phone: "021 7278 4004",
    description:
      "Chinese technology company specializing in consumer drones and imaging technology. Leader in aerial photography innovation.",
  },
  Dyson: {
    category: "Electronics, IT & Gadgets",
    floor: "Floor 2",
    storeNumber: "2-05",
    phone: "021 7278 4005",
    description:
      "British technology company revolutionizing home appliances through innovative engineering. Known for cordless vacuums and air purifiers.",
  },
  Eraphone: {
    category: "Electronics, IT & Gadgets",
    floor: "Floor 2",
    storeNumber: "2-06",
    phone: "021 7278 4006",
    description:
      "Indonesia's leading electronics retailer specializing in mobile phones and accessories. Trusted distributor of quality tech products.",
  },
  Oppo: {
    category: "Electronics, IT & Gadgets",
    floor: "Floor 2",
    storeNumber: "2-07",
    phone: "021 7278 4007",
    description:
      "Chinese technology brand known for innovative smartphones and mobile photography. Focus on design and user experience.",
  },
  Vivo: {
    category: "Electronics, IT & Gadgets",
    floor: "Floor 2",
    storeNumber: "2-08",
    phone: "021 7278 4008",
    description:
      "Chinese smartphone manufacturer emphasizing camera technology and design. Known for cutting-edge mobile innovations.",
  },
  Xiaomi: {
    category: "Electronics, IT & Gadgets",
    floor: "Floor 2",
    storeNumber: "2-09",
    phone: "021 7278 4009",
    description:
      "Chinese tech company offering smartphones, smart home devices, and wearables. Known for value and innovation.",
  },

  // ===== BANK & SERVICES =====
  BCA: {
    category: "Bank & Services",
    floor: "Ground Floor",
    storeNumber: "GF-17",
    phone: "021 7278 5001",
    description:
      "Indonesia's largest private bank offering comprehensive financial services. Trusted banking partner for individuals and businesses.",
  },
  BNI: {
    category: "Bank & Services",
    floor: "Ground Floor",
    storeNumber: "GF-18",
    phone: "021 7278 5002",
    description:
      "State-owned Indonesian bank providing retail, corporate, and investment banking services. Leader in financial inclusion.",
  },
  CIMB: {
    category: "Bank & Services",
    floor: "Ground Floor",
    storeNumber: "GF-19",
    phone: "021 7278 5003",
    description:
      "Regional ASEAN bank offering diverse financial products and services. Committed to digital banking innovation.",
  },
  Danamon: {
    category: "Bank & Services",
    floor: "Ground Floor",
    storeNumber: "GF-20",
    phone: "021 7278 5004",
    description:
      "Indonesian private bank providing consumer and corporate banking solutions. Focused on customer-centric services.",
  },
  Mandiri: {
    category: "Bank & Services",
    floor: "Ground Floor",
    storeNumber: "GF-21",
    phone: "021 7278 5005",
    description:
      "Indonesia's largest state-owned bank offering comprehensive financial services. Pioneer in digital banking transformation.",
  },
  OCBC: {
    category: "Bank & Services",
    floor: "Ground Floor",
    storeNumber: "GF-22",
    phone: "021 7278 5006",
    description:
      "Southeast Asian banking group providing wealth management and investment services. Strong presence across ASEAN region.",
  },
  SinarMas: {
    category: "Bank & Services",
    floor: "Ground Floor",
    storeNumber: "GF-23",
    phone: "021 7278 5007",
    description:
      "Indonesian bank part of the Sinar Mas group, offering retail and corporate banking services. Focused on financial accessibility.",
  },

  // ===== FOOD & BEVERAGE =====
  Starbucks: {
    category: "Food & Beverage",
    floor: "Ground Floor",
    storeNumber: "GF-24",
    phone: "021 7278 6001",
    description:
      'Global coffeehouse chain founded 1971 in Seattle. Known for premium coffee and creating the "third place" between home and work.',
  },
  "Haagen Dazs": {
    category: "Food & Beverage",
    floor: "Floor 2",
    storeNumber: "2-10",
    phone: "021 7278 6002",
    description:
      "Premium ice cream brand renowned for high-quality ingredients and rich flavors. American luxury dessert destination.",
  },
  "Sushi Tei": {
    category: "Food & Beverage",
    floor: "Floor 2",
    storeNumber: "2-11",
    phone: "021 7278 6003",
    description:
      "Asian sushi restaurant chain offering authentic Japanese cuisine. Known for fresh ingredients and skilled sushi preparation.",
  },
  "Pizza Marzano": {
    category: "Food & Beverage",
    floor: "Floor 2",
    storeNumber: "2-12",
    phone: "021 7278 6004",
    description:
      "Italian pizza restaurant bringing authentic Naples-style pizza. Premium ingredients and traditional pizza-making techniques.",
  },
  Chatime: {
    category: "Food & Beverage",
    floor: "Floor 2",
    storeNumber: "2-13",
    phone: "021 7278 6005",
    description:
      "Taiwanese bubble tea brand with global presence. Famous for customizable drinks and high-quality tea selections.",
  },
  "Monsieur Spoon": {
    category: "Food & Beverage",
    floor: "Floor 2",
    storeNumber: "2-14",
    phone: "021 7278 6006",
    description:
      "Premium dessert café offering artisanal pastries and innovative sweet creations. French-inspired patisserie concept.",
  },
  Remboelan: {
    category: "Food & Beverage",
    floor: "Floor 2",
    storeNumber: "2-15",
    phone: "021 7278 6007",
    description:
      "Indonesian restaurant celebrating local cuisine and culinary traditions. Gateway to authentic Indonesian flavors.",
  },
  Shori: {
    category: "Food & Beverage",
    floor: "Floor 2",
    storeNumber: "2-16",
    phone: "021 7278 6008",
    description:
      "Japanese tonkatsu restaurant specializing in premium pork cutlets. Known for meticulous preparation and quality ingredients.",
  },
  "Sushi Hiro": {
    category: "Food & Beverage",
    floor: "Floor 2",
    storeNumber: "2-17",
    phone: "021 7278 6009",
    description:
      "A modern Japanese restaurant iconic for serving sushi on miniature wooden stairs. Serving premium quality ingredients with an elegant and authentic Japanese interior atmosphere.",
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
        
        <p class="tenant-modal-description"></p>
        
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

    modal.querySelector(".tenant-modal-logo").src = img.src;
    modal.querySelector(".tenant-modal-logo").alt = name;
    modal.querySelector(".tenant-modal-name").textContent = name.toUpperCase();
    modal.querySelector(".tenant-modal-category").textContent = data.category;
    modal.querySelector("#modal-floor").textContent = data.floor;
    modal.querySelector("#modal-store").textContent = data.storeNumber;
    modal.querySelector("#modal-phone").textContent = data.phone;
    modal.querySelector(".tenant-modal-description").textContent =
      data.description;

    // Open the modal and lock the background scroll
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
