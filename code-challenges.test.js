// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.



describe("translator", () => {

    // function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
    it("function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      const secretCodeWord1 = "Lackadaisical"
      // Expected output: "L4ck4d41s1c4l"
      const secretCodeWord2 = "Gobbledygook"
      // Expected output: "G0bbl3dyg00k"
      const secretCodeWord3 = "Eccentric"
      // Expected output: "3cc3ntr1c"
      expect(translator(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(translator(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(translator(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })

// b) Create the function that makes the test pass.

translator = (string) => {
    // if i was fancy, i would use regex, but today, i am not.
    // let vowels = /['aeiou']/g
    // need to turn string into an array and store it as a new variable
    let newArr = string.split("")
    // map over each index of the new array, and check if it is equivalent to the value
    // if it is equal, set that index equal to that variable.
    newArr.map((value, index) => {
        if (value === 'a'){
            newArr[index] = '4'
        } else if (value === 'e' || value === 'E'){
            newArr[index] = '3'
        } else if (value === 'i' || value === 'I'){
            newArr[index] = '1'
        } else if (value === 'o' || value === 'O'){
            newArr[index] = '0'
        } 
        // join hands of the array to turn it into a word and return it
        return newArr.join("")
    })
    // join it again because the it is an accessor not a mutator
  return newArr.join("")
}

// console.log(translator(secretCodeWord2))

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("wordReturn", () => {


    it("function that takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(wordReturn(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
      expect(wordReturn(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })

// b) Create the function that makes the test pass.

wordReturn = (string, letter) => {
    // now we will use regex
    // search set each index of the string and see if it contains the letter
    // check to see if uppercase and lowercase of letter is within each value of mapped over array
    // if yes, push it baby push it (into the array)
    let newArr = []
    string.map((value, index) => {
        if (value.includes(letter) || value.includes(letter.toUpperCase())){
            newArr.push(value)
        }
    })
    return newArr
}


// console.log(wordReturn(arrayOfWords2, letterE))

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("fullHouse", () => {


  it("function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.", () => {

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(fullHouse(hand1)).toEqual("full house")
    expect(fullHouse(hand2)).toEqual("not a full house")
    expect(fullHouse(hand3)).toEqual("not a full house")
  })
})

// b) Create the function that makes the test pass.


  //i forgot how higher order functions worked, or if i could return a function to my own function.. which uhh.. i learned you could.
  // created a function full house to search an array
  
  fullHouse = (array) => {
    
    newArr = [0, 0, 0, 0, 0]
    // for each index of the array that is equal to the other, increase the value at that index (initially set at 0)
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j]){
          newArr[i]++
        }
      }
    }
    return actualFullHouse(newArr)
  }
  
  // if the array contains a 1 or 0, that means there was an array index that did not have a match
  actualFullHouse = (array) => {
    if (array.includes(1 || 0)){
      return "not a full house"
    }else {
      return "full house"
    }
  }

console.log(fullHouse(hand1))