// Faktoriyel Hesaplama -  Factorial Calculation
export
const firstFactorial = (num) => {
     let factorial = 1;
     for (let i = 2; i <= num; i++) { // 2 den başlama sebebi sıfırın yutan eleman olması, birin ise etkisiz eleman olmasıdır(1 den de başlayabilir)
          factorial *= i;
     }
     return factorial;
};
// console.log(firstFactorial(4)); sonuç : 24