/* $$$ WEB CODER KENZOHARMONY1337 $$$ */
const customSelect = document.getElementById('customSelect');
const customOptions = document.getElementById('customOptions');
const selectedLanguageImage = document.getElementById('selectedLanguageImage');
const title = document.getElementById('title');
const about = document.getElementById('about');
const closeOptions = document.getElementById('closeOptions');
const detailsBtn = document.getElementById('detailsBtn');
const showImageBtn = document.getElementById('showImageBtn');
const musicBtn = document.getElementById('musicBtn');
const downloadLink = document.querySelector('a.button');
const howToDownloadBtn = document.getElementById('howToDownloadBtn');
const downloadFrameworkBtn = document.getElementById('downloadFrameworkBtn');

// языки
const translations = {
    ru: {
        title: 'WendOptimizator',
        about: 'Мы предоставляем вам лучшую программу для оптимизации работы Windows.',
        detailsBtn: 'Подробнее',
        showImageBtn: 'Как выглядит программа',
        musicBtn: 'Выключить Музыку',
        download: 'Скачать',
        modalContent: "<h2>Детали о программе</h2><p>Эта программа разработана для оптимизации вашей системы Windows.</p>"
    },
    uk: {
        title: 'WendOptimizator',
        about: 'Ми пропонуємо вам найкращу програму для оптимізації роботи Windows.',
        detailsBtn: 'Детальніше',
        showImageBtn: 'Як виглядає програма',
        musicBtn: 'Вимкнути музику',
        download: 'Завантажити',
        modalContent: "<h2>Деталі про програму</h2><p>Ця програма розроблена для оптимізації вашої системи Windows.</p>"
    },
    en: {
        title: 'WendOptimizator',
        about: 'We provide you with the best software to optimize your Windows system.',
        detailsBtn: 'Learn more',
        showImageBtn: 'How the program looks',
        musicBtn: 'Turn off Music',
        download: 'Download',
        modalContent: "<h2>Program Details</h2><p>This software is designed to optimize your Windows system.</p>"
    }
};

// селект языка
function setLanguage(lang) {
    const translation = translations[lang];
    title.textContent = translation.title;
    about.textContent = translation.about;
    detailsBtn.textContent = translation.detailsBtn;
    showImageBtn.textContent = translation.showImageBtn;
    musicBtn.textContent = translation.musicBtn;
    downloadLink.textContent = translation.download;
    modalContent.innerHTML = translation.modalContent;
}

// подробнее кнопка
const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];

detailsBtn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// скрыть или показать фотку проги
const imageModal = document.getElementById('myImageModal');
const imageClose = document.getElementsByClassName('image-close')[0];

showImageBtn.onclick = function() {
    imageModal.style.display = "block";
}

imageClose.onclick = function() {
    imageModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == imageModal) {
        imageModal.style.display = "none";
    }
}

// музычка
let musicPlaying = false;
const backgroundMusic = document.getElementById('backgroundMusic');

musicBtn.onclick = function() {
    if (musicPlaying) {
        backgroundMusic.pause();
        musicBtn.textContent = "Включить Музыку";
    } else {
        backgroundMusic.play();
        musicBtn.textContent = "Выключить Музыку";
    }
    musicPlaying = !musicPlaying;
}
howToDownloadBtn.onclick = function() {
    window.open("https://youtu.be/KyXNG4QzQTA", "_blank");
};
downloadFrameworkBtn.onclick = function() {
    window.open("https://www.microsoft.com/ru-ru/download/details.aspx?id=17718", "_blank");
};
