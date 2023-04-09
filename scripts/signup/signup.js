/// VANILLA JS EFFECTS

VanillaTilt.init(document.querySelector(".signup-container"), {
  max: 25,
  speed: 400,
  glare: true,
});

// sign up

let signUpNextBtn = document.getElementById("sign-up-next");
let signUpBtn = document.querySelector(".sign-up-btn");
let signupStepOne = document.getElementById("signup-stop-one");
let signupStepTwo = document.getElementById("signup-stop-two");

let signUserName = "";
let signUserEmail = "";
let signPassword = "";
let signPasswordVerify = "";

/// userName
document
  .querySelector("#signup-stop-one .stop-one-name")
  .addEventListener("input", (e) => {
    signUserName = e.target.value;
  });

/// userEmail
document
  .querySelector("#signup-stop-one .stop-one-email")
  .addEventListener("input", (e) => {
    signUserEmail = e.target.value;
  });

/// password
document
  .querySelector("#signup-stop-two .step-two-password1")
  .addEventListener("input", (e) => {
    signPassword = e.target.value;
  });
/// password verify
document
  .querySelector("#signup-stop-two .step-two-password2")
  .addEventListener("input", (e) => {
    signPasswordVerify = e.target.value;
  });
signUpNextBtn.addEventListener("click", () => {
  if (localStorage.getItem("email") == signUserEmail) {
    Toastify({
      text: "Siz oldin ro'yhatdan o'tgansiz",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top",
      positionLeft: false,
      backgroundColor:
        "linear-gradient(-90deg, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    }).showToast();
  } else if (
    (!signUserName == "" && !signUserEmail == "") ||
    (!signUserName == " " && !signUserEmail == " ")
  ) {
    signupStepOne.style.display = "none";
    signupStepTwo.style.display = "block";
  } else {
    Toastify({
      text: "Ism va emailingizni kiriting",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top",
      positionLeft: false,
      backgroundColor:
        "linear-gradient(-90deg, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    }).showToast();
  }
});

signUpBtn.addEventListener("click", () => {
  console.log(signPassword, signPasswordVerify);
  if (signPassword.length && signPassword == signPasswordVerify) {
    localStorage.setItem("token", "succes");
    localStorage.setItem("email", signUserEmail);
    localStorage.setItem("password", signPassword);
    Toastify({
      text: "Muvafaqiyatli ro'yhatdan o'tdingiz",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      positionLeft: false,
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    }).showToast();
    signPassword == "";
    signPasswordVerify == "";
    localStorage.setItem("login", "true");
    setTimeout(signUpSuccesNavigate, 500);
  } else {
    Toastify({
      text: "Parol kiritishda xatolik bor!",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      positionLeft: false,
      backgroundColor:
        "linear-gradient(-90deg, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    }).showToast();
  }
});

const signUpSuccesNavigate = () => {
  window.location.assign(
    "http://www.notiqlik-markazi.uz/pages/test-game/dictionarygame.html"
  );
};
