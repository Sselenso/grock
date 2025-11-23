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