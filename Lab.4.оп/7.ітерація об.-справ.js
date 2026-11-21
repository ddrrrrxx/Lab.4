function ages(persons) {
  const result = {}; // Створюємо порожній об'єкт для результату

  // Перебираємо кожен ключ (ім'я людини) в об'єкті persons
  for (const name in persons) {
    const person = persons[name]; // Отримуємо дані конкретної людини { born: ..., died: ... }
    result[name] = person.died - person.born; // Рахуємо вік і записуємо в новий об'єкт
  }

  return result;
}

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

console.log(ages(persons));
// Виведе: { lenin: 54, mao: 83, gandhi: 79, hirohito: 88 }