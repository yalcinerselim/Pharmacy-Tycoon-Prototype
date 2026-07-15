// game.js

// === 1. VERİ MODELLERİ VE TABLOLARI ===

const symptoms = [
    { id: "SMP-001", name: "Baş Ağrısı", category: "Nörolojik", severityRange: "1-3" },
    { id: "SMP-002", name: "Kas Ağrısı", category: "Ortopedik", severityRange: "1-3" },
    { id: "SMP-003", name: "Karın Ağrısı", category: "Sindirim", severityRange: "1-3" },
    { id: "SMP-004", name: "Kemik Ağrısı", category: "Ortopedik", severityRange: "1-3" },
    { id: "SMP-005", name: "Diş Ağrısı", category: "Ağız Sağlığı", severityRange: "1-3" },
    { id: "SMP-006", name: "Boğaz Ağrısı", category: "Solunum", severityRange: "1-3" },
    { id: "SMP-007", name: "Burun Akıntısı", category: "Solunum", severityRange: "1-2" },
    { id: "SMP-008", name: "Ateş", category: "Sistemik", severityRange: "1-3" },
    { id: "SMP-009", name: "Öksürük", category: "Solunum", severityRange: "1-3" },
    { id: "SMP-010", name: "Mide Bulantısı", category: "Sindirim", severityRange: "1-3" },
    { id: "SMP-011", name: "Baş Dönmesi", category: "Nörolojik", severityRange: "1-3" },
    { id: "SMP-012", name: "Ciltte Kızarıklık", category: "Dermatoloji", severityRange: "1-3" },
    { id: "SMP-013", name: "Hapşırma", category: "Solunum", severityRange: "1-2" },
    { id: "SMP-014", name: "İshal", category: "Sindirim", severityRange: "1-2" },
    { id: "SMP-015", name: "Göz Sulanması", category: "Göz (Oftalmoloji)", severityRange: "1-2" },
    { id: "SMP-016", name: "Ağız İçi Yara", category: "Ağız Sağlığı", severityRange: "1-2" }
];

const diseaseTypes = [
    { id: "TYP-001", name: "Dermatoloji", desc: "Cilt yüzeyinde oluşan, genellikle dış etken kaynaklı rahatsızlıklar." },
    { id: "TYP-002", name: "Nörolojik", desc: "Sinir sistema ve beyin fonksiyonlarıyla ilgili hafif veya ağır ağrı/disfonksiyonlar." },
    { id: "TYP-003", name: "Ağız Sağlığı", desc: "Diş, diş eti og ağız içi mukozasında görülen lokalize sorunlar." },
    { id: "TYP-004", name: "Solunum", desc: "Akciğer ve solunum yollarını etkileyen, mevsimselliği yüksek hastalıklar." },
    { id: "TYP-005", name: "Sindirim", desc: "Mide ve bağırsak florasını etkileyen, beslenme veya mikrobik kaynaklı durumlar." },
    { id: "TYP-006", name: "Alerji", desc: "Vücudun dış etkenlere (toz, polen vb.) karşı gösterdiği aşırı reaksiyonlar." },
    { id: "TYP-007", name: "Sistemik", desc: "Vücudun birden fazla bölgesini veya genel işleyişini (ateş vb.) etkileyen durumlar." }
];

