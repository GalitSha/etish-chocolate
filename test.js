//function Car(name, year, speed) {
//  this.name = name;
//  this.year = year;
//  this.speed = speed;
//  this.kmFromEnd = 100;
//
//}
//
//let myCar = new Car('galit', 2017, Math.random());
//let yourCar = new Car('or', 2018, Math.random());
//
//for (let i = 0; i < 1000; i++) {
//  myCar.kmFromEnd = myCar.kmFromEnd - myCar.speed;
//  yourCar.kmFromEnd = yourCar.kmFromEnd - yourCar.speed;
//  if (myCar.kmFromEnd <= 0) {
//    console.log(`the winner is: ${myCar.name}`);
//    break;
//  } else if (yourCar.kmFromEnd <= 0) {
//    console.log(`the winner is: ${yourCar.name}`);
//    break;
//  }
//}


//function Bacteria() {
//  this.id = Math.random() * 10000;
//  this.health = 100;
//  this.takeDamage = function (num) {
//    this.health = this.health - num;
//  }
//}

class Bacteria {
  constructor() {
    this.id = Math.random() * 10000;
    this.health = 100;
  }

  takeDamage(damage) {
    this.health = this.health - damage;
  }
}


class Plat {
  constructor() {
    this.bacArray = [];
    for (let i = 0; i < 1000; i++) {
      let newBacteria = new Bacteria();
      this.bacArray.push(newBacteria);
    }
  }

  poison() {
    this.bacArray.forEach(function (bac) {
      bac.takeDamage(Math.random() * 20);
    })
  }
}


class Table {
  constructor() {
    this.platArr = [];
    for (let i = 0; i < 20; i++) {
      let newPlat = new Plat();
      this.platArr.push(newPlat);
    }
  }

  poisonAllPlates() {
    this.platArr.forEach(function (plat) {
      plat.poison()
    })
  }

  doomDay() {
    this.platArr.forEach(function (plat) {
      plat.bacArray.forEach(function(bac) {
        bac.health = 0;
      })
    })
  }
}


let newTable = new Table();
newTable.poisonAllPlates();
newTable.doomDay();
console.log(newTable);