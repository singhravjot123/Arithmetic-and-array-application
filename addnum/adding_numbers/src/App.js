import React, { useState } from "react";
import './App.css';

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [text, setText] = useState("");
  const [str2, setStr2] = useState("");
  const [arrayInput, setArrayInput] = useState(""); // New state for array input
  const [result, setResult] = useState("");

  const handleNumberInput = (value) => {
    const parsedValue = parseFloat(value);
    return isNaN(parsedValue) ? 0 : parsedValue;
  };

  const parseArrayInput = () => {
    return arrayInput
      .split(",")
      .map((item) => parseFloat(item.trim()))
      .filter((item) => !isNaN(item));
  };

  const reverseArray = () => {
    const array = parseArrayInput();
    const reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
      reversedArray.push(array[i]);
    }
    setResult(`Reversed Array: [${reversedArray.join(", ")}]`);
  };

  const sortArray = () => {
    const array = parseArrayInput();
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    setResult(`Sorted Array: [${array.join(", ")}]`);
  };

  const findSpecificOccurrence = () => {
    const array = parseArrayInput();
    const numberToFind = parseInt(prompt("Enter the number to find its occurrence:"), 10);
  
    if (isNaN(numberToFind)) {
      setResult("Invalid input. Please enter a valid number.");
      return;
    }
  
    let count = 0;
  
    // Count the occurrences of the specific number
    for (let num of array) {
      if (num === numberToFind) {
        count++;
      }
    }
  
    setResult(
      count > 0
        ? `The number ${numberToFind} occurs ${count} time(s) in the array.`
        : `The number ${numberToFind} does not occur in the array.`
    );
  };
  
  const findMaxAndMin = () => {
    const array = parseArrayInput();
  
    if (array.length === 0) {
      setResult("The array is empty. Please enter some numbers.");
      return;
    }
  
    let max = array[0];
    let min = array[0];
  
    // Loop through the array to find max and min
    for (let num of array) {
      if (num > max) {
        max = num;
      }
      if (num < min) {
        min = num;
      }
    }
  
    setResult(`Maximum: ${max}, Minimum: ${min}`);
  };
  

  const calculateSum = () => {
    setResult(`Sum: ${number1 + number2}`);
  };

  const calculateDifference = () => {
    setResult(`Difference: ${number1 - number2}`);
  };

  const calculateProduct = () => {
    setResult(`Product: ${number1 * number2}`);
  };

  const calculateQuotient = () => {
    setResult(
      `Quotient: ${number2 !== 0 ? (number1 / number2).toFixed(2) : "Infinity"}`
    );
  };

  const displayText = () => {
    setResult(`Entered Text: ${text}`);
  };

  const reverseString = () => {
    let reversed = "";
    for (let i = text.length - 1; i >= 0; i--) {
      reversed += text[i];
    }
    setResult(`Reversed String: ${reversed}`);
  };

  const findMaxOccurringCharacter = () => {
    let maxChar = "";
    let maxCount = 0;

    for (let i = 0; i < text.length; i++) {
      let count = 0;
      for (let j = 0; j < text.length; j++) {
        if (text[i] === text[j]) {
          count++;
        }
      }

      if (count > maxCount) {
        maxCount = count;
        maxChar = text[i];
      }
    }
    setResult(`Max Occurring Character: ${maxChar}`);
  };

  const removeDuplicateCharacters = () => {
    let unique = "";
    for (let i = 0; i < text.length; i++) {
      let isDuplicate = false;
      for (let j = 0; j < unique.length; j++) {
        if (text[i] === unique[j]) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        unique += text[i];
      }
    }
    setResult(`String without Duplicates: ${unique}`);
  };

  const countWords = () => {
    let count = 0;
    let inWord = false;

    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " " && !inWord) {
        inWord = true;
        count++;
      } else if (text[i] === " ") {
        inWord = false;
      }
    }
    setResult(`Word Count: ${count}`);
  };

  const concatenateStrings = () => {
    const concatenated = text + str2;
    setResult(`Concatenated String: ${concatenated}`);
  };

  const checkPalindrome = () => {
    const len = text.length;
    let isPalindrome = true;

    for (let i = 0; i < Math.floor(len / 2); i++) {
      if (text[i] !== text[len - 1 - i]) {
        isPalindrome = false;
        break;
      }
    }

    setResult(
      isPalindrome
        ? `The string "${text}" is a Palindrome.`
        : `The string "${text}" is NOT a Palindrome.`
    );
  };

  const removeSpaces = () => {
    let noSpaceStr = "";

    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " ") {
        noSpaceStr += text[i];
      }
    }

    setResult(`String without spaces: "${noSpaceStr}"`);
  };

  const compareStrings = () => {
    let areEqual = true;

    if (text.length !== str2.length) {
      areEqual = false;
    } else {
      for (let i = 0; i < text.length; i++) {
        if (text[i] !== str2[i]) {
          areEqual = false;
          break;
        }
      }
    }

    setResult(
      areEqual
        ? `The strings "${text}" and "${str2}" are Equal.`
        : `The strings "${text}" and "${str2}" are NOT Equal.`
    );
  };

  const checkAnagram = () => {
    // Remove spaces and convert to lowercase manually
    let cleanText = "";
    let cleanStr2 = "";
  
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " ") {
        cleanText += text[i].toLowerCase();
      }
    }
  
    for (let i = 0; i < str2.length; i++) {
      if (str2[i] !== " ") {
        cleanStr2 += str2[i].toLowerCase();
      }
    }
  
    // If lengths are not the same, they can't be anagrams
    if (cleanText.length !== cleanStr2.length) {
      setResult(`The strings are NOT anagrams.`);
      return;
    }
  
    // Create a frequency count for the first string
    const frequencyCount = {};
  
    // Count characters in the first string
    for (let i = 0; i < cleanText.length; i++) {
      frequencyCount[cleanText[i]] = (frequencyCount[cleanText[i]] || 0) + 1;
    }
  
    // Decrement the frequency count based on the second string
    for (let i = 0; i < cleanStr2.length; i++) {
      if (!frequencyCount[cleanStr2[i]]) {
        setResult(`The strings "${text}" and "${str2}" are NOT Anagrams.`);
        return;
      }
      frequencyCount[cleanStr2[i]] -= 1;
    }
  
    // If all counts are zero, the strings are anagrams
    for (let char in frequencyCount) {
      if (frequencyCount[char] !== 0) {
        setResult(`The strings "${text}" and "${str2}" are NOT Anagrams.`);
        return;
      }
    }
  
    setResult(`The strings "${text}" and "${str2}" are Anagrams.`);
  };

  return (
    <div className="App">
      <h1>Basic Arithmetic, String, and Array Operations</h1>
      <div className="input-section">
        <label>
          Enter value a (can be negative):
          <input
            type="text"
            inputMode="numeric"
            placeholder="Enter value a"
            value={number1}
            onChange={(e) => setNumber1(handleNumberInput(e.target.value))}
          />
        </label>
        <label>
          Enter value b (can be negative):
          <input
            type="text"
            inputMode="numeric"
            placeholder="Enter value b"
            value={number2}
            onChange={(e) => setNumber2(handleNumberInput(e.target.value))}
          />
        </label>
        <label>
          Enter a string:
          <input
            type="text"
            placeholder="Enter a string"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <label>
          Enter another string:
          <input
            type="text"
            placeholder="Enter second string"
            value={str2}
            onChange={(e) => setStr2(e.target.value)}
          />
        </label>
        <label>
          Enter an array (comma-separated numbers):
          <input
            type="text"
            placeholder="Enter numbers separated by commas"
            value={arrayInput}
            onChange={(e) => setArrayInput(e.target.value)}
          />
        </label>
        <div
          className="button-group"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
        >
          <button onClick={calculateSum}>Add</button>
          <button onClick={calculateDifference}>Subtract</button>
          <button onClick={calculateProduct}>Multiply</button>
          <button onClick={calculateQuotient}>Divide</button>
          <button onClick={displayText}>Display Entered Text</button>
          <button onClick={reverseString}>Reverse String</button>
          <button onClick={findMaxOccurringCharacter}>Max Occurring Character</button>
          <button onClick={removeDuplicateCharacters}>Remove Duplicates</button>
          <button onClick={countWords}>Count Words</button>
          <button onClick={concatenateStrings}>Concatenate Strings</button>
          <button onClick={checkPalindrome}>Check Palindrome</button>
          <button onClick={removeSpaces}>Remove Spaces</button>
          <button onClick={compareStrings}>Compare Strings</button>
          <button onClick={checkAnagram}>Check Anagram</button>
          <button onClick={reverseArray}>Reverse Array</button>
          <button onClick={sortArray}>Sort Array</button>
          <button onClick={findSpecificOccurrence}>Find Specific Occurrence</button>
          <button onClick={findMaxAndMin}>Find Max and Min</button>


        </div>
      </div>
      <hr />
      <div className="result-section">
        <h2>Results:</h2>
        <textarea rows="4" cols="40" readOnly value={result}></textarea>
      </div>
    </div>
  );
}

export default App;
