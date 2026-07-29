// game.js

// STOK SINIRLAMASI SABİTİ
let MAX_MEDICINE_STOCK = 2; // Başlangıç stok sınırı 2

// === 1. VERİ MODELLERİ VE TABLOLARI ===

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
    { id: "HST-001", name: "Rino-Alergozis", typeName: "Alerji", symptoms: ["SMP-001-1", "SMP-002-1", "SMP-018-1"], prevalence: 0.60, seasons: "İlkbahar, Yaz", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-002", name: "Laringo-Tussis", typeName: "Solunum & KBB", symptoms: ["SMP-003-1", "SMP-004-1", "SMP-005-1"], prevalence: 0.70, seasons: "Sonbahar, Kış", targetAges: ["AGE-1", "AGE-2", "AGE-3"] },
    { id: "HST-003", name: "Entero-Dyspepsia", typeName: "Sindirim", symptoms: ["SMP-006-1", "SMP-007-1"], prevalence: 0.50, seasons: "Hepsi", targetAges: ["AGE-1", "AGE-2", "AGE-3"] },
    { id: "HST-004", name: "Gastro-Fluxis", typeName: "Sindirim", symptoms: ["SMP-008-1", "SMP-009-1"], prevalence: 0.45, seasons: "Hepsi", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-005", name: "Vertigo-Kefaljin", typeName: "Nörolojik", symptoms: ["SMP-010-1", "SMP-011-1"], prevalence: 0.30, seasons: "Hepsi", targetAges: ["AGE-3"] },
    { id: "HST-006", name: "Dermaklinis", typeName: "Dermatoloji", symptoms: ["SMP-012-1", "SMP-013-1"], prevalence: 0.40, seasons: "Yaz, İlkbahar", targetAges: ["AGE-1", "AGE-2"] },
    { id: "HST-007", name: "Miyoartralji", typeName: "Ortopedik", symptoms: ["SMP-014-1", "SMP-015-1"], prevalence: 0.35, seasons: "Sonbahar, Kış", targetAges: ["AGE-2", "AGE-3"] },
    { id: "HST-008", name: "Odonto-Stomatit", typeName: "Ağız Sağlığı", symptoms: ["SMP-016-1", "SMP-017-1"], prevalence: 0.30, seasons: "Hepsi", targetAges: ["AGE-1", "AGE-2", "AGE-3"] },
    { id: "HST-009", name: "Astenik-Febri", typeName: "Sistemik", symptoms: ["SMP-020-1"], prevalence: 0.50, seasons: "Sonbahar, Kış", targetAges: ["AGE-1", "AGE-2", "AGE-3"] },
    { id: "HST-010", name: "Thermoreksis", typeName: "Solunum & KBB", symptoms: ["SMP-003-1", "SMP-005-1", "SMP-020-2"], prevalence: 0.25, seasons: "Yaz", targetAges: ["AGE-1", "AGE-3"] }
];

// === 4. İLAÇLAR (medicines) - Başlangıç stokları 2 adet ===
const medicines = [
    { id: "ILG-001", name: "Alergo-Combi Tablet", level: 1, group: "Alerji", desc: "HST-001'in tüm semptomlarını tek başına iyileştirir.", symptoms: ["SMP-001", "SMP-002", "SMP-018"], treatedSeverity: 1, compatibility: ["AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 18, price: 28, count: 2, shelfLife: 20 },
    { id: "ILG-002", name: "Histam-Stop Tablet", level: 1, group: "Alerji", desc: "Hapşırma ve burun akıntısını keser. (HST-001 Parça 1)", symptoms: ["SMP-001", "SMP-002"], treatedSeverity: 1, compatibility: ["AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 10, price: 16, count: 2, shelfLife: 20 },
    { id: "ILG-003", name: "Ocu-Clear Damla", level: 1, group: "Göz", desc: "Göz sulanmasını giderir. (HST-001 Parça 2)", symptoms: ["SMP-018"], treatedSeverity: 1, compatibility: ["AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 9, price: 14, count: 2, shelfLife: 15 },
    { id: "ILG-004", name: "Pulmo-Max Şurup", level: 1, group: "Solunum & KBB", desc: "HST-002'nin tüm semptomlarını tek başına iyileştirir.", symptoms: ["SMP-003", "SMP-004", "SMP-005"], treatedSeverity: 1, compatibility: ["AGE-1", "AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 20, price: 30, count: 2, shelfLife: 15 },
    { id: "ILG-005", name: "Naso-Decon Sprey", level: 1, group: "Solunum & KBB", desc: "Burun tıkanıklığı ve boğaz ağrısını çözer. (HST-002 Parça 1)", symptoms: ["SMP-003", "SMP-004"], treatedSeverity: 1, compatibility: ["AGE-1", "AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 11, price: 17, count: 2, shelfLife: 25 },
    { id: "ILG-006", name: "Tussis-Ex Şurup", level: 1, group: "Solunum & KBB", desc: "Sadece öksürüğü yumuşatır. (HST-002 Parça 2)", symptoms: ["SMP-005"], treatedSeverity: 1, compatibility: ["AGE-1", "AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 8, price: 13, count: 2, shelfLife: 18 },
    { id: "ILG-007", name: "Gastro-Total Likit", level: 1, group: "Sindirim & Mide", desc: "HST-003'ün tüm semptomlarını tek başına iyileştirir.", symptoms: ["SMP-006", "SMP-007"], treatedSeverity: 1, compatibility: ["AGE-1", "AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 15, price: 23, count: 2, shelfLife: 20 },
    { id: "ILG-008", name: "Mide-Anacid Süspansiyon", level: 1, group: "Sindirim & Mide", desc: "Mide yanmasını nötrler. (HST-003 Parça 1)", symptoms: ["SMP-006"], treatedSeverity: 1, compatibility: ["AGE-1", "AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 8, price: 13, count: 2, shelfLife: 20 },
    { id: "ILG-009", name: "Eme-Stop Damla", level: 1, group: "Sindirim & Mide", desc: "Mide bulantısını keser. (HST-003 Parça 2)", symptoms: ["SMP-007"], treatedSeverity: 1, compatibility: ["AGE-1", "AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 8, price: 13, count: 2, shelfLife: 15 },
    { id: "ILG-010", name: "Entero-Cure Tablet", level: 1, group: "Sindirim & Mide", desc: "HST-004'ün tüm semptomlarını tek başına iyileştirir.", symptoms: ["SMP-008", "SMP-009"], treatedSeverity: 1, compatibility: ["AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 16, price: 25, count: 2, shelfLife: 18 },
    { id: "ILG-011", name: "Spasmo-Ease Tablet", level: 1, group: "Sindirim & Mide", desc: "Karın ağrısı ve krampları çözer. (HST-004 Parça 1)", symptoms: ["SMP-008"], treatedSeverity: 1, compatibility: ["AGE-1"], forbiddenConditions: [], buyPrice: 9, price: 14, count: 2, shelfLife: 22 },
    { id: "ILG-012", name: "Diarrho-Stop Şurup", level: 1, group: "Sindirim & Mide", desc: "İshali keser. (HST-004 Parça 2)", symptoms: ["SMP-009"], treatedSeverity: 1, compatibility: ["AGE-1"], forbiddenConditions: [], buyPrice: 9, price: 14, count: 2, shelfLife: 15 },
    { id: "ILG-013", name: "Neuro-Fort Tablet", level: 1, group: "Nörolojik & Sinir", desc: "HST-005'in tüm semptomlarını tek başına iyileştirir.", symptoms: ["SMP-010", "SMP-011"], treatedSeverity: 1, compatibility: ["AGE-3"], forbiddenConditions: [], buyPrice: 17, price: 26, count: 2, shelfLife: 24 },
    { id: "ILG-014", name: "Verti-Cure Tablet", level: 1, group: "Nörolojik & Sinir", desc: "Baş dönmesini engeller. (HST-005 Parça 1)", symptoms: ["SMP-010"], treatedSeverity: 1, compatibility: ["AGE-3"], forbiddenConditions: [], buyPrice: 9, price: 15, count: 2, shelfLife: 20 },
    { id: "ILG-015", name: "Analgo-Kefaljin", level: 1, group: "Nörolojik & Sinir", desc: "Baş ağrısını keser. (HST-005 Parça 2)", symptoms: ["SMP-011"], treatedSeverity: 1, compatibility: ["AGE-3"], forbiddenConditions: [], buyPrice: 9, price: 15, count: 2, shelfLife: 25 },
    { id: "ILG-016", name: "Dermo-Complete Krem", level: 1, group: "Cilt & Dermatoloji", desc: "HST-006'nın tüm semptomlarını tek başına iyileştirir.", symptoms: ["SMP-012", "SMP-013"], treatedSeverity: 1, compatibility: ["AGE-1", "AGE-2"], forbiddenConditions: [], buyPrice: 15, price: 23, count: 2, shelfLife: 30 },
    { id: "ILG-017", name: "Pruri-Sed Krem", level: 1, group: "Cilt & Dermatoloji", desc: "Kaşıntıyı dindirir. (HST-006 Parça 1)", symptoms: ["SMP-012"], treatedSeverity: 1, compatibility: ["AGE-1", "AGE-2"], forbiddenConditions: [], buyPrice: 8, price: 13, count: 2, shelfLife: 25 },
    { id: "ILG-018", name: "Erythro-Calm Merhem", level: 1, group: "Cilt & Dermatoloji", desc: "Cilt kızarıklığını giderir. (HST-006 Parça 2)", symptoms: ["SMP-013"], treatedSeverity: 1, compatibility: ["AGE-1", "AGE-2"], forbiddenConditions: [], buyPrice: 8, price: 13, count: 2, shelfLife: 30 },
    { id: "ILG-019", name: "Myo-Arthro Gel", level: 1, group: "Kas & İskelet", desc: "HST-007'nin tüm semptomlarını tek başına iyileştirir.", symptoms: ["SMP-014", "SMP-015"], treatedSeverity: 1, compatibility: ["AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 16, price: 25, count: 2, shelfLife: 30 },
    { id: "ILG-020", name: "Arthro-Relief Jel", level: 1, group: "Kas & İskelet", desc: "Eklem ağrılarını rahatlatır. (HST-007 Parça 1)", symptoms: ["SMP-014"], treatedSeverity: 1, compatibility: ["AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 9, price: 14, count: 2, shelfLife: 30 },
    { id: "ILG-021", name: "Myo-Relax Krem", level: 1, group: "Kas & İskelet", desc: "Kas ağrılarını ve gevşemeyi sağlar. (HST-007 Parça 2)", symptoms: ["SMP-015"], treatedSeverity: 1, compatibility: ["AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 9, price: 14, count: 2, shelfLife: 25 },
    { id: "ILG-022", name: "Stoma-Dent Oral Gel", level: 1, group: "Ağız & Diş Sağlığı", desc: "HST-008'in tüm semptomlarını tek başına iyileştirir.", symptoms: ["SMP-016", "SMP-017"], treatedSeverity: 1, compatibility: ["AGE-1", "AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 15, price: 23, count: 2, shelfLife: 20 },
    { id: "ILG-023", name: "Afta-Cure Solüsyon", level: 1, group: "Ağız & Diş Sağlığı", desc: "Ağız içi yaraları iyileştirir. (HST-008 Parça 1)", symptoms: ["SMP-016"], treatedSeverity: 1, compatibility: ["AGE-1", "AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 8, price: 13, count: 2, shelfLife: 18 },
    { id: "ILG-024", name: "Odonto-Analgesic Jel", level: 1, group: "Ağız & Diş Sağlığı", desc: "Diş ağrısını uyuşturur. (HST-008 Parça 2)", symptoms: ["SMP-017"], treatedSeverity: 1, compatibility: ["AGE-1", "AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 8, price: 13, count: 2, shelfLife: 20 },
    { id: "ILG-025", name: "Febri-Astenik Şurup", level: 1, group: "Sistemik & Genel", desc: "HST-009'un tüm semptomlarını tek başına iyileştirir.", symptoms: ["SMP-019", "SMP-020"], treatedSeverity: 1, compatibility: ["AGE-1", "AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 16, price: 24, count: 2, shelfLife: 15 },
    { id: "ILG-026", name: "Astenik-Tone Tonik", level: 1, group: "Sistemik & Genel", desc: "Halsizlik ve bitkinliği giderir. (HST-009 Parça 1)", symptoms: ["SMP-019"], treatedSeverity: 1, compatibility: ["AGE-1", "AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 8, price: 13, count: 2, shelfLife: 20 },
    { id: "ILG-027", name: "Pyre-Drop Damla", level: 1, group: "Sistemik & Genel", desc: "Yüksek ateşi düşürür. (HST-009 Parça 2)", symptoms: ["SMP-020"], treatedSeverity: 1, compatibility: ["AGE-1", "AGE-2", "AGE-3"], forbiddenConditions: [], buyPrice: 8, price: 13, count: 2, shelfLife: 15 },
    { id: "ILG-028", name: "Thermo-Kill Sprey", level: 1, group: "Solunum & KBB", desc: "HST-010'un tüm semptomlarını tek başına iyileştirir.", symptoms: ["SMP-003", "SMP-005", "SMP-020"], treatedSeverity: 2, compatibility: ["AGE-1", "AGE-3"], forbiddenConditions: [], buyPrice: 22, price: 34, count: 2, shelfLife: 15 },
    { id: "ILG-029", name: "Respira-Block Sprey", level: 1, group: "Solunum & KBB", desc: "Burun tıkanıklığı ve öksürüğü keser. (HST-010 Parça 1)", symptoms: ["SMP-003", "SMP-005"], treatedSeverity: 1, compatibility: ["AGE-1", "AGE-3"], forbiddenConditions: [], buyPrice: 12, price: 19, count: 2, shelfLife: 20 },
    { id: "ILG-030", name: "Pyre-Block Damla", level: 1, group: "Sistemik & Genel", desc: "Şiddetli ateşi düşürür. (HST-010 Parça 2)", symptoms: ["SMP-020"], treatedSeverity: 2, compatibility: ["AGE-1", "AGE-3"], forbiddenConditions: [], buyPrice: 10, price: 16, count: 2, shelfLife: 15 }
];

// === 5. MÜŞTERİLER (customers) ===
const customers = [
    { id: "CST-001", name: "Xylar Gath", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-001", symptomsList: ["SMP-001-1", "SMP-002-1", "SMP-018-1"], chronicConditions: [], prescribedMed: ["ILG-001"] },
    { id: "CST-002", name: "Pyxis Skar", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-002", symptomsList: ["SMP-003-1", "SMP-004-1", "SMP-005-1"], chronicConditions: [], prescribedMed: ["ILG-005", "ILG-006"] },
    { id: "CST-003", name: "Bleepo Krel", race: "Uzaylı", ageGroup: "Çocuk", ageGroupId: "AGE-2", patienceLevel: 1, disease: "HST-003", symptomsList: ["SMP-006-1", "SMP-007-1"], chronicConditions: [], prescribedMed: ["ILG-007"] },
    { id: "CST-004", name: "Elyndra Pax", race: "Uzaylı", ageGroup: "Bebek", ageGroupId: "AGE-1", patienceLevel: 1, disease: "HST-004", symptomsList: ["SMP-008-1", "SMP-009-1"], chronicConditions: [], prescribedMed: ["ILG-011", "ILG-012"] },
    { id: "CST-005", name: "Vandar Nyx", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-005", symptomsList: ["SMP-010-1", "SMP-011-1"], chronicConditions: [], prescribedMed: ["ILG-013"] },
    { id: "CST-006", name: "T'Kalon Vex", race: "Uzaylı", ageGroup: "Çocuk", ageGroupId: "AGE-2", patienceLevel: 1, disease: "HST-006", symptomsList: ["SMP-012-1", "SMP-013-1"], chronicConditions: [], prescribedMed: ["ILG-017", "ILG-018"] },
    { id: "CST-007", name: "Maelis Zeel", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-007", symptomsList: ["SMP-014-1", "SMP-015-1"], chronicConditions: [], prescribedMed: ["ILG-019"] },
    { id: "CST-008", name: "Myron Phos", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-008", symptomsList: ["SMP-016-1", "SMP-017-1"], chronicConditions: [], prescribedMed: ["ILG-023", "ILG-024"] },
    { id: "CST-009", name: "Glisno Khor", race: "Uzaylı", ageGroup: "Bebek", ageGroupId: "AGE-1", patienceLevel: 1, disease: "HST-009", symptomsList: ["SMP-019-1", "SMP-020-1"], chronicConditions: [], prescribedMed: ["ILG-025"] },
    { id: "CST-010", name: "Krazen Dray", race: "Uzaylı", ageGroup: "Bebek", ageGroupId: "AGE-1", patienceLevel: 1, disease: "HST-010", symptomsList: ["SMP-003-1", "SMP-005-1", "SMP-020-2"], chronicConditions: [], prescribedMed: ["ILG-029", "ILG-030"] },
    { id: "CST-011", name: "Zephyrus Krall", race: "Uzaylı", ageGroup: "Çocuk", ageGroupId: "AGE-2", patienceLevel: 1, disease: "HST-001", symptomsList: ["SMP-001-1", "SMP-002-1", "SMP-018-1"], chronicConditions: [], prescribedMed: ["ILG-002", "ILG-003"] },
    { id: "CST-012", name: "Krivok Zon", race: "Uzaylı", ageGroup: "Bebek", ageGroupId: "AGE-1", patienceLevel: 1, disease: "HST-002", symptomsList: ["SMP-003-1", "SMP-004-1", "SMP-005-1"], chronicConditions: [], prescribedMed: ["ILG-004"] },
    { id: "CST-013", name: "Zonar T'Zor", race: "Uzaylı", ageGroup: "Çocuk", ageGroupId: "AGE-2", patienceLevel: 1, disease: "HST-003", symptomsList: ["SMP-006-1", "SMP-007-1"], chronicConditions: [], prescribedMed: ["ILG-008", "ILG-009"] },
    { id: "CST-014", name: "Thraks Blix", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-004", symptomsList: ["SMP-008-1", "SMP-009-1"], chronicConditions: [], prescribedMed: ["ILG-010"] },
    { id: "CST-015", name: "Vokath Tyren", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-005", symptomsList: ["SMP-010-1", "SMP-011-1"], chronicConditions: [], prescribedMed: ["ILG-014", "ILG-015"] },
    { id: "CST-016", name: "Orux Vorr", race: "Uzaylı", ageGroup: "Bebek", ageGroupId: "AGE-1", patienceLevel: 1, disease: "HST-006", symptomsList: ["SMP-012-1", "SMP-013-1"], chronicConditions: [], prescribedMed: ["ILG-016"] },
    { id: "CST-017", name: "Nyxil Xon", race: "Uzaylı", ageGroup: "Çocuk", ageGroupId: "AGE-2", patienceLevel: 1, disease: "HST-007", symptomsList: ["SMP-014-1", "SMP-015-1"], chronicConditions: [], prescribedMed: ["ILG-020", "ILG-021"] },
    { id: "CST-018", name: "Soolis Zann", race: "Uzaylı", ageGroup: "Bebek", ageGroupId: "AGE-1", patienceLevel: 1, disease: "HST-008", symptomsList: ["SMP-016-1", "SMP-017-1"], chronicConditions: [], prescribedMed: ["ILG-022"] },
    { id: "CST-019", name: "Zylos Glyph", race: "Uzaylı", ageGroup: "Çocuk", ageGroupId: "AGE-2", patienceLevel: 1, disease: "HST-009", symptomsList: ["SMP-020-1"], chronicConditions: [], prescribedMed: ["ILG-026", "ILG-027"] },
    { id: "CST-020", name: "Huxli Vond", race: "Uzaylı", ageGroup: "Yetişkin", ageGroupId: "AGE-3", patienceLevel: 1, disease: "HST-010", symptomsList: ["SMP-003-1", "SMP-005-1", "SMP-020-2"], chronicConditions: [], prescribedMed: ["ILG-028"] }
];

// YENİ EKLENEN: Geliştirme Listesi Veri Yapısı
const upgradesList = [
    {
        id: "UPG-1",
        title: "1. Stok Kapasitesi Artışı (Maks Stok: 3)",
        desc: "İlaçların en yüksek stok miktarı 3 adede çıkartılır.",
        reqEp: 50,
        price: 500,
        purchased: false,
        action: function() {
            MAX_MEDICINE_STOCK = 3;
        }
    },
    {
        id: "UPG-2",
        title: "2. Stok Kapasitesi Artışı (Maks Stok: 4)",
        desc: "İlaçların en yüksek stok miktarı 4 adede çıkartılır.",
        reqEp: 200,
        price: 1075,
        purchased: false,
        action: function() {
            MAX_MEDICINE_STOCK = 4;
        }
    },
    {
        id: "UPG-3",
        title: "Otomatik Günlük Stok Yenileme",
        desc: "Eczane stokları her günün sonunda otomatik olarak maksimum kapasiteye yenilenir.",
        reqEp: 300,
        price: 1300,
        purchased: false,
        action: function() {
            GameState.autoRestockEnabled = true;
        }
    }
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

// === GÜVENLİ VERİ ERİŞİM KATMANI (DATA ACCESS LAYER) ===
const GameData = {
    getMedicineById: function(id) {
        return medicines.find(m => m.id === id) || null;
    },
    
    getDiseaseById: function(id) {
        return diseases.find(d => d.id === id) || null;
    },

    getSymptomName: function(symptomId) {
        return symptomNamesMap[symptomId] || symptomId;
    },

    getAgeGroupName: function(ageGroupId) {
        return ageGroupsMap[ageGroupId] || ageGroupId;
    },

    extractSymptomRoot: function(symptomId) {
        if (!symptomId) return "";
        return symptomId.split('-').slice(0, 2).join('-');
    }
};

// === MERKEZİ DURUM DEPOSU (STATE STORE) ===
const GameState = {
    money: 1000,
    xp: 0,
    ep: 0,
    satisfaction: 30, // 30 Puan ile başlar
    currentDayNumber: 1,
    dayServedCount: 0,
    dailyLimit: 5,
    timeRemaining: 5, // Varsayılan bekleme süresi 5 saniyeye düşürüldü
    maxCustomerPatience: 30,
    nightDuration: 120,
    status: 'EMPTY_WAIT', // 'EMPTY_WAIT', 'CUSTOMER_ACTIVE', 'NIGHT_ACTIVE', 'GAME_OVER'
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
    dailyCaptchaTriggers: [],
    selectedCaptchaWord: null,
    captchaMatchedPairs: 0,
    chosenDutyDay: null,      // Seçilen nöbet günü (1, 2 veya 3)
    isDutyNightActive: false, // Gece nöbetinin aktif olup olmadığı
    dutyNextDayPenalty: false, // Gece nöbeti sonrası ertesi günün 5 müşteriyle kısıtlanması
    autoRestockEnabled: false, // 3. Geliştirme satın alındığında true olur
    realStartTime: null,       // Oyunun gerçek başlama zamanı (timestamp)
    elapsedRealSeconds: 0,     // Geçen toplam gerçek saniye
    timerInterval: null,       // Kronometre döngüsü

    modifySatisfaction: function(amount) {
        this.satisfaction = Math.max(0, Math.min(100, this.satisfaction + amount));
        UIController.updateSatisfactionUI();
        return this.satisfaction;
    },

    modifyMoney: function(amount) {
        let parsed = Number(amount);
        if (!isNaN(parsed)) {
            this.money += parsed;
        }
        return this.money;
    },

    modifyXp: function(amount) {
        this.xp = Math.max(0, this.xp + amount);
        return this.xp;
    },

    modifyEp: function(amount) {
        this.ep += amount;
        return this.ep;
    },

    resetCart: function() {
        this.cart = [];
    }
};

// === UI KONTROLÖRÜ (UI CONTROLLER) ===
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

    syncHeaderStats: function(animTarget = null) {
        this.updateStat('moneyDisplay', `$${GameState.money}`, animTarget === 'money' ? 'money-gain' : null);
        this.updateStat('xpDisplay', `${GameState.xp} XP`, animTarget === 'xp' ? 'stat-gain' : null);
        this.updateStat('epDisplay', `${GameState.ep} EP`, animTarget === 'ep' ? 'stat-gain' : null);
    },

    updateTimerBar: function() {
        const bar = document.getElementById('timerBar');
        if (!bar) return;
        const maxDuration = (GameState.status === 'EMPTY_WAIT') ? 10 : GameState.maxCustomerPatience;
        const percentage = Math.max(0, (GameState.timeRemaining / maxDuration) * 100);
        bar.style.transform = `scaleX(${percentage / 100})`;
    },

    setDisplay: function(elementId, displayValue) {
        const el = document.getElementById(elementId);
        if (el) el.style.setProperty('display', displayValue, 'important');
    }, // <-- EKSİK OLAN VİRGÜL BURAYA EKLENDİ

    updateSatisfactionUI: function() {
        const bar = document.getElementById('satisfactionBar');
        const text = document.getElementById('satisfactionText');
        if (bar) bar.style.width = `${GameState.satisfaction}%`;
        if (text) text.innerText = `${Math.round(GameState.satisfaction)} / 100`;
    }
};

// === OYUN DÖNGÜSÜ (GAME LOOP ENGINE) ===
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

        this.processDeliveries(1);

        // YENİ EKLENEN: Depo modundaysak ve yolda sipariş varsa her saniye kartlardaki sayacı tazele
        if (GameState.currentMode === 'DEPOT' && GameState.pendingOrders.length > 0) {
            initDepotMedicines();
        }

        GameState.timeRemaining--;
        UIController.updateTimerBar();

        if (GameState.timeRemaining <= 0) {
            GameStateManager.handleTimeout();
        }
    },

    processDeliveries: function(secondsPassed = 1) {
        if (GameState.pendingOrders.length === 0) return;

        GameState.pendingOrders.forEach(order => order.timeLeft -= secondsPassed);
        const completedOrders = GameState.pendingOrders.filter(order => order.timeLeft <= 0);

        if (completedOrders.length > 0) {
            completedOrders.forEach(order => {
                const med = GameData.getMedicineById(order.id);
                if (med) {
                    med.count = Math.min(MAX_MEDICINE_STOCK, med.count + order.quantity);
                }
            });

            GameState.pendingOrders = GameState.pendingOrders.filter(order => order.timeLeft > 0);
            
            initDepotMedicines();
            initShopMedicines();
        }
    }
};

// === DURUM AKIŞ YÖNETİCİSİ (STATE FLOW MANAGER) ===
const GameStateManager = {
    handleTimeout: function() {
        switch (GameState.status) {
            case 'EMPTY_WAIT':
                this.onEmptyWaitTimeout();
                break;
            case 'CUSTOMER_ACTIVE':
                this.onCustomerTimeout();
                break;
            case 'NIGHT_ACTIVE':
                this.onNightTimeout();
                break;
            default:
                break;
        }
    },

    onEmptyWaitTimeout: function() {
        if (GameState.dayServedCount >= GameState.dailyLimit) {
            enterNightState();
        } else {
            enterCustomerActiveState();
        }
    },

    onCustomerTimeout: function() {
        handleCustomerTimeout();
    },

    onNightTimeout: function() {
        progressToNextDay();
    }
};

// === MÜŞTERİ & İLAÇ UYUM HESAPLAYICI (BUSINESS LOGIC) ===
const TreatmentEvaluator = {
    getCustomerSymptomRoots: function(customer) {
        if (!customer || !customer.symptomsList) return [];
        return customer.symptomsList.map(s => GameData.extractSymptomRoot(s));
    },

    evaluateTreatment: function(customer, selectedMedicineIds) {
        const customerRoots = this.getCustomerSymptomRoots(customer);
        const combinedMedSymptoms = [];

        selectedMedicineIds.forEach(id => {
            const med = GameData.getMedicineById(id);
            if (med) {
                combinedMedSymptoms.push(...med.symptoms);
            }
        });

        const report = [];
        let healedCount = 0;

        customer.symptomsList.forEach(symptom => {
            const root = GameData.extractSymptomRoot(symptom);
            const isHealed = combinedMedSymptoms.some(mSym => mSym.trim() === root);
            
            if (isHealed) {
                healedCount++;
                report.push({ symptom: symptom, healed: true, name: GameData.getSymptomName(symptom) });
            } else {
                report.push({ symptom: symptom, healed: false, name: GameData.getSymptomName(symptom) });
            }
        });

        return {
            isPerfect: healedCount === customerRoots.length && customerRoots.length > 0,
            healedCount: healedCount,
            totalSymptoms: customerRoots.length,
            reportDetails: report
        };
    }
};

// === AKILLI REÇETE VE KOMBİNASYON MOTORU ===
const CombinationFinder = {
    findValidCombinations: function(customer) {
        const customerSymptomRoots = TreatmentEvaluator.getCustomerSymptomRoots(customer);
        const customerAgeGroup = customer.ageGroupId;

        const validInventoryMeds = medicines.filter(med => {
            if (med.count <= 0) return false;
            if (!med.compatibility.includes(customerAgeGroup)) return false;
            return med.symptoms.some(medSym => customerSymptomRoots.includes(medSym));
        });

        let possibleCombinations = [];

        validInventoryMeds.forEach(med => {
            const treated = med.symptoms.filter(s => customerSymptomRoots.includes(s));
            possibleCombinations.push({
                meds: [med],
                treatedSymptoms: [...new Set(treated)],
                totalPrice: med.price
            });
        });

        for (let i = 0; i < validInventoryMeds.length; i++) {
            for (let j = i + 1; j < validInventoryMeds.length; j++) {
                const med1 = validInventoryMeds[i];
                const med2 = validInventoryMeds[j];

                const med1Treated = med1.symptoms.filter(s => customerSymptomRoots.includes(s));
                const med2Treated = med2.symptoms.filter(s => customerSymptomRoots.includes(s));

                if (med1Treated.length >= customerSymptomRoots.length || med2Treated.length >= customerSymptomRoots.length) {
                    continue; 
                }

                if (!med2Treated.some(s => !med1Treated.includes(s))) {
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

        const prescribedIds = Array.isArray(customer.prescribedMed) ? customer.prescribedMed : [customer.prescribedMed];
        const prescribedSorted = prescribedIds.slice().sort().join(',');

        possibleCombinations = possibleCombinations.filter(combo => {
            const comboSorted = combo.meds.map(m => m.id).sort().join(',');
            return comboSorted !== prescribedSorted;
        });

        possibleCombinations = possibleCombinations.filter(combo => 
            combo.treatedSymptoms.length >= customerSymptomRoots.length
        );

        return possibleCombinations.sort((a, b) => a.totalPrice - b.totalPrice);
    }
};

// === 4. ÇEKİRDEK OYUN FONKSİYONLARI ===

function setupInitialInventoryForFirstDay() {
    // Tüm hastalık verileri ilk günden itibaren aktif. Her ilaç envanterde 5 adetle başlar.
    medicines.forEach(med => med.count = MAX_MEDICINE_STOCK);
}

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

// Dynamic Müşteri Sayısı Hesabı
function calculateDailyCustomerLimit(satisfaction) {
    if (satisfaction <= 30) {
        // 0 ile 30 arası: 2 ile 5 müşteri arası doğrusal oran
        return Math.round(2 + (satisfaction / 30) * (5 - 2));
    } else {
        // 30 ile 100 arası: 5 ile 10 müşteri arası doğrusal oran
        return Math.round(5 + ((satisfaction - 30) / 70) * (10 - 5));
    }
}

// Müşteri Sayılarını Gün/Nöbet Moduna Göre Belirleme
function generateRandomCustomersForDay() {
    GameState.activeDayCustomers = [];
    GameState.currentCustomerIndex = 0;

    if (GameState.isDutyNightActive) {
        GameState.dailyLimit = 10;
    } else {
        // Müşteri sayısı memnuniyet puanına göre dinamik belirleniyor
        GameState.dailyLimit = calculateDailyCustomerLimit(GameState.satisfaction);
    }

    let availablePool = [...customers];
    for (let i = 0; i < GameState.dailyLimit; i++) {
        if (availablePool.length === 0) availablePool = [...customers];
        const randomIndex = Math.floor(Math.random() * availablePool.length);
        const selectedCustomer = availablePool[randomIndex];
        GameState.activeDayCustomers.push(selectedCustomer);
        availablePool.splice(randomIndex, 1);
    }
}

function updateLockScreenNotification() {
    const textElement = document.getElementById('lockScreenNotificationText');
    if (!textElement) return;

    if (GameState.activeDayCustomers.length === 0) {
        generateRandomCustomersForDay();
    }

    // Sabit bildirim metni
    textElement.innerText = "Değerli üyemiz, yeni iş gününde başarılar dileriz! Size tavsiyemiz yeni güne başlamadan önce stoklarınızı yenilemeniz.";
}

function generatePrescriptionCodeForCustomer(customer) {
    if (!customer || !customer.prescribedMed) return "HATA-KOD";

    const medId = Array.isArray(customer.prescribedMed) ? customer.prescribedMed[0] : customer.prescribedMed;
    const med = GameData.getMedicineById(medId);
    
    if (!med) return "HATA-KOD";

    const cleanGroup = med.group.replace(/[^a-zA-Z0-9]/g, '');
    const cleanDisease = cleanIdToNoZero(customer.disease);
    const cleanAge = cleanIdToNoZero(customer.ageGroupId);

    return `${cleanGroup}-${cleanDisease}-${cleanAge}`;
}

function cleanIdToNoZero(idStr) {
    if (!idStr) return "";
    return idStr.replace('-', '').replace(/^([A-Z]+)0+(\d+)/, '$1$2');
}

function startDay() {
    if (GameState.status === 'NIGHT_ACTIVE') {
        skipNight();
        return;
    }
    
    if (GameState.gameStarted) return;
    GameState.gameStarted = true;

    // Kronometreyi başlat
    startRealTimer();
    
    UIController.setDisplay('lockScreenArea', 'none');
    UIController.setDisplay('appNabizContainer', 'flex');
    
    enterEmptyWaitState();
    GameLoop.start();
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
        const compatibilityNames = med.compatibility.map(ageId => ageGroupsMap[ageId] || ageId).join(', ');
        card.innerHTML = `
            <div class="med-header">
                <div class="med-info"><h4>${med.name}</h4></div>
                <span class="med-tag">${med.group}</span>
            </div>
            <div class="prices-row">
                <span class="price-sell">Satış: $${med.price}</span>
                <span class="stock-tag">Stok: ${med.count}/${MAX_MEDICINE_STOCK} ad.</span>
            </div>
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

        const isFullStock = (med.count + totalPendingQty) >= MAX_MEDICINE_STOCK;
        const stockStyle = med.count === 0 
            ? 'background: rgba(239, 68, 68, 0.15); color: #f87171;' 
            : 'background: rgba(59, 130, 246, 0.1); color: var(--accent-color);';

        card.innerHTML = `
            <div class="med-header">
                <div class="med-info"><h4>${med.name} ${isFullStock ? '<span style="color:#ef4444; font-size:0.7rem;">(Maks Stok)</span>' : ''}</h4></div>
                <span class="med-tag">${med.group}</span>
            </div>
            <div class="prices-row">
                <span class="price-buy">Maliyet: $${med.buyPrice}</span>
                <span class="stock-tag" style="${stockStyle}">Stok: ${med.count}/${MAX_MEDICINE_STOCK} ad.</span>
            </div>
            <div class="med-compatibility"><strong>Tavsiye Satış:</strong> <span class="price-sell">$${med.price}</span></div>
            <div class="med-compatibility"><strong>Uygunluk:</strong> ${compatibilityNames}</div>
            ${deliveryBadge}
        `;
        grid.appendChild(card);
    });
}

function enterEmptyWaitState() {
    GameState.status = 'EMPTY_WAIT';
    GameState.timeRemaining = 5; // 10 saniyeden 5 saniyeye düşürüldü
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

    const modeTitle = GameState.isDutyNightActive ? "Gece Nöbeti Mesaisi" : `Gün ${GameState.currentDayNumber}`;
    document.getElementById('customerPanelTitle').innerText = `${modeTitle} - Boş Zaman Periyodu (5 Sn)`;
    document.getElementById('timerBar').className = "timer-bar waiting";
    UIController.updateTimerBar();
}

function enterCustomerActiveState() {
    // Güvenlik Kontrolü: İndeks taşmasını önle
    if (GameState.currentCustomerIndex >= GameState.activeDayCustomers.length) {
        if (GameState.isDutyNightActive) {
            GameState.isDutyNightActive = false;
            progressToNextDay();
        } else {
            enterNightState();
        }
        return;
    }

    if (GameState.dailyCaptchaTriggers.includes(GameState.currentCustomerIndex)) {
        triggerCaptchaTest();
        GameState.dailyCaptchaTriggers = GameState.dailyCaptchaTriggers.filter(idx => idx !== GameState.currentCustomerIndex);
    }

    GameState.status = 'CUSTOMER_ACTIVE';
    GameState.timeRemaining = GameState.maxCustomerPatience;
    UIController.setDisplay('customerOverlay', 'none');

    const modeTitle = GameState.isDutyNightActive ? "Gece Nöbeti Mesaisi" : `Gün ${GameState.currentDayNumber}`;
    document.getElementById('customerPanelTitle').innerText = `${modeTitle} - Müşteri Süresi (${GameState.maxCustomerPatience} Sn)`;
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

function confirmNabizAccess() {
    if (GameState.status !== 'CUSTOMER_ACTIVE') {
        alert("Eczanede şu anda aktif bir hasta bulunmamaktadır!");
        return;
    }

    const currentCustomer = GameState.activeDayCustomers[GameState.currentCustomerIndex];
    const prescribedIds = Array.isArray(currentCustomer.prescribedMed)
        ? currentCustomer.prescribedMed
        : [currentCustomer.prescribedMed];
    
    const prescribedMeds = prescribedIds.map(id => GameData.getMedicineById(id)).filter(Boolean);
    const diseaseObj = GameData.getDiseaseById(currentCustomer.disease);
    GameState.isNabizVerified = true;

    document.getElementById('n-rep-name').innerText = currentCustomer.name;
    document.getElementById('n-rep-disease').innerText = diseaseObj ? diseaseObj.name : "Bilinmiyor";
    document.getElementById('n-rep-age').innerText = currentCustomer.ageGroup;

    const recMedContainer = document.getElementById('n-rep-med');
    recMedContainer.innerHTML = '';

    if (prescribedMeds.length > 0) {
        const isAllInStock = prescribedMeds.every(m => m.count > 0);
        const comboNames = prescribedMeds.map(m => m.name).join(' + ');
        
        // Fiyat Hesabı (Gece %20 Zamlı)
        const baseTotalPrice = prescribedMeds.reduce((sum, m) => sum + m.price, 0);
        const finalTotalPrice = GameState.isDutyNightActive ? Math.round(baseTotalPrice * 1.2) : baseTotalPrice;

        const btn = document.createElement('button');
        btn.type = 'button';

        if (isAllInStock) {
        btn.className = 'nabiz-med-btn recommended';
        btn.onclick = () => addMultipleToCartDirect(prescribedMeds.map(m => m.id));
        btn.innerHTML = `
            <div style="display:flex; flex-direction:column; text-align:left;">
                <span><strong>[Doktor Reçetesi]</strong> ${comboNames}</span>
            </div>
            <strong>$${finalTotalPrice}</strong>
            `;
        } else {
            btn.className = 'nabiz-med-btn disabled';
            btn.onclick = () => alert(`⚠️ Uyarı: Reçetede istenen ilaç paketinde stokta bulunmayan ürünler var!`);
            btn.innerHTML = `
                <div style="display:flex; flex-direction:column; text-align:left;">
                    <span><strong>[Doktor Reçetesi]</strong> ${comboNames}</span>
                    <span class="out-of-stock-warn">Eksik Stok var!</span>
                </div>
                <strong>$${finalTotalPrice}</strong>
            `;
        }
        recMedContainer.appendChild(btn);
    } else {
        recMedContainer.innerText = "Önerilen Reçete Bulunamadı";
    }

    const availableOptionsList = document.getElementById('n-rep-options-list');
    availableOptionsList.innerHTML = '';

    const possibleCombinations = CombinationFinder.findValidCombinations(currentCustomer);
    const customerSymptomRoots = TreatmentEvaluator.getCustomerSymptomRoots(currentCustomer);

    if (possibleCombinations.length > 0) {
        possibleCombinations.forEach(combo => {
            const comboNames = combo.meds.map(m => m.name).join(' + ');
            const matchTag = `<span style="color:#10b981; font-weight:bold;">[Tam Tedavi]</span>`;
            
            const baseComboPrice = combo.totalPrice;
            const finalComboPrice = GameState.isDutyNightActive ? Math.round(baseComboPrice * 1.2) : baseComboPrice;

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
                <strong>$${finalComboPrice}</strong>
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
        const textTariff = GameState.isDutyNightActive ? " (%20 Gece Zamlı Satış)" : "";
        lockWarning.innerText = `✓ Müşteri bilgileri getirildi! Seçtiğiniz ilaç paketi doğrudan sepete aktarılacaktır.${textTariff}`;
    }

    renderCart();
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
    // EĞER NÖBETÇİ GECE MESAİSİ YENİ BİTTİYSE: Gece beklemesine girmeden direkt sonraki güne geç
    if (GameState.isDutyNightActive && GameState.dayServedCount >= GameState.dailyLimit) {
        GameState.isDutyNightActive = false;
        progressToNextDay();
        return;
    }

    const dayOfCurrentWeek = ((GameState.currentDayNumber - 1) % 3) + 1;

    // 1. Nöbetçi gün geldiyse Nöbetçi Gece Sekansını Başlat
    if (GameState.chosenDutyDay === dayOfCurrentWeek) {
        startDutyNightSequence();
        return;
    }

    // 2. Normal Gece Modu
    GameState.status = 'NIGHT_ACTIVE';
    GameState.gameStarted = false;
    GameState.isDutyNightActive = false;

    const isFirstNight = GameState.currentDayNumber === 1;
    GameState.timeRemaining = isFirstNight ? 300 : GameState.nightDuration;

    // Bir sonraki günün müşterilerini seç ve bildirimi güncelle
    generateRandomCustomersForDay();
    updateLockScreenNotification();

    // Arayüzleri Geçiş Yap
    UIController.setDisplay('appNabizContainer', 'none');
    UIController.setDisplay('nabizPrescriptionReport', 'none');
    UIController.setDisplay('lockScreenArea', 'flex');

    const lockClock = document.getElementById('lockScreenClock');
    if (lockClock) lockClock.innerText = "22:00";

    const startBtn = document.getElementById('startBtn');
    const nightMinutesText = isFirstNight ? "5 Dk" : "2 Dk";
    if (startBtn) {
        startBtn.innerHTML = `⏩ Geceyi Geç (${nightMinutesText})`;
    }

    document.getElementById('customerPanelTitle').innerText = `Gün ${GameState.currentDayNumber} - Gece Vakti (${nightMinutesText})`;
    document.getElementById('timerBar').className = "timer-bar waiting";
    UIController.updateTimerBar();

    const overlay = document.getElementById('customerOverlay');
    if (overlay) {
        UIController.setDisplay('customerOverlay', 'flex');
        overlay.innerHTML = `
            <div class="customer-arrival-text" style="color: #60a5fa;">
                🌙 Eczane Kapalı (Gece Vakti - ${nightMinutesText})<br>
                <span style="font-size:0.85rem; color:var(--text-muted); font-weight:normal;">
                    Depo siparişlerinizi verebilir veya kilit ekranından geceyi geçebilirsiniz.
                </span>
            </div>
        `;
    }
}

// 3. Madde: Nöbetçi Gece Başlangıcı (5 sn geri sayım + Gece Nöbeti)
function startDutyNightSequence() {
    GameState.status = 'CUSTOMER_ACTIVE';
    GameState.isDutyNightActive = true;
    GameState.dayServedCount = 0;
    GameState.currentCustomerIndex = 0;

    // 10 Müşterilik Gece Havuzunu Oluştur
    generateRandomCustomersForDay();

    let countdown = 5;
    const overlay = document.getElementById('customerOverlay');
    if (overlay) {
        UIController.setDisplay('customerOverlay', 'flex');
        overlay.innerHTML = `
            <div class="customer-arrival-text" style="color: var(--warning-color);">
                🚨 NÖBETÇİ ECZANE MODU BAŞLIYOR!<br>
                <span style="font-size: 0.9rem; color: #34d399;">ℹ️ Gece nöbeti boyunca tüm ilaçlar %20 zamlı satılır!</span><br>
                <span style="font-size:2rem;">${countdown}</span>
            </div>`;
    }

    const countInterval = setInterval(() => {
        countdown--;
        if (overlay && countdown > 0) {
            overlay.innerHTML = `
                <div class="customer-arrival-text" style="color: var(--warning-color);">
                    🚨 NÖBETÇİ ECZANE MODU BAŞLIYOR!<br>
                    <span style="font-size: 0.9rem; color: #34d399;">ℹ️ Gece nöbeti boyunca tüm ilaçlar %20 zamlı satılır!</span><br>
                    <span style="font-size:2rem;">${countdown}</span>
                </div>`;
        }
        if (countdown <= 0) {
            clearInterval(countInterval);
            
            UIController.setDisplay('lockScreenArea', 'none');
            UIController.setDisplay('appNabizContainer', 'flex');
            GameState.gameStarted = true;
            
            enterEmptyWaitState();
        }
    }, 1000);
}

function handleLockScreenButtonClick() {
    // Eğer gece vaktindeysek Geceyi Geç, değilse Günü Başlat
    if (GameState.status === 'NIGHT_ACTIVE') {
        skipNight();
    } else {
        startDay();
    }
}

function skipNight() {
    if (GameState.status !== 'NIGHT_ACTIVE') return;

    // Gece süresi kadar teslimatları öne çek
    const currentNightTime = (GameState.currentDayNumber === 1) ? 300 : GameState.nightDuration;
    GameLoop.processDeliveries(currentNightTime);

    GameState.timeRemaining = 0;
    
    // Anında yeni güne ilerle
    progressToNextDay();
}

function progressToNextDay() {
    GameState.currentDayNumber++;
    GameState.dayServedCount = 0;
    GameState.gameStarted = false;
    GameState.isPaused = false;
    GameState.isDutyNightActive = false;
    GameState.status = 'LOCK_SCREEN';

    const currentWeek = Math.floor((GameState.currentDayNumber - 1) / 3) + 1;
    const dayOfCurrentWeek = ((GameState.currentDayNumber - 1) % 3) + 1;

    const dayTextEl = document.getElementById('lockScreenDayText');
    if (dayTextEl) {
        dayTextEl.innerText = `${currentWeek}. HAFTA - ${dayOfCurrentWeek}. GÜN`;
    }

    const lockClock = document.getElementById('lockScreenClock');
    if (lockClock) lockClock.innerText = "08:00";

    const startBtn = document.getElementById('startBtn');
    if (startBtn) startBtn.innerHTML = "🔑 Güne Başla";

    UIController.setDisplay('lockScreenArea', 'flex');
    UIController.setDisplay('appNabizContainer', 'none');

    const overlay = document.getElementById('customerOverlay');
    if (overlay) {
        UIController.setDisplay('customerOverlay', 'flex');
        overlay.innerHTML = `
            <div class="customer-arrival-text" style="color: var(--accent-color);">
                ☀️ Gece Sona Erdi<br>
                <span style="font-size:0.85rem; color:var(--text-muted); font-weight:normal;">
                    Yeni güne başlamak için telefon ekranından eczaneyi açın.
                </span>
            </div>
        `;
    }

    // Nöbetçi Eczane Seçimi: SADECE ÇİFT HAFTALARDA (2., 4., 6. haftalar vb.)
    const isDutySelectionWeek = (currentWeek % 2 === 0);
    
    if (dayOfCurrentWeek === 1 && isDutySelectionWeek) {
        GameState.chosenDutyDay = null;
        document.getElementById('dutySelectModal').style.display = 'flex';
    } else if (dayOfCurrentWeek === 1 && !isDutySelectionWeek) {
        GameState.chosenDutyDay = null; // Tek sayılı haftalarda nöbetçi gün seçimi kapalı
    }

    // 3. Geliştirme aktifse gün sonunda stoklar bedelsiz olarak maks kapasiteye tamamlanır
    if (GameState.autoRestockEnabled) {
        medicines.forEach(med => {
            med.count = MAX_MEDICINE_STOCK;
        });
        // Stoklar otomatik yenilendikten sonra Prototip Bitiş Modalı gösterilir
        setTimeout(() => {
            triggerGameCompletion();
        }, 500);
    }

    generateRandomCustomersForDay();
    updateLockScreenNotification();
    initShopMedicines();
    setupDailyCaptchaSchedule();
    renderCart();
}

// Nöbetçi gün seçim fonksiyonu
function selectDutyDay(dayNumber) {
    GameState.chosenDutyDay = dayNumber;
    document.getElementById('dutySelectModal').style.display = 'none';
    alert(`${dayNumber}. Gün Gece Nöbetçisi olarak belirlendiniz!`);
}

function setupDailyCaptchaSchedule() {
    // Günde en az 0, en fazla 3 kez Captcha çıksın
    const count = Math.floor(Math.random() * 4); // 0, 1, 2, veya 3
    GameState.dailyCaptchaTriggers = [];
    
    while (GameState.dailyCaptchaTriggers.length < count) {
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
                    Günü başarıyla tamamladın!
                </span>
            </div>
        `;
    }
}

function handleCustomerTimeout() {
    const currentCustomer = GameState.activeDayCustomers[GameState.currentCustomerIndex];
    
    // Etkiler eşitlendi
    GameState.modifySatisfaction(-5);
    GameState.modifyXp(0);
    GameState.modifyEp(-10);
    UIController.syncHeaderStats('ep');

    document.getElementById('m-title').innerText = `${currentCustomer.name} Eczaneyi Terk Etti!`;
    document.getElementById('m-desc').innerHTML = `
        <span style="color: var(--danger-color); font-weight: bold;">Müşteri işlem süresi bittiği için hizmet alamadan ayrıldı.</span><br><br>
        <strong>Müşteri Memnuniyeti Etkisi:</strong> <span style="color: var(--danger-color); font-weight: bold;">-5 Puan</span><br>
        <strong>Kazanılan Deneyim:</strong> <span style="color: #a855f7; font-weight: bold;">+0 XP</span><br>
        <strong>Eczane Puanı Etkisi:</strong> <span style="color: var(--danger-color); font-weight: bold;">-10 EP</span>
    `;

    // Semptom listesini yazdırmak yerine sadeleştirildi
    document.getElementById('m-list').innerHTML = `<li class="failed">İlaç verilmedi.</li>`;

    document.getElementById('resultModal').style.display = 'flex';
    document.getElementById('customerPanel').style.borderColor = "var(--danger-color)";

    GameState.dayServedCount++;
    GameState.currentCustomerIndex++;
    GameState.resetCart();
    renderCart();

    // Nöbet bitti mi kontrolü
    if (GameState.dayServedCount >= GameState.dailyLimit && GameState.isDutyNightActive) {
        GameState.isDutyNightActive = false;
        progressToNextDay();
    }
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
    if (GameState.isPaused || GameState.status === 'GAME_OVER') return;
    const med = GameData.getMedicineById(medId);
    if (!med) return;

    if (GameState.currentMode === 'SHOP') {
        if (GameState.isWarningActive || GameState.status === 'DAY_END') return;
        if (!GameState.gameStarted || GameState.status !== 'CUSTOMER_ACTIVE') return;
        if (!GameState.isNabizVerified) {
            alert("⚠️ Lütfen önce Nabız uygulamasından 'Onayla ve Bilgileri Getir' butonuna basarak müşteri bilgilerini çekin!");
            return;
        }
        if (med.count <= 0 || GameState.cart.length >= 2 || GameState.cart.some(item => item.id === medId)) return;
        GameState.cart.push({ id: medId, quantity: 1 });
    } else {
        // DEPOT Modu: Maksimum 5 stok sınırı kontrolü
        const existingInCart = GameState.cart.find(item => item.id === medId);
        const cartQty = existingInCart ? existingInCart.quantity : 0;
        
        const ordersForThisMed = GameState.pendingOrders.filter(o => o.id === medId);
        const pendingQty = ordersForThisMed.reduce((sum, o) => sum + o.quantity, 0);

        if (med.count + pendingQty + cartQty + 1 > MAX_MEDICINE_STOCK) {
            alert(`⚠️ Envanterinizde bu ilaçtan en fazla ${MAX_MEDICINE_STOCK} adet bulundurabilirsiniz! (Mevcut: ${med.count}, Yolda: ${pendingQty}, Sepette: ${cartQty})`);
            return;
        }

        if (existingInCart) existingInCart.quantity += 1;
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
    
    if (qty <= 0 || isNaN(qty)) {
        removeFromCart(medId);
        return;
    }

    if (GameState.currentMode === 'DEPOT') {
        const med = GameData.getMedicineById(medId);
        const ordersForThisMed = GameState.pendingOrders.filter(o => o.id === medId);
        const pendingQty = ordersForThisMed.reduce((sum, o) => sum + o.quantity, 0);

        if (med && (med.count + pendingQty + qty > MAX_MEDICINE_STOCK)) {
            alert(`⚠️ Envanterinizde bu ilaçtan en fazla ${MAX_MEDICINE_STOCK} adet bulundurabilirsiniz!`);
            item.quantity = Math.max(1, MAX_MEDICINE_STOCK - (med.count + pendingQty));
            renderCart();
            return;
        }
    }

    item.quantity = qty;
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

        if (GameState.cart.length === 0) {
            cartEmpty.style.display = 'block';
            submitBtn.disabled = true;
            submitBtn.classList.remove('active', 'warning');
            submitBtn.innerText = "Onayla";
        } else {
            cartEmpty.style.display = 'none';
            submitBtn.disabled = false;
            submitBtn.classList.add('active');
            submitBtn.classList.remove('warning');
            submitBtn.innerText = "Siparişi Onayla ve Satın Al";
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

            itemDiv.innerHTML = `
                <div style="display: flex; align-items: center; gap: 8px;">
                    <span>${originalMed.name} ($${originalMed.buyPrice})</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <input type="number" min="1" max="${MAX_MEDICINE_STOCK}" value="${item.quantity}"
                           style="width: 50px; background: #262b37; border: 1px solid #3b82f6; color: white; border-radius: 4px; padding: 2px 4px; text-align: center; font-weight: bold;"
                           onchange="updateCartItemQuantity('${item.id}', this.value)">
                    <span class="cart-item-remove" onclick="removeFromCart('${item.id}')">×</span>
                </div>
            `;
            cartList.appendChild(itemDiv);
        });

    } else {
        titleElement.innerText = "Sepet (Müşteri Reçetesi)";
        submitBtn.innerText = "Onayla";

        const isBlocked = GameState.cart.length === 0 || !GameState.isNabizVerified;

        if (isBlocked) {
            cartEmpty.style.display = 'block';
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

                itemDiv.innerHTML = `
                    <span>${originalMed.name}</span>
                    <span class="cart-item-remove" onclick="removeFromCart('${item.id}')">×</span>
                `;
                cartList.appendChild(itemDiv);
            });
        }
    }
}

function confirmPrescription() {
    if (GameState.cart.length === 0) return;

    if (GameState.currentMode === 'DEPOT') {
        handleDepotConfirm();
        return;
    }

    if (GameState.isWarningActive || GameState.isPaused) return;
    handleShopConfirm();
}

function handleShopConfirm() {
    const currentCustomer = GameState.activeDayCustomers[GameState.currentCustomerIndex];
    const submitBtn = document.getElementById('submitBtn');
    const customerPanel = document.getElementById('customerPanel');
    const customerAge = currentCustomer.ageGroup.trim().toLowerCase();

    for (let item of GameState.cart) {
        const originalMed = GameData.getMedicineById(item.id);
        if (originalMed) {
            const isAgeCompatible = originalMed.compatibility.some(ageId => {
                const mappedAgeName = GameData.getAgeGroupName(ageId).trim().toLowerCase();
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
    const selectedMedIds = GameState.cart.map(item => item.id);

    GameState.cart.forEach(item => {
        const targetMed = GameData.getMedicineById(item.id);
        if (targetMed) {
            targetMed.count--;
            const itemPrice = GameState.isDutyNightActive 
                ? Math.round(targetMed.price * 1.2) 
                : targetMed.price;
            totalProfit += itemPrice;
        }
    });

    // Reçetedeki Asıl İlaçların Normal Fiyat Toplamı
    const prescribedIds = Array.isArray(currentCustomer.prescribedMed) 
        ? currentCustomer.prescribedMed 
        : [currentCustomer.prescribedMed];
    
    const originalPrescriptionPrice = prescribedIds.reduce((sum, id) => {
        const m = GameData.getMedicineById(id);
        return sum + (m ? m.price : 0);
    }, 0);

    // Memnuniyet Puanı Kuralları Hesabı
    let satisfactionChange = 0;
    const isExactPrescription = prescribedIds.sort().join(',') === selectedMedIds.sort().join(',');

    if (isExactPrescription) {
        satisfactionChange += 5; // Reçetedeki ilacı satmak +5
    }

    if (totalProfit > originalPrescriptionPrice) {
        satisfactionChange -= 5; // Reçete fiyatından pahalıya satmak -5
    } else if (totalProfit < originalPrescriptionPrice) {
        satisfactionChange += 7; // Reçete fiyatından ucuza satmak +7
    }

    GameState.modifySatisfaction(satisfactionChange);

    const evaluation = TreatmentEvaluator.evaluateTreatment(currentCustomer, selectedMedIds);

    let reportHTML = "";
    evaluation.reportDetails.forEach(item => {
        if (item.healed) {
            reportHTML += `<li class="healed">İyileştirildi: <strong>${item.name}</strong></li>`;
        } else {
            reportHTML += `<li class="failed">İyileştirilemedi: <strong>${item.name}</strong></li>`;
        }
    });

    let earnedXp = 0;
    let earnedEp = evaluation.isPerfect ? 5 : -5;

    GameState.modifyMoney(totalProfit);
    GameState.modifyXp(earnedXp);
    GameState.modifyEp(earnedEp);
    UIController.syncHeaderStats('money');

    // Memnuniyet değişim metni rengi ve işareti
    let satColorStyle = satisfactionChange >= 0 ? "color: var(--success-color);" : "color: var(--danger-color);";
    let satSign = satisfactionChange > 0 ? "+" : "";

    document.getElementById('m-title').innerText = `${currentCustomer.name} - Teşhis Sonucu`;
    let scoreColorClass = evaluation.isPerfect ? "color: var(--success-color);" : "color: var(--danger-color);";
    document.getElementById('m-desc').innerHTML = `
        Satılan ilaçlar başarıyla teslim edildi. Eczanenize <strong>+$${totalProfit}</strong> eklendi.<br><br>
        <strong>Müşteri Memnuniyeti Etkisi:</strong> <span style="${satColorStyle} font-weight: bold;">${satSign}${satisfactionChange} Puan</span><br>
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
        const originalMed = GameData.getMedicineById(item.id);
        if (originalMed) totalCost += originalMed.buyPrice * item.quantity;
    });

    if (GameState.money < totalCost) {
        alert("Yetersiz Bütçe! Gerekli: $" + totalCost + ", Sahip olunan: $" + GameState.money);
        return;
    }

    GameState.modifyMoney(-totalCost);
    UIController.syncHeaderStats('money');

    GameState.cart.forEach(item => {
        const originalMed = GameData.getMedicineById(item.id);
        GameState.pendingOrders.push({
            id: item.id,
            name: originalMed ? originalMed.name : "Bilinmeyen İlaç",
            quantity: item.quantity,
            timeLeft: 30
        });
    });

    alert(`Siparişiniz başarıyla alındı! $${totalCost} tutarındaki ilaçlar 30 saniye içinde depoya ulaşacaktır.`);

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
        if (GameState.isDutyNightActive) {
            GameState.isDutyNightActive = false;
            progressToNextDay();
        } else {
            enterNightState();
        }
    } else {
        // Gün içi devam ediyorsa sonraki müşteriyi bekle
        enterEmptyWaitState();
    }
}

function handleMoneyClick() {
    GameState.moneyClickCount++;
    clearTimeout(GameState.moneyClickTimeout);
    if (GameState.moneyClickCount === 3) {
        GameState.modifyMoney(200);
        UIController.syncHeaderStats('money');
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

    let colorAssignments = shuffleArray(CAPTCHA_COLORS);
    while (colorAssignments.some((c, idx) => c.id === CAPTCHA_COLORS[idx].id)) {
        colorAssignments = shuffleArray(CAPTCHA_COLORS);
    }

    const shuffledWords = shuffleArray(CAPTCHA_COLORS.map((colorObj, index) => ({
        text: colorObj.name,
        targetColorId: colorAssignments[index].id,
        textColorHex: colorAssignments[index].hex,
        id: colorObj.id
    })));

    const shuffledBalls = shuffleArray(CAPTCHA_COLORS);

    shuffledWords.forEach(wordData => {
        const btn = document.createElement('button');
        btn.className = 'captcha-word-btn';
        btn.innerText = wordData.text;
        btn.style.color = wordData.textColorHex;
        btn.dataset.targetColor = wordData.targetColorId;
        btn.onclick = () => selectCaptchaWord(btn);
        wordsContainer.appendChild(btn);
    });

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

// === GELİŞTİRİCİ KISAYOLU: GÜNÜ HIZLICA GEÇ (AUTO-SIMULATE) ===
function fastForwardDay() {
    // Sadece aktif gün veya boş bekleme esnasında çalışsın
    if (GameState.status !== 'CUSTOMER_ACTIVE' && GameState.status !== 'EMPTY_WAIT') {
        console.warn("Kısayol sadece gündüz mesaisi esnasında kullanılabilir.");
        return;
    }

    // Günü henüz başlatmadıysa güvenli başlatma yap
    if (!GameState.gameStarted) {
        GameState.gameStarted = true;
        UIController.setDisplay('lockScreenArea', 'none');
        UIController.setDisplay('appNabizContainer', 'flex');
    }

    // O gün kalan tüm müşterileri döngüyle anında simüle et
    while (GameState.currentCustomerIndex < GameState.dailyLimit) {
        const customer = GameState.activeDayCustomers[GameState.currentCustomerIndex];
        if (!customer) break;

        const prescribedIds = Array.isArray(customer.prescribedMed) 
            ? customer.prescribedMed 
            : [customer.prescribedMed];

        // 1. Durum: Doktor Reçetesi Envanterde Var Mı?
        const hasPrescribedInStock = prescribedIds.every(id => {
            const med = GameData.getMedicineById(id);
            return med && med.count > 0;
        });

        if (hasPrescribedInStock) {
            // Reçetedeki ilaçları sat
            let totalProfit = 0;
            prescribedIds.forEach(id => {
                const med = GameData.getMedicineById(id);
                med.count--;
                const itemPrice = GameState.isDutyNightActive ? Math.round(med.price * 1.2) : med.price;
                totalProfit += itemPrice;
            });

            GameState.modifyMoney(totalProfit);
            GameState.modifyXp(0);
            GameState.modifyEp(5); // Başarılı satış puanı
        } else {
            // 2. Durum: Alternatif Kombinasyon Ara
            const validCombos = CombinationFinder.findValidCombinations(customer);
            if (validCombos.length > 0) {
                const bestCombo = validCombos[0]; // En ucuz tam tedavi alternatifini seç
                let totalProfit = 0;
                
                bestCombo.meds.forEach(med => {
                    med.count--;
                    const itemPrice = GameState.isDutyNightActive ? Math.round(med.price * 1.2) : med.price;
                    totalProfit += itemPrice;
                });

                GameState.modifyMoney(totalProfit);
                GameState.modifyXp(0);
                GameState.modifyEp(5);
            } else {
                // 3. Durum: Hiçbir İlaç Yoksa Cezalandır ve Gönder
                GameState.modifyXp(0);
                GameState.modifyEp(-10); // Stok yetersizliği cezası
            }
        }

        GameState.dayServedCount++;
        GameState.currentCustomerIndex++;
    }

    // Temizlik ve Arayüz Güncelleme
    GameState.resetCart();
    UIController.syncHeaderStats('money');
    initShopMedicines();

    // Günü anında bitir ve Gece Moduna/Sonraki Aşamaya Geç
    enterNightState();
}

function dismissCustomerWithoutMedication() {
    if (GameState.status !== 'CUSTOMER_ACTIVE' || GameState.isPaused) {
        alert("Şu anda gönderebileceğiniz aktif bir müşteri yok.");
        return;
    }

    const currentCustomer = GameState.activeDayCustomers[GameState.currentCustomerIndex];

    // Etkiler eşitlendi
    GameState.modifySatisfaction(-5);
    GameState.modifyXp(0);
    GameState.modifyEp(-10);
    UIController.syncHeaderStats('ep');

    document.getElementById('m-title').innerText = `${currentCustomer.name} Gönderildi`;
    document.getElementById('m-desc').innerHTML = `
        <span style="color: var(--warning-color); font-weight: bold;">Müşteriye ilaç satılmadan dükkandan uğurlandı.</span><br><br>
        <strong>Müşteri Memnuniyeti Etkisi:</strong> <span style="color: var(--danger-color); font-weight: bold;">-5 Puan</span><br>
        <strong>Kazanılan Deneyim:</strong> <span style="color: #a855f7; font-weight: bold;">+0 XP</span><br>
        <strong>Eczane Puanı Etkisi:</strong> <span style="color: var(--danger-color); font-weight: bold;">-10 EP</span>
    `;
    
    document.getElementById('m-list').innerHTML = `<li class="failed">İlaç verilmedi.</li>`;
    document.getElementById('resultModal').style.display = 'flex';
    document.getElementById('customerPanel').style.borderColor = "var(--danger-color)";

    GameState.dayServedCount++;
    GameState.currentCustomerIndex++;
    GameState.resetCart();
    renderCart();

    // Nöbet bitti mi kontrolü
    if (GameState.dayServedCount >= GameState.dailyLimit && GameState.isDutyNightActive) {
        GameState.isDutyNightActive = false;
        progressToNextDay();
    }
}

// YENİ EKLENEN: Geliştirme Modalı Fonksiyonları
function openUpgradeModal() {
    renderUpgradesList();
    document.getElementById('upgradeModal').style.display = 'flex';
}

function closeUpgradeModal() {
    document.getElementById('upgradeModal').style.display = 'none';
}

function renderUpgradesList() {
    const listContainer = document.getElementById('upgradeList');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    upgradesList.forEach((upg, index) => {
        const card = document.createElement('div');
        const isEpEnough = GameState.ep >= upg.reqEp;
        const isMoneyEnough = GameState.money >= upg.price;
        // Sıralı kilit açma: Önceki geliştirme satın alınmış olmalı (ilk geliştirme hariç)
        const isPreviousPurchased = index === 0 ? true : upgradesList[index - 1].purchased;

        let cardClass = "upgrade-card";
        if (upg.purchased) cardClass += " purchased";
        else if (isEpEnough && isPreviousPurchased) cardClass += " unlocked";

        card.className = cardClass;

        let actionButtonHTML = "";

        if (upg.purchased) {
            actionButtonHTML = `<button class="upgrade-btn completed">✓ Tamamlandı</button>`;
        } else if (!isPreviousPurchased) {
            actionButtonHTML = `<button class="upgrade-btn" disabled>🔒 Önceki Seviyeyi Alın</button>`;
        } else if (!isEpEnough) {
            actionButtonHTML = `<button class="upgrade-btn" disabled>🔒 ${upg.reqEp} EP Gerekli</button>`;
        } else {
            const btnDisabled = !isMoneyEnough ? "disabled" : "";
            actionButtonHTML = `
                <button class="upgrade-btn" ${btnDisabled} onclick="buyUpgrade('${upg.id}')">
                    Satın Al ($${upg.price})
                </button>
            `;
        }

        card.innerHTML = `
            <div class="upgrade-info">
                <h4>${upg.title}</h4>
                <p>${upg.desc}</p>
                <div class="upgrade-req">Gereksinim: ${upg.reqEp} EP | Fiyat: $${upg.price}</div>
            </div>
            <div>${actionButtonHTML}</div>
        `;

        listContainer.appendChild(card);
    });
}

function buyUpgrade(upgradeId) {
    const upg = upgradesList.find(u => u.id === upgradeId);
    if (!upg || upg.purchased) return;

    if (GameState.ep < upg.reqEp) {
        alert(`Bu geliştirme için en az ${upg.reqEp} Eczane Puanı (EP) gereklidir!`);
        return;
    }

    if (GameState.money < upg.price) {
        alert(`Bütçe Yetersiz! Gerekli: $${upg.price}, Mevcut: $${GameState.money}`);
        return;
    }

    // Ödeme ve Aktifleştirme
    GameState.modifyMoney(-upg.price);
    UIController.syncHeaderStats('money');
    
    upg.purchased = true;
    upg.action(); // Stok kapasitesini artırır veya otomasyonu açar

    // Arayüzleri yenile
    initShopMedicines();
    initDepotMedicines();
    renderUpgradesList();

    alert(`🎉 Tebrikler! "${upg.title}" geliştirmesi başarıyla tamamlandı!`);
}

function triggerGameCompletion() {
    GameState.status = 'GAME_OVER';
    
    // Kronometreyi ve Oyun Döngüsünü durdur
    if (GameState.timerInterval) {
        clearInterval(GameState.timerInterval);
    }
    GameLoop.stop();

    // Süreyi Pop-up içerisine yazdır
    const timeText = formatTimeSpan(GameState.elapsedRealSeconds);
    const timeDisplayEl = document.getElementById('totalCompletionTime');
    if (timeDisplayEl) {
        timeDisplayEl.innerText = timeText;
    }

    const completeModal = document.getElementById('gameCompleteModal');
    if (completeModal) {
        completeModal.style.display = 'flex';
    }
}

// Gerçek Zamanlı Kronometreyi Başlatan Yardımcı Fonksiyon
function startRealTimer() {
    if (GameState.timerInterval) return;
    GameState.realStartTime = Date.now();
    GameState.timerInterval = setInterval(() => {
        if (!GameState.isPaused && GameState.status !== 'GAME_OVER') {
            GameState.elapsedRealSeconds++;
        }
    }, 1000);
}

// Saniyeyi "XX dakika YY saniye" formatına dönüştüren yardımcı fonksiyon
function formatTimeSpan(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const minsText = mins > 0 ? `${mins} dakika ` : '';
    return `${minsText}${secs} saniye`;
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
window.selectDutyDay = selectDutyDay;
window.fastForwardDay = fastForwardDay;
window.dismissCustomerWithoutMedication = dismissCustomerWithoutMedication;
window.openUpgradeModal = openUpgradeModal;
window.closeUpgradeModal = closeUpgradeModal;
window.buyUpgrade = buyUpgrade;
window.triggerGameCompletion = triggerGameCompletion;

document.addEventListener("keydown", (event) => {
    const activeElem = document.activeElement;
    if (activeElem && (activeElem.tagName === "INPUT" || activeElem.tagName === "TEXTAREA" || activeElem.isContentEditable)) {
        return;
    }

    // P tuşu ile Duraklatma
    if (event.key === "p" || event.key === "P") {
        togglePauseGame();
    }

    // F2 Tuşu ile Günü Anında Tamamlama (Dev Shortcut)
    if (event.key === "F2" || event.key === "f2") {
        event.preventDefault();
        fastForwardDay();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    generateRandomCustomersForDay();
    setupInitialInventoryForFirstDay();
    setupDailyCaptchaSchedule();
    initShopMedicines();
    initDepotMedicines();
    UIController.updateStat('moneyDisplay', `$${GameState.money}`, null);
    updateLockScreenNotification();
});
