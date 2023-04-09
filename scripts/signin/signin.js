/// VANILLA JS EFFECTS

VanillaTilt.init(document.querySelector(".signin-container"), {
  max: 25,
  speed: 400,
  glare: true,
});
let signinBtn = document.getElementById("sign-in-btn");
let userEmail = "";
let userPassword = "";
document
  .querySelector("#signin-form .sign-in-email")
  .addEventListener("input", (e) => {
    userEmail = e.target.value;
  });
document
  .querySelector("#signin-form .sign-in-password")
  .addEventListener("input", (e) => {
    userPassword = e.target.value;
  });
signinBtn.addEventListener("click", () => {
  if (
    userEmail == localStorage.getItem("email") &&
    userPassword == localStorage.getItem("password")
  ) {
    Toastify({
      text: "Hisobga muvafaqiyatli kirdingiz",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      positionLeft: false,
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    }).showToast();
    localStorage.setItem("login", "true");
    setTimeout(signInSuccesNavigate, 500);
  } else if (
    userEmail == localStorage.getItem("email") &&
    userPassword !== localStorage.getItem("password")
  ) {
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
  } else {
    Toastify({
      text: "Bunday foydalanuvchi topilmadi",
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

const signInSuccesNavigate = () => {
  window.location.assign(
    "https://6432ee33f7271a4ad1cfd097--gentle-sable-0b8e40.netlify.app/pages/test-game/dictionarygame.html"
  );
};
