// Her kelimenin ilk harfini büyük yapacak fonksiyon
export function capitalize(sentence) {
    // Cümleyi kelimelere ayır
    var words = sentence.split(' ');

    // Her kelimenin ilk harfini büyük yap
    var capitalizedWords = words.map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Büyük harf yapılmış kelimeleri birleştir ve cümleyi oluştur
    return capitalizedWords.join(' ');
}