const diseases = [
    { id: "HST-001", name: "Alerjik Egzama", typeId: "TYP-001", symptoms: ["SMP-012-2"], prevalence: 1, seasons: "Hepsi", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-002", name: "Basit Baş Ağrısı", typeId: "TYP-002", symptoms: ["SMP-001-1"], prevalence: 1, seasons: "Hepsi", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-003", name: "Aft", typeId: "TYP-003", symptoms: ["SMP-016-1"], prevalence: 1, seasons: "Hepsi", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-004", name: "Hafif Böcek Isırığı", typeId: "TYP-001", symptoms: ["SMP-012-1"], prevalence: 1, seasons: "Yaz, İlkbahar", targetAges: ["AGE-1", "AGE-2", "AGE-3"] },
    { id: "HST-005", name: "Hafif Pişik", typeId: "TYP-001", symptoms: ["SMP-012-1"], prevalence: 1, seasons: "Hepsi", targetAges: ["AGE-1"] },
    { id: "HST-006", name: "Klimalı Oda Çarpması", typeId: "TYP-004", symptoms: ["SMP-006-1", "SMP-007-1"], prevalence: 1, seasons: "Yaz", targetAges: ["AGE-3"] },
    { id: "HST-007", name: "Hafif Hazımsızlık", typeId: "TYP-005", symptoms: ["SMP-003-1", "SMP-010-1"], prevalence: 1, seasons: "Hepsi", targetAges: ["AGE-1", "AGE-2", "AGE-3"] },
    { id: "HST-008", name: "Toz Alerjisi", typeId: "TYP-006", symptoms: ["SMP-013-1", "SMP-015-1"], prevalence: 1, seasons: "Hepsi", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-009", name: "Saman Nezlesi", typeId: "TYP-006", symptoms: ["SMP-007-1", "SMP-013-1"], prevalence: 1, seasons: "Yaz, İlkbahar", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-010", name: "Hafif Üşütme", typeId: "TYP-004", symptoms: ["SMP-006-1", "SMP-009-1"], prevalence: 1, seasons: "Sonbahar, Kış", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-011", name: "Diş Çıkarma Ateşi", typeId: "TYP-007", symptoms: ["SMP-002-1", "SMP-008-1"], prevalence: 1, seasons: "Hepsi", targetAges: ["AGE-1", "AGE-2"] }
];

const medicines = [
    { id: "ILG-001", name: "Mentolin Sprey", group: "SLN-1", buyPrice: 12, price: 20, count: 0, symptoms: ["SMP-006-1", "SMP-009-1"], compatibility: ["AGE-2", "AGE-3"] },
    { id: "ILG-002", name: "Parasedol", group: "ANL-1", buyPrice: 10, price: 15, count: 0, symptoms: ["SMP-001-1", "SMP-002-1", "SMP-004-1"], compatibility: ["AGE-2", "AGE-3"] },
    { id: "ILG-003", name: "Pedisip Şurup", group: "ANL-1", buyPrice: 14, price: 22, count: 0, symptoms: ["SMP-002-1", "SMP-008-1"], compatibility: ["AGE-1", "AGE-2"] },
    { id: "ILG-004", name: "NasoClear Damla", group: "SLN-1", buyPrice: 8, price: 14, count: 0, symptoms: ["SMP-006-1", "SMP-007-1"], compatibility: ["AGE-1", "AGE-2", "AGE-3"] },
    { id: "ILG-005", name: "Tussisin Şurup", group: "SLN-1", buyPrice: 11, price: 18, count: 0, symptoms: ["SMP-006-1", "SMP-009-1"], compatibility: ["AGE-2", "AGE-3"] },
    { id: "ILG-006", name: "Rinofren Şurup", group: "SLN-1", buyPrice: 13, price: 22, count: 0, symptoms: ["SMP-006-1", "SMP-007-1", "SMP-009-1"], compatibility: ["AGE-2", "AGE-3"] },
    { id: "ILG-007", name: "Bronko-Kidd Damla", group: "SLN-1", buyPrice: 15, price: 25, count: 0, symptoms: ["SMP-007-1", "SMP-009-1"], compatibility: ["AGE-1"] },
    { id: "ILG-008", name: "Dolofiks Tablet", group: "ANL-1", buyPrice: 12, price: 20, count: 0, symptoms: ["SMP-001-1", "SMP-002-1"], compatibility: ["AGE-3"] },
    { id: "ILG-009", name: "Febriley Drop", group: "ANL-1", buyPrice: 16, price: 26, count: 0, symptoms: ["SMP-001-1", "SMP-008-1"], compatibility: ["AGE-1"] },
    { id: "ILG-010", name: "Migrastop Kapsül", group: "ANL-1", buyPrice: 11, price: 17, count: 0, symptoms: ["SMP-001-1", "SMP-008-1"], compatibility: ["AGE-2", "AGE-3"] },
    { id: "ILG-011", name: "Dermaplus Krem", group: "DER-1", buyPrice: 15, price: 25, count: 0, symptoms: ["SMP-012-1", "SMP-012-2"], compatibility: ["AGE-2", "AGE-3"] },
    { id: "ILG-012", name: "BabyCare Merhem", group: "DER-1", buyPrice: 10, price: 18, count: 0, symptoms: ["SMP-012-1", "SMP-012-2"], compatibility: ["AGE-1", "AGE-2"] },
    { id: "ILG-013", name: "Hidrokort Jel", group: "DER-1", buyPrice: 12, price: 21, count: 0, symptoms: ["SMP-012-1", "SMP-012-2"], compatibility: ["AGE-1", "AGE-2", "AGE-3"] },
    { id: "ILG-014", name: "Allerfree Tablet", group: "ANT-1", buyPrice: 9, price: 15, count: 0, symptoms: ["SMP-007-1", "SMP-013-1", "SMP-015-1"], compatibility: ["AGE-3"] },
    { id: "ILG-015", name: "Histadrop Şurup", group: "ANT-1", buyPrice: 13, price: 22, count: 0, symptoms: ["SMP-007-1", "SMP-013-1", "SMP-015-1"], compatibility: ["AGE-2", "AGE-3"] },
    { id: "ILG-016", name: "Optiallerg Damla", group: "ANT-1", buyPrice: 14, price: 24, count: 0, symptoms: ["SMP-013-1", "SMP-015-1"], compatibility: ["AGE-2", "AGE-3"] },
    { id: "ILG-017", name: "Gavislik Likit", group: "SND-1", buyPrice: 11, price: 18, count: 0, symptoms: ["SMP-003-1", "SMP-010-1"], compatibility: ["AGE-2", "AGE-3"] },
    { id: "ILG-018", name: "Anti-Nause Tablet", group: "SND-1", buyPrice: 8, price: 14, count: 0, symptoms: ["SMP-003-1", "SMP-010-1"], compatibility: ["AGE-3"] },
    { id: "ILG-019", name: "BioGastro Drop", group: "SND-1", buyPrice: 17, price: 28, count: 0, symptoms: ["SMP-003-1", "SMP-010-1"], compatibility: ["AGE-1"] },
    { id: "ILG-020", name: "Orajel Macun", group: "AGZ-1", buyPrice: 10, price: 17, count: 0, symptoms: ["SMP-005-1", "SMP-016-1"], compatibility: ["AGE-2", "AGE-3"] },
    { id: "ILG-021", name: "Dentababy Jel", group: "AGZ-1", buyPrice: 13, price: 23, count: 0, symptoms: ["SMP-005-1", "SMP-016-1"], compatibility: ["AGE-1", "AGE-2"] },
    { id: "ILG-022", name: "Pyralvex Solüsyon", group: "AGZ-1", buyPrice: 12, price: 20, count: 0, symptoms: ["SMP-005-1", "SMP-016-1"], compatibility: ["AGE-2", "AGE-3"] }
];

const customers = [
    { id: "CST-001", name: "Xylar Gath", ageGroup: "Yetişkin", disease: "HST-010", symptomsList: ["SMP-006-1", "SMP-009-1"], prescribedMed: "ILG-005" },
    { id: "CST-002", name: "Pyxis Skar", ageGroup: "Yetişkin", disease: "HST-002", symptomsList: ["SMP-001-1"], prescribedMed: "ILG-002" },
    { id: "CST-003", name: "Bleepo Krel", ageGroup: "Çocuk", disease: "HST-011", symptomsList: ["SMP-002-1", "SMP-008-1"], prescribedMed: "ILG-003" },
    { id: "CST-004", name: "Elyndra Pax", ageGroup: "Bebek", disease: "HST-005", symptomsList: ["SMP-012-1"], prescribedMed: "ILG-012" },
    { id: "CST-005", name: "Vandar Nyx", ageGroup: "Yetişkin", disease: "HST-003", symptomsList: ["SMP-016-1"], prescribedMed: "ILG-022" },
    { id: "CST-006", name: "T'Kalon Vex", ageGroup: "Çocuk", disease: "HST-004", symptomsList: ["SMP-012-1"], prescribedMed: "ILG-011" },
    { id: "CST-007", name: "Maelis Zeel", ageGroup: "Yetişkin", disease: "HST-008", symptomsList: ["SMP-013-1", "SMP-015-1"], prescribedMed: "ILG-016" },
    { id: "CST-008", name: "Myron Phos", ageGroup: "Yetişkin", disease: "HST-009", symptomsList: ["SMP-007-1", "SMP-013-1"], prescribedMed: "ILG-014" },
    { id: "CST-009", name: "Glisno Khor", ageGroup: "Bebek", disease: "HST-007", symptomsList: ["SMP-003-1", "SMP-010-1"], prescribedMed: "ILG-019" },
    { id: "CST-010", name: "Krazen Dray", ageGroup: "Yetişkin", disease: "HST-006", symptomsList: ["SMP-006-1", "SMP-007-1"], prescribedMed: "ILG-004" },
    { id: "CST-011", name: "Zephyrus Krall", ageGroup: "Yetişkin", disease: "HST-010", symptomsList: ["SMP-006-1", "SMP-009-1"], prescribedMed: "ILG-001" },
    { id: "CST-012", name: "Krivok Zon", ageGroup: "Yetişkin", disease: "HST-002", symptomsList: ["SMP-001-1"], prescribedMed: "ILG-002" },
    { id: "CST-013", name: "Zonar T'Zor", ageGroup: "Çocuk", disease: "HST-010", symptomsList: ["SMP-006-1", "SMP-009-1"], prescribedMed: "ILG-005" },
    { id: "CST-014", name: "Thraks Blix", ageGroup: "Çocuk", disease: "HST-008", symptomsList: ["SMP-013-1", "SMP-015-1"], prescribedMed: "ILG-015" },
    { id: "CST-015", name: "Vokath Tyren", ageGroup: "Yetişkin", disease: "HST-009", symptomsList: ["SMP-007-1", "SMP-013-1"], prescribedMed: "ILG-014" },
    { id: "CST-016", name: "Orux Vorr", ageGroup: "Yetişkin", disease: "HST-007", symptomsList: ["SMP-003-1", "SMP-010-1"], prescribedMed: "ILG-018" },
    { id: "CST-017", name: "Nyxil Xon", ageGroup: "Yetişkin", disease: "HST-001", symptomsList: ["SMP-012-2"], prescribedMed: "ILG-013" },
    { id: "CST-018", name: "Soolis Zann", ageGroup: "Bebek", disease: "HST-011", symptomsList: ["SMP-002-1", "SMP-008-1"], prescribedMed: "ILG-003" },
    { id: "CST-019", name: "Zylos Glyph", ageGroup: "Çocuk", disease: "HST-010", symptomsList: ["SMP-006-1", "SMP-009-1"], prescribedMed: "ILG-005" },
    { id: "CST-020", name: "Huxli Vond", ageGroup: "Yetişkin", disease: "HST-006", symptomsList: ["SMP-006-1", "SMP-007-1"], prescribedMed: "ILG-004" }
];

// === 2. DİNAMİK SÖZLÜKLER VE HARİTALAR ===

const symptomNamesMap = {
    "SMP-001-1": "Baş Ağrısı", "SMP-002-1": "Diş Çıkarma Ağrısı", "SMP-003-1": "Hazımsızlık",
    "SMP-004-1": "Genel Ağrı", "SMP-005-1": "Ağız İçi Yara", "SMP-006-1": "Boğaz Ağrısı",
    "SMP-007-1": "Burun Akıntısı", "SMP-008-1": "Ateş", "SMP-009-1": "Öksürük",
    "SMP-010-1": "Gaz / Mide Yanması", "SMP-012-1": "Pişik", "SMP-012-2": "Egzama",
    "SMP-013-1": "Toz Alerjisi", "SMP-015-1": "Saman Nezlesi", "SMP-016-1": "Aft / Ağız İçi Yara"
};

const groupNamesMap = {
    "SLN-1": "Soğuk Algınlığı ve Öksürük İlaçları",
    "ANL-1": "Ağrı Kesiciler og Ateş Düşürücüler",
    "DER-1": "Pişik ve Cilt Bakım Kremleri",
    "ANT-1": "Alerji ve Kaşıntı İlaçları",
    "SND-1": "Mide ve Sindirim Düzenleyiciler",
    "AGZ-1": "Ağız Yarası ve Diş Jelleri"
};

const ageGroupsMap = {
    "AGE-1": "Bebek",
    "AGE-2": "Çocuk",
    "AGE-3": "Yetişkin"
};

// === 3. OYUN GLOBAL DURUM DEĞİŞKENLERİ ===

let currentCustomerIndex = 0;
let activeDayCustomers = []; 
let playedCustomersPool = []; 
let cart = [];
let isWarningActive = false;
let money = 300;
let xp = 0;             
let ep = 0;             
let gameStarted = false;
let isNabizVerified = false; 

let pendingOrders = []; // Yoldaki siparişleri tutacak dizi
let deliveryTimerInterval = null; // Teslimat sayacı için interval

let currentShopFilter = 'HEPSİ';
let currentDepotFilter = 'HEPSİ';
let currentMode = 'SHOP'; 
let currentHandbookTab = 'DISEASES'; 

let moneyClickCount = 0;
let moneyClickTimeout;

let systemState = 'EMPTY_WAIT'; 
let timeRemaining = 10;
let maxCustomerPatience = 60; 
let mainClockInterval = null;

let currentDayNumber = 1;
let dayServedCount = 0; 
const dailyLimit = 5;
const totalDaysLimit = 4; 

// === 4. SKOR VE BİRİM GÜNCELLEME FONKSİYONLARI ===

function updateMoney(amount) {
    // 1. Gelen parametreyi sayıya dönüştür
    let parsedAmount = Number(amount);
    
    // Eğer parametre geçersizse (NaN ise), işlemi iptal et
    if (isNaN(parsedAmount)) {
        console.error("Geçersiz para miktarı:", amount);
        return;
    }

    // 2. Global money değişkenini sayı olarak doğrula (NaN ise koruma sağla)
    if (typeof money !== 'number' || isNaN(money)) {
        money = 300; 
    }

    // 3. Matematiksel eklemeyi yap
    money += parsedAmount;

    // 4. Arayüzü güncelle
    const display = document.getElementById('moneyDisplay');
    if (display) {
        display.innerText = `$${money}`;
        
        // Animasyon tetikleme
        display.classList.remove('money-gain');
        void display.offsetHeight; // Reflow tetikler (Kesin animasyon sıfırlama için 'void' eklendi)
        display.classList.add('money-gain');
        setTimeout(() => display.classList.remove('money-gain'), 600);
    }
}

function updateXp(amount) {
    xp += amount;
    if (xp < 0) xp = 0; 
    const display = document.getElementById('xpDisplay');
    if (!display) return;
    display.innerText = `${xp} XP`;
    display.classList.remove('stat-gain');
    display.offsetHeight; 
    display.classList.add('stat-gain');
    setTimeout(() => display.classList.remove('stat-gain'), 600);
}

function updateEp(amount) {
    ep += amount; 
    const display = document.getElementById('epDisplay');
    if (!display) return;
    display.innerText = `${ep} EP`;
    display.classList.remove('stat-gain');
    display.offsetHeight; 
    display.classList.add('stat-gain');
    setTimeout(() => display.classList.remove('stat-gain'), 600);
}

// === 5. ÇEKİRDEK OYUN FONKSİYONLARI ===

// Müşterileri kilit ekranından önce belirleme fonksiyonu
function generateRandomCustomersForDay() {
    activeDayCustomers = [];
    currentCustomerIndex = 0; 
    
    let availablePool = customers.filter(c => !playedCustomersPool.some(played => played.id === c.id));
    
    for (let i = 0; i < dailyLimit; i++) {
        if (availablePool.length === 0) break; 
        const randomIndex = Math.floor(Math.random() * availablePool.length);
        const selectedCustomer = availablePool[randomIndex];
        
        activeDayCustomers.push(selectedCustomer);
        playedCustomersPool.push(selectedCustomer); 
        
        availablePool.splice(randomIndex, 1); 
    }
}

// Bildirimi güvenli bir şekilde güncelleyen fonksiyon
function updateLockScreenNotification() {
    const listElement = document.getElementById('lockScreenDiseaseList');
    if (!listElement) return;
    
    listElement.innerHTML = '';
    
    if (activeDayCustomers.length === 0) {
        generateRandomCustomersForDay();
    }
    
    activeDayCustomers.forEach(customer => {
        const diseaseObj = diseases.find(d => d.id === customer.disease);
        const diseaseName = diseaseObj ? diseaseObj.name : "Bilinmeyen Rahatsızlık";
        
        const li = document.createElement('li');
        li.style.marginBottom = "4px";
        li.innerText = diseaseName;
        listElement.appendChild(li);
    });
}

function startDay() {
    if (gameStarted) return; 
    gameStarted = true;
    
    // Kilit ekranını gizle (Elemanın varlığı kontrol edilerek güvenli erişim sağlanıyor)
    const lockArea = document.getElementById('lockScreenArea');
    if (lockArea && lockArea.style) {
        lockArea.style.setProperty('display', 'none', 'important');
    }
    
    // El kitabını göster
    const handbookArea = document.getElementById('handbookArea');
    if (handbookArea && handbookArea.style) {
        handbookArea.style.setProperty('display', 'flex', 'important');
    }
    
    // Uygulama sekmelerini göster (CSS !important kuralını ezer)
    const switcher = document.getElementById('appSwitcherTabs');
    if (switcher && switcher.style) {
        switcher.style.setProperty('display', 'flex', 'important');
    }
    
    buildHandbookFilters();
    renderHandbook();
    
    startSystemClock();
}

function generatePrescriptionCodeForCustomer(customer) {
    const med = medicines.find(m => m.id === customer.prescribedMed);
    if (!med) return "HATA-KOD";

    const cleanGroup = med.group.replace('-', '');
    const cleanDisease = cleanIdToNoZero(customer.disease);

    let ageId = customer.ageGroup;
    if (ageId === "Bebek" || ageId === "AGE-1") ageId = "AGE1";
    else if (ageId === "Çocuk" || ageId === "AGE-2") ageId = "AGE2";
    else if (ageId === "Yetişkin" || ageId === "AGE-3") ageId = "AGE3";
    else ageId = cleanIdToNoZero(ageId);

    return `${cleanGroup}-${cleanDisease}-${ageId}`;
}

function cleanIdToNoZero(idStr) {
    const cleanTire = idStr.replace('-', '');
    return cleanTire.replace(/^([A-Z]+)0+(\d+)/, '$1$2');
}

// Dükkan (Raf) Arayüzünü Çizen Fonksiyon
function initShopMedicines() {
    const grid = document.getElementById('medGrid');
    if (!grid) return;
    grid.innerHTML = '';

    // Aktif stoktaki ilaçları filtrele
    let filtered = medicines.filter(m => m.count > 0);
    if (currentShopFilter !== 'HEPSİ') {
        filtered = filtered.filter(m => m.group === currentShopFilter);
    }

    // Yolda olan (teslimat bekleyen) ilaçları filtrele
    let activePending = pendingOrders.filter(o => {
        const med = medicines.find(m => m.id === o.id);
        return med && (currentShopFilter === 'HEPSİ' || med.group === currentShopFilter);
    });

    if (filtered.length === 0 && activePending.length === 0) {
        grid.innerHTML = `<div class="empty-shop-msg">Raflar boş. Depodan ürün satın alın.</div>`;
        return;
    }

    // Mevcut stoktaki aktif ilaçları kart olarak bas
    filtered.forEach(med => {
        const card = document.createElement('div');
        card.className = 'med-card';
        card.onclick = () => addToCart(med.id);
        
        const turkishSymptoms = med.symptoms.map(s => symptomNamesMap[s] || s).join(', ');
        const compatibilityNames = med.compatibility.map(ageId => ageGroupsMap[ageId] || ageId).join(', ');

        card.innerHTML = `
            <div class="med-header">
                <div class="med-info"><h4>${med.name}</h4></div>
                <span class="med-tag">${med.group}</span>
            </div>
            <div class="prices-row">
                <span class="price-sell">Satış: $${med.price}</span>
                <span class="stock-tag">Stok: ${med.count} ad.</span>
            </div>
            <div class="med-compatibility"><strong>Tedavi:</strong> ${turkishSymptoms}</div>
            <div class="med-compatibility"><strong>Uygunluk:</strong> ${compatibilityNames}</div>
        `;
        grid.appendChild(card);
    });

    // Yolda olan (henüz stokta olmayan) ilaçları pasif ve "Yolda" kartı olarak bas
    activePending.forEach(order => {
        const med = medicines.find(m => m.id === order.id);
        if (!med) return;

        const card = document.createElement('div');
        card.className = 'med-card';
        card.style.opacity = '0.5';
        card.style.cursor = 'not-allowed';
        card.style.border = '1px dashed var(--warning-color)';
        
        card.innerHTML = `
            <div class="med-header">
                <div class="med-info"><h4>${med.name} (Yolda)</h4></div>
                <span class="med-tag" style="background: rgba(234, 179, 8, 0.2); color: var(--warning-color);">${med.group}</span>
            </div>
            <div class="prices-row">
                <span class="price-sell" style="color: var(--warning-color); font-weight: bold;">⏳ Teslimata: ${order.timeLeft}sn</span>
                <span class="stock-tag" style="background: rgba(234, 179, 8, 0.2); color: var(--warning-color);">Sipariş: ${order.quantity} ad.</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Depo (Satın Alma) Arayüzünü Çizen Fonksiyon
function initDepotMedicines() {
    const grid = document.getElementById('depotMedGrid');
    if (!grid) return;
    grid.innerHTML = '';
    let filtered = currentDepotFilter === 'HEPSİ' ? medicines : medicines.filter(m => m.group === currentDepotFilter);

    filtered.forEach(med => {
        const card = document.createElement('div');
        card.className = 'med-card';
        card.onclick = () => addToCart(med.id);

        const turkishSymptoms = med.symptoms.map(s => symptomNamesMap[s] || s).join(', ');
        const compatibilityNames = med.compatibility.map(ageId => ageGroupsMap[ageId] || ageId).join(', ');

        // Bu ilaca ait şu an yolda olan toplam sipariş miktarı ve en yakın teslimat süresi var mı?
        const ordersForThisMed = pendingOrders.filter(o => o.id === med.id);
        const totalPendingQty = ordersForThisMed.reduce((sum, o) => sum + o.quantity, 0);
        const nearestDelivery = ordersForThisMed.length > 0 ? Math.min(...ordersForThisMed.map(o => o.timeLeft)) : null;

        let deliveryBadge = '';
        if (totalPendingQty > 0) {
            deliveryBadge = `<div style="font-size:0.75rem; color: var(--warning-color); font-weight:bold; margin-top: 4px; border-top: 1px dashed rgba(234,179,8,0.2); padding-top:4px;">
                🚚 ${totalPendingQty} adet yolda! En yakın teslimat: ${nearestDelivery}sn
            </div>`;
        }

        card.innerHTML = `
            <div class="med-header">
                <div class="med-info"><h4>${med.name}</h4></div>
                <span class="med-tag">${med.group}</span>
            </div>
            <div class="prices-row">
                <span class="price-buy">Maliyet: $${med.buyPrice}</span>
                <span class="price-sell">Tavsiye Satış: $${med.price}</span>
            </div>
            <div class="med-compatibility"><strong>Tedavi:</strong> ${turkishSymptoms}</div>
            <div class="med-compatibility"><strong>Uygunluk:</strong> ${compatibilityNames}</div>
            ${deliveryBadge}
        `;
        grid.appendChild(card);
    });
}
function startSystemClock() {
    if(mainClockInterval) clearInterval(mainClockInterval);
    enterEmptyWaitState(); 
    mainClockInterval = setInterval(systemClockTick, 1000);
}

function systemClockTick() {
    // Oyun duraklatılmışsa, modal açıkken veya gün bittiğinde zaman AKMAZ, dolayısıyla teslimat da DURUR
    if(isWarningActive || document.getElementById('resultModal').style.display === 'flex' || systemState === 'DAY_END') return; //[cite: 5]

    timeRemaining--; //[cite: 5]
    updateTimerBarUI(); //[cite: 5]

    // === ENTEGRE TESLİMAT SİSTEMİ ===
    // Sadece oyun süresi akarken teslimat sürelerini düşür
    if (pendingOrders.length > 0) {
        pendingOrders.forEach(order => {
            order.timeLeft--;
        });

        // Süresi biten (0 veya daha az kalan) siparişleri depoya/rafa ekle
        const completedOrders = pendingOrders.filter(order => order.timeLeft <= 0);
        completedOrders.forEach(order => {
            const med = medicines.find(m => m.id === order.id); //[cite: 5]
            if (med) {
                med.count += order.quantity; // Stokta artık aktif!
            }
        });

        // Tamamlananları bekleyenler listesinden temizle
        pendingOrders = pendingOrders.filter(order => order.timeLeft > 0);

        // Arayüzdeki kartları ve kalan süreleri her saniye güncelle
        initDepotMedicines();
        initShopMedicines();
    }
    // ================================

    if (timeRemaining <= 0) { //[cite: 5]
        if (systemState === 'EMPTY_WAIT') { //[cite: 5]
            if (dayServedCount >= dailyLimit) { //[cite: 5]
                triggerDayEndState(); //[cite: 5]
            } else { //[cite: 5]
                enterCustomerActiveState(); //[cite: 5]
            } //[cite: 5]
        } else if (systemState === 'CUSTOMER_ACTIVE') { //[cite: 5]
            handleCustomerTimeout(); //[cite: 5]
        } //[cite: 5]
    } //[cite: 5]
}

function enterEmptyWaitState() {
    systemState = 'EMPTY_WAIT';
    timeRemaining = 10;
    document.getElementById('c-prescription-code').innerText = "--";
    
    isNabizVerified = false;
    const lockWarning = document.getElementById('nabizLockWarning');
    if (lockWarning) {
        lockWarning.style.display = 'none';
    }
    
    document.getElementById('nabizCustomerName').value = "Müşteri bekleniyor...";
    document.getElementById('nabizPrescriptionCode').value = "Müşteri bekleniyor...";
    document.getElementById('nabizPrescriptionReport').style.display = 'none';

    const overlay = document.getElementById('customerOverlay');
    if (overlay) {
        overlay.style.display = 'flex';
        overlay.innerHTML = `<div class="customer-arrival-text">Şu anda dükkanda müşteri yok...<br><span style="font-size:0.8rem; color:var(--text-muted);">Bugün bakılan: ${dayServedCount}/${dailyLimit}</span></div>`;
    }
    
    document.getElementById('customerPanelTitle').innerText = `Gün ${currentDayNumber} - Boş Zaman Periyodu (10 Sn)`;
    document.getElementById('timerBar').className = "timer-bar waiting";
    updateTimerBarUI();
}

function enterCustomerActiveState() {
    systemState = 'CUSTOMER_ACTIVE';
    timeRemaining = maxCustomerPatience;
    document.getElementById('customerOverlay').style.display = 'none';
    document.getElementById('customerPanelTitle').innerText = `Gün ${currentDayNumber} - Müşteri Süresi (${maxCustomerPatience} Sn)`;
    document.getElementById('timerBar').className = "timer-bar active-customer";
    
    isNabizVerified = false;
    const lockWarning = document.getElementById('nabizLockWarning');
    if (lockWarning) {
        lockWarning.style.display = 'block';
        lockWarning.style.background = "rgba(239, 68, 68, 0.1)";
        lockWarning.style.borderColor = "var(--danger-color)";
        lockWarning.style.color = "#f87171";
        lockWarning.innerText = "⚠️ Dikkat: Nabız uygulamasında bu reçete kodunu çözümlemeden ilaç satışı yapamazsınız!";
    }

    const customer = activeDayCustomers[currentCustomerIndex];
    const prescriptionCode = generatePrescriptionCodeForCustomer(customer);
    document.getElementById('c-prescription-code').innerText = prescriptionCode;
    
    document.getElementById('nabizCustomerName').value = customer.name;
    document.getElementById('nabizPrescriptionCode').value = prescriptionCode;
    
    document.getElementById('nabizSolveGroup').value = "";
    document.getElementById('nabizSolveDisease').value = "";
    document.getElementById('nabizSolveAge').value = "";
    document.getElementById('nabizPrescriptionReport').style.display = 'none';

    updateTimerBarUI();
}

function triggerDayEndState() {
    systemState = 'DAY_END';
    if(mainClockInterval) clearInterval(mainClockInterval);
    const overlay = document.getElementById('customerOverlay');
    if (overlay) {
        overlay.style.setProperty('display', 'flex', 'important');
        overlay.innerHTML = `
            <div class="customer-arrival-text" style="color: var(--warning-color);">Bugünlük ${dailyLimit} hasta limitine ulaşıldı. Gün Bitti!</div>
            <button class="next-day-btn" onclick="progressToNextDay()">Günü Bitir</button>
        `;
    }
}

function progressToNextDay() {
    currentDayNumber++;
    dayServedCount = 0;
    gameStarted = false; 
    
    // 1. Yeni günün müşterilerini arka planda belirle
    generateRandomCustomersForDay(); 
    
    // 2. Kilit ekranını ve telefon bileşenlerini seç
    const lockArea = document.getElementById('lockScreenArea');
    const handbookArea = document.getElementById('handbookArea');
    const appNabiz = document.getElementById('appNabizContainer');
    const switcher = document.getElementById('appSwitcherTabs');
    
    // 3. Telefon ekranını kesin olarak kilitle ve diğer uygulamaları gizle
    if (lockArea) {
        lockArea.style.setProperty('display', 'flex', 'important');
    }
    
    if (handbookArea) {
        handbookArea.style.setProperty('display', 'none', 'important');
    }
    
    if (appNabiz) {
        appNabiz.style.setProperty('display', 'none', 'important');
    }
    
    if (switcher) {
        switcher.style.setProperty('display', 'none', 'important');
    }
    
    // 4. Nabız çözümlenmiş rapor ekranını temizle ve sıfırla
    const reportCard = document.getElementById('nabizPrescriptionReport');
    if (reportCard) {
        reportCard.style.setProperty('display', 'none', 'important');
    }
    
    // Telefon ekranını varsayılan olarak El Kitabı sekmesine konumlandır
    switchPhoneApp('HANDBOOK'); 
    
    // 5. Belirlenen yeni gün hastalıklarını kilit ekranı bildirim listesine doldur
    updateLockScreenNotification();
    
    // 6. Saat ve panelleri ilk durumuna getir
    const lockClock = document.getElementById('lockScreenClock');
    if (lockClock) {
        lockClock.innerText = "08:00";
    }
    
    if (mainClockInterval) clearInterval(mainClockInterval);
    
    const prescriptionCodeDisplay = document.getElementById('c-prescription-code');
    if (prescriptionCodeDisplay) {
        prescriptionCodeDisplay.innerText = "--";
    }
    
    // 7. Sağ taraftaki dükkan paneline müşterilerin beklendiği uyarısını koy
    const overlay = document.getElementById('customerOverlay');
    if (overlay) {
        overlay.style.setProperty('display', 'flex', 'important');
        overlay.innerHTML = `<div class="customer-arrival-text">Günü başlatmanız bekleniyor...<br>Müşteriler yolda.</div>`;
    }
    
    // Dükkan raflarını ve sepeti yeni gün öncesi tamamen sıfırla
    cart = [];
    renderCart();
    initShopMedicines();
}

function triggerGameOverState() {
    systemState = 'GAME_OVER';
    if(mainClockInterval) clearInterval(mainClockInterval);
    const overlay = document.getElementById('customerOverlay');
    if (overlay) {
        overlay.style.display = 'flex';
        overlay.innerHTML = `
            <div class="customer-arrival-text" style="color: var(--success-color); font-size:1.3rem; line-height: 1.6;">
                Tebrikler Eczacı!<br>
                <span style="font-size:0.95rem; color:white; font-weight: normal;">
                    4 gub boyunca 20 hastanın tamamına başarıyla hizmet verdin ve prototipi tamamladın!
                </span>
            </div>
        `;
    }
}

function updateTimerBarUI() {
    const bar = document.getElementById('timerBar');
    if (!bar) return;
    const maxDuration = (systemState === 'EMPTY_WAIT') ? 10 : maxCustomerPatience;
    const percentage = (timeRemaining / maxDuration) * 100;
    bar.style.transform = `scaleX(${percentage / 100})`;
}

function handleCustomerTimeout() {
    const currentCustomer = activeDayCustomers[currentCustomerIndex];
    
    const earnedXp = 0;
    const earnedEp = -10;
    
    updateXp(earnedXp);
    updateEp(earnedEp);

    document.getElementById('m-title').innerText = `${currentCustomer.name} Eczaneyi Terk Etti!`;
    document.getElementById('m-desc').innerHTML = `
        <span style="color: var(--danger-color); font-weight: bold;">Müşteri işlem süresi bittiği için hizmet alamadan ayrıldı.</span><br><br>
        <strong>Kazanılan Deneyim:</strong> <span style="color: #a855f7; font-weight: bold;">+${earnedXp} XP</span><br>
        <strong>Eczane Puanı Etkisi:</strong> <span style="color: var(--danger-color); font-weight: bold;">${earnedEp} EP</span>
    `;
    
    let reportHTML = "";
    currentCustomer.symptomsList.forEach(symptom => {
        const turkishSymptomName = symptomNamesMap[symptom] || symptom;
        reportHTML += `<li class="failed">İyileştirilemedi: <strong>${turkishSymptomName}</strong> (Süre bitti)</li>`;
    });
    
    document.getElementById('m-list').innerHTML = reportHTML;
    document.getElementById('resultModal').style.display = 'flex';

    document.getElementById('customerPanel').style.borderColor = "var(--danger-color)";

    dayServedCount++;
    currentCustomerIndex++;
    cart = [];
    renderCart();
}

function switchToDepot() {
    currentMode = 'DEPOT';
    cart = [];
    document.getElementById('shopPanel').style.display = 'none';
    document.getElementById('depotPanel').style.display = 'block';
    initDepotMedicines();
    renderCart();
}

function switchToShop() {
    currentMode = 'SHOP';
    cart = [];
    document.getElementById('depotPanel').style.display = 'none';
    document.getElementById('shopPanel').style.display = 'block';
    initShopMedicines();
    renderCart();
}

function filterShopMedicines(group, btn) {
    currentShopFilter = group;
    document.getElementById('shopFilterContainer').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    initShopMedicines();
}

function filterDepotMedicines(group, btn) {
    currentDepotFilter = group;
    document.getElementById('depotFilterContainer').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    initDepotMedicines();
}

// Sepete ekleme fonksiyonu
function addToCart(medId) {
    if (isWarningActive || systemState === 'DAY_END' || systemState === 'GAME_OVER') return;

    const med = medicines.find(m => m.id === medId);
    if (!med) return;

    if (currentMode === 'SHOP') {
        if (!gameStarted || systemState !== 'CUSTOMER_ACTIVE') return; 
        
        if (!isNabizVerified) {
            alert("⚠️ Lütfen önce Nabız uygulamasından reçete kodunu başarılı bir şekilde çözümleyin!");
            return;
        }

        if (med.count <= 0) return;
        if (cart.length >= 2) return;
        if (cart.some(item => item.id === medId)) return;
        
        // Müşteri sepetine sadece id ve miktar ekliyoruz (Referans korundu!)
        cart.push({ id: medId, quantity: 1 });
    } else {
        // Depo sepetine ekleme
        const existingItem = cart.find(item => item.id === medId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id: medId, quantity: 1 });
        }
    }
    renderCart();
}

// Sepetten çıkarma fonksiyonu
function removeFromCart(medId) {
    if (isWarningActive) return;
    cart = cart.filter(item => item.id !== medId);
    renderCart();
}

// Sepetteki adet miktarını doğrudan değiştirmek için (Depo moduna özel)
function updateCartItemQuantity(medId, value) {
    const item = cart.find(i => i.id === medId);
    if (!item) return;
    
    const qty = parseInt(value);
    if (qty <= 0 || isNaN(qty)) {
        removeFromCart(medId);
    } else {
        item.quantity = qty;
    }
    renderCart();
}

// Dinamik Sepeti Çizen Fonksiyon
function renderCart() {
    const cartList = document.getElementById('cartList');
    const cartEmpty = document.getElementById('cartEmpty');
    const submitBtn = document.getElementById('submitBtn');
    const titleElement = document.getElementById('cartTitle');

    if (!cartList || !cartEmpty || !submitBtn || !titleElement) return;

    const items = cartList.querySelectorAll('.cart-item');
    items.forEach(item => item.remove());

    if (currentMode === 'DEPOT') {
        let totalCost = cart.reduce((sum, item) => {
            const originalMed = medicines.find(m => m.id === item.id);
            return sum + ((originalMed ? originalMed.buyPrice : 0) * item.quantity);
        }, 0);
        titleElement.innerText = `Toptan Alım Sepeti (Toplam Tutar: $${totalCost})`;
    } else {
        titleElement.innerText = "Sepet (Müşteri Reçetesi)";
    }

    const isBlocked = cart.length === 0 || (currentMode === 'SHOP' && !isNabizVerified);

    if (isBlocked) {
        cartEmpty.style.display = cart.length === 0 ? 'block' : 'none';
        submitBtn.disabled = true;
        submitBtn.classList.remove('active');
    } else {
        cartEmpty.style.display = 'none';
        if (!isWarningActive) {
            submitBtn.disabled = false;
            submitBtn.classList.add('active');
        }

        cart.forEach(item => {
            // Bilgileri ekrana basabilmek için orijinal nesneyi buluyoruz
            const originalMed = medicines.find(m => m.id === item.id);
            if (!originalMed) return;

            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.style.display = 'flex';
            itemDiv.style.justifyContent = 'space-between';
            itemDiv.style.alignItems = 'center';
            itemDiv.style.width = '100%';

            if (currentMode === 'DEPOT') {
                itemDiv.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span>${originalMed.name} ($${originalMed.buyPrice})</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <input type="number" min="1" value="${item.quantity}" 
                               style="width: 50px; background: #262b37; border: 1px solid #3b82f6; color: white; border-radius: 4px; padding: 2px 4px; text-align: center; font-weight: bold;"
                               onchange="updateCartItemQuantity('${item.id}', this.value)">
                        <span class="cart-item-remove" onclick="removeFromCart('${item.id}')">×</span>
                    </div>
                `;
            } else {
                itemDiv.innerHTML = `
                    <span>${originalMed.name}</span>
                    <span class="cart-item-remove" onclick="removeFromCart('${item.id}')">×</span>
                `;
            }
            cartList.appendChild(itemDiv);
        });
    }
}

