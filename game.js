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

// === 3. MERKEZİ OYUN YÖNETİMİ (STATE & UI & LOOP) ===

const GameState = {
    money: 300,
    xp: 0,
    ep: 0,
    currentDayNumber: 1,
    dayServedCount: 0,
    dailyLimit: 5,
    totalDaysLimit: 4,
    timeRemaining: 10,
    maxCustomerPatience: 60,
    status: 'EMPTY_WAIT', 
    cart: [],
    pendingOrders: [],
    activeDayCustomers: [],
    playedCustomersPool: [],
    currentCustomerIndex: 0,
    isNabizVerified: false,
    gameStarted: false,
    isWarningActive: false,
    
    currentShopFilter: 'HEPSİ',
    currentDepotFilter: 'HEPSİ',
    currentMode: 'SHOP',
    currentHandbookTab: 'DISEASES',
    moneyClickCount: 0,
    moneyClickTimeout: null,

    addMoney: function(amount) {
        let parsed = Number(amount);
        if (!isNaN(parsed)) {
            this.money += parsed;
            UIController.updateStat('moneyDisplay', `$${this.money}`, 'money-gain');
        }
    },
    addXp: function(amount) {
        this.xp = Math.max(0, this.xp + amount);
        UIController.updateStat('xpDisplay', `${this.xp} XP`, 'stat-gain');
    },
    addEp: function(amount) {
        this.ep += amount;
        UIController.updateStat('epDisplay', `${this.ep} EP`, 'stat-gain');
    },
    resetCart: function() {
        this.cart = [];
    }
};

const UIController = {
    updateStat: function(elementId, text, animClass) {
        const el = document.getElementById(elementId);
        if(!el) return;
        el.innerText = text;
        
        // Animasyon sınıfı geçerli bir değerse işlemi yap
        if (animClass) {
            el.classList.remove(animClass);
            void el.offsetHeight; 
            el.classList.add(animClass);
            setTimeout(() => el.classList.remove(animClass), 600);
        }
    },
    updateTimerBar: function() {
        const bar = document.getElementById('timerBar');
        if (!bar) return;
        const maxDuration = (GameState.status === 'EMPTY_WAIT') ? 10 : GameState.maxCustomerPatience;
        const percentage = (GameState.timeRemaining / maxDuration) * 100;
        bar.style.transform = `scaleX(${percentage / 100})`;
    },
    setDisplay: function(elementId, displayValue) {
        const el = document.getElementById(elementId);
        if (el) el.style.setProperty('display', displayValue, 'important');
    }
};

const GameLoop = {
    interval: null,
    start: function() {
        if(this.interval) clearInterval(this.interval);
        this.interval = setInterval(() => this.tick(), 1000);
    },
    stop: function() {
        if(this.interval) clearInterval(this.interval);
    },
    tick: function() {
        if(GameState.isWarningActive || document.getElementById('resultModal').style.display === 'flex' || GameState.status === 'DAY_END') return;

        this.processDeliveries();

        GameState.timeRemaining--;
        UIController.updateTimerBar();

        if (GameState.timeRemaining <= 0) {
            if (GameState.status === 'EMPTY_WAIT') {
                if (GameState.dayServedCount >= GameState.dailyLimit) {
                    triggerDayEndState();
                } else {
                    enterCustomerActiveState();
                }
            } else if (GameState.status === 'CUSTOMER_ACTIVE') {
                handleCustomerTimeout();
            }
        }
    },
    processDeliveries: function() {
        if (GameState.pendingOrders.length > 0) {
            GameState.pendingOrders.forEach(order => order.timeLeft--);
            
            const completedOrders = GameState.pendingOrders.filter(order => order.timeLeft <= 0);
            completedOrders.forEach(order => {
                const med = medicines.find(m => m.id === order.id);
                if (med) med.count += order.quantity;
            });

            GameState.pendingOrders = GameState.pendingOrders.filter(order => order.timeLeft > 0);
            
            if(completedOrders.length > 0){
                initDepotMedicines();
                initShopMedicines();
            }
        }
    }
};

