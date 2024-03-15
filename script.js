document.getElementById("check-btn").addEventListener("click", function () {
  const inputText = document.getElementById("text-input").value;
  const resultElement = document.getElementById("result");
  const cleanInput = inputText.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  if (cleanInput === "") {
    alert("Please input a value");
  } else if (isPalindrome(cleanInput)) {
    resultElement.textContent = `${inputText} is a palindrome`;
  } else {
    resultElement.textContent = `${inputText} is not a palindrome`;
  }
});

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