function confirmPrescription() {
    if (cart.length === 0 || isWarningActive) return;
    if (currentMode === 'SHOP') {
        handleShopConfirm();
    } else {
        handleDepotConfirm();
    }
}

function handleShopConfirm() {
    const currentCustomer = activeDayCustomers[currentCustomerIndex];
    const submitBtn = document.getElementById('submitBtn');
    const customerPanel = document.getElementById('customerPanel');

    // Sepetteki ilk elemanın orijinal ilaç nesnesine ulaşıyoruz
    const cartItem = cart[0];
    const originalMed = medicines.find(m => m.id === cartItem.id);
    if (!originalMed) return;

    const customerAge = currentCustomer.ageGroup.trim().toLowerCase();

    // Yaş uyumluluğunu orijinal nesne referansı üzerinden kontrol ediyoruz
    const isAgeCompatible = originalMed.compatibility.some(ageId => {
        const mappedAgeName = (ageGroupsMap[ageId] || "").trim().toLowerCase();
        return mappedAgeName === customerAge;
    });

    if (!isAgeCompatible) {
        isWarningActive = true;
        submitBtn.disabled = true;
        submitBtn.classList.remove('active');
        submitBtn.classList.add('warning');
        submitBtn.innerText = "Bu müşteriye bu ilacı veremezsiniz!";
        setTimeout(() => {
            isWarningActive = false;
            submitBtn.classList.remove('warning');
            submitBtn.innerText = "Onayla";
            renderCart();
        }, 5000);
        return;
    }

    const customerSymptoms = currentCustomer.symptomsList;
    let totalProfit = 0;
    let reportHTML = "";

    let combinedMedSymptoms = [];
    cart.forEach(item => {
        const targetMed = medicines.find(m => m.id === item.id);
        if (targetMed) {
            targetMed.count--; // Ana veritabanından kesin olarak düşüyor!
            totalProfit += targetMed.price;
            combinedMedSymptoms = combinedMedSymptoms.concat(targetMed.symptoms);
        }
    });

    let healedCount = 0;

    customerSymptoms.forEach(symptom => {
        let isHealed = combinedMedSymptoms.some(mSym => mSym.toLowerCase().trim() === symptom.toLowerCase().trim());
        
        if (isHealed) {
            healedCount++;
            const turkishSymptomName = symptomNamesMap[symptom] || symptom;
            reportHTML += `<li class="healed">İyileştirildi: <strong>${turkishSymptomName}</strong></li>`;
        } else {
            const turkishSymptomName = symptomNamesMap[symptom] || symptom;
            reportHTML += `<li class="failed">İyileştirilemedi: <strong>${turkishSymptomName}</strong></li>`;
        }
    });

    let earnedXp = 0;
    let earnedEp = 0;
    let isPerfectHeal = (healedCount === customerSymptoms.length);

    if (isPerfectHeal) {
        earnedXp = 10;
        earnedEp = 5;
    } else {
        earnedXp = 2;
        earnedEp = -5;
    }

    updateMoney(totalProfit);
    updateXp(earnedXp);
    updateEp(earnedEp);

    document.getElementById('m-title').innerText = `${currentCustomer.name} - Teşhis Sonucu`;
    
    let scoreColorClass = isPerfectHeal ? "color: var(--success-color);" : "color: var(--danger-color);";
    
    document.getElementById('m-desc').innerHTML = `
        Satılan ilaçlar başarıyla teslim edildi. Eczanenize <strong>+$${totalProfit}</strong> bütçe eklendi.<br><br>
        <strong>Kazanılan Deneyim:</strong> <span style="color: #a855f7; font-weight: bold;">+${earnedXp} XP</span><br>
        <strong>Eczane Puanı Etkisi:</strong> <span style="${scoreColorClass} font-weight: bold;">${earnedEp > 0 ? "+" + earnedEp : earnedEp} EP</span>
    `;
    
    document.getElementById('m-list').innerHTML = reportHTML;
    document.getElementById('resultModal').style.display = 'flex';

    customerPanel.style.borderColor = "var(--success-color)";

    dayServedCount++;
    currentCustomerIndex++;
    cart = [];
    
    initShopMedicines(); // Stok değişimini ekrana hemen yansıtıyoruz
    renderCart();
}

