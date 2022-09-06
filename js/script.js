const mainEl = document.querySelector(".main");

const passwordEl = document.createElement("input");
passwordEl.classList.add("password");
passwordEl.setAttribute("placeholder", "Сгенерировать пароль");
passwordEl.addEventListener("keypress", (e) => {
  e.preventDefault();
});
passwordEl.addEventListener("focus", () => {
  passwordEl.select();
  navigator.clipboard.writeText(passwordEl.value);
});

const copyBtn = document.createElement("button");
copyBtn.classList.add("password-button");
copyBtn.innerText = "Скопировать";
copyBtn.addEventListener("click", (e) => {
  passwordEl.select();
  navigator.clipboard.writeText(passwordEl.value);
});

const generateBtn = document.createElement("button");
generateBtn.classList.add("password-button");
generateBtn.innerText = "Сгенерировать";
generateBtn.addEventListener("click", () => {
  let password = generatePassword(12);
  passwordEl.value = password;
});

function generatePassword(passwordLenght) {
  const numberChars = "0123456789",
    upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerChars = "abcdefghijklmnopqrstuvwxyz",
    symbolChars = "!@#$%^&*()_+",
    concatChars = numberChars + upperChars + lowerChars + symbolChars;

  let randomSrting = "";

  for (let i = 0; i < passwordLenght; i++) {
    let randomNumber = Math.floor(Math.random() * concatChars.length);
    randomSrting += concatChars[randomNumber];
  }

  return randomSrting;
}

mainEl.appendChild(passwordEl);
mainEl.appendChild(copyBtn);
mainEl.appendChild(generateBtn);
