// Question - 1

const latterCapitalize = (str) => {
    let arr = str.split(" ");
    arr.forEach(function(item, index) {
      arr[index] = item.replace(item[0], item[0].toUpperCase());
    });
  
    return arr.join(" ");
};
  
console.log(latterCapitalize("PIZZA PIZZA PIZZA"));




// Question - 2

const shortestWord = (str) => {
    var words = str.split(" ");
    var shortest = words.reduce((shortestWord, currentWord) => {
      return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, words[0]);
    return shortest.toLowerCase();
  }
console.log(shortestWord("We become what we think about."));





// Question - 3

var arr = [1, "a", "b", 0, 15];
const num = (val) => {
    if (typeof (val) === "number") {
        return val
    }
}

let numbers = arr.filter(num);
console.log(numbers)




// Question - 4

// I am not able to do.




// Question - 5


const arrayOfMultiples = (num , length) => {
    let arr = [];
    let x = 1;
    for (let i = 1; i <= length; i++) {
      arr.push(num * x);
      x++;
    }
    return arr;
};

console.log(arrayOfMultiples(17, 6));