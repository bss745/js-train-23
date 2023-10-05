// Медіатор (Mediator) — це патерн програмування, який визначає об'єкт, який інкапсулює взаємодію між групою об'єктів. Медіатор сприяє слабкій залежності між цими об'єктами,
// дозволяючи спілкуватися з ними через централізовану точку.

// Клас User відповідає за користувача, який може відправляти повідомлення.
class User {
  // Створюємо конструктор класу, який приймає name та messenger як параметри та ініціалізує їх
  constructor(name, messenger) {
    this.name = name;
    this.messenger = messenger;
  }
  // Робимо метод sendMessage який відправляє повідомлення за допомогою відповідного месенджера, та виводить в консоль `${this.name} відправив повідомлення ${message}`.
  sendMessage(message) {
    console.log(`${this.name} відправив повідомлення ${message}`);
    return this.messenger.sendMessage(message);
  }
  // Він приймає один параметр - message - повідомлення, яке потрібно відправити за допомогою методу sendMessage.
  // Метод receiveMessage приймає аргументи user,message та виводить в консоль ${this.name} отримав повідомлення від ${user.name}: ${message}
  receiveMessage(user, message) {
    console.log(
      `${this.name} отримав повідомлення від ${user.name}: ${message}`
    );
  }
}

// Клас SMSMessenger відповідає за відправку повідомлень за допомогою SMS.
class SMSMessenger {
  // Створюємо статичний метод sendMessage який приймає один параметр - message, та виводить в консоль `Відправлено SMS: ${message}`
  static sendMessage(message) {
    console.log(`Відправлено SMS: ${message}`);
  }
}

// Клас EmailMessenger відповідає за відправку повідомлень за допомогою Email.
class EmailMessenger {
  // Створюємо статичний метод sendMessage який приймає один параметр - message, та виводить в консоль `Відправлено Email: ${message}`
  static sendMessage(message) {
    console.log(`Відправлено Email: ${message}`);
  }
}
console.log("Завдання 7 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо двох користувачів - John та Jane - які відправляють повідомлення за допомогою різних месенджерів.
const john = new User("John", SMSMessenger);
const jane = new User("Jane", EmailMessenger);

// John відправляє повідомлення за допомогою SMS.
john.sendMessage("Привіт!"); // Виведе: Відправлено SMS: [John]: Привіт!

// Jane відправляє повідомлення за допомогою Email.
jane.sendMessage("Привіт!"); // Виведе: Відправлено Email: [Jane]: Привіт!

console.log(`//=====`);

//   sendMessage(message) {
//     console.log(`${this.name} відправив повідомлення ${message}`);
//     return this.chat.sendMessage(this, message);
//   }

//   //Прийняття повідомлення від іншого користувача
//   receiveMessage(sender, message) {
//     console.log(
//       `${this.name} отримав повідомлення від ${sender.name}: ${message}`
//     );
//   }
// }

// class Chat {
//   users = [];

//   //Додавання користувача до чату
//   addUser(user) {
//     this.users.push(user);
//   }

//   //Відправлення повідомлення в чат
//   sendMessage(sender, message) {
//     for (const user of this.users) {
//       if (user !== sender) {
//         user.receiveMessage(sender, message);
//       }
//     }
//   }
// }

// const chatMediator = new Chat();

// const user01 = new User15("John", chatMediator);
// const user02 = new User15("Jane", chatMediator);
// const user03 = new User15("Mike", chatMediator);

// chatMediator.addUser(user01);
// chatMediator.addUser(user02);
// chatMediator.addUser(user03);

// user01.sendMessage("Привіт, всім");
