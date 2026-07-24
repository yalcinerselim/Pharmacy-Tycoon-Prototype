// game.js

// === 1. VERİ MODELLERİ VE TABLOLARI ===

// === 1. SEMPTOMLAR (symptoms) ===
const symptoms = [
    { id: "SMP-001", name: "Hapşırma", icon: null, category: "Solunum", severityMin: 1, severityMax: 3 },
    { id: "SMP-002", name: "Burun Akıntısı", icon: null, category: "Solunum", severityMin: 1, severityMax: 4 },
    { id: "SMP-003", name: "Burun Tıkanıklığı", icon: null, category: "Solunum", severityMin: 1, severityMax: 5 },
    { id: "SMP-004", name: "Boğaz Ağrısı", icon: null, category: "Solunum", severityMin: 1, severityMax: 7 },
    { id: "SMP-005", name: "Öksürük", icon: null, category: "Solunum", severityMin: 1, severityMax: 8 },
    { id: "SMP-006", name: "Mide Yanması", icon: null, category: "Sindirim", severityMin: 1, severityMax: 5 },
    { id: "SMP-007", name: "Mide Bulantısı", icon: null, category: "Sindirim", severityMin: 1, severityMax: 8 },
    { id: "SMP-008", name: "Karın Ağrısı", icon: null, category: "Sindirim", severityMin: 1, severityMax: 10 },
    { id: "SMP-009", name: "İshal", icon: null, category: "Sindirim", severityMin: 1, severityMax: 9 },
    { id: "SMP-010", name: "Baş Dönmesi", icon: null, category: "Nörolojik", severityMin: 1, severityMax: 8 },
    { id: "SMP-011", name: "Baş Ağrısı", icon: null, category: "Nörolojik", severityMin: 1, severityMax: 10 },
    { id: "SMP-012", name: "Ciltte Kaşıntı", icon: null, category: "Dermatoloji", severityMin: 1, severityMax: 5 },
    { id: "SMP-013", name: "Ciltte Kızarıklık", icon: null, category: "Dermatoloji", severityMin: 1, severityMax: 7 },
    { id: "SMP-014", name: "Eklem Ağrısı", icon: null, category: "Ortopedik", severityMin: 1, severityMax: 8 },
    { id: "SMP-015", name: "Kas Ağrısı", icon: null, category: "Ortopedik", severityMin: 1, severityMax: 7 },
    { id: "SMP-016", name: "Ağız İçi Yara", icon: null, category: "Ağız Sağlığı", severityMin: 1, severityMax: 4 },
    { id: "SMP-017", name: "Diş Ağrısı", icon: null, category: "Ağız Sağlığı", severityMin: 1, severityMax: 8 },
    { id: "SMP-018", name: "Göz Sulanması", icon: null, category: "Göz", severityMin: 1, severityMax: 4 },
    { id: "SMP-019", name: "Halsizlik", icon: null, category: "Sistemik", severityMin: 1, severityMax: 8 },
    { id: "SMP-020", name: "Ateş", icon: null, category: "Sistemik", severityMin: 1, severityMax: 10 }
];

// === 2. HASTALIK TÜRLERİ (diseaseTypes) ===
const diseaseTypes = [
    { id: "TYP-001", name: "Dermatoloji", desc: "Cilt yüzeyinde oluşan, genellikle dış etken kaynaklı rahatsızlıklar." },
    { id: "TYP-002", name: "Nörolojik", desc: "Sinir sistemi ve beyin fonksiyonlarıyla ilgili hafif veya ağır ağrı/disfonksiyonlar." },
    { id: "TYP-003", name: "Ağız Sağlığı", desc: "Diş, diş eti ve ağız içi mukozasında görülen lokalize sorunlar." },
    { id: "TYP-004", name: "Solunum & KBB", desc: "Akciğer ve solunum yollarını etkileyen, mevsimselliği yüksek hastalıklar." },
    { id: "TYP-005", name: "Sindirim", desc: "Mide ve bağırsak florasını etkileyen, beslenme veya mikrobik kaynaklı durumlar." },
    { id: "TYP-006", name: "Alerji", desc: "Vücudun dış etkenlere (toz, polen vb.) karşı gösterdiği aşırı reaksiyonlar." },
    { id: "TYP-007", name: "Sistemik", desc: "Vücudun birden fazla bölgesini veya genel işleyişini (ateş vb.) etkileyen durumlar." },
    { id: "TYP-008", name: "Göz", desc: "Göz ve göz çevresi dokularını etkileyen hassas yüzeysel rahatsızlıklar." },
    { id: "TYP-009", name: "Ortopedik", desc: "Kas, eklem ve iskelet sisteminde oluşan gerilme ve ağrı durumları." }
];

