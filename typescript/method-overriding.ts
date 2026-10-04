// Topics: interface + implements, method overriding, calling the parent with super
export {};

interface Checkable {
  check(value: string): boolean;
}

class Sensor {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  activate(): void {
    console.log("Sensor activated");
  }
}

class MotionSensor extends Sensor implements Checkable {
  check(value: string): boolean {
    return value === "motion";
  }

  // Overrides Sensor.activate() and still runs the parent version via super
  activate(): void {
    if (this.check("motion")) {
      console.log("Motion detected");
    } else {
      console.log("No motion");
    }

    super.activate();
  }
}

const m = new MotionSensor("MS-01");
m.activate();
// Motion detected
// Sensor activated
