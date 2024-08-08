// Terdapat string "NEGIE1", 
// silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

const string = "NEGIE1"
let resultString = [];
let tempInteger = [];
string.split("").forEach(element => {

  if (Number.isInteger(parseInt(element))) {
   tempInteger.push(element)
  } else {
    resultString.unshift(element)
  }
});

console.log(resultString.join("") + tempInteger.join(""))