// === 3. HASTALIKLAR (diseases) ===
const diseases = [
    { id: "HST-001", name: "Dermaklinis", typeName: "Dermatoloji", symptoms: ["SMP-012-1", "SMP-013-1"], prevalence: 0.30, seasons: "Hepsi", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-002", name: "Kefaljin", typeName: "Nörolojik", symptoms: ["SMP-011-1"], prevalence: 0.85, seasons: "Hepsi", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-003", name: "Stomatitiz", typeName: "Ağız Sağlığı", symptoms: ["SMP-016-1"], prevalence: 0.25, seasons: "Hepsi", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-004", name: "İnsektis Dermatit", typeName: "Dermatoloji", symptoms: ["SMP-012-1"], prevalence: 0.50, seasons: "Yaz, İlkbahar", targetAges: ["AGE-1", "AGE-2", "AGE-3"] },
    { id: "HST-005", name: "Epidermitis", typeName: "Dermatoloji", symptoms: ["SMP-012-1", "SMP-013-1"], prevalence: 0.75, seasons: "Hepsi", targetAges: ["AGE-1"] },
    { id: "HST-006", name: "Thermoreksis", typeName: "Solunum & KBB", symptoms: ["SMP-003-1", "SMP-004-1"], prevalence: 0.20, seasons: "Yaz", targetAges: ["AGE-3"] },
    { id: "HST-007", name: "Dispeptitis", typeName: "Sindirim", symptoms: ["SMP-006-1", "SMP-007-1"], prevalence: 0.70, seasons: "Hepsi", targetAges: ["AGE-1", "AGE-2", "AGE-3"] },
    { id: "HST-008", name: "Konjonktivitis", typeName: "Göz", symptoms: ["SMP-018-1"], prevalence: 0.30, seasons: "Hepsi", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-009", name: "Polenozis", typeName: "Alerji", symptoms: ["SMP-001-1", "SMP-002-1", "SMP-018-1"], prevalence: 0.65, seasons: "Yaz, İlkbahar", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-010", name: "Rino-Faranjit", typeName: "Solunum & KBB", symptoms: ["SMP-002-1", "SMP-004-1", "SMP-005-1"], prevalence: 0.90, seasons: "Sonbahar, Kış", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-011", name: "Dentisyon Febri", typeName: "Ağız Sağlığı", symptoms: ["SMP-017-1", "SMP-020-1"], prevalence: 0.45, seasons: "Hepsi", targetAges: ["AGE-1", "AGE-2"] },
    { id: "HST-012", name: "Enteroflux", typeName: "Sindirim", symptoms: ["SMP-008-1", "SMP-009-1"], prevalence: 0.40, seasons: "Hepsi", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-013", name: "Miyoartralji", typeName: "Ortopedik", symptoms: ["SMP-014-1", "SMP-015-1"], prevalence: 0.35, seasons: "Sonbahar, Kış", targetAges: ["AGE-3"] },
    { id: "HST-014", name: "Laringo-Tussis", typeName: "Solunum & KBB", symptoms: ["SMP-004-1", "SMP-005-1"], prevalence: 0.60, seasons: "Kış", targetAges: ["AGE-1", "AGE-2"] },
    { id: "HST-015", name: "Gastritiz", typeName: "Sindirim", symptoms: ["SMP-006-1", "SMP-007-1"], prevalence: 0.50, seasons: "Hepsi", targetAges: ["AGE-3"] },
    { id: "HST-016", name: "Otaljin", typeName: "Solunum & KBB", symptoms: ["SMP-020-1", "SMP-019-1"], prevalence: 0.25, seasons: "Sonbahar, Kış", targetAges: ["AGE-1", "AGE-2"] },
    { id: "HST-017", name: "Vertigo-Nevralji", typeName: "Nörolojik", symptoms: ["SMP-010-1", "SMP-011-1"], prevalence: 0.10, seasons: "Hepsi", targetAges: ["AGE-3"] },
    { id: "HST-018", name: "Fotofobik Rinit", typeName: "Alerji", symptoms: ["SMP-001-1", "SMP-018-1"], prevalence: 0.25, seasons: "İlkbahar, Yaz", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-019", name: "Astenik Febri", typeName: "Sistemik", symptoms: ["SMP-019-1", "SMP-020-2"], prevalence: 0.40, seasons: "Sonbahar, Kış", targetAges: ["AGE-1", "AGE-2", "AGE-3"] },
    { id: "HST-020", name: "Odontos-Spazm", typeName: "Ağız Sağlığı", symptoms: ["SMP-017-2"], prevalence: 0.45, seasons: "Hepsi", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-021", name: "Rinokomozis", typeName: "Solunum & KBB", symptoms: ["SMP-002-1", "SMP-003-1"], prevalence: 0.70, seasons: "Sonbahar, Kış", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-022", name: "Miyo-Kefaljin", typeName: "Nörolojik", symptoms: ["SMP-011-1", "SMP-015-1"], prevalence: 0.30, seasons: "Hepsi", targetAges: ["AGE-3"] },
    { id: "HST-023", name: "Entero-Gastrit", typeName: "Sindirim", symptoms: ["SMP-007-1", "SMP-008-1", "SMP-009-1"], prevalence: 0.40, seasons: "Yaz, Sonbahar", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-024", name: "Dermato-Pruritus", typeName: "Dermatoloji", symptoms: ["SMP-012-1"], prevalence: 0.50, seasons: "Hepsi", targetAges: ["AGE-1", "AGE-2", "AGE-3"] },
    { id: "HST-025", name: "Faringo-Tussis", typeName: "Solunum & KBB", symptoms: ["SMP-004-1", "SMP-005-1", "SMP-020-1"], prevalence: 0.65, seasons: "Kış", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-026", name: "Astenik Dispepsi", typeName: "Sindirim", symptoms: ["SMP-006-1", "SMP-019-1"], prevalence: 0.20, seasons: "Hepsi", targetAges: ["AGE-3"] },
    { id: "HST-027", name: "Otitis-Febri", typeName: "Solunum & KBB", symptoms: ["SMP-020-2"], prevalence: 0.15, seasons: "Sonbahar, Kış", targetAges: ["AGE-1", "AGE-2"] },
    { id: "HST-028", name: "Allergo-Rinit", typeName: "Alerji", symptoms: ["SMP-001-1", "SMP-003-1"], prevalence: 0.60, seasons: "İlkbahar, Yaz", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-029", name: "Odonto-Gingivit", typeName: "Ağız Sağlığı", symptoms: ["SMP-016-1", "SMP-017-1"], prevalence: 0.30, seasons: "Hepsi", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-030", name: "Miyo-Sistemik Febri", typeName: "Sistemik", symptoms: ["SMP-015-1", "SMP-019-1", "SMP-020-1"], prevalence: 0.35, seasons: "Kış", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-031", name: "Dermato-Eritem", typeName: "Dermatoloji", symptoms: ["SMP-013-1"], prevalence: 0.20, seasons: "Yaz", targetAges: ["AGE-1", "AGE-2"] },
    { id: "HST-032", name: "Vertigo-Komozis", typeName: "Nörolojik", symptoms: ["SMP-010-1", "SMP-019-1"], prevalence: 0.10, seasons: "Hepsi", targetAges: ["AGE-3"] },
    { id: "HST-033", name: "Laringo-Stomatit", typeName: "Ağız Sağlığı", symptoms: ["SMP-004-1", "SMP-016-1"], prevalence: 0.25, seasons: "Hepsi", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-034", name: "Entero-Dyspepsia", typeName: "Sindirim", symptoms: ["SMP-006-1", "SMP-009-1"], prevalence: 0.35, seasons: "Hepsi", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-035", name: "Oculo-Rinit", typeName: "Alerji", symptoms: ["SMP-002-1", "SMP-018-1"], prevalence: 0.40, seasons: "İlkbahar", targetAges: ["AGE-2", "AGE-3"] }
];

// === 4. İLAÇLAR (medicines) ===
const medicines = [
    { id: "ILG-017", name: "Orajel Macun", level: 1, group: "Ağız & Diş Sağlığı", desc: "Diş ağrısı ve ağız içi yaralara antiseptik.", symptoms: ["SMP-016", "SMP-017"], treatedSeverity: 1, compatibility: ["AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 10, price: 17, count: 1, shelfLife: 20 },
    { id: "ILG-018", name: "Dentababy Jel", level: 1, group: "Ağız & Diş Sağlığı", desc: "Bebeklerin diş çıkarma ağrılarını azaltan jel.", symptoms: ["SMP-016", "SMP-017"], treatedSeverity: 1, compatibility: ["AGE-1", "AGE-2"], forbiddenConditions: [], buyPrice: 12, price: 20, count: 1, shelfLife: 15 },
    { id: "ILG-026", name: "Pedident Ağız Jeli", level: 1, group: "Ağız & Diş Sağlığı", desc: "Bebeklerde ağız içi yara ve hassasiyet jeli.", symptoms: ["SMP-016", "SMP-017"], treatedSeverity: 1, compatibility: ["AGE-1"], forbiddenConditions: [], buyPrice: 9, price: 16, count: 1, shelfLife: 18 },
    { id: "ILG-036", name: "Ora-Senior Solüsyon", level: 1, group: "Ağız & Diş Sağlığı", desc: "Protez ve yaşlı ağız içi yaraları için sprey.", symptoms: ["SMP-016", "SMP-017"], treatedSeverity: 2, compatibility: ["AGE-3"], forbiddenConditions: [], buyPrice: 14, price: 22, count: 1, shelfLife: 24 },
    { id: "ILG-037", name: "Dent-Forte Jel", level: 1, group: "Ağız & Diş Sağlığı", desc: "Yetişkinlerde şiddetli diş eti ağrısı jeli.", symptoms: ["SMP-016"], treatedSeverity: 2, compatibility: ["AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 13, price: 21, count: 1, shelfLife: 20 },
    { id: "ILG-001", name: "Parasedol Tablet", level: 1, group: "Sistemik & Genel", desc: "Hafif etkili genel ağrı kesici ve ateş düşürücü.", symptoms: ["SMP-011", "SMP-015"], treatedSeverity: 1, compatibility: ["AGE-2", "AGE-3"], forbiddenConditions: ["ODR-003"], buyPrice: 10, price: 15, count: 1, shelfLife: 20 },
    { id: "ILG-002", name: "Algofiks Kapsül", level: 1, group: "Sistemik & Genel", desc: "Şiddetli baş ağrısı ve kas spazmları için kapsül.", symptoms: ["SMP-011", "SMP-015"], treatedSeverity: 2, compatibility: ["AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 14, price: 22, count: 1, shelfLife: 18 },
    { id: "ILG-003", name: "Pedisip Şurup", level: 1, group: "Sistemik & Genel", desc: "Bebek ve çocuklar için hafif ağrı kesici.", symptoms: ["SMP-011", "SMP-020"], treatedSeverity: 1, compatibility: ["AGE-1", "AGE-2"], forbiddenConditions: [], buyPrice: 12, price: 18, count: 1, shelfLife: 12 },
    { id: "ILG-004", name: "Febri-Drop Damla", level: 1, group: "Sistemik & Genel", desc: "Bebeklerde yüksek ateş ve huzursuzluk için damla.", symptoms: ["SMP-020"], treatedSeverity: 2, compatibility: ["AGE-1"], forbiddenConditions: [], buyPrice: 15, price: 24, count: 1, shelfLife: 10 },
    { id: "ILG-028", name: "Arthri-Ease Fort", level: 1, group: "Sistemik & Genel", desc: "Yaşlılarda kronik eklem ve baş ağrısı için tablet.", symptoms: ["SMP-011", "SMP-015"], treatedSeverity: 2, compatibility: ["AGE-3"], forbiddenConditions: ["ODR-002"], buyPrice: 16, price: 25, count: 1, shelfLife: 24 },
    { id: "ILG-029", name: "Kid-Analgesic Şurup", level: 1, group: "Sistemik & Genel", desc: "Çocuklar için hızlı etki eden ateş düşürücü.", symptoms: ["SMP-020"], treatedSeverity: 1, compatibility: ["AGE-1"], forbiddenConditions: [], buyPrice: 11, price: 17, count: 1, shelfLife: 15 },
    { id: "ILG-011", name: "Allerfree Tablet", level: 1, group: "Alerji", desc: "Hapşırma ve göz sulanmasını engelleyen tablet.", symptoms: ["SMP-001", "SMP-018"], treatedSeverity: 1, compatibility: ["AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 11, price: 18, count: 1, shelfLife: 20 },
    { id: "ILG-012", name: "Histadrop Şurup", level: 1, group: "Alerji", desc: "Alerjik burun akıntısı ve hapşırmayı kesen şurup.", symptoms: ["SMP-001", "SMP-002"], treatedSeverity: 1, compatibility: ["AGE-1", "AGE-2"], forbiddenConditions: [], buyPrice: 13, price: 22, count: 1, shelfLife: 15 },
    { id: "ILG-024", name: "Alergo-Max Tablet", level: 1, group: "Alerji", desc: "Yoğun alerjik burun akıntısını kesen tablet.", symptoms: ["SMP-001", "SMP-002"], treatedSeverity: 2, compatibility: ["AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 12, price: 20, count: 1, shelfLife: 24 },
    { id: "ILG-034", name: "Aller-Baby Damla", level: 1, group: "Alerji", desc: "Bebeklerde mevsimsel alerji ve kaşıntı damlası.", symptoms: ["SMP-001"], treatedSeverity: 1, compatibility: ["AGE-1"], forbiddenConditions: [], buyPrice: 10, price: 16, count: 1, shelfLife: 12 },
    { id: "ILG-035", name: "Pedia-Histin Şurup", level: 1, group: "Alerji", desc: "Çocuklar için antihistaminik şurup.", symptoms: ["SMP-001", "SMP-018"], treatedSeverity: 1, compatibility: ["AGE-1", "AGE-2"], forbiddenConditions: [], buyPrice: 12, price: 19, count: 1, shelfLife: 18 },
    { id: "ILG-009", name: "Dermaplus Krem", level: 1, group: "Cilt & Dermatoloji", desc: "Ciltte kızarıklık ve kaşıntıyı yatıştıran krem.", symptoms: ["SMP-012", "SMP-013"], treatedSeverity: 1, compatibility: ["AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 12, price: 20, count: 1, shelfLife: 30 },
    { id: "ILG-010", name: "BabyCare Merhem", level: 1, group: "Cilt & Dermatoloji", desc: "Bebek pişiklerinde bariyer oluşturan merhem.", symptoms: ["SMP-012", "SMP-013"], treatedSeverity: 1, compatibility: ["AGE-1", "AGE-2"], forbiddenConditions: [], buyPrice: 10, price: 17, count: 1, shelfLife: 25 },
    { id: "ILG-031", name: "Cutis-Rest Jel", level: 1, group: "Cilt & Dermatoloji", desc: "Hassas bebek ve çocuk cildi için yatıştırıcı.", symptoms: ["SMP-012"], treatedSeverity: 1, compatibility: ["AGE-1"], forbiddenConditions: [], buyPrice: 9, price: 15, count: 1, shelfLife: 20 },
    { id: "ILG-032", name: "Derma-Derm Krem", level: 1, group: "Cilt & Dermatoloji", desc: "Yetişkinlerde egzama ve yoğun kaşıntı kremi.", symptoms: ["SMP-013"], treatedSeverity: 2, compatibility: ["AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 15, price: 24, count: 1, shelfLife: 30 },
    { id: "ILG-033", name: "Senio-Derm Merhem", level: 1, group: "Cilt & Dermatoloji", desc: "Yaşlılarda kuru cilt dokusu ve döküntü merhemi.", symptoms: ["SMP-012", "SMP-013"], treatedSeverity: 1, compatibility: ["AGE-3"], forbiddenConditions: [], buyPrice: 13, price: 21, count: 1, shelfLife: 25 },
    { id: "ILG-019", name: "Optiallerg Damla", level: 1, group: "Göz", desc: "Göz sulanması ve kaşıntısını gideren damla.", symptoms: ["SMP-018"], treatedSeverity: 1, compatibility: ["AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 12, price: 20, count: 1, shelfLife: 12 },
    { id: "ILG-038", name: "Pedia-Optic Damla", level: 1, group: "Göz", desc: "Bebek ve çocuklarda çapaklanma ve sulanma.", symptoms: ["SMP-018"], treatedSeverity: 1, compatibility: ["AGE-1", "AGE-2"], forbiddenConditions: [], buyPrice: 11, price: 17, count: 1, shelfLife: 10 },
    { id: "ILG-039", name: "Visio-Clean Damla", level: 1, group: "Göz", desc: "Bebeklerde hassas göz temizleme damlası.", symptoms: ["SMP-018"], treatedSeverity: 1, compatibility: ["AGE-1"], forbiddenConditions: [], buyPrice: 10, price: 15, count: 1, shelfLife: 12 },
    { id: "ILG-040", name: "Opti-Dry Relief", level: 1, group: "Göz", desc: "Yetişkin ve yaşlılarda göz kuruluğu damlası.", symptoms: ["SMP-018"], treatedSeverity: 1, compatibility: ["AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 14, price: 22, count: 1, shelfLife: 18 },
    { id: "ILG-041", name: "Senio-Optic Drop", level: 1, group: "Göz", desc: "Yaşlılarda göz tansiyonu/kızarıklık destek.", symptoms: ["SMP-018"], treatedSeverity: 2, compatibility: ["AGE-3"], forbiddenConditions: [], buyPrice: 17, price: 27, count: 1, shelfLife: 15 },
    { id: "ILG-020", name: "Verti-Null Tablet", level: 1, group: "Nörolojik & Sinir", desc: "Baş dönmesi ve halsizlik kesen spesifik tablet.", symptoms: ["SMP-010", "SMP-019"], treatedSeverity: 1, compatibility: ["AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 16, price: 26, count: 1, shelfLife: 20 },
    { id: "ILG-021", name: "Tonik-Plus Fort", level: 1, group: "Nörolojik & Sinir", desc: "Ağır halsizlik ve baş dönmesi için şase/tablet.", symptoms: ["SMP-010", "SMP-019"], treatedSeverity: 2, compatibility: ["AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 18, price: 30, count: 1, shelfLife: 15 },
    { id: "ILG-027", name: "Verti-Baby Damla", level: 1, group: "Nörolojik & Sinir", desc: "Bebeklerde halsizlik ve baş dönmesi damlası.", symptoms: ["SMP-010", "SMP-019"], treatedSeverity: 1, compatibility: ["AGE-1"], forbiddenConditions: [], buyPrice: 14, price: 22, count: 1, shelfLife: 15 },
    { id: "ILG-042", name: "Pedia-Vigor Şurup", level: 1, group: "Nörolojik & Sinir", desc: "Çocuklarda aşırı halsizlik ve bitkinlik şurubu.", symptoms: ["SMP-010"], treatedSeverity: 1, compatibility: ["AGE-1", "AGE-2"], forbiddenConditions: [], buyPrice: 13, price: 20, count: 1, shelfLife: 18 },
    { id: "ILG-043", name: "Senio-Verti Tablet", level: 1, group: "Nörolojik & Sinir", desc: "Yaşlılarda kronik denge bozukluğu tableti.", symptoms: ["SMP-019"], treatedSeverity: 2, compatibility: ["AGE-3"], forbiddenConditions: ["ODR-001"], buyPrice: 19, price: 29, count: 1, shelfLife: 24 },
    { id: "ILG-022", name: "Arthros-Jel", level: 1, group: "Kas & İskelet", desc: "Eklem ve kas ağrıları için ferahlatıcı jel.", symptoms: ["SMP-014", "SMP-015"], treatedSeverity: 1, compatibility: ["AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 11, price: 18, count: 1, shelfLife: 30 },
    { id: "ILG-044", name: "Pedia-Flex Jel", level: 1, group: "Kas & İskelet", desc: "Çocuklarda büyüme ve burkulma ağrısı jeli.", symptoms: ["SMP-014"], treatedSeverity: 1, compatibility: ["AGE-1", "AGE-2"], forbiddenConditions: [], buyPrice: 10, price: 16, count: 1, shelfLife: 20 },
    { id: "ILG-045", name: "Baby-Motion Krem", level: 1, group: "Kas & İskelet", desc: "Bebeklerde kas sertliği ve rahatlatıcı krem.", symptoms: ["SMP-014"], treatedSeverity: 1, compatibility: ["AGE-1"], forbiddenConditions: [], buyPrice: 12, price: 19, count: 1, shelfLife: 18 },
    { id: "ILG-046", name: "Osteo-Flex Merhem", level: 1, group: "Kas & İskelet", desc: "Yaşlılarda kronik romatizma ve eklem kremi.", symptoms: ["SMP-014", "SMP-015"], treatedSeverity: 2, compatibility: ["AGE-3"], forbiddenConditions: [], buyPrice: 16, price: 26, count: 1, shelfLife: 25 },
    { id: "ILG-047", name: "Musculo-Max Jel", level: 1, group: "Kas & İskelet", desc: "Yetişkinlerde ağır kas zorlanması jeli.", symptoms: ["SMP-015"], treatedSeverity: 2, compatibility: ["AGE-2"], forbiddenConditions: [], buyPrice: 14, price: 23, count: 1, shelfLife: 30 },
    { id: "ILG-005", name: "Mentolin Sprey", level: 1, group: "Solunum & KBB", desc: "Boğaz tahrişi ve burun tıkanıklığını ferahlatan sprey.", symptoms: ["SMP-003", "SMP-004"], treatedSeverity: 1, compatibility: ["AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 9, price: 15, count: 1, shelfLife: 25 },
    { id: "ILG-006", name: "NasoClear Damla", level: 1, group: "Solunum & KBB", desc: "Bebek ve çocuklarda tıkalı burun kanalları için.", symptoms: ["SMP-002", "SMP-003"], treatedSeverity: 1, compatibility: ["AGE-1", "AGE-2"], forbiddenConditions: [], buyPrice: 8, price: 14, count: 1, shelfLife: 15 },
    { id: "ILG-007", name: "Tussisin Şurup", level: 1, group: "Solunum & KBB", desc: "Öksürük ve boğaz ağrısını yumuşatan şurup.", symptoms: ["SMP-004", "SMP-005"], treatedSeverity: 1, compatibility: ["AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 11, price: 18, count: 1, shelfLife: 15 },
    { id: "ILG-008", name: "Bronko-Kidd Damla", level: 1, group: "Solunum & KBB", desc: "Bebeklerde hırıltılı öksürüğü gideren damla.", symptoms: ["SMP-005"], treatedSeverity: 1, compatibility: ["AGE-1"], forbiddenConditions: ["ODR-001"], buyPrice: 13, price: 21, count: 1, shelfLife: 10 },
    { id: "ILG-023", name: "NasoFort Sprey", level: 1, group: "Solunum & KBB", desc: "Yetişkin/Yaşlılarda kronik tıkanıklık spreyi.", symptoms: ["SMP-002", "SMP-003"], treatedSeverity: 2, compatibility: ["AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 11, price: 18, count: 1, shelfLife: 20 },
    { id: "ILG-030", name: "Pedia-Balm Şurup", level: 1, group: "Solunum & KBB", desc: "Çocuklarda gece öksürüğünü kesen bitkisel şurup.", symptoms: ["SMP-004", "SMP-005"], treatedSeverity: 1, compatibility: ["AGE-1"], forbiddenConditions: [], buyPrice: 10, price: 16, count: 1, shelfLife: 18 },
    { id: "ILG-013", name: "Gavislik Likit", level: 1, group: "Sindirim & Mide", desc: "Mide yanması ve mide bulantısını yatıştırır.", symptoms: ["SMP-006", "SMP-007"], treatedSeverity: 1, compatibility: ["AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 11, price: 18, count: 1, shelfLife: 18 },
    { id: "ILG-014", name: "Anti-Nause Tablet", level: 1, group: "Sindirim & Mide", desc: "Şiddetli mide bulantısı ve krampları önler.", symptoms: ["SMP-007", "SMP-008"], treatedSeverity: 2, compatibility: ["AGE-2", "AGE-3"], forbiddenConditions: ["ODR-002"], buyPrice: 13, price: 21, count: 1, shelfLife: 22 },
    { id: "ILG-015", name: "BioGastro Drop", level: 1, group: "Sindirim & Mide", desc: "Bebeklerde karın ağrısı ve ishali rahatlatır.", symptoms: ["SMP-008", "SMP-009"], treatedSeverity: 1, compatibility: ["AGE-1"], forbiddenConditions: [], buyPrice: 15, price: 25, count: 1, shelfLife: 12 },
    { id: "ILG-016", name: "Enterofiks Şurup", level: 1, group: "Sindirim & Mide", desc: "Çocuk ve yetişkinlerde ishali durdurur.", symptoms: ["SMP-009"], treatedSeverity: 2, compatibility: ["AGE-1", "AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 14, price: 23, count: 1, shelfLife: 15 },
    { id: "ILG-025", name: "Pedigastro Şurup", level: 1, group: "Sindirim & Mide", desc: "Bebeklerde mide rahatsızlığı ve bulantı şurubu.", symptoms: ["SMP-006", "SMP-007"], treatedSeverity: 1, compatibility: ["AGE-1"], forbiddenConditions: [], buyPrice: 10, price: 17, count: 1, shelfLife: 12 }
];

// === 5. MÜŞTERİLER (customers) ===
const customers = [
    { id: "CST-001", name: "Xylar Gath", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-010", symptomsList: ["SMP-002-1", "SMP-004-1"], chronicConditions: [], prescribedMed: ["ILG-005", "ILG-023"] },
    { id: "CST-002", name: "Pyxis Skar", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-002", symptomsList: ["SMP-011-1"], chronicConditions: [], prescribedMed: ["ILG-001"] },
    { id: "CST-003", name: "Bleepo Krel", race: "Uzaylı", ageGroup: "Çocuk", ageGroupId: "AGE-2", patienceLevel: 1, disease: "HST-011", symptomsList: ["SMP-017-1", "SMP-020-1"], chronicConditions: [], prescribedMed: ["ILG-001", "ILG-017"] },
    { id: "CST-004", name: "Elyndra Pax", race: "Uzaylı", ageGroup: "Bebek", ageGroupId: "AGE-1", patienceLevel: 1, disease: "HST-005", symptomsList: ["SMP-012-1", "SMP-013-1"], chronicConditions: [], prescribedMed: ["ILG-010"] },
    { id: "CST-005", name: "Vandar Nyx", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-003", symptomsList: ["SMP-016-1"], chronicConditions: [], prescribedMed: ["ILG-017"] },
    { id: "CST-006", name: "T'Kalon Vex", race: "Uzaylı", ageGroup: "Çocuk", ageGroupId: "AGE-2", patienceLevel: 1, disease: "HST-004", symptomsList: ["SMP-012-1"], chronicConditions: [], prescribedMed: ["ILG-009"] },
    { id: "CST-007", name: "Maelis Zeel", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-008", symptomsList: ["SMP-018-1"], chronicConditions: [], prescribedMed: ["ILG-019"] },
    { id: "CST-008", name: "Myron Phos", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-009", symptomsList: ["SMP-001-1", "SMP-002-1"], chronicConditions: [], prescribedMed: ["ILG-024"] },
    { id: "CST-009", name: "Glisno Khor", race: "Uzaylı", ageGroup: "Bebek", ageGroupId: "AGE-1", patienceLevel: 1, disease: "HST-007", symptomsList: ["SMP-006-1", "SMP-007-1"], chronicConditions: [], prescribedMed: ["ILG-025"] },
    { id: "CST-010", name: "Krazen Dray", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-006", symptomsList: ["SMP-003-1", "SMP-004-1"], chronicConditions: [], prescribedMed: ["ILG-005"] },
    { id: "CST-011", name: "Zephyrus Krall", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-022", symptomsList: ["SMP-011-1", "SMP-015-1"], chronicConditions: [], prescribedMed: ["ILG-002"] },
    { id: "CST-012", name: "Krivok Zon", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-015", symptomsList: ["SMP-006-1", "SMP-007-1"], chronicConditions: [], prescribedMed: ["ILG-013"] },
    { id: "CST-013", name: "Zonar T'Zor", race: "Uzaylı", ageGroup: "Çocuk", ageGroupId: "AGE-2", patienceLevel: 1, disease: "HST-014", symptomsList: ["SMP-004-1", "SMP-005-1"], chronicConditions: [], prescribedMed: ["ILG-007"] },
    { id: "CST-014", name: "Thraks Blix", race: "Uzaylı", ageGroup: "Çocuk", ageGroupId: "AGE-2", patienceLevel: 1, disease: "HST-028", symptomsList: ["SMP-001-1", "SMP-003-1"], chronicConditions: [], prescribedMed: ["ILG-011", "ILG-005"] },
    { id: "CST-015", name: "Vokath Tyren", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-013", symptomsList: ["SMP-014-1", "SMP-015-1"], chronicConditions: [], prescribedMed: ["ILG-022", "ILG-001"] },
    { id: "CST-016", name: "Orux Vorr", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-017", symptomsList: ["SMP-010-1", "SMP-011-1"], chronicConditions: [], prescribedMed: ["ILG-020", "ILG-001"] },
    { id: "CST-017", name: "Nyxil Xon", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-001", symptomsList: ["SMP-012-1", "SMP-013-1"], chronicConditions: [], prescribedMed: ["ILG-009"] },
    { id: "CST-018", name: "Soolis Zann", race: "Uzaylı", ageGroup: "Bebek", ageGroupId: "AGE-1", patienceLevel: 1, disease: "HST-027", symptomsList: ["SMP-020-2"], chronicConditions: [], prescribedMed: ["ILG-004"] },
    { id: "CST-019", name: "Zylos Glyph", race: "Uzaylı", ageGroup: "Çocuk", ageGroupId: "AGE-2", patienceLevel: 1, disease: "HST-021", symptomsList: ["SMP-002-1", "SMP-003-1"], chronicConditions: [], prescribedMed: ["ILG-023"] },
    { id: "CST-020", name: "Huxli Vond", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-023", symptomsList: ["SMP-007-1", "SMP-008-1"], chronicConditions: [], prescribedMed: ["ILG-014"] },
    { id: "CST-021", name: "Avenra Torq", race: "Uzaylı", ageGroup: "Bebek", ageGroupId: "AGE-1", patienceLevel: 1, disease: "HST-024", symptomsList: ["SMP-012-1"], chronicConditions: [], prescribedMed: ["ILG-010"] },
    { id: "CST-022", name: "Braxus Kael", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-025", symptomsList: ["SMP-004-1", "SMP-005-1"], chronicConditions: [], prescribedMed: ["ILG-007"] },
    { id: "CST-023", name: "Cyris Malo", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-026", symptomsList: ["SMP-006-1", "SMP-019-1"], chronicConditions: [], prescribedMed: ["ILG-013", "ILG-021"] },
    { id: "CST-024", name: "Draven Rix", race: "Uzaylı", ageGroup: "Çocuk", ageGroupId: "AGE-2", patienceLevel: 1, disease: "HST-029", symptomsList: ["SMP-016-1", "SMP-017-1"], chronicConditions: [], prescribedMed: ["ILG-017"] },
    { id: "CST-025", name: "Elarion Syl", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-030", symptomsList: ["SMP-015-1", "SMP-019-1"], chronicConditions: [], prescribedMed: ["ILG-002", "ILG-021"] },
    { id: "CST-026", name: "Faelan Varis", race: "Uzaylı", ageGroup: "Bebek", ageGroupId: "AGE-1", patienceLevel: 1, disease: "HST-031", symptomsList: ["SMP-013-1"], chronicConditions: [], prescribedMed: ["ILG-010"] },
    { id: "CST-027", name: "Gorath Zeth", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-032", symptomsList: ["SMP-010-1", "SMP-019-1"], chronicConditions: [], prescribedMed: ["ILG-020"] },
    { id: "CST-028", name: "Hesper Jax", race: "Uzaylı", ageGroup: "Çocuk", ageGroupId: "AGE-2", patienceLevel: 1, disease: "HST-033", symptomsList: ["SMP-004-1", "SMP-016-1"], chronicConditions: [], prescribedMed: ["ILG-005", "ILG-017"] },
    { id: "CST-029", name: "Ishtar Kylar", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-034", symptomsList: ["SMP-006-1", "SMP-009-1"], chronicConditions: [], prescribedMed: ["ILG-013", "ILG-016"] },
    { id: "CST-030", name: "Jaddax Lum", race: "Uzaylı", ageGroup: "Çocuk", ageGroupId: "AGE-2", patienceLevel: 1, disease: "HST-035", symptomsList: ["SMP-002-1", "SMP-018-1"], chronicConditions: [], prescribedMed: ["ILG-012", "ILG-019"] },
    { id: "CST-031", name: "Kaelen Morv", race: "Uzaylı", ageGroup: "Bebek", ageGroupId: "AGE-1", patienceLevel: 1, disease: "HST-016", symptomsList: ["SMP-020-1", "SMP-019-1"], chronicConditions: [], prescribedMed: ["ILG-004", "ILG-027"] },
    { id: "CST-032", name: "Lorkan Nar", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-012", symptomsList: ["SMP-008-1", "SMP-009-1"], chronicConditions: [], prescribedMed: ["ILG-014", "ILG-016"] },
    { id: "CST-033", name: "Myrddin Orph", race: "Uzaylı", ageGroup: "Çocuk", ageGroupId: "AGE-2", patienceLevel: 1, disease: "HST-018", symptomsList: ["SMP-001-1", "SMP-018-1"], chronicConditions: [], prescribedMed: ["ILG-011", "ILG-019"] },
    { id: "CST-034", name: "Norrix Pyre", race: "Uzaylı", ageGroup: "Bebek", ageGroupId: "AGE-1", patienceLevel: 1, disease: "HST-019", symptomsList: ["SMP-019-1", "SMP-020-2"], chronicConditions: [], prescribedMed: ["ILG-004", "ILG-027"] },
    { id: "CST-035", name: "Oryn Quor", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-020", symptomsList: ["SMP-017-2"], chronicConditions: [], prescribedMed: ["ILG-017"] },
    { id: "CST-036", name: "Phantox Ryn", race: "Uzaylı", ageGroup: "Çocuk", ageGroupId: "AGE-2", patienceLevel: 1, disease: "HST-010", symptomsList: ["SMP-002-1", "SMP-004-1"], chronicConditions: [], prescribedMed: ["ILG-007", "ILG-005"] },
    { id: "CST-037", name: "Qurox Styr", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-002", symptomsList: ["SMP-011-1"], chronicConditions: [], prescribedMed: ["ILG-002"] },
    { id: "CST-038", name: "Raelen Thark", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-007", symptomsList: ["SMP-006-1", "SMP-007-1"], chronicConditions: [], prescribedMed: ["ILG-013"] },
    { id: "CST-039", name: "Sylvan Urza", race: "Uzaylı", ageGroup: "Bebek", ageGroupId: "AGE-1", patienceLevel: 1, disease: "HST-011", symptomsList: ["SMP-017-1", "SMP-020-1"], chronicConditions: [], prescribedMed: ["ILG-004", "ILG-026"] },
    { id: "CST-040", name: "Taron Valis", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-015", symptomsList: ["SMP-006-1", "SMP-007-1"], chronicConditions: [], prescribedMed: ["ILG-013"] }
];

// === 2. DİNAMİK SÖZLÜKLER VE HARİTALAR ===

const symptomNamesMap = {
    "SMP-001-1": "Hapşırma",
    "SMP-002-1": "Burun Akıntısı",
    "SMP-003-1": "Burun Tıkanıklığı",
    "SMP-004-1": "Boğaz Ağrısı",
    "SMP-005-1": "Öksürük",
    "SMP-006-1": "Mide Yanması",
    "SMP-007-1": "Mide Bulantısı",
    "SMP-008-1": "Karın Ağrısı",
    "SMP-009-1": "İshal",
    "SMP-010-1": "Baş Dönmesi",
    "SMP-011-1": "Baş Ağrısı",
    "SMP-012-1": "Ciltte Kaşıntı",
    "SMP-013-1": "Ciltte Kızarıklık",
    "SMP-014-1": "Eklem Ağrısı",
    "SMP-015-1": "Kas Ağrısı",
    "SMP-016-1": "Ağız İçi Yara",
    "SMP-017-1": "Diş Ağrısı",
    "SMP-017-2": "Şiddetli Diş Ağrısı",
    "SMP-018-1": "Göz Sulanması",
    "SMP-019-1": "Halsizlik",
    "SMP-020-1": "Ateş",
    "SMP-020-2": "Yüksek Ateş"
};

const groupNamesMap = {
    "SLN-1": "Soğuk Algınlığı ve Öksürük İlaçları",
    "ANL-1": "Ağrı Kesiciler ve Ateş Düşürücüler",
    "DER-1": "Pişik ve Cilt Bakım Kremleri",
    "ANT-1": "Alerji ve Kaşıntı İlaçları",
    "SND-1": "Mide ve Sindirim Düzenleyiciler",
    "AGZ-1": "Ağız Yarası ve Diş Jelleri",
    "GZ-1": "Göz Sağlığı İlaçları ve Damlaları",
    "NR-1": "Nörolojik ve Baş Dönmesi İlaçları",
    "ORT-1": "Kas-İskelet ve Ortopedi Jelleri"
};

const ageGroupsMap = {
    "AGE-1": "Bebek",
    "AGE-2": "Çocuk",
    "AGE-3": "Yetişkin"
};

// === 3. MERKEZİ OYUN YÖNETİMİ (STATE & UI & LOOP) ===

const GameState = {
    money: 100,
    xp: 0,
    ep: 0,
    currentDayNumber: 1,
    dayServedCount: 0,
    dailyLimit: 5,
    // totalDaysLimit kaldırıldı (Sonsuz Akış)
    timeRemaining: 10,
    maxCustomerPatience: 30, // 60s -> 30s düşürüldü
    nightDuration: 120,      // Gece süresi (2 dakika)
    status: 'EMPTY_WAIT',    // 'EMPTY_WAIT', 'CUSTOMER_ACTIVE', 'NIGHT_ACTIVE'
    cart: [],
    pendingOrders: [],
    activeDayCustomers: [],
    playedCustomersPool: [],
    currentCustomerIndex: 0,
    isNabizVerified: false,
    gameStarted: false,
    isWarningActive: false,
    isPaused: false,
    currentShopFilter: 'HEPSİ',
    currentDepotFilter: 'HEPSİ',
    currentMode: 'SHOP',
    moneyClickCount: 0,
    moneyClickTimeout: null,
    isCaptchaActive: false,
    dailyCaptchaTriggers: [], // Günün kaçıncı müşterilerinde captcha çıkacak
    selectedCaptchaWord: null,
    captchaMatchedPairs: 0, 

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
        if (!el) return;
        el.innerText = text;
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
        if (this.interval) clearInterval(this.interval);
        this.interval = setInterval(() => this.tick(), 1000);
    },

    stop: function() {
        if (this.interval) clearInterval(this.interval);
    },

    tick: function() {
        if (GameState.isPaused || GameState.isWarningActive || GameState.isCaptchaActive ||
           document.getElementById('resultModal').style.display === 'flex') return;

        this.processDeliveries(1); // Her saniye teslimat süresini 1 sn düşür
        GameState.timeRemaining--;
        UIController.updateTimerBar();

        if (GameState.timeRemaining <= 0) {
            if (GameState.status === 'EMPTY_WAIT') {
                if (GameState.dayServedCount >= GameState.dailyLimit) {
                    enterNightState(); // Gün bittiğinde geceye geç
                } else {
                    enterCustomerActiveState();
                }
            } else if (GameState.status === 'CUSTOMER_ACTIVE') {
                handleCustomerTimeout();
            } else if (GameState.status === 'NIGHT_ACTIVE') {
                progressToNextDay(); // 2 dakikalık gece bittiğinde yeni güne geç
            }
        }
    },

    processDeliveries: function(secondsPassed = 1) {
        if (GameState.pendingOrders.length > 0) {
            GameState.pendingOrders.forEach(order => order.timeLeft -= secondsPassed);
            const completedOrders = GameState.pendingOrders.filter(order => order.timeLeft <= 0);
            completedOrders.forEach(order => {
                const med = medicines.find(m => m.id === order.id);
                if (med) med.count += order.quantity;
            });
            GameState.pendingOrders = GameState.pendingOrders.filter(order => order.timeLeft > 0);
            if (completedOrders.length > 0) {
                initDepotMedicines();
                initShopMedicines();
            }
        }
    }
};

// === 4. ÇEKİRDEK OYUN FONKSİYONLARI ===

function togglePauseGame() {
    if (!GameState.gameStarted || GameState.status === 'DAY_END' || GameState.status === 'GAME_OVER') return;
    GameState.isPaused = !GameState.isPaused;

    const titleElement = document.getElementById('customerPanelTitle');
    if (!titleElement) return;

    if (GameState.isPaused) {
        if (!titleElement.innerText.includes("DURAKLATILDI")) {
            titleElement.innerText += " ⏸️ (DURAKLATILDI)";
        }
        titleElement.style.color = "var(--warning-color)";
    } else {
        titleElement.innerText = titleElement.innerText.replace(" ⏸️ (DURAKLATILDI)", "");
        titleElement.style.color = "var(--text-muted)";
    }
}

function generateRandomCustomersForDay() {
    GameState.activeDayCustomers = [];
    GameState.currentCustomerIndex = 0;
    let availablePool = customers.filter(c =>
        !GameState.playedCustomersPool.some(played => played.id === c.id)
    );
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

    // O günkü hastaların hastalık tiplerini benzersiz (unique) olarak topla
    const activeTypeNames = [];
    GameState.activeDayCustomers.forEach(customer => {
        const diseaseObj = diseases.find(d => d.id === customer.disease);
        if (diseaseObj && diseaseObj.typeName) {
            if (!activeTypeNames.includes(diseaseObj.typeName)) {
                activeTypeNames.push(diseaseObj.typeName);
            }
        }
    });

    // Toplanan hastalık tipi adlarını listeye yazdır
    activeTypeNames.forEach(typeName => {
        const li = document.createElement('li');
        li.style.marginBottom = "4px";
        li.innerText = typeName;
        listElement.appendChild(li);
    });
}

function generatePrescriptionCodeForCustomer(customer) {
    const medId = Array.isArray(customer.prescribedMed) ? customer.prescribedMed[0] : customer.prescribedMed;
    const med = medicines.find(m => m.id === medId);
    if (!med) return "HATA-KOD";

    const cleanGroup = med.group.replace('-', '');
    const cleanDisease = cleanIdToNoZero(customer.disease);

    let ageId = customer.ageGroupId;
    if (ageId === "AGE-1") ageId = "AGE1";
    else if (ageId === "AGE-2") ageId = "AGE2";
    else if (ageId === "AGE-3") ageId = "AGE3";
    else ageId = cleanIdToNoZero(ageId);

    return `${cleanGroup}-${cleanDisease}-${ageId}`;
}

function cleanIdToNoZero(idStr) {
    return idStr.replace('-', '').replace(/^([A-Z]+)0+(\d+)/, '$1$2');
}

function startDay() {
    if (GameState.gameStarted) return;
    GameState.gameStarted = true;
    UIController.setDisplay('lockScreenArea', 'none');
    UIController.setDisplay('appNabizContainer', 'flex');
    enterEmptyWaitState();
    GameLoop.start();
}

// Dükkan İlaçlarını Listeleme
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

// Depo İlaçlarını Listeleme
function initDepotMedicines() {
    const grid = document.getElementById('depotMedGrid');
    if (!grid) return;
    grid.innerHTML = '';

    let filtered = GameState.currentDepotFilter === 'HEPSİ'
        ? medicines
        : medicines.filter(m => m.group === GameState.currentDepotFilter);

    filtered.forEach(med => {
        const card = document.createElement('div');
        card.className = 'med-card';
        card.onclick = () => addToCart(med.id);
        const turkishSymptoms = med.symptoms.map(s => symptomNamesMap[s] || s).join(', ');
        const compatibilityNames = med.compatibility.map(ageId => ageGroupsMap[ageId] || ageId).join(', ');

        const ordersForThisMed = GameState.pendingOrders.filter(o => o.id === med.id);
        const totalPendingQty = ordersForThisMed.reduce((sum, o) => sum + o.quantity, 0);
        const nearestDelivery = ordersForThisMed.length > 0
            ? Math.min(...ordersForThisMed.map(o => o.timeLeft))
            : null;

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
    GameState.isNabizVerified = false;

    const lockWarning = document.getElementById('nabizLockWarning');
    if (lockWarning) {
        lockWarning.style.background = "rgba(239, 68, 68, 0.1)";
        lockWarning.style.borderColor = "var(--danger-color)";
        lockWarning.style.color = "#f87171";
        lockWarning.innerText = "⚠️ Dikkat: Nabız uygulamasından Onayla butonuna basmadan ilaç satışı yapamazsınız!";
    }

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
    // Captcha tetikleme kontrolü
    if (GameState.dailyCaptchaTriggers.includes(GameState.currentCustomerIndex)) {
        triggerCaptchaTest();
        // Tetiklenen indeksi temizle ki aynı müşteride tekrar açılmasın
        GameState.dailyCaptchaTriggers = GameState.dailyCaptchaTriggers.filter(idx => idx !== GameState.currentCustomerIndex);
    }

    GameState.status = 'CUSTOMER_ACTIVE';
    GameState.timeRemaining = GameState.maxCustomerPatience;
    UIController.setDisplay('customerOverlay', 'none');
    document.getElementById('customerPanelTitle').innerText = `Gün ${GameState.currentDayNumber} - Müşteri Süresi (${GameState.maxCustomerPatience} Sn)`;
    document.getElementById('timerBar').className = "timer-bar active-customer";
    GameState.isNabizVerified = false;

    const lockWarning = document.getElementById('nabizLockWarning');
    if (lockWarning) {
        lockWarning.style.background = "rgba(239, 68, 68, 0.1)";
        lockWarning.style.borderColor = "var(--danger-color)";
        lockWarning.style.color = "#f87171";
        lockWarning.innerText = "⚠️ Dikkat: Nabız uygulamasından Onayla butonuna basmadan ilaç satışı yapamazsınız!";
    }

    const customer = GameState.activeDayCustomers[GameState.currentCustomerIndex];
    const prescriptionCode = generatePrescriptionCodeForCustomer(customer);
    document.getElementById('nabizCustomerName').value = customer.name;
    document.getElementById('nabizPrescriptionCode').value = prescriptionCode;
    UIController.setDisplay('nabizPrescriptionReport', 'none');
    UIController.updateTimerBar();
}

// === KOMBİNASYONLU NABIZ ÖNERİ SİSTEMİ ===

function confirmNabizAccess() {
    if (GameState.status !== 'CUSTOMER_ACTIVE') {
        alert("Eczanede şu anda aktif bir hasta bulunmamaktadır!");
        return;
    }

    const currentCustomer = GameState.activeDayCustomers[GameState.currentCustomerIndex];
    const prescribedIds = Array.isArray(currentCustomer.prescribedMed)
        ? currentCustomer.prescribedMed
        : [currentCustomer.prescribedMed];
    const prescribedMeds = prescribedIds.map(id => medicines.find(m => m.id === id)).filter(Boolean);
    const diseaseObj = diseases.find(d => d.id === currentCustomer.disease);
    GameState.isNabizVerified = true;

    // 1. Temel Bilgileri Yazdır
    document.getElementById('n-rep-name').innerText = currentCustomer.name;
    document.getElementById('n-rep-disease').innerText = diseaseObj ? diseaseObj.name : "Bilinmiyor";
    document.getElementById('n-rep-age').innerText = currentCustomer.ageGroup;

    // 2. Doktorun Reçete Ettiği İlaç Kombinasyonunu Oluştur
    const recMedContainer = document.getElementById('n-rep-med');
    recMedContainer.innerHTML = '';

    if (prescribedMeds.length > 0) {
        const isAllInStock = prescribedMeds.every(m => m.count > 0);
        const comboNames = prescribedMeds.map(m => m.name).join(' + ');
        const comboTotalPrice = prescribedMeds.reduce((sum, m) => sum + m.price, 0);
        const btn = document.createElement('button');
        btn.type = 'button';

        if (isAllInStock) {
            btn.className = 'nabiz-med-btn recommended';
            btn.onclick = () => addMultipleToCartDirect(prescribedMeds.map(m => m.id));
            btn.innerHTML = `
                <div style="display:flex; flex-direction:column; text-align:left;">
                    <span><strong>[Doktor Reçetesi]</strong> ${comboNames}</span>
                </div>
                <strong>$${comboTotalPrice}</strong>
            `;
        } else {
            btn.className = 'nabiz-med-btn disabled';
            btn.onclick = () => alert(`⚠️ Uyarı: Reçetede istenen ilaç paketinde stokta bulunmayan ürünler var!`);
            btn.innerHTML = `
                <div style="display:flex; flex-direction:column; text-align:left;">
                    <span><strong>[Doktor Reçetesi]</strong> ${comboNames}</span>
                    <span class="out-of-stock-warn">Eksik Stok var!</span>
                </div>
                <strong>$${comboTotalPrice}</strong>
            `;
        }
        recMedContainer.appendChild(btn);
    } else {
        recMedContainer.innerText = "Önerilen Reçete Bulunamadı";
    }

    // 3. Envanterdeki İlaçlardan Kombinasyonlar Oluşturma (1 ve 2'li Paketler)
    const availableOptionsList = document.getElementById('n-rep-options-list');
    availableOptionsList.innerHTML = '';

    const customerSymptomRoots = currentCustomer.symptomsList.map(s => s.split('-').slice(0, 2).join('-'));
    const customerAgeGroup = currentCustomer.ageGroupId;

    const validInventoryMeds = medicines.filter(med => {
        if (med.count <= 0) return false;
        if (!med.compatibility.includes(customerAgeGroup)) return false;
        return med.symptoms.some(medSym => customerSymptomRoots.includes(medSym));
    });

    let possibleCombinations = [];

    // Tekli kombinasyonlar
    validInventoryMeds.forEach(med => {
        const treated = med.symptoms.filter(s => customerSymptomRoots.includes(s));
        possibleCombinations.push({
            meds: [med],
            treatedSymptoms: [...new Set(treated)],
            totalPrice: med.price
        });
    });

    // İkili kombinasyonlar
    for (let i = 0; i < validInventoryMeds.length; i++) {
        for (let j = i + 1; j < validInventoryMeds.length; j++) {
            const med1 = validInventoryMeds[i];
            const med2 = validInventoryMeds[j];

            const med1Treated = med1.symptoms.filter(s => customerSymptomRoots.includes(s));
            const med2Treated = med2.symptoms.filter(s => customerSymptomRoots.includes(s));

            // KRİTER 1: İlaçlardan biri tek başına TÜM semptomları çözüyorsa yanına 2. bir ilaç paketleme
            const med1IsFullMatch = med1Treated.length >= customerSymptomRoots.length;
            const med2IsFullMatch = med2Treated.length >= customerSymptomRoots.length;
            if (med1IsFullMatch || med2IsFullMatch) {
                continue; 
            }

            // KRİTER 2: İkinci ilaç, birincinin çözmediği EN AZ BİR yeni semptomu çözmeli
            const med2AddsNewSymptom = med2Treated.some(s => !med1Treated.includes(s));
            if (!med2AddsNewSymptom) {
                continue; 
            }

            const combinedSymptoms = [...new Set([...med1.symptoms, ...med2.symptoms])];
            const treated = combinedSymptoms.filter(s => customerSymptomRoots.includes(s));
            
            possibleCombinations.push({
                meds: [med1, med2],
                treatedSymptoms: treated,
                totalPrice: med1.price + med2.price
            });
        }
    }

    // Reçetedeki ilaç paketiyle birebir aynı olanları ele
    const prescribedIdsSorted = prescribedIds.slice().sort().join(',');
    possibleCombinations = possibleCombinations.filter(combo => {
        const comboIdsSorted = combo.meds.map(m => m.id).sort().join(',');
        return comboIdsSorted !== prescribedIdsSorted;
    });

    // KRİTER 3: Yalnızca TAM TEDAVİ sağlayan paketleri tut (Kısmi tedavileri ele)
    possibleCombinations = possibleCombinations.filter(combo => 
        combo.treatedSymptoms.length >= customerSymptomRoots.length
    );

    // Sıralama: En ucuz seçenekler üstte olsun
    possibleCombinations.sort((a, b) => a.totalPrice - b.totalPrice);

    if (possibleCombinations.length > 0) {
        possibleCombinations.forEach(combo => {
            const comboNames = combo.meds.map(m => m.name).join(' + ');
            const matchTag = `<span style="color:#10b981; font-weight:bold;">[Tam Tedavi]</span>`;
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'nabiz-med-btn option';
            btn.style.margin = "4px 0";
            btn.onclick = () => addMultipleToCartDirect(combo.meds.map(m => m.id));
            btn.innerHTML = `
                <div style="display:flex; flex-direction:column; text-align:left;">
                    <span>${matchTag} ${comboNames}</span>
                    <small style="color:var(--text-muted); font-size:0.75rem;">Çözülen Semptom: ${combo.treatedSymptoms.length}/${customerSymptomRoots.length}</small>
                </div>
                <strong>$${combo.totalPrice}</strong>
            `;
            availableOptionsList.appendChild(btn);
        });
    } else {
        availableOptionsList.innerHTML = `<div class="no-options-msg">Envanterinizde hastanın semptomlarını tamamen iyileştirecek uygun bir alternatif paket bulunmamaktadır.</div>`;
    }

    UIController.setDisplay('nabizPrescriptionReport', 'block');

    const lockWarning = document.getElementById('nabizLockWarning');
    if (lockWarning) {
        lockWarning.style.background = "rgba(16, 185, 129, 0.1)";
        lockWarning.style.borderColor = "var(--success-color)";
        lockWarning.style.color = "#34d399";
        lockWarning.innerText = "✓ Müşteri bilgileri getirildi! Seçtiğiniz ilaç paketi doğrudan sepete aktarılacaktır.";
    }

    renderCart();

    setTimeout(() => {
        const phoneScreen = document.getElementById('phoneScreen');
        if (phoneScreen) phoneScreen.scrollTo({ top: phoneScreen.scrollHeight, behavior: 'smooth' });
    }, 100);
}

function addMultipleToCartDirect(medIds) {
    if (!GameState.isNabizVerified || GameState.status !== 'CUSTOMER_ACTIVE' || GameState.isPaused) return;
    GameState.cart = [];
    for (let id of medIds) {
        const med = medicines.find(m => m.id === id);
        if (!med || med.count <= 0) {
            alert(`⚠️ Uyarı: ${med ? med.name : 'İlaç'} envanterinizde yetersiz stokta!`);
            GameState.cart = [];
            renderCart();
            return;
        }
        GameState.cart.push({ id: id, quantity: 1 });
    }
    renderCart();
}

function addToCartDirect(medId) {
    addMultipleToCartDirect([medId]);
}

function enterNightState() {
    GameState.status = 'NIGHT_ACTIVE';
    GameState.timeRemaining = GameState.nightDuration; // 120 saniye
    GameState.gameStarted = false; // Telefon kilit ekranına düşecek

    // 1. Bir sonraki günün müşterilerini şimdiden seç ve kilit ekranı bildirimini güncelle
    generateRandomCustomersForDay();
    updateLockScreenNotification();

    // 2. Telefon Arayüzünü Kilit Ekranına Geçir
    UIController.setDisplay('appNabizContainer', 'none');
    UIController.setDisplay('nabizPrescriptionReport', 'none');
    UIController.setDisplay('lockScreenArea', 'flex');

    // 3. Kilit ekranı saatini ve butonunu güncelle
    const lockClock = document.getElementById('lockScreenClock');
    if (lockClock) lockClock.innerText = "22:00"; // Gece saati sembolik

    const startBtn = document.getElementById('startBtn');
    if (startBtn) {
        startBtn.innerHTML = "⏩ Geceyi Geç (2 Dk)";
    }

    // 4. Panel Başlığı ve Overlay Güncellemesi
    document.getElementById('customerPanelTitle').innerText = `Gün ${GameState.currentDayNumber} - Gece Vakti (2 Dk)`;
    document.getElementById('timerBar').className = "timer-bar waiting";
    UIController.updateTimerBar();

    const overlay = document.getElementById('customerOverlay');
    if (overlay) {
        UIController.setDisplay('customerOverlay', 'flex');
        overlay.innerHTML = `
            <div class="customer-arrival-text" style="color: #60a5fa;">
                🌙 Eczane Kapalı (Gece Vakti)<br>
                <span style="font-size:0.85rem; color:var(--text-muted); font-weight:normal;">
                    Depo siparişlerinizi verebilir veya kilit ekranından geceyi geçebilirsiniz.
                </span>
            </div>
        `;
    }
}

function handleLockScreenButtonClick() {
    // Oyun ilk defa başlatılıyorsa günü başlatır, Gece vaktiyse geceyi atlar
    if (GameState.status === 'NIGHT_ACTIVE') {
        skipNight();
    } else {
        startDay();
    }
}

function skipNight() {
    if (GameState.status !== 'NIGHT_ACTIVE') return;

    // 120 saniyelik sipariş teslimatlarını anında simüle et
    GameLoop.processDeliveries(GameState.nightDuration);

    GameState.timeRemaining = 0;
    progressToNextDay();
}

function progressToNextDay() {
    GameState.currentDayNumber++;
    GameState.dayServedCount = 0;
    GameState.gameStarted = true;
    GameState.isPaused = false;

    const lockClock = document.getElementById('lockScreenClock');
    if (lockClock) lockClock.innerText = "08:00";

    // Buton metnini sıfırla
    const startBtn = document.getElementById('startBtn');
    if (startBtn) {
        startBtn.innerHTML = "🔑 Oyunu Başlat";
    }

    // Telefon ekranını kilit ekranından Nabız uygulamasına al
    UIController.setDisplay('lockScreenArea', 'none');
    UIController.setDisplay('appNabizContainer', 'flex');

    enterEmptyWaitState();
    initShopMedicines();
    setupDailyCaptchaSchedule();
    renderCart();
}

function setupDailyCaptchaSchedule() {
    // Günde en az 1, en fazla 2 kere
    const count = Math.floor(Math.random() * 2) + 1; 
    GameState.dailyCaptchaTriggers = [];
    
    while (GameState.dailyCaptchaTriggers.length < count) {
        // 0 ile dailyLimit-1 arasında rastgele müşteri indeksleri
        const randomIndex = Math.floor(Math.random() * GameState.dailyLimit);
        if (!GameState.dailyCaptchaTriggers.includes(randomIndex)) {
            GameState.dailyCaptchaTriggers.push(randomIndex);
        }
    }
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
    if (GameState.isPaused || GameState.isWarningActive || GameState.status === 'DAY_END' || GameState.status === 'GAME_OVER') return;
    const med = medicines.find(m => m.id === medId);
    if (!med) return;

    if (GameState.currentMode === 'SHOP') {
        if (!GameState.gameStarted || GameState.status !== 'CUSTOMER_ACTIVE') return;
        if (!GameState.isNabizVerified) {
            alert("⚠️ Lütfen önce Nabız uygulamasından 'Onayla ve Bilgileri Getir' butonuna basarak müşteri bilgilerini çekin!");
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
    if (GameState.isWarningActive || GameState.isPaused) return;
    GameState.cart = GameState.cart.filter(item => item.id !== medId);
    renderCart();
}

function updateCartItemQuantity(medId, value) {
    if (GameState.isPaused) return;
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
    if (GameState.cart.length === 0 || GameState.isWarningActive || GameState.isPaused) return;
    if (GameState.currentMode === 'SHOP') handleShopConfirm();
    else handleDepotConfirm();
}

function handleShopConfirm() {
    const currentCustomer = GameState.activeDayCustomers[GameState.currentCustomerIndex];
    const submitBtn = document.getElementById('submitBtn');
    const customerPanel = document.getElementById('customerPanel');
    const customerAge = currentCustomer.ageGroup.trim().toLowerCase();

    // Yaş uyumluluğu kontrolü
    for (let item of GameState.cart) {
        const originalMed = medicines.find(m => m.id === item.id);
        if (originalMed) {
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
        }
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

    // Semptom iyileşme kontrolü (DÜZELTİLDİ: kök semptom ID üzerinden eşleştirme)
    let healedCount = 0;
    currentCustomer.symptomsList.forEach(symptom => {
        const symptomRoot = symptom.split('-').slice(0, 2).join('-');
        let isHealed = combinedMedSymptoms.some(mSym => mSym.trim() === symptomRoot);
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
        enterNightState(); // Limit dolunca Geceye geç
    } else {
        enterEmptyWaitState();
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

// === CAPTCHA (İNSAN DOĞRULAMA) SİSTEMİ ===

const CAPTCHA_COLORS = [
    { id: "red", name: "Kırmızı", hex: "#ef4444" },
    { id: "blue", name: "Mavi", hex: "#3b82f6" },
    { id: "green", name: "Yeşil", hex: "#10b981" }
];

function shuffleArray(array) {
    let arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function triggerCaptchaTest() {
    GameState.isCaptchaActive = true;
    GameState.selectedCaptchaWord = null;
    GameState.captchaMatchedPairs = 0;

    const modal = document.getElementById('captchaModal');
    if (modal) modal.style.display = 'flex';

    renderCaptchaTest();
}

function renderCaptchaTest() {
    const wordsContainer = document.getElementById('captchaWordsContainer');
    const ballsContainer = document.getElementById('captchaBallsContainer');
    const statusText = document.getElementById('captchaStatus');

    if (!wordsContainer || !ballsContainer) return;

    wordsContainer.innerHTML = '';
    ballsContainer.innerHTML = '';
    statusText.innerText = "Bir kelime seçin, ardından yazı rengine denk gelen topa tıklayın.";
    statusText.style.color = "var(--warning-color)";

    // Derangement (Hiçbir kelimenin kendi rengiyle yazılmaması garantisi)
    let colorAssignments = shuffleArray(CAPTCHA_COLORS);
    while (colorAssignments.some((c, idx) => c.id === CAPTCHA_COLORS[idx].id)) {
        colorAssignments = shuffleArray(CAPTCHA_COLORS);
    }

    // Kelimelerin ve Topların Ekrandaki Sırasını Karıştır
    const shuffledWords = shuffleArray(CAPTCHA_COLORS.map((colorObj, index) => ({
        text: colorObj.name,
        targetColorId: colorAssignments[index].id, // Doğru eşleşecek renk ID'si (Yazı Rengi)
        textColorHex: colorAssignments[index].hex,
        id: colorObj.id
    })));

    const shuffledBalls = shuffleArray(CAPTCHA_COLORS);

    // Kelimeleri Render Et (Sol Taraf)
    shuffledWords.forEach(wordData => {
        const btn = document.createElement('button');
        btn.className = 'captcha-word-btn';
        btn.innerText = wordData.text;
        btn.style.color = wordData.textColorHex;
        btn.dataset.targetColor = wordData.targetColorId;
        btn.onclick = () => selectCaptchaWord(btn);
        wordsContainer.appendChild(btn);
    });

    // Renk Toplarını Render Et (Sağ Taraf)
    shuffledBalls.forEach(ballData => {
        const ball = document.createElement('div');
        ball.className = 'captcha-ball-btn';
        ball.style.backgroundColor = ballData.hex;
        ball.dataset.colorId = ballData.id;
        ball.onclick = () => selectCaptchaBall(ball);
        ballsContainer.appendChild(ball);
    });
}

function selectCaptchaWord(btnElement) {
    if (btnElement.classList.contains('matched')) return;

    document.querySelectorAll('.captcha-word-btn').forEach(b => b.classList.remove('selected'));
    btnElement.classList.add('selected');
    GameState.selectedCaptchaWord = btnElement;

    const statusText = document.getElementById('captchaStatus');
    statusText.innerText = `"${btnElement.innerText}" kelimesinin YAZI RENGİ olan topa tıklayın.`;
    statusText.style.color = "var(--accent-color)";
}

function selectCaptchaBall(ballElement) {
    if (!GameState.selectedCaptchaWord || ballElement.classList.contains('matched')) return;

    const targetColor = GameState.selectedCaptchaWord.dataset.targetColor;
    const clickedColor = ballElement.dataset.colorId;
    const statusText = document.getElementById('captchaStatus');

    if (targetColor === clickedColor) {
        // Doğru Eşleşme
        GameState.selectedCaptchaWord.classList.remove('selected');
        GameState.selectedCaptchaWord.classList.add('matched');
        ballElement.classList.add('matched');

        GameState.selectedCaptchaWord = null;
        GameState.captchaMatchedPairs++;

        statusText.innerText = "✓ Doğru Eşleşme!";
        statusText.style.color = "var(--success-color)";

        if (GameState.captchaMatchedPairs >= 3) {
            setTimeout(() => {
                completeCaptchaTest();
            }, 600);
        }
    } else {
        // Hatalı Eşleşme
        statusText.innerText = "✕ Yanlış Renk! Lütfen tekrar deneyin.";
        statusText.style.color = "var(--danger-color)";
        
        GameState.selectedCaptchaWord.classList.remove('selected');
        GameState.selectedCaptchaWord = null;
    }
}

function completeCaptchaTest() {
    document.getElementById('captchaModal').style.display = 'none';
    GameState.isCaptchaActive = false;
}

// === WINDOW BAĞLANTILARI & KLAVYE DİNLEYİCİSİ ===

window.startDay = startDay;
window.switchToDepot = switchToDepot;
window.switchToShop = switchToShop;
window.filterShopMedicines = filterShopMedicines;
window.filterDepotMedicines = filterDepotMedicines;
window.addToCart = addToCart;
window.addToCartDirect = addToCartDirect;
window.addMultipleToCartDirect = addMultipleToCartDirect;
window.removeFromCart = removeFromCart;
window.confirmPrescription = confirmPrescription;
window.closeModal = closeModal;
window.progressToNextDay = progressToNextDay;
window.handleMoneyClick = handleMoneyClick;
window.confirmNabizAccess = confirmNabizAccess;
window.updateLockScreenNotification = updateLockScreenNotification;
window.generateRandomCustomersForDay = generateRandomCustomersForDay;
window.updateCartItemQuantity = updateCartItemQuantity;
window.togglePauseGame = togglePauseGame;
window.handleLockScreenButtonClick = handleLockScreenButtonClick;
window.skipNight = skipNight;

document.addEventListener("keydown", (event) => {
    const activeElem = document.activeElement;
    if (activeElem && (activeElem.tagName === "INPUT" || activeElem.tagName === "TEXTAREA" || activeElem.isContentEditable)) {
        return;
    }
    if (event.key === "p" || event.key === "P") {
        togglePauseGame();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // 1. Başlangıçta tüm ilaç stoklarını 1 yap
    medicines.forEach(med => med.count = 1);

    initShopMedicines();
    initDepotMedicines();
    UIController.updateStat('moneyDisplay', `$${GameState.money}`, null);
    
    // İlk günün müşterilerini seç ve kilit ekranında göster
    generateRandomCustomersForDay();
    updateLockScreenNotification();
});
