// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a, b) {
    if (a > b) return a;
    else return b;
  }
  // Progression #2: The lengthy word
  const words = [
    "mystery",
    "brother",
    "aviator",
    "crocodile",
    "pearl",
    "orchard",
    "crackpot",
  ];
  function findScaryWord(wordArray) {
    ans = "";
    for (i of wordArray) {
      if (i.length > ans.length) ans = i;
    }
    return ans;
  }
  // Progression #3: Net Price
  const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
  function netPrice(arr) {
    var sum = 0;
    for (i of arr) {
      sum += i;
    }
    return sum;
  }
  // Progression #3.1
  function add(arr) {
    var sum = 0;
    for (i of arr) {
      if (typeof i === "string") sum += i.length;
      else if (i === true) sum += 1;
      else if (i === false) sum += 0;
      else sum += i;
    }
    return sum;
  }
  // Progression #4: Calculate the average
  
  function midPoint(arr) {
    return add(arr) / 2;
  }
  // Progression 4.1: Array of numbers
  const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
  function midPointOfLevels(arr) {
    var sum = 0;
    for (i of arr) {
      sum += i;
    }
    return sum / arr.length;
  }
  
  // Progression 4.2: Array of strings
  const wordsArr = [
    "seat",
    "correspond",
    "linen",
    "motif",
    "hole",
    "smell",
    "smart",
    "chaos",
    "fuel",
    "palace",
  ];
  
  function averageWordLength(arr) {
    var sum = 0;
    for (i of arr) {
      sum += i.length;
    }
    return sum / arr.length;
  }
  
  // Progression #5: Unique arrays
  const wordsUnique = [
    "bread",
    "jam",
    "milk",
    "egg",
    "flour",
    "oil",
    "rice",
    "coffee powder",
    "sugar",
    "salt",
    "egg",
    "flour",
  ];
  function uniqueArray(arr) {
    ans = [];
    for (i of arr) {
      if (ans.includes(i));
      else ans.push(i);
    }
    return ans;
  }
  // Progression #6: Find elements
  const wordsFind = [
    "machine",
    "subset",
    "trouble",
    "starting",
    "matter",
    "eating",
    "truth",
    "disobedience",
  ];
  function searchElement(arr, word) {
    if (arr.includes(word)) return true;
    return false;
  }
  // Progression #7: Count repetition
  const wordsCount = [
    "machine",
    "matter",
    "subset",
    "trouble",
    "starting",
    "matter",
    "eating",
    "matter",
    "truth",
    "disobedience",
    "matter",
  ];
  function howManyTimesElementRepeated(arr, word) {
    ans = 0;
    for (i of arr) {
      if (i === word) ans += 1;
    }
    return ans;
  }
  // Progression #8: Bonus
  
  const matrix = [
    [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
    [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
    [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
    [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
    [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
    [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
    [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
    [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
    [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
    [21, 36, 23, 09, 75, 00, 76, 44, 20, 45],
  ];
  
  function maximumProduct(arr) {
    ans = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (!(j + 3 > arr[i].length - 1)) {
          let check = arr[i][j] * arr[i][j + 1] * arr[i][j + 2] * arr[i][j + 3];
          if (check > ans) ans = check;
        }
        if (!(i + 3 > arr.length - 1)) {
          let check = arr[i][j] * arr[i + 1][j] * arr[i + 2][j] * arr[i + 3][j];
          if (check > ans) ans = check;
        }
      }
    }
    return ans;
  }
  console.log(maximumProduct(matrix));