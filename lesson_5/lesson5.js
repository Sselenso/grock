const dog = {
  name: "Шарик",
  bark: function() { console.log("Гав! Я " + this.name) },
  barkArrow: () => { console.log("Гав! Я " + this.name) }
}

dog.bark()        // что выведет?
dog.barkArrow()   // что выведет?

const lostBark = dog.bark
lostBark()        // что выведет?