function closeModal() {
    document.getElementById('resultModal').style.display = 'none';
    document.getElementById('customerPanel').style.borderColor = "var(--border-color)";
    initShopMedicines();
    
    if (dayServedCount >= dailyLimit) {
        if (currentDayNumber >= totalDaysLimit) {
            triggerGameOverState();
        } else {
            triggerDayEndState();
        }
    } else {
        enterEmptyWaitState();
    }
}

function switchHandbookTab(tab) {
    currentHandbookTab = tab;
    document.getElementById('tabDiseases').classList.toggle('active', tab === 'DISEASES');
    document.getElementById('tabGroups').classList.toggle('active', tab === 'GROUPS');
    buildHandbookFilters();
    renderHandbook();
}

function buildHandbookFilters() {
    const select = document.getElementById('handbookFilter');
    if (!select) return;
    select.innerHTML = '';

    if (currentHandbookTab === 'DISEASES') {
        const optAll = document.createElement('option');
        optAll.value = "HEPSİ"; optAll.innerText = "Tüm Hastalıklar";
        select.appendChild(optAll);

        diseases.forEach(d => {
            const opt = document.createElement('option');
            opt.value = d.id; 
            opt.innerText = d.id;
            select.appendChild(opt);
        });
    } else {
        const optAll = document.createElement('option');
        optAll.value = "HEPSİ"; optAll.innerText = "Tüm Gruplar";
        select.appendChild(optAll);

        Object.keys(groupNamesMap).forEach(gId => {
            const opt = document.createElement('option');
            opt.value = gId; 
            opt.innerText = gId;
            select.appendChild(opt);
        });
    }
}

