function createGreeter(name) {
	return () => console.log(`Привет, ${name}`);
}

function createGreeter(name) {
	return function () {
		console.log(`Привет, ${name}`);
	};
}

const greetDima = createGreeter('Дима');
const greetVasya = createGreeter('Вася');

greetDima(); // → Привет, Дима!
greetDima(); // → Привет, Дима!
greetVasya(); // → Привет, Вася!



const user = {
  name: "Дима",
  
  createGreetRegular() {
    return function() {
      console.log("Привет, " + this.name);  // ← this = undefined!
    }
  },
  
  createGreetArrow() {
    return () => {
      console.log("Привет, " + this.name);  // ← this = user! Работает!
    }
  }
}

const regular = user.createGreetRegular();
regular(); // Привет, undefined

const arrow = user.createGreetArrow();
arrow();
