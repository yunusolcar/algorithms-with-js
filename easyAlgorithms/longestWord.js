//Find the Longest Word
export
const longestWord = (str) => {

     // Adım 1 : Noktalama işaretlerini kaldır
     // Adım 2 : Cümleyi boşluklardan ayır, kelimelerle bir array oluştur
     const arr = str.replace(/[^a-zA-Z ]/g, "").split(" ");
     // Bu kısım, str metnindeki a ile z ve (büyük) A ile Z arasındaki harf karakterleri ve boşluk dışındaki tüm karakterleri boş bir karakter ile değiştirir.
     // Yani sadece harfler ve boşluklar kalır.

     // Adım 3 : Kelimelerle oluşturduğun arrayin karakter sayılarına göre azalan şekilde sırala
     arr.sort((a, b) => { //Sort ile sıralama yapılır
          return b.length - a.length; // Azalan şeklinde sıralanır  (computer > laptop > pc) Fazla karaktere sahip kelime öne geldi
     })
     // Adım 4 : En başkaki ( index 0 ) kelimeyi return etmek
     return arr[0]; //Burada cümle içerisindeki en uzun kelimeyi en başa alındığından kolayca yazdırabiliriz.

}