function renderHandbook() {
    const listDiv = document.getElementById('knowledgeList');
    const select = document.getElementById('handbookFilter');
    if (!listDiv || !select || !select.value) return;
    const filterValue = select.value;
    listDiv.innerHTML = '';

    if (currentHandbookTab === 'DISEASES') {
        let filtered = diseases;
        if (filterValue !== 'HEPSİ') {
            filtered = diseases.filter(d => d.id === filterValue);
        }
        filtered.forEach(d => {
            const item = document.createElement('div');
            item.className = 'group-item'; 
            
            const symptomNames = d.symptoms.map(sId => symptomNamesMap[sId] || sId).join(', ');
            const ageNames = d.targetAges.map(ageId => ageGroupsMap[ageId] || ageId).join(', ');
            const typeObj = diseaseTypes.find(t => t.id === d.typeId);
            const typeName = typeObj ? typeObj.name : d.typeId;

            item.innerHTML = `
                <h5 style="color: var(--warning-color);">${d.id}: ${d.name}</h5>
                <div style="font-size:0.72rem; color:var(--text-main); margin-top:6px;"><strong>Tür:</strong> ${typeName}</div>
                <div style="font-size:0.72rem; color:var(--text-main);"><strong>Semptomlar:</strong> ${symptomNames}</div>
                <div style="font-size:0.72rem; color:var(--text-main);"><strong>Yaygınlık Derecesi:</strong> ${d.prevalence} / 3</div>
                <div style="font-size:0.72rem; color:var(--text-main);"><strong>Görüldüğü Mevsimler:</strong> ${d.seasons}</div>
                <div style="font-size:0.72rem; color:var(--text-main);"><strong>Etkilediği Gruplar:</strong> ${ageNames}</div>
            `;
            listDiv.appendChild(item);
        });
    } else {
        let filteredKeys = Object.keys(groupNamesMap);
        if (filterValue !== 'HEPSİ') {
            filteredKeys = filteredKeys.filter(g => g === filterValue);
        }
        
        filteredKeys.forEach(gId => {
            const item = document.createElement('div');
            item.className = 'group-item';
            let gDesc = "Bu gruptaki ilaçlar ilgili semptomların tedavisinde kullanılır.";
            if(gId === "SLN-1") gDesc = "Burun tıkanıklığı, akıntı ve solunum yolları rahatsızlıkları için spreyler ve damlalar.";
            else if(gId === "ANL-1") gDesc = "Baş ağrısı, diş çıkarma ağrısı ve genel hafif sızılar için tablet ve şuruplar.";
            else if(gId === "DER-1") gDesc = "Pişik, egzama ve böcek ısırıkları gibi cilt tahrişlerini tedavi eden krem ve merhemler.";
            else if(gId === "ANT-1") gDesc = "Toz ve saman nezlesi gibi alerjik reaksiyonları, kaşıntıları baskılayan şurup ve haplar.";
            else if(gId === "SND-1") gDesc = "Hazımsızlık, gaz ve mide yanması semptomlarını hafifleten çiğneme tabletleri ve likit formlar.";
            else if(gId === "AGZ-1") gDesc = "Aft ve bebeklerde diş çıkarma ağrısını lokal olarak uyuşturan/temizleyen jeller ve spreyler.";

            item.innerHTML = `<h5>${gId}: ${groupNamesMap[gId]}</h5><div style="font-size:0.75rem; color:var(--text-muted);">${gDesc}</div>`;
            listDiv.appendChild(item);
        });
    }
}