// === 4. ÇEKİRDEK OYUN FONKSİYONLARI ===

function generateRandomCustomersForDay() {
    GameState.activeDayCustomers = [];
    GameState.currentCustomerIndex = 0; 
    
    let availablePool = customers.filter(c => !GameState.playedCustomersPool.some(played => played.id === c.id));
    
    for (let i = 0; i < GameState.dailyLimit; i++) {
        if (availablePool.length === 0) break; 
        const randomIndex = Math.floor(Math.random() * availablePool.length);
        const selectedCustomer = availablePool[randomIndex];
        
        GameState.activeDayCustomers.push(selectedCustomer);
        GameState.playedCustomersPool.push(selectedCustomer); 
        availablePool.splice(randomIndex, 1); 
    }
}

function updateLockScreenNotification() {
    const listElement = document.getElementById('lockScreenDiseaseList');
    if (!listElement) return;
    listElement.innerHTML = '';
    
    if (GameState.activeDayCustomers.length === 0) {
        generateRandomCustomersForDay();
    }
    
    GameState.activeDayCustomers.forEach(customer => {
        const diseaseObj = diseases.find(d => d.id === customer.disease);
        const diseaseName = diseaseObj ? diseaseObj.name : "Bilinmeyen Rahatsızlık";
        const li = document.createElement('li');
        li.style.marginBottom = "4px";
        li.innerText = diseaseName;
        listElement.appendChild(li);
    });
}

function startDay() {
    if (GameState.gameStarted) return; 
    GameState.gameStarted = true;
    
    UIController.setDisplay('lockScreenArea', 'none');
    UIController.setDisplay('handbookArea', 'flex');
    UIController.setDisplay('appSwitcherTabs', 'flex');
    
    buildHandbookFilters();
    renderHandbook();
    enterEmptyWaitState();
    GameLoop.start();
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
    return idStr.replace('-', '').replace(/^([A-Z]+)0+(\d+)/, '$1$2');
}

