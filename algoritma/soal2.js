// Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, 
// jika ada kata dengan panjang yang sama silahkan ambil salah satu

// const sentence = "Saya sangat senang mengerjakan soal algoritma"

// longest(sentence) 
// mengerjakan: 11 character

const sentence = "Dia sangat mempertanggungjawabkan pekerjaannya"

function longest(sentence) {
  const splitedSetence = sentence.split(" ");
  let word = "";
  let max = splitedSetence[0].length;

  for (let i = 1; i < splitedSetence.length; i++) {
    if (splitedSetence[i].length > max) {
        max = splitedSetence[i].length;
        word = splitedSetence[i]
    }
  }

  return `${word}: ${max} characters`;
}

const result = longest(sentence); 
console.log(result)