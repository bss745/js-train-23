// Адаптер (Adapter) — це патерн програмування, який дозволяє об'єктам з інтерфейсом несумісним з іншими об'єктами працювати разом,
// перетворюючи інтерфейс одного об'єкта на інтерфейс, очікуваний іншим об'єктом.

// Клас BankTransfer представляє собою систему для здійснення банківських переказів
class BankTransfer {
  // Зробіть метод initiateTransfer, який приймає amount та відповідає за ініціювання банківського переказу
  initiateTransfer(amount) {
    const calculatedAmount = this.calculateFee(amount);
    console.log(`Ініціюємо банківський переказ: $${calculatedAmount}`);
  }
  // Він приймає суму переказу як параметр
  // Для ініціювання банківського переказу спершу обчислюється сума з урахуванням комісії calculatedAmount = this.calculateFee(amount)
  // Виводимо інформацію про ініціювання банківського переказу Ініціюємо банківський переказ: $${calculatedAmount}

  // Зробіть метод calculateFee, який відповідає за розрахунок комісії за переказ
  calculateFee(amount) {
    return amount * 1.02;
  }
  // Він приймає amount переказу як параметр та повертає число після розрахування комісії
  // Логіка розрахунку комісії за переказ amount * 1.02
  // Припустимо, комісія становить 2% від суми переказу
}

// Клас WalletTransfer представляє собою систему для здійснення переказів з гаманця
class WalletTransfer {
  // Створіть метод processTransfer, який відповідає за здійснення переказу з гаманця

  processTransfer(amount) {
    console.log(`Здійснюємо переказ з гаманця: $${amount}`);
  }
  // Він приймає суму переказу як параметр
  // Виводимо інформацію про здійснення переказу з гаманця Здійснюємо переказ з гаманця: $${amount}
}

// Клас TransferAdapter виступає адаптером, який дозволяє нам користуватися
// методами WalletTransfer так, ніби це BankTransfer.
class TransferAdapter {
  // Робимо конструктор, що приймає об'єкт transferSystem типу WalletTransfer
  constructor(transferSystem) {
    this.transferSystem = transferSystem(new WalletTransfer());
  }
  // Зберігаємо посилання на об'єкт WalletTransfer у властивості transferSystem
  // Робимо метод initiateTransfer, який адаптує API WalletTransfer до API BankTransfer.
  initiateTransfer(amount) {
    const calculatedAmount = this.calculateFee(amount);
    return amount;
  }
  // Він приймає amount як аргумент та повертає результат виконання переказу.

  // Викликаємо допоміжний метод calculateFee для обчислення комісії за переказ та результат записуєм в константу calculatedAmount
  calculateFee(amount) {
    return amount * 1.02;
  }
  // Викликаємо метод processTransfer об'єкту WalletTransfer з calculatedAmount.
  // В результаті повертаємо результат виконання переказу.
  // Створюємо метод calculateFee, що приймає amount та обчислює суму комісії за переказ amount * 1.2, засновуючись на вхідній сумі.
  // Повертаємо amount * 1.2
}
console.log("Завдання 5 ====================================");
// Після виконання розкоментуйте код нижче

// Створимо екземпляри BankTransfer
// const purchase1 = new BankTransfer();
// purchase1.initiateTransfer(1000);

// const purchase2 = new BankTransfer();
// purchase2.initiateTransfer(10);

console.log(`//======`);

//==== Система електронних платежів з власним API
class ElectronicPaymentSystem {
  makePayment(amount) {
    const convertedAmount = this.convertAmount(amount);
    console.log(`Making electronic payment: $${convertedAmount}`);
  }

  convertAmount(amount) {
    //=== Логіка конвертації суми платежу
    return amount * 1.2; //== Припустимо, що необхідна конвертація у відсотках
  }
}

class OtherPaymentSystem {
  submit(amount) {
    console.log(`Submitting payment request: $${amount}`);
  }
}

class PaymentAdapter {
  constructor(paymentSystem) {
    this.paymentSystem = paymentSystem;
  }

  makePayment(amount) {
    const convertedAmount = this.convertAmount(amount);
    this.paymentSystem.submit(convertedAmount);
  }

  convertAmount(amount) {
    return amount * 1.2;
  }
}

class Order {
  constructor(amount) {
    this.amount = amount;

    if (amount < 100) {
      this.paymentSystem = new PaymentAdapter(new OtherPaymentSystem());
    } else {
      this.paymentSystem = new ElectronicPaymentSystem();
    }
  }

  makePayment() {
    return this.paymentSystem.makePayment(this.amount);
  }
}

const order1 = new Order(1000);
order1.makePayment();

const order2 = new Order(10);
order2.makePayment();

// const electronicPaymentSystem = new ElectronicPaymentSystem();
// electronicPaymentSystem.makePayment(100);