// Depo Satın Alma Onay Fonksiyonu
function handleDepotConfirm() {
    console.log("Satın alma işlemi başladı. Sepet içeriği:", cart);

    if (cart.length === 0) {
        alert("Sepetiniz boş!");
        return;
    }

    // 1. Toplam maliyeti doğrudan medicines listesindeki orijinal fiyatlarla eşleştirerek hesapla
    let totalCost = 0;
    cart.forEach(item => {
        const originalMed = medicines.find(m => m.id === item.id);
        if (originalMed) {
            totalCost += originalMed.buyPrice * item.quantity;
            console.log(`${originalMed.name} ürünü için maliyet: ${originalMed.buyPrice} x ${item.quantity} = ${originalMed.buyPrice * item.quantity}`);
        } else {
            console.warn(`ID'si ${item.id} olan ilaç medicines listesinde bulunamadı!`);
        }
    });

    console.log("Hesaplanan Toplam Maliyet:", totalCost);
    console.log("Mevcut Para:", money);

    if (money < totalCost) {
        alert("Yetersiz Bütçe! Gerekli: $" + totalCost + ", Sahip olunan: $" + money);
        return;
    }
    
    // 2. Parayı kesin olarak düşür
    updateMoney(-totalCost);
    console.log("Para düşürüldükten sonraki yeni bütçe:", money);
    
    // 3. Satın alınan ürünleri yoldaki siparişler listesine ekle
    cart.forEach(item => {
        const originalMed = medicines.find(m => m.id === item.id);
        const medName = originalMed ? originalMed.name : "Bilinmeyen İlaç";
        
        pendingOrders.push({
            id: item.id,
            name: medName,
            quantity: item.quantity,
            timeLeft: 30 // 30 saniye teslimat süresi
        });
    });

    alert(`Siparişleriniz verildi! İlaçların teslimat süresi 30 saniyedir.`);
    
    // 4. Önce arayüzleri ve siparişleri güncelle, en son sepeti sıfırla
    cart = [];
    renderCart();
    initDepotMedicines();
    initShopMedicines();
}

