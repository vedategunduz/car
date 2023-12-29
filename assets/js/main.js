// Katı Mod'u (Strict Mode) etkinleştir.
"use strict";

// Her kelimenin ilk harfini büyük yapacak fonksiyon
function capitalize(sentence) {
    // Cümleyi kelimelere ayır
    var words = sentence.split(' ');

    // Her kelimenin ilk harfini büyük yap
    var capitalizedWords = words.map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Büyük harf yapılmış kelimeleri birleştir ve cümleyi oluştur
    return capitalizedWords.join(' ');
}

// Dropdown menüsünün görünürlüğünü açıp/kapatmak için kullanılan fonksiyon.
function dropdown_toggle(target) {
    document.getElementById(target).classList.toggle("show");
}

// Sayfa üzerinde herhangi bir yere tıklandığında kontrol eden olay dinleyicisi.
window.addEventListener("click", function (event) {
    // Eğer tıklanan öğe dropdown butonu ise
    if (event.target.matches('.dropdown-toggle')) {
        // Dropdown menüsünün görünürlüğünü değiştir.
        dropdown_toggle(event.target.dataset.target);
    } else {
        // Eğer tıklanan öğe dropdown butonu değilse
        // Tüm dropdown menülerinin görünürlüğünü kapat.
        const dropdown_menus = document.getElementsByClassName("dropdown-menu");

        for (let dropdown_menu of dropdown_menus) {
            dropdown_menu.classList.remove("show");
        }
    }
});

// ! Sayfanın kök HTML elementini almak için document.documentElement kullanılır.
const html_element = document.documentElement;

// Sayfa temasını değiştirmek için kullanılan fonksiyon.
// Eğer localStorage'ta "page_theme" adında bir değer yoksa, varsayılan olarak "light_mode" değerini atar.
localStorage.getItem("page_theme") || localStorage.setItem("page_theme", "light_mode");

// Temayı sayfaya yüklemek için kullanılır.
function load_theme_to_page(selected_theme) {
    if (selected_theme === "light_mode") {
        // "light-mode" sınıfını ekler
        html_element.classList.add("light-mode");
        // Local storage'ta temayı "light_mode" olarak günceller
        localStorage.setItem("page_theme", "light_mode");
    }
    else {
        // "dark-mode" sınıfını ekler
        html_element.classList.add("dark-mode");
        // Local storage'ta temayı "dark_mode" olarak günceller
        localStorage.setItem("page_theme", "dark_mode");
    }
    // Fonksiyon seçilen dil temelinde, tema butonu'nun metnini düzenleyen fonksiyonu çağırır.
    set_theme_text_based_on_language();
}

// Sayfa yeniden yüklenirken temayı ayarlaması için `load_theme_to_page` fonksiyonunu çağırır.
load_theme_to_page(localStorage.getItem("page_theme"));

// Tema değiştirme fonksiyonu tanımlandı, ancak henüz işlevsellik eklenmedi.
function change_page_theme(selected_theme = localStorage.getItem("page_theme")) {
    // Tema "light_mode" ise
    if (selected_theme === "light_mode") {
        // "dark-mode" sınıfını ekle, "light-mode" sınıfını kaldır
        html_element.classList.add("dark-mode");
        html_element.classList.remove("light-mode");
        // localStorage'ta temayı güncelle
        localStorage.setItem("page_theme", "dark_mode");
    }
    // Tema "light_mode" değilse
    else {
        // "light-mode" sınıfını ekle, "dark-mode" sınıfını kaldır
        html_element.classList.add("light-mode");
        html_element.classList.remove("dark-mode");
        // localStorage'ta temayı güncelle
        localStorage.setItem("page_theme", "light_mode");
    }
    // Fonksiyon seçilen dil temelinde, tema butonu'nun metnini düzenleyen fonksiyonu çağırır.
    set_theme_text_based_on_language();
}

// Fonksiyon seçilen dil temelinde, tema butonu'nun metnini düzenler.
function set_theme_text_based_on_language() {
    // Kullanıcının tercih ettiği tema ve dil bilgilerini yerel depolamadan alır.
    let selected_theme = localStorage.getItem("page_theme");
    let selected_language = localStorage.getItem("language");

    // Dil kontrolü: Eğer kullanıcının tercih ettiği dil "en" (İngilizce) ise:
    if (selected_language == "en") {
        // Tema kontrolü: Eğer kullanıcının tercih ettiği tema "light_mode" (açık mod) ise:
        if (selected_theme == "light_mode") {
            // Türkçe dilinde açık mod aktif olduğunda tema butonuna "Light Theme" yazdırır.
            document.getElementById("change_theme_btn").innerText = "Light Theme";
        } else {
            // Türkçe dilinde açık mod aktif olduğunda tema butonuna "Dark Theme" yazdırır.
            document.getElementById("change_theme_btn").innerText = "Dark Theme";
        }
    }
    // Dil kontrolü: Eğer kullanıcının tercih ettiği dil "tr" (Türkçe) ise:
    else if (selected_language == "tr") {
        // Tema kontrolü: Eğer kullanıcının tercih ettiği tema "light_mode" (açık mod) ise:
        if (selected_theme == "light_mode") {
            // Türkçe dilinde açık mod aktif olduğunda tema butonuna "Açık Tema" yazdırır.
            document.getElementById("change_theme_btn").innerText = "Açık Tema";
        } else {
            // Türkçe dilinde açık mod aktif olduğunda tema butonuna "Koyu Tema" yazdırır.
            document.getElementById("change_theme_btn").innerText = "Koyu Tema";
        }
    }
}
// Accordion
// ! Sayfadaki tüm "accordion-item" sınıflı elementleri seç
const accordions = document.getElementsByClassName("accordion-item");

// Her bir "accordion-item" için döngü
for (let accordion of accordions) {
    // Başlık ve içerik elementlerini seç
    let accordion_header = accordion.querySelector(".accordion-item-header");
    let accordion_content = accordion.querySelector(".accordion-item-content");

    // Başlangıçta içeriği gizle
    accordion_content.style.height = "0px";

    // Başlığa tıklanıldığında çalışacak olan olay dinleyicisi
    accordion_header.addEventListener("click", function () {
        // İçeriğin görünürlüğünü tersine çevir (gizle veya göster)
        accordion_content.style.height = accordion_content.style.height === "0px" ? accordion_content.scrollHeight + "px" : "0px";

        // Diğer accordion-item'ların içeriğini gizle
        for (let _accordion of accordions) {
            if (accordion !== _accordion) {
                _accordion.querySelector(".accordion-item-content").style.height = "0px";
            }
        }
    });
}