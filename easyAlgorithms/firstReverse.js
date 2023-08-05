// Verilen String'i Ters Çevirme - Reverse words in a given string
export
const firstReverse = (str) => {

     const arr = str.split(""); // split ile ayırdık
     const reversedArray = arr.reverse(); // reverse ile ters çevirdik
     const newStr = reversedArray.join(""); //tekrar birleştirdik

     return newStr;
     // daha kısa yazım ise şöyle
     // return str.split("").reverse().join("")
};

// result : ereht olleh