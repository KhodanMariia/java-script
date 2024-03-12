// console.log("Test");

// let name;
// let age;

// name = "Mariia";
// age = 39;

// console.log(name, age);

// const t = "hello";
// const l = ` Hi ${t}  ${2 + 2}`;

// console.log(l);

// const productName = "Мікрофон";
// const productDefault = "Назва товару";

// const newProductName = "Мікрофон 3000";
// const userRole = "admin";

// const updateProductName =
//   userRole === "admin"
//     ? console.log("isAdmin") || newProductName
//     : console.log("noAdmin") || productName;

// console.log(updateProductName);
/* const CUSTOM_NAME = "my robot";
const MODE = 2;
const ROOM = "Вітальня";

{
  const name = CUSTOM_NAME || "robot v134t1";
  console.log(`Start ${name}`);
}

{
  const room = ROOM;
  const mode = MODE;
  console.log(`Mode ${mode} прибирає кімнату: ${room}`);
} */

// ======== Перевірка Юзера за допомогою IF, ELESE IF, ELSE ===========
/*
const login = "user";
const password = "12345678";
const isAdmin = true;
const isLoggedIn = null;

if (isLoggedIn === true) {
  if (isAdmin) {
    console.log("Переходимо на сторінку / admin");
  } else if (login === "demo") {
    console.log("Переходимо на сторінку / demo");
  } else {
    console.log("Переходимо на сторінку / home");
  }
} else if (isLoggedIn === false) {
  if (login && password) {
    console.log("Token:", 123456789);

    if (isAdmin) {
      console.log("Переходимо на сторінку / admin");
    } else {
      console.log("Переходимо на сторінку / home");
    }
  }
} else if (isLoggedIn === null) {
  console.log("Помилка!!!");
}
*/

//====== Створення кешбек системи за допомогою IF, ELESE IF, ELSE =========
/*
const price = 100;
const useCashback = true;

let cashbackLevel = 4;
let totalPrice = null;
let cashbackAmount = null;

if (price < 100) {
  console.log("Кешбек система доступна длятоварів з ціною від 100");
  cashbackAmount = 0;
} else {
  if (cashbackLevel > 0) {
    cashbackAmount = price * (cashbackLevel * 0.01);
  }

  cashbackLevel++;

  if (cashbackLevel > 5) {
    cashbackLevel = 1;
  }

  if (useCashback > 0 && useCashback) {
    totalPrice = price - cashbackAmount;
  }
}

console.log(totalPrice);
*/

//======== Перевірка елемента з одним значення за допомогою ==========
//          SWITCH, CASE, та зупинка перевірки BREAK

/*======
const buttonType = "123",
  buttonColor = "red";
switch (buttonType) {
  case "main":
    console.log("main");
  case "global":
    console.log("Case ще працює");
  case "primary":
    console.log("Case тут зупиниться");
    break; //зупинка case якщо данні збігаються

  case "second":
    break;
  case "double":
    console.log("Case тут вже не працює"); // якщо вище зійшлися данні, якщо ні то case далі перевіряє
  default: //залишити все зазамовченням, пишимо завжди в кінці конструкції.
    console.log("default button");
}
===============================*/
/*============ Цикл JS ===============

const PRODUCT_AMOUNT = 6;
const DISCOUNT_ADDITTIONAL = 2;

let discountAmount = 0;
let productCount = 0;

while (
  productCount < PRODUCT_AMOUNT &&
  DISCOUNT_ADDITTIONAL <= 10 &&
  discountAmount <= 10
) {
  productCount++;

  if (productCount <= 0) {
    break;
  }

  if (productCount <= 3) {
    discountAmount += 1;
  } else if (productCount > 3 && productCount <= 5) {
    discountAmount += 1.5;
  } else if (productCount > 5 && productCount <= 8) {
    discountAmount += 2;
  } else if (productCount > 3 && productCount <= 5) {
    discountAmount += 2.5;
  }

  if (DISCOUNT_ADDITTIONAL) {
    discountAmount += DISCOUNT_ADDITTIONAL;
  }

  console.log(productCount, discountAmount);
}

if (discountAmount > 10) {
  discountAmount = 10;
}

console.log("Знижка", discountAmount, "%");

console.log("Знижка для товарів", productCount);

console.log("Товарів не мають знижки", PRODUCT_AMOUNT - productCount);

===========================*/

let sum = 0;
let count = 1;

do {
  sum += count;
  count++;
  console.log(count, sum);
} while (count <= 5);

//============== do, while
/*
let container = 5;
let storage = 20;

let car = 3;

do {
  car++;

  storage -= container;

  console.log(car, storage);
} while (car < 3);

if (car > 3) {
  console.log("Нам потрібна нова машина");
}

*/
//==================== do, while, continue
// let start = 40;
// let goal = 100;

// let step = 0;
// let set = 8;
// let rest = 10;

// do {
//   if (step === 0) {
//     console.log("Початок тренування");
//   }

//   start++;
//   step++;

//   if (step === goal || start === goal) {
//     console.log("Кінець тренування");
//     break;
//   }

//   if (step % rest === 0) {
//     console.log(`Зробіть перерву`);
//     continue; //пропустити 1 крок
//   }

//   if (step % set === 0) {
//     console.log(`Ви зробили ${step / set} сет(ів)`);
//   }

//   if (step === goal / 2) {
//     console.log("Половина тренувань");
//   }

//   console.log("Поточний прогрес", step);
// } while (step < goal && start < goal);

//============== for =======
// let q = 0;

// for (let i = 0, j = 5; i <= j; i++) {
//   console.log("Test", i, j);

//   if (i === 3) {
//     j++;
//   }

//   for (;;) {
//     console.log("Q", q);

//     if (q >= i) {
//       q++;
//       break;
//     }
//   }
// }

let age = 25;
let hasExp = true;
let hasEdu = false;

let JS = true;
let HTML = true;

form: {
  if (age >= 18) {
    if (hasExp) {
      console.log("Ви підходите");
      break form;

      if (JS) {
        console.log("Ви підходите");
      }

      if (HTML) {
        console.log("Ви підходите");
      }
    }

    if (!hasExp) {
      console.log(" Ви не піходите через брак досвіду");
      break form;
    }
  }

  if (age < 18) {
    console.log("Ви не підходите по віку");
    break form;
  }
}

table: for (let i = 1; i <= 10; i++) {
  if (i === 1) {
    continue; //пропустити один крок
  }

  console.log(`Число ${i} ============`);
  for (let j = 1; j <= 10; j++) {
    if (j === 1) {
      continue; //пропустити один крок
    }
    // console.log(i, j);
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
