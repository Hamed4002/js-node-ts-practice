// Topics: getters and setters (accessors)
export {};

class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }

  scale(factor: number): void {
    this.width *= factor;
    this.height *= factor;
  }

  // Getter: read like a property, computed on access
  get isSquare(): boolean {
    return this.width === this.height;
  }

  // Setter: assign like a property, with custom logic
  set dimensions(values: [number, number]) {
    this.width = values[0];
    this.height = values[1];
  }
}

const rect = new Rectangle(10, 20);
console.log(rect.area()); // 200

rect.scale(2);
console.log(rect.area()); // 800

console.log(rect.isSquare); // false

rect.dimensions = [50, 50];
console.log(rect.isSquare); // true
