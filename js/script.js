let body = document.querySelector("body");
let container = document.querySelector(".container");

function Allfun() {
  setTimeout(() => {
    let divFun = document.createElement("div");
    divFun.classList = "fun01";
    container.append(divFun);
  }, 10000);

  setTimeout(() => {
    let divFun = document.createElement("div");
    divFun.classList = "fun01";
    container.remove(divFun);
  }, 10370);
}

function addPage(name, logo, inter) {
  let version = " 0.2.0 ";
  let divTitle = document.createElement("div");
  let logotip = document.querySelector(".logo");

  if (inter == 1) {
    let button = document.querySelector(".button-header__link");
    button.innerHTML = "Панель..";
  } else if (inter == 2) {
    let button = document.querySelector(".button-header__link");
    button.innerHTML = "Дунуть!";
  } else if (inter == 3) {
    let button = document.querySelector(".button-header__link");
    button.innerHTML = "(НЕ)Любить PS!";
  } else if (inter == 4) {
    let button = document.querySelector(".button-header__link");
    button.innerHTML = "Бухать!";
  }

  divTitle.classList.add("title");
  divTitle.innerHTML =
    "Добро пожаловать " +
    " " +
    name +
    " " +
    " в наше приложение версии:" +
    version;
  logotip.innerHTML = logo;

  container.append(divTitle);
}

// addPage("Костя", "лого", 4);

const checked = prompt("Пожалуйста, представьтесь?");
if (checked === "Костя" || checked === "Константин" || checked === "DocQu") {
  const password = prompt("Введите пароль админа");
  if (password == 123) {
    body.style.display = "block";
    alert("Добро пожаловать SuperAdmin " + checked + "!");
    addPage(checked, "logo", 1);
  } else {
    alert("Сам писал и сам затупил тупой пиздюк!");
  }
} else if (
  checked == "Ярик" ||
  checked == "Яр" ||
  checked == "Ярослав" ||
  checked == "Алкоголизм"
) {
  const password = prompt("Введите пароль " + checked);
  if (password == "драп") {
    body.style.display = "block";
    alert("Добро пожаловать, мастер " + checked + "!");
    addPage(checked, "logo", 2);
  } else {
    alert("не суй свои пальцы, оторвет!");
  }
} else if (checked == "Сычь" || checked == "Игорь" || checked == "Лифтер") {
  const password = prompt("Введите пароль " + checked);
  if (password == "123") {
    body.style.display = "block";
    addPage(checked, "&#128684;", 3);
    alert("Добро пожаловать алкотрешер " + checked + "!");
  } else {
    alert("не суй свои пальцы, оторвет!");
  }
} else if (checked == "Анна" || checked == "Аня" || checked == "Нюта") {
  const password = prompt("Введите пароль " + checked);
  if (password == "123") {
    body.style.display = "block";
    addPage(checked, "&#127863;", 4);
    alert("Добро пожаловать  " + checked + "!");
    Allfun();
  } else {
    alert("не суй свои пальцы, оторвет!");
  }
} else if (checked == null) {
  alert("Еще раз нажмешь я тебе кадик вырву сука!");
} else {
  alert("Я тебя не знаю " + checked + "Досвидос!");
}
