// Topics: public / protected / private members and inheritance
// Lines marked with @ts-expect-error are compile errors on purpose (the file still type-checks).
export {};

class User {
  private password: string;

  constructor(password: string) {
    this.password = password;
  }

  public login(): string {
    return "Login successful.";
  }

  protected getRole(): string {
    return "user";
  }
}

class AdminUser extends User {
  // Still protected: only this class and its subclasses can call it
  protected getRole(): string {
    return "admin";
  }

  showRole(): string {
    return `Role is: ${this.getRole()}`;
  }
}

const admin = new AdminUser("1234");
console.log(admin.login()); // Login successful.
console.log(admin.showRole()); // Role is: admin

// @ts-expect-error getRole() is protected, so it is not accessible outside the class
admin.getRole();

// @ts-expect-error password is private to User
console.log(admin.password);
// Note: private/protected are checked only at compile time. The compiled JavaScript
// still prints "1234" here. For real runtime privacy use a #private field.

// A subclass is allowed to WIDEN visibility: here the override becomes public,
// so calling it from outside compiles without an error.
class WidenedAdmin extends User {
  getRole(): string {
    return "admin";
  }
}
console.log(new WidenedAdmin("5678").getRole()); // admin
