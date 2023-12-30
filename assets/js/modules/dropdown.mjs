// Dropdown menüsünün görünürlüğünü açıp/kapatmak için kullanılan fonksiyon.
export function dropdown_toggle(target) {
    // Hedef elementi al
    const dropdown = document.getElementById(target);
    // Eğer hedef element bulunursa
    if (dropdown) {
        // Görünürlüğü değiştirerek dropdown menüsünü açıp/kapat
        document.getElementById(target).classList.toggle("show");
    }
}

// Sayfa üzerinde herhangi bir yere tıklandığında kontrol eden olay dinleyicisi.
export function initialize_window_click_listener() {
    document.addEventListener("click", function (event) {
        // Eğer tıklanan öğe dropdown butonu ise
        if (event.target.matches('.dropdown-toggle')) {
            // Dropdown menüsünün görünürlüğünü değiştir.
            dropdown_toggle(event.target.dataset.target);
        } else {
            // Eğer tıklanan öğe dropdown butonu değilse
            // Tüm dropdown menülerinin görünürlüğünü kapat.

            // Tüm dropdown menülerini seç
            const dropdown_menus = document.getElementsByClassName("dropdown-menu");

            // Her dropdown menüsünün görünürlüğünü kapat
            for (let dropdown_menu of dropdown_menus) {
                dropdown_menu.classList.remove("show");
            }
        }
    });
}
initialize_window_click_listener();