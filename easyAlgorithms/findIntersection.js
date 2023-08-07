//Kesişen Değerlerin Bulunması - Find Intersection
export const findIntersection = (arr) => {

     let intersection = []
     const set1 = arr[0].replace(/\s/g, "").split(','); //İki küme oluşturduk
     const set2 = arr[1].replace(/\s/g, "").split(',');

     set2.forEach((item) => { // 2. Küme içerisindeki elemanlar 1. küme de var mı kontrolü yapıyoruz //     set2.forEach(function (item) { bir diğer yazım şekli
          if (set1.includes(item)) { //includes ile küme 2 içerisindeki elemanın diğer kümede olup olmadığını kontrol eder, true ya da false döner
               intersection.push(item) // Eğer varsa push ile intersection array ı içerisine yazar
          }
     })
     if (intersection.length != 0) { // Eğer intersection içi boş değilse
          return intersection.toString() // intersection'ı stringe dönüştürür
     } else {
          return false; // Boşsa da false döner
     }
}

//console.log(findIntersection([" 1, 3, 4, 7, 13", " 1, 2, 4, 13, 15"]))  result = 1,4,13