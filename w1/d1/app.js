document.body.style.backgroundColor = "black";

const sitAtTableImgUrl =
  "https://www.meme-arsenal.com/memes/87906a2ff410839cf45ea2e9678a98aa.jpg";
const tableFlipImgUrl =
  "https://i.kym-cdn.com/entries/icons/facebook/000/006/306/FlipTable.jpg";

const rootDiv = document.getElementById("root");
const flipTableBtn = document.createElement("button");

flipTableBtn.innerText = "Flip Table For Catharsis.";
flipTableBtn.style.display = "block";
flipTableBtn.style.marginLeft = "auto";
flipTableBtn.style.marginRight = "auto";

flipTableBtn.addEventListener("click", (event) => {
  firstPerson.flipTable(cheapTable);
});

rootDiv.appendChild(flipTableBtn);

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // this method is outside the constructor so it is added to the prototype which means it is shared between
  // all instances, rather than each instance having a copy of the same method which takes up more space
  fullName() {
    return this.firstName + " " + this.lastName;
  }

  flipTable(table) {
    table.flip();
  }
}

class UnitOfMeasure {
  constructor(amnt, unit) {
    this.amnt = amnt;
    this.unit = unit;
  }
}

class Measurements {
  constructor(length, width, height, weight) {
    this.length = length;
    this.width = width;
    this.height = height;
    this.weight = weight;
  }

  area(key = "width") {
    return this.length.amnt * this[key].amnt;
  }

  volume() {
    return this.width.amnt * this.length.amnt * this.height.amnt;
  }
}

class TableLeg {
  constructor(material, color, shape) {
    this.material = material;
    this.color = color;
    this.shape = shape;
    this.isBroken = false;
  }
}

const plasticBottleLeg = new TableLeg(
  "Plastic Bottles",
  "Sun Tanned Yellow",
  "Exceptionally Tubular"
);

class Table {
  // equivalent to __init__ in py
  constructor(
    modelName,
    material,
    price,
    color,
    measurements,
    images = {},
    legs = [],
    capacity = 4,
    occupants = []
  ) {
    this.modelName = modelName;
    this.material = material;
    this.price = price;
    this.color = color;
    this.measurements = measurements;
    this.images = images;
    this.legs = legs;
    this.capacity = capacity;
    this.occupants = occupants;
    this.isBroken = false;
    this.isFlipped = false;

    this.imgNode = document.createElement("img");
    this.imgNode.style.width = "70%";
    rootDiv.appendChild(this.imgNode);

    this.activeImg = images.default;
  }

  // automatically is executed when this.activeImg is assigned a new value
  set activeImg(url) {
    this.imgNode.src = url;
  }

  addOccupant(occupant) {
    if (this.occupants.length < this.capacity) {
      this.occupants.push(occupant);
    } else {
      console.log("THIS table is fully occupied, my dude.");
    }
  }

  printOccupants() {
    for (let i = 0; i < this.occupants.length; i++) {
      const occupant = this.occupants[i];
      console.log(`Occupant #${i + 1}: ${occupant.fullName()}`);
    }
  }

  flip() {
    this.isFlipped = !this.isFlipped;

    if (this.isFlipped) {
      this.activeImg = this.images.flipped;
    } else {
      this.activeImg = this.images.default;
    }
  }
}

const cheapTable = new Table(
  "Cheapo",
  "Used Pizza Box Cardboard",
  "$3", // this could be a class as well like UnitOfMeasure but for Currency
  "Dirt",
  new Measurements(
    new UnitOfMeasure(5, "ft"),
    new UnitOfMeasure(3, "ft"),
    new UnitOfMeasure(4, "ft"),
    new UnitOfMeasure(6, "lb")
  ),
  { default: sitAtTableImgUrl, flipped: tableFlipImgUrl },
  [plasticBottleLeg, plasticBottleLeg, plasticBottleLeg, plasticBottleLeg]
);

const firstPerson = new Person("Griffin", "McManus");
const secondPerson = new Person("Roy", "Rubanenko");
const thirdPerson = new Person("Ray", "Khoo");
const fourthPerson = new Person("Parker", "Brownie");
const fifthPerson = new Person("Benjamin", "Munoz");

cheapTable.addOccupant(firstPerson);
cheapTable.addOccupant(secondPerson);
cheapTable.addOccupant(thirdPerson);
cheapTable.addOccupant(fourthPerson);
cheapTable.addOccupant(fifthPerson);

console.log(cheapTable);
cheapTable.printOccupants();