function initShopMedicines() {
    const grid = document.getElementById('medGrid');
    if (!grid) return;
    grid.innerHTML = '';

    let filtered = medicines.filter(m => m.count > 0);
    if (GameState.currentShopFilter !== 'HEPSİ') {
        filtered = filtered.filter(m => m.group === GameState.currentShopFilter);
    }

    let activePending = GameState.pendingOrders.filter(o => {
        const med = medicines.find(m => m.id === o.id);
        return med && (GameState.currentShopFilter === 'HEPSİ' || med.group === GameState.currentShopFilter);
    });

    if (filtered.length === 0 && activePending.length === 0) {
        grid.innerHTML = `<div class="empty-shop-msg">Raflar boş. Depodan ürün satın alın.</div>`;
        return;
    }

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

function initDepotMedicines() {
    const grid = document.getElementById('depotMedGrid');
    if (!grid) return;
    grid.innerHTML = '';
    let filtered = GameState.currentDepotFilter === 'HEPSİ' ? medicines : medicines.filter(m => m.group === GameState.currentDepotFilter);

    filtered.forEach(med => {
        const card = document.createElement('div');
        card.className = 'med-card';
        card.onclick = () => addToCart(med.id);

        const turkishSymptoms = med.symptoms.map(s => symptomNamesMap[s] || s).join(', ');
        const compatibilityNames = med.compatibility.map(ageId => ageGroupsMap[ageId] || ageId).join(', ');

        const ordersForThisMed = GameState.pendingOrders.filter(o => o.id === med.id);
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

function enterEmptyWaitState() {
    GameState.status = 'EMPTY_WAIT';
    GameState.timeRemaining = 10;
    document.getElementById('c-prescription-code').innerText = "--";
    
    GameState.isNabizVerified = false;
    
    const lockWarning = document.getElementById('nabizLockWarning');
    if (lockWarning) lockWarning.classList.add('hidden');
    
    document.getElementById('nabizCustomerName').value = "Müşteri bekleniyor...";
    document.getElementById('nabizPrescriptionCode').value = "Müşteri bekleniyor...";
    UIController.setDisplay('nabizPrescriptionReport', 'none');

    const overlay = document.getElementById('customerOverlay');
    if (overlay) {
        UIController.setDisplay('customerOverlay', 'flex');
        overlay.innerHTML = `<div class="customer-arrival-text">Şu anda dükkanda müşteri yok...<br><span style="font-size:0.8rem; color:var(--text-muted);">Bugün bakılan: ${GameState.dayServedCount}/${GameState.dailyLimit}</span></div>`;
    }
    
    document.getElementById('customerPanelTitle').innerText = `Gün ${GameState.currentDayNumber} - Boş Zaman Periyodu (10 Sn)`;
    document.getElementById('timerBar').className = "timer-bar waiting";
    UIController.updateTimerBar();
}

function enterCustomerActiveState() {
    GameState.status = 'CUSTOMER_ACTIVE';
    GameState.timeRemaining = GameState.maxCustomerPatience;
    UIController.setDisplay('customerOverlay', 'none');
    document.getElementById('customerPanelTitle').innerText = `Gün ${GameState.currentDayNumber} - Müşteri Süresi (${GameState.maxCustomerPatience} Sn)`;
    document.getElementById('timerBar').className = "timer-bar active-customer";
    
    GameState.isNabizVerified = false;
    const lockWarning = document.getElementById('nabizLockWarning');
    if (lockWarning) {
        lockWarning.classList.remove('hidden');
        lockWarning.style.background = "rgba(239, 68, 68, 0.1)";
        lockWarning.style.borderColor = "var(--danger-color)";
        lockWarning.style.color = "#f87171";
        lockWarning.innerText = "⚠️ Dikkat: Nabız uygulamasında bu reçete kodunu çözümlemeden ilaç satışı yapamazsınız!";
    }

    const customer = GameState.activeDayCustomers[GameState.currentCustomerIndex];
    const prescriptionCode = generatePrescriptionCodeForCustomer(customer);
    document.getElementById('c-prescription-code').innerText = prescriptionCode;
    
    document.getElementById('nabizCustomerName').value = customer.name;
    document.getElementById('nabizPrescriptionCode').value = prescriptionCode;
    
    document.getElementById('nabizSolveGroup').value = "";
    document.getElementById('nabizSolveDisease').value = "";
    document.getElementById('nabizSolveAge').value = "";
    UIController.setDisplay('nabizPrescriptionReport', 'none');

    UIController.updateTimerBar();
}

function triggerDayEndState() {
    GameState.status = 'DAY_END';
    GameLoop.stop();
    const overlay = document.getElementById('customerOverlay');
    if (overlay) {
        UIController.setDisplay('customerOverlay', 'flex');
        overlay.innerHTML = `
            <div class="customer-arrival-text" style="color: var(--warning-color);">Bugünlük ${GameState.dailyLimit} hasta limitine ulaşıldı. Gün Bitti!</div>
            <button class="next-day-btn" onclick="progressToNextDay()">Günü Bitir</button>
        `;
    }
}

function progressToNextDay() {
    GameState.currentDayNumber++;
    GameState.dayServedCount = 0;
    GameState.gameStarted = false; 
    
    generateRandomCustomersForDay(); 
    
    UIController.setDisplay('lockScreenArea', 'flex');
    UIController.setDisplay('handbookArea', 'none');
    UIController.setDisplay('appNabizContainer', 'none');
    UIController.setDisplay('appSwitcherTabs', 'none');
    UIController.setDisplay('nabizPrescriptionReport', 'none');
    
    switchPhoneApp('HANDBOOK'); 
    updateLockScreenNotification();
    
    const lockClock = document.getElementById('lockScreenClock');
    if (lockClock) lockClock.innerText = "08:00";
    
    GameLoop.stop();
    
    const prescriptionCodeDisplay = document.getElementById('c-prescription-code');
    if (prescriptionCodeDisplay) prescriptionCodeDisplay.innerText = "--";
    
    const overlay = document.getElementById('customerOverlay');
    if (overlay) {
        UIController.setDisplay('customerOverlay', 'flex');
        overlay.innerHTML = `<div class="customer-arrival-text">Günü başlatmanız bekleniyor...<br>Müşteriler yolda.</div>`;
    }
    
    GameState.resetCart();
    renderCart();
    initShopMedicines();
}

function triggerGameOverState() {
    GameState.status = 'GAME_OVER';
    GameLoop.stop();
    const overlay = document.getElementById('customerOverlay');
    if (overlay) {
        UIController.setDisplay('customerOverlay', 'flex');
        overlay.innerHTML = `
            <div class="customer-arrival-text" style="color: var(--success-color); font-size:1.3rem; line-height: 1.6;">
                Tebrikler Eczacı!<br>
                <span style="font-size:0.95rem; color:white; font-weight: normal;">
                    4 gün boyunca 20 hastanın tamamına başarıyla hizmet verdin ve prototipi tamamladın!
                </span>
            </div>
        `;
    }
}

function handleCustomerTimeout() {
    const currentCustomer = GameState.activeDayCustomers[GameState.currentCustomerIndex];
    
    GameState.addXp(0);
    GameState.addEp(-10);

    document.getElementById('m-title').innerText = `${currentCustomer.name} Eczaneyi Terk Etti!`;
    document.getElementById('m-desc').innerHTML = `
        <span style="color: var(--danger-color); font-weight: bold;">Müşteri işlem süresi bittiği için hizmet alamadan ayrıldı.</span><br><br>
        <strong>Kazanılan Deneyim:</strong> <span style="color: #a855f7; font-weight: bold;">+0 XP</span><br>
        <strong>Eczane Puanı Etkisi:</strong> <span style="color: var(--danger-color); font-weight: bold;">-10 EP</span>
    `;
    
    let reportHTML = "";
    currentCustomer.symptomsList.forEach(symptom => {
        const turkishSymptomName = symptomNamesMap[symptom] || symptom;
        reportHTML += `<li class="failed">İyileştirilemedi: <strong>${turkishSymptomName}</strong> (Süre bitti)</li>`;
    });
    
    document.getElementById('m-list').innerHTML = reportHTML;
    document.getElementById('resultModal').style.display = 'flex';
    document.getElementById('customerPanel').style.borderColor = "var(--danger-color)";

    GameState.dayServedCount++;
    GameState.currentCustomerIndex++;
    GameState.resetCart();
    renderCart();
}

function switchToDepot() {
    GameState.currentMode = 'DEPOT';
    GameState.resetCart();
    document.getElementById('shopPanel').style.display = 'none';
    document.getElementById('depotPanel').style.display = 'block';
    initDepotMedicines();
    renderCart();
}

function switchToShop() {
    GameState.currentMode = 'SHOP';
    GameState.resetCart();
    document.getElementById('depotPanel').style.display = 'none';
    document.getElementById('shopPanel').style.display = 'block';
    initShopMedicines();
    renderCart();
}

function filterShopMedicines(group, btn) {
    GameState.currentShopFilter = group;
    document.getElementById('shopFilterContainer').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    initShopMedicines();
}

function filterDepotMedicines(group, btn) {
    GameState.currentDepotFilter = group;
    document.getElementById('depotFilterContainer').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    initDepotMedicines();
}

function addToCart(medId) {
    if (GameState.isWarningActive || GameState.status === 'DAY_END' || GameState.status === 'GAME_OVER') return;

    const med = medicines.find(m => m.id === medId);
    if (!med) return;

    if (GameState.currentMode === 'SHOP') {
        if (!GameState.gameStarted || GameState.status !== 'CUSTOMER_ACTIVE') return; 
        if (!GameState.isNabizVerified) {
            alert("⚠️ Lütfen önce Nabız uygulamasından reçete kodunu başarılı bir şekilde çözümleyin!");
            return;
        }
        if (med.count <= 0 || GameState.cart.length >= 2 || GameState.cart.some(item => item.id === medId)) return;
        
        GameState.cart.push({ id: medId, quantity: 1 });
    } else {
        const existingItem = GameState.cart.find(item => item.id === medId);
        if (existingItem) existingItem.quantity += 1;
        else GameState.cart.push({ id: medId, quantity: 1 });
    }
    renderCart();
}

function removeFromCart(medId) {
    if (GameState.isWarningActive) return;
    GameState.cart = GameState.cart.filter(item => item.id !== medId);
    renderCart();
}

function updateCartItemQuantity(medId, value) {
    const item = GameState.cart.find(i => i.id === medId);
    if (!item) return;
    
    const qty = parseInt(value);
    if (qty <= 0 || isNaN(qty)) removeFromCart(medId);
    else item.quantity = qty;
    renderCart();
}

function renderCart() {
    const cartList = document.getElementById('cartList');
    const cartEmpty = document.getElementById('cartEmpty');
    const submitBtn = document.getElementById('submitBtn');
    const titleElement = document.getElementById('cartTitle');

    if (!cartList || !cartEmpty || !submitBtn || !titleElement) return;

    const items = cartList.querySelectorAll('.cart-item');
    items.forEach(item => item.remove());

    if (GameState.currentMode === 'DEPOT') {
        let totalCost = GameState.cart.reduce((sum, item) => {
            const originalMed = medicines.find(m => m.id === item.id);
            return sum + ((originalMed ? originalMed.buyPrice : 0) * item.quantity);
        }, 0);
        titleElement.innerText = `Toptan Alım Sepeti (Toplam Tutar: $${totalCost})`;
    } else {
        titleElement.innerText = "Sepet (Müşteri Reçetesi)";
    }

    const isBlocked = GameState.cart.length === 0 || (GameState.currentMode === 'SHOP' && !GameState.isNabizVerified);

    if (isBlocked) {
        cartEmpty.style.display = GameState.cart.length === 0 ? 'block' : 'none';
        submitBtn.disabled = true;
        submitBtn.classList.remove('active');
    } else {
        cartEmpty.style.display = 'none';
        if (!GameState.isWarningActive) {
            submitBtn.disabled = false;
            submitBtn.classList.add('active');
        }

        GameState.cart.forEach(item => {
            const originalMed = medicines.find(m => m.id === item.id);
            if (!originalMed) return;

            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.style.display = 'flex';
            itemDiv.style.justifyContent = 'space-between';
            itemDiv.style.alignItems = 'center';
            itemDiv.style.width = '100%';

            if (GameState.currentMode === 'DEPOT') {
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
    if (GameState.cart.length === 0 || GameState.isWarningActive) return;
    if (GameState.currentMode === 'SHOP') handleShopConfirm();
    else handleDepotConfirm();
}

function handleShopConfirm() {
    const currentCustomer = GameState.activeDayCustomers[GameState.currentCustomerIndex];
    const submitBtn = document.getElementById('submitBtn');
    const customerPanel = document.getElementById('customerPanel');

    const cartItem = GameState.cart[0];
    const originalMed = medicines.find(m => m.id === cartItem.id);
    if (!originalMed) return;

    const customerAge = currentCustomer.ageGroup.trim().toLowerCase();
    const isAgeCompatible = originalMed.compatibility.some(ageId => {
        const mappedAgeName = (ageGroupsMap[ageId] || "").trim().toLowerCase();
        return mappedAgeName === customerAge;
    });

    if (!isAgeCompatible) {
        GameState.isWarningActive = true;
        submitBtn.disabled = true;
        submitBtn.classList.remove('active');
        submitBtn.classList.add('warning');
        submitBtn.innerText = "Bu müşteriye bu ilacı veremezsiniz!";
        setTimeout(() => {
            GameState.isWarningActive = false;
            submitBtn.classList.remove('warning');
            submitBtn.innerText = "Onayla";
            renderCart();
        }, 5000);
        return;
    }

    let totalProfit = 0;
    let reportHTML = "";
    let combinedMedSymptoms = [];

    GameState.cart.forEach(item => {
        const targetMed = medicines.find(m => m.id === item.id);
        if (targetMed) {
            targetMed.count--; 
            totalProfit += targetMed.price;
            combinedMedSymptoms = combinedMedSymptoms.concat(targetMed.symptoms);
        }
    });

    let healedCount = 0;
    currentCustomer.symptomsList.forEach(symptom => {
        let isHealed = combinedMedSymptoms.some(mSym => mSym.toLowerCase().trim() === symptom.toLowerCase().trim());
        if (isHealed) {
            healedCount++;
            reportHTML += `<li class="healed">İyileştirildi: <strong>${symptomNamesMap[symptom] || symptom}</strong></li>`;
        } else {
            reportHTML += `<li class="failed">İyileştirilemedi: <strong>${symptomNamesMap[symptom] || symptom}</strong></li>`;
        }
    });

    let isPerfectHeal = (healedCount === currentCustomer.symptomsList.length);
    let earnedXp = isPerfectHeal ? 10 : 2;
    let earnedEp = isPerfectHeal ? 5 : -5;

    GameState.addMoney(totalProfit);
    GameState.addXp(earnedXp);
    GameState.addEp(earnedEp);

    document.getElementById('m-title').innerText = `${currentCustomer.name} - Teşhis Sonucu`;
    let scoreColorClass = isPerfectHeal ? "color: var(--success-color);" : "color: var(--danger-color);";
    
    document.getElementById('m-desc').innerHTML = `
        Satılan ilaçlar başarıyla teslim edildi. Eczanenize <strong>+$${totalProfit}</strong> eklendi.<br><br>
        <strong>Kazanılan Deneyim:</strong> <span style="color: #a855f7; font-weight: bold;">+${earnedXp} XP</span><br>
        <strong>Eczane Puanı Etkisi:</strong> <span style="${scoreColorClass} font-weight: bold;">${earnedEp > 0 ? "+" + earnedEp : earnedEp} EP</span>
    `;
    
    document.getElementById('m-list').innerHTML = reportHTML;
    document.getElementById('resultModal').style.display = 'flex';
    customerPanel.style.borderColor = "var(--success-color)";

    GameState.dayServedCount++;
    GameState.currentCustomerIndex++;
    GameState.resetCart();
    
    initShopMedicines(); 
    renderCart();
}

function handleDepotConfirm() {
    if (GameState.cart.length === 0) {
        alert("Sepetiniz boş!");
        return;
    }

    let totalCost = 0;
    GameState.cart.forEach(item => {
        const originalMed = medicines.find(m => m.id === item.id);
        if (originalMed) totalCost += originalMed.buyPrice * item.quantity;
    });

    if (GameState.money < totalCost) {
        alert("Yetersiz Bütçe! Gerekli: $" + totalCost + ", Sahip olunan: $" + GameState.money);
        return;
    }
    
    GameState.addMoney(-totalCost);
    
    GameState.cart.forEach(item => {
        const originalMed = medicines.find(m => m.id === item.id);
        GameState.pendingOrders.push({
            id: item.id,
            name: originalMed ? originalMed.name : "Bilinmeyen İlaç",
            quantity: item.quantity,
            timeLeft: 30 
        });
    });

    alert(`Siparişleriniz verildi! İlaçların teslimat süresi 30 saniyedir.`);
    
    GameState.resetCart();
    renderCart();
    initDepotMedicines();
    initShopMedicines();
}

function closeModal() {
    document.getElementById('resultModal').style.display = 'none';
    document.getElementById('customerPanel').style.borderColor = "var(--border-color)";
    initShopMedicines();
    
    if (GameState.dayServedCount >= GameState.dailyLimit) {
        if (GameState.currentDayNumber >= GameState.totalDaysLimit) triggerGameOverState();
        else triggerDayEndState();
    } else {
        enterEmptyWaitState();
    }
}

function switchHandbookTab(tab) {
    GameState.currentHandbookTab = tab;
    document.getElementById('tabDiseases').classList.toggle('active', tab === 'DISEASES');
    document.getElementById('tabGroups').classList.toggle('active', tab === 'GROUPS');
    buildHandbookFilters();
    renderHandbook();
}

function buildHandbookFilters() {
    const select = document.getElementById('handbookFilter');
    if (!select) return;
    select.innerHTML = '';

    if (GameState.currentHandbookTab === 'DISEASES') {
        const optAll = document.createElement('option');
        optAll.value = "HEPSİ"; optAll.innerText = "Tüm Hastalıklar";
        select.appendChild(optAll);
        diseases.forEach(d => {
            const opt = document.createElement('option');
            opt.value = d.id; opt.innerText = d.id; select.appendChild(opt);
        });
    } else {
        const optAll = document.createElement('option');
        optAll.value = "HEPSİ"; optAll.innerText = "Tüm Gruplar";
        select.appendChild(optAll);
        Object.keys(groupNamesMap).forEach(gId => {
            const opt = document.createElement('option');
            opt.value = gId; opt.innerText = gId; select.appendChild(opt);
        });
    }
}

function renderHandbook() {
    const listDiv = document.getElementById('knowledgeList');
    const select = document.getElementById('handbookFilter');
    if (!listDiv || !select || !select.value) return;
    listDiv.innerHTML = '';

    if (GameState.currentHandbookTab === 'DISEASES') {
        let filtered = select.value === 'HEPSİ' ? diseases : diseases.filter(d => d.id === select.value);
        filtered.forEach(d => {
            const item = document.createElement('div');
            item.className = 'group-item'; 
            const symptomNames = d.symptoms.map(sId => symptomNamesMap[sId] || sId).join(', ');
            const ageNames = d.targetAges.map(ageId => ageGroupsMap[ageId] || ageId).join(', ');
            const typeName = (diseaseTypes.find(t => t.id === d.typeId) || {}).name || d.typeId;

            item.innerHTML = `
                <h5 style="color: var(--warning-color);">${d.id}: ${d.name}</h5>
                <div style="font-size:0.72rem; color:var(--text-main); margin-top:6px;"><strong>Tür:</strong> ${typeName}</div>
                <div style="font-size:0.72rem; color:var(--text-main);"><strong>Semptomlar:</strong> ${symptomNames}</div>
                <div style="font-size:0.72rem; color:var(--text-main);"><strong>Yaygınlık Derecesi:</strong> ${d.prevalence} / 3</div>
                <div style="font-size:0.72rem; color:var(--text-main);"><strong>Etkilediği Gruplar:</strong> ${ageNames}</div>
            `;
            listDiv.appendChild(item);
        });
    } else {
        let filteredKeys = select.value === 'HEPSİ' ? Object.keys(groupNamesMap) : [select.value];
        filteredKeys.forEach(gId => {
            const item = document.createElement('div');
            item.className = 'group-item';
            let gDesc = "Bu gruptaki ilaçlar ilgili semptomların tedavisinde kullanılır.";
            if(gId === "SLN-1") gDesc = "Burun tıkanıklığı, akıntı ve solunum yolları rahatsızlıkları için.";
            else if(gId === "ANL-1") gDesc = "Baş ağrısı, diş çıkarma ağrısı ve genel hafif sızılar için.";
            else if(gId === "DER-1") gDesc = "Pişik, egzama ve böcek ısırıkları gibi cilt tahrişlerini tedavi eden.";
            else if(gId === "ANT-1") gDesc = "Toz ve saman nezlesi gibi alerjik reaksiyonları baskılayan.";
            else if(gId === "SND-1") gDesc = "Hazımsızlık, gaz ve mide yanması semptomlarını hafifleten.";
            else if(gId === "AGZ-1") gDesc = "Aft ve bebeklerde diş çıkarma ağrısını lokal olarak uyuşturan.";
            
            item.innerHTML = `<h5>${gId}: ${groupNamesMap[gId]}</h5><div style="font-size:0.75rem; color:var(--text-muted);">${gDesc}</div>`;
            listDiv.appendChild(item);
        });
    }
}

function handleMoneyClick() {
    GameState.moneyClickCount++;
    clearTimeout(GameState.moneyClickTimeout);
    if (GameState.moneyClickCount === 3) {
        GameState.addMoney(200); 
        GameState.moneyClickCount = 0;
    } else {
        GameState.moneyClickTimeout = setTimeout(() => { GameState.moneyClickCount = 0; }, 400);
    }
}

function switchPhoneApp(appKey) {
    if (appKey === 'HANDBOOK') {
        UIController.setDisplay('appHandbookContainer', 'block');
        UIController.setDisplay('appNabizContainer', 'none');
        document.getElementById('appBtnHandbook').classList.add('active');
        document.getElementById('appBtnNabiz').classList.remove('active');
        document.getElementById('phoneAppTitle').innerText = "Eczacı El Kitabı";
    } else {
        UIController.setDisplay('appHandbookContainer', 'none');
        UIController.setDisplay('appNabizContainer', 'flex');
        document.getElementById('appBtnHandbook').classList.remove('active');
        document.getElementById('appBtnNabiz').classList.add('active');
        document.getElementById('phoneAppTitle').innerText = "Nabız Sistemi";
    }
}

function verifyNabizCode() {
    if (GameState.status !== 'CUSTOMER_ACTIVE') {
        alert("Eczanede şu anda aktif bir hasta bulunmamaktadır!");
        return;
    }

    const currentCustomer = GameState.activeDayCustomers[GameState.currentCustomerIndex];
    const med = medicines.find(m => m.id === currentCustomer.prescribedMed);

    const isGroupCorrect = document.getElementById('nabizSolveGroup').value === med.group;
    const isDiseaseCorrect = document.getElementById('nabizSolveDisease').value === currentCustomer.disease;
    const mappedAge = currentCustomer.ageGroup === 'Bebek' ? 'AGE-1' : currentCustomer.ageGroup === 'Çocuk' ? 'AGE-2' : 'AGE-3';
    const isAgeCorrect = document.getElementById('nabizSolveAge').value === mappedAge;

    const lockWarning = document.getElementById('nabizLockWarning');

    if (isGroupCorrect && isDiseaseCorrect && isAgeCorrect) {
        GameState.isNabizVerified = true;
        
        const diseaseObj = diseases.find(d => d.id === currentCustomer.disease);
        document.getElementById('n-rep-name').innerText = currentCustomer.name;
        document.getElementById('n-rep-disease').innerText = diseaseObj ? diseaseObj.name : "Bilinmiyor";
        document.getElementById('n-rep-age').innerText = currentCustomer.ageGroup;
        document.getElementById('n-rep-med').innerHTML = `<strong style="color: #047857; font-size: 1rem;">${med.name}</strong>`;

        UIController.setDisplay('nabizPrescriptionReport', 'block');

        if (lockWarning) {
            lockWarning.style.background = "rgba(16, 185, 129, 0.1)";
            lockWarning.style.borderColor = "var(--success-color)";
            lockWarning.style.color = "#34d399";
            lockWarning.innerText = "✓ Reçete kodu başarıyla çözümlendi! Şimdi sepeti onaylayabilirsiniz.";
        }

        renderCart();
        setTimeout(() => {
            const phoneScreen = document.getElementById('phoneScreen');
            if (phoneScreen) phoneScreen.scrollTo({ top: phoneScreen.scrollHeight, behavior: 'smooth' });
        }, 100);
    } else {
        GameState.isNabizVerified = false;
        UIController.setDisplay('nabizPrescriptionReport', 'none');
        
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

// === WINDOW BAĞLANTILARI ===
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

document.addEventListener("DOMContentLoaded", () => {
    initShopMedicines();
    initDepotMedicines();
    
    // Boş string ('') yerine null geçiyoruz ki DOMException hatası fırlatmasın
    UIController.updateStat('moneyDisplay', `$${GameState.money}`, null);
    UIController.setDisplay('appSwitcherTabs', 'none');
    
    // Artık kod yukarıda kesilmeyeceği için müşteriler başarıyla oluşacak
    generateRandomCustomersForDay();
    updateLockScreenNotification();
});
