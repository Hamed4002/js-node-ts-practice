// Topics: static members, static initialization blocks, access modifiers, inheritance
export {};

class User {
  private static counter: number = 0;
  public name: string;

  constructor(name: string) {
    this.name = name;
    User.counter++;
  }

  static getCount(): number {
    return User.counter;
  }

  getName(): string {
    return this.name;
  }

  // Runs once, when the class is defined (before any instance exists)
  static {
    try {
      const previousUsers = ["Ali", "Sara", "Reza"];
      User.counter = previousUsers.length;
      console.log(`Data was loaded: ${User.counter} users`);
    } catch {
      console.log("Error in loading.");
    }
  }
}

class Admin extends User {
  isAdmin(): boolean {
    return true;
  }
}

const u1 = new User("Mahdi");
const a1 = new Admin("Hamed");

console.log(User.getCount()); // 5  (3 loaded + 2 created)
console.log(a1.isAdmin()); // true
console.log(Admin.getCount()); // 5  (static members are inherited)
console.log(u1.getName()); // Mahdi
