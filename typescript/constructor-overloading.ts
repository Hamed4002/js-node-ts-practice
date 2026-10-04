// Topics: classes, default parameters, constructor overload signatures
export {};

class Shape {
  color: string;

  constructor(color = "black") {
    this.color = color;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number);
  constructor(radius: number, color: string);
  constructor(radius: number, color: string = "black") {
    super(color);
    this.radius = radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;

  constructor(width: number, height: number);
  constructor(width: number, height: number, color: string);
  constructor(width: number, height: number, color: string = "black") {
    super(color);
    this.width = width;
    this.height = height;
  }
}

const c1 = new Circle(10);
const c2 = new Circle(5, "red");
const r1 = new Rectangle(4, 6);
const r2 = new Rectangle(3, 7, "blue");

console.log(c1.color); // black
console.log(c2.color); // red
console.log(r1.width); // 4
console.log(r2.height); // 7
