export function initialize_accoridon() {
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
}
initialize_accoridon();