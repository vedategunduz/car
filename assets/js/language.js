// Katı Mod'u (Strict Mode) etkinleştir.
"use strict";

// kaydedilmiş olan dil tercihini alır.
const current_language = localStorage.getItem("language");

// Dil değiştirme fonksiyonu. Varsayılan olarak "en" (İngilizce) dili seçilmiştir.
// Bu fonksiyon, verilen dil koduna ve yönlendirme bilgisine göre dil dosyasını yükler.
function change_language(lang = "en", direction = "../../../js/") {
    localStorage.setItem("language", lang);

    fetch(`${direction}languages/${lang}.json`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => {
            document.getElementById("language_btn").innerText = `${capitalize(data.language)}` + ` ${data.lang}`.toUpperCase();
        })
    // Sayfa dili değiştirildiğinde, seçilen dil temelinde, tema butonu'nun metnini düzenler.
    set_theme_text_based_on_language();
}

// Sayfa yüklendiğinde, kullanıcının tercih ettiği dil ile dil değiştirme fonksiyonunu çağırır.
change_language(current_language);