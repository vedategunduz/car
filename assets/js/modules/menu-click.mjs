// HTML'de "open" sınıfına sahip tüm elemanları seç
const open_buttons = document.getElementsByClassName("open");

// HTML'de "close" sınıfına sahip tüm elemanları seç
const close_buttons = document.getElementsByClassName("close");

// Body elemanının overflow kontrolü için bir değişken
let overflow_control = 0;

// "open" butonları için tıklama olayını başlatan fonksiyon
export function initialize_open_button_click() {
    for (let button of open_buttons) {
        button.addEventListener("click", function () {
            // Her "open" butonuna tıklandığında overflow kontrolünü arttır
            overflow_control++;

            // Tıklanan butonun hedef elementini al
            const target = document.getElementById(this.dataset.target);

            // Body elemanının dikey overflow'ını gizle
            document.body.style.overflowY = "hidden";

            // Hedef elementine "show" sınıfını ekle
            target.classList.add("show");
        });
    }
}

// "close" butonları için tıklama olayını başlatan fonksiyon
export function initialize_close_button_click() {
    for (let button of close_buttons) {
        button.addEventListener("click", function () {
            // Her "close" butonuna tıklandığında overflow kontrolünü azalt
            overflow_control--;

            // Tıklanan butonun hedef elementini al
            const target = document.getElementById(this.dataset.target);

            // Hedef elementinden "show" sınıfını kaldır
            target.classList.remove("show");

            // Eğer hiçbir modal pencere açık değilse, body elemanının overflow'ını geri aç
            if (overflow_control == 0) document.body.style.overflowY = "auto";
        });
    }
}

// Sayfa yüklendiğinde "open" ve "close" butonları için tıklama olaylarını başlat
initialize_open_button_click();
initialize_close_button_click();
