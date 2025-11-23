
const translations = {
    en: {
        tagline: "Nurturing Young Minds for a Bright Future !! Where Knowledge Meets Faith!!",
        nav_home: "Home",
        nav_admissions: "Admissions",
        nav_curriculum: "Curriculum",
        nav_hafiz: "Hafiz Program",
        nav_contact: "Contact",
        hero_title: "Admissions Open for 2025-26",
        hero_btn: "Apply Now",
        about_title: "About Us",
        about_text: "Crescent Public School blends CBSE academics with Islamic values, nurturing leaders for Duniya and Akhirah.",
        vision_title: "Vision",
        vision_text: "To be the benchmark for holistic education rooted in faith and excellence.",
        mission_title: "Mission",
        mission_text: "To harmonize CBSE curriculum with Islamic principles, fostering academic brilliance and spiritual growth.",
        hafiz_title: "Hafiz Program",
        hafiz_text: "A specialized track enabling students to become Hafiz by Grade 10 while excelling in academics.",
        footer_text: "Contact: +91-XXXXXXXXXX | Email: info@crescentpublicschool.com"
    },
    ta: {
        tagline: "பிரகாசமான எதிர்காலத்திற்காக இளம் மனங்களை வளர்த்தல் !! அறிவும் நம்பிக்கையும் சந்திக்கும் இடம்!!",
        nav_home: "முகப்பு",
        nav_admissions: "சேர்க்கைகள்",
        nav_curriculum: "பாடத்திட்டம்",
        nav_hafiz: "ஹாஃபிஸ் திட்டம்",
        nav_contact: "தொடர்பு",
        hero_title: "2025-26 கல்வி ஆண்டிற்கான சேர்க்கைகள் திறக்கப்பட்டுள்ளன",
        hero_btn: "இப்போதே விண்ணப்பிக்கவும்",
        about_title: "எங்களைப் பற்றி",
        about_text: "கிரெசன்ட் பொது பள்ளி CBSE கல்வியை இஸ்லாமிய மதிப்புகளுடன் இணைத்து, உலகமும் மறுமையும் ஆகியவற்றிற்கான தலைவர்களை வளர்க்கிறது.",
        vision_title: "பார்வை",
        vision_text: "நம்பிக்கையும் சிறப்பும் அடிப்படையாகக் கொண்ட முழுமையான கல்விக்கான அளவுகோலாக இருப்பது.",
        mission_title: "பணி",
        mission_text: "CBSE பாடத்திட்டத்தை இஸ்லாமிய கொள்கைகளுடன் இணைத்து, கல்வி மேன்மையும் ஆன்மீக வளர்ச்சியையும் ஊக்குவிப்பது.",
        hafiz_title: "ஹாஃபிஸ் திட்டம்",
        hafiz_text: "மாணவர்கள் 10ஆம் வகுப்பிற்குள் ஹாஃபிஸ் ஆகவும் கல்வியில் சிறந்து விளங்கவும் உதவும் சிறப்பு திட்டம்.",
        footer_text: "தொடர்பு: +91-XXXXXXXXXX | மின்னஞ்சல்: info@crescentpublicschool.com"
    }
};
function setLanguage(lang){
    for(const key in translations[lang]){
        const element=document.getElementById(key);
        if(element){element.textContent=translations[lang][key];}
    }
}
