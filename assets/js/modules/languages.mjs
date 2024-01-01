// Katı Mod'u (Strict Mode) etkinleştir.
"use strict";

import { capitalize } from "./text-utilities.mjs";
import { set_theme_text_based_on_language } from "./theme.mjs";

// localStorage'tan kaydedilmiş dil tercihini alır.
const current_language = localStorage.getItem("language");

// Sayfadaki dil değiştirme düğmesini seç
const language_btn = document.getElementById("language_btn");


// Sayfadaki dil değiştirme düğmelerini seç
const language_change_buttons = document.querySelectorAll("#language_dropdown button");

// Her bir düğme için bir olay dinleyici ekle
language_change_buttons.forEach(button => {
    // Düğmeye tıklandığında çalışacak işlevi belirle
    button.addEventListener("click", function () {
        // Dil değiştirme işlevini çağır ve yeni dil değerini iletilen veri özniteliğinden al
        change_language(button.dataset.langValue);
    });
});

// Dil değiştirme fonksiyonu. Varsayılan olarak "en" (İngilizce) dili seçilmiştir.
// Bu fonksiyon, verilen dil koduna ve yönlendirme bilgisine göre dil dosyasını yükler.
export function change_language(lang, direction = "assets/js/") {
    (lang == null) ? lang = "en" : lang = lang;
    localStorage.setItem("language", lang);

    fetch(`${direction}languages/${lang}.json`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => {
            language_btn.innerText = `${capitalize(data.language)}` + ` ${data.lang}`.toUpperCase();
            const navbar_nav_items = document.querySelectorAll(".navbar-nav li span");

            for (let i = 0; i < navbar_nav_items.length; i++) {
                navbar_nav_items[i].innerText = capitalize(data.navbar[i]);
            }
        })
    // Sayfa dili değiştirildiğinde, seçilen dil temelinde, tema butonu'nun metnini düzenler.
    set_theme_text_based_on_language();
}

// Sayfa yüklendiğinde, kullanıcının tercih ettiği dil ile dil değiştirme fonksiyonunu çağırır.
change_language(current_language);