//userValidation Challange, Doğru Veri Girişi Kontrolü

//.length property and RegEx
export
const userValidation = (str) => {

     if (
          str.length >= 4 && str.length <= 25 &&
          (/[a-zA-Z]/).test(str.slice(0, 1)) &&
          //str.charAt(0) yukarıdakiyle aynı
          (/^\w+$/).test(str) && //sadece harfler, rakamlar ve alt çizgiden oluşmalı
          (/[a-zA-Z0-9]/).test(str.slice(-1)) //Stringin son karakterini küçük büyük harfler ve ya 0 - 9 arası rakamlar olabilir
          // slice(-1) her zaman son karakteri verir ya da str.charAt(str.length -1 ) de aynı sonucu verir
     ) {
          return true;
     } else {
          return false;
     }

};