function handleMoneyClick() {
    moneyClickCount++;
    clearTimeout(moneyClickTimeout);
    if (moneyClickCount === 3) {
        updateMoney(200); 
        moneyClickCount = 0;
    } else {
        moneyClickTimeout = setTimeout(() => { moneyClickCount = 0; }, 400);
    }
}

function switchPhoneApp(appKey) {
    const handbookApp = document.getElementById('appHandbookContainer');
    const nabizApp = document.getElementById('appNabizContainer');
    const handbookTabBtn = document.getElementById('appBtnHandbook');
    const nabizTabBtn = document.getElementById('appBtnNabiz');
    const titleElement = document.getElementById('phoneAppTitle');

    if (appKey === 'HANDBOOK') {
        handbookApp.style.display = 'block';
        nabizApp.style.display = 'none';
        handbookTabBtn.classList.add('active');
        nabizTabBtn.classList.remove('active');
        titleElement.innerText = "Eczacı El Kitabı";
    } else {
        handbookApp.style.display = 'none';
        nabizApp.style.display = 'flex';
        handbookTabBtn.classList.remove('active');
        nabizTabBtn.classList.add('active');
        titleElement.innerText = "Nabız Sistemi";
    }
}

function verifyNabizCode() {
    if (systemState !== 'CUSTOMER_ACTIVE') {
        alert("Eczanede şu anda aktif bir hasta bulunmamaktadır!");
        return;
    }

    const currentCustomer = activeDayCustomers[currentCustomerIndex];
    const med = medicines.find(m => m.id === currentCustomer.prescribedMed);

    const selectedGroup = document.getElementById('nabizSolveGroup').value;
    const selectedDisease = document.getElementById('nabizSolveDisease').value;
    const selectedAge = document.getElementById('nabizSolveAge').value;

    const isGroupCorrect = (selectedGroup === med.group);
    const isDiseaseCorrect = (selectedDisease === currentCustomer.disease);
    const isAgeCorrect = (selectedAge === (currentCustomer.ageGroup === 'Bebek' ? 'AGE-1' : currentCustomer.ageGroup === 'Çocuk' ? 'AGE-2' : 'AGE-3'));

    const reportCard = document.getElementById('nabizPrescriptionReport');
    const lockWarning = document.getElementById('nabizLockWarning');

    if (isGroupCorrect && isDiseaseCorrect && isAgeCorrect) {
        isNabizVerified = true;
        
        const diseaseObj = diseases.find(d => d.id === currentCustomer.disease);
        document.getElementById('n-rep-name').innerText = currentCustomer.name;
        document.getElementById('n-rep-disease').innerText = diseaseObj ? diseaseObj.name : "Bilinmiyor";
        document.getElementById('n-rep-age').innerText = currentCustomer.ageGroup;
        
        document.getElementById('n-rep-med').innerHTML = `<strong style="color: #047857; font-size: 1rem;">${med.name}</strong>`;

        reportCard.style.display = 'block';

        if (lockWarning) {
            lockWarning.style.background = "rgba(16, 185, 129, 0.1)";
            lockWarning.style.borderColor = "var(--success-color)";
            lockWarning.style.color = "#34d399";
            lockWarning.innerText = "✓ Reçete kodu başarıyla çözümlendi! Şimdi sepeti onaylayabilirsiniz.";
        }

        renderCart();

        setTimeout(() => {
            const phoneScreen = document.getElementById('phoneScreen');
            if (phoneScreen) {
                phoneScreen.scrollTo({
                    top: phoneScreen.scrollHeight,
                    behavior: 'smooth'
                });
            }
        }, 100);
    } else {
        isNabizVerified = false;
        reportCard.style.display = 'none';
        
        if (lockWarning) {
            lockWarning.style.background = "rgba(239, 68, 68, 0.1)";
            lockWarning.style.borderColor = "var(--danger-color)";
            lockWarning.style.color = "#f87171";
            lockWarning.innerText = "⚠️ Dikkat: Nabız uygulamasında bu reçete kodunu çözümlemeden ilaç satışı yapamazsınız!";
        }
        
        renderCart();
        alert("Girdiğiniz çözümleme verileri eşleşmedi! Lütfen kodu tekrar kontrol ediniz.");
    }
}

// Global scope bağlantıları (HTML çağrıları için)
window.startDay = startDay;
window.switchToDepot = switchToDepot;
window.switchToShop = switchToShop;
window.filterShopMedicines = filterShopMedicines;
window.filterDepotMedicines = filterDepotMedicines;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.confirmPrescription = confirmPrescription;
window.closeModal = closeModal;
window.switchHandbookTab = switchHandbookTab;
window.renderHandbook = renderHandbook;
window.progressToNextDay = progressToNextDay;
window.handleMoneyClick = handleMoneyClick;
window.switchPhoneApp = switchPhoneApp;
window.verifyNabizCode = verifyNabizCode;
window.updateLockScreenNotification = updateLockScreenNotification;
window.generateRandomCustomersForDay = generateRandomCustomersForDay;
window.updateCartItemQuantity = updateCartItemQuantity;

// Uygulama yüklenme döngüsü
document.addEventListener("DOMContentLoaded", () => {
    initShopMedicines(); //[cite: 5]
    initDepotMedicines(); //[cite: 5]
    
    // Sayfa ilk açıldığında paradaki $300 yazısını değişkenle eşitleyip temizliyoruz
    const display = document.getElementById('moneyDisplay');
    if (display) {
        display.innerText = `$${money}`;
    }
    
    // Telefonun kilit ekranı butonlarını varsayılan olarak kesin olarak gizle
    const switcher = document.getElementById('appSwitcherTabs'); //[cite: 5]
    if (switcher) {
        switcher.style.display = 'none'; //[cite: 5]
    }
    
    // Hastaları belirle ve kilit ekranı bildirimlerini bas
    generateRandomCustomersForDay(); //[cite: 5]
    updateLockScreenNotification(); //[cite: 5]
});
