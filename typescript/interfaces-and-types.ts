// Topics: interface inheritance, type aliases, union / intersection types, type narrowing
export {};

interface User {
  id: number;
  name: string;
  email: string;
}

interface Admin extends User {
  role: string;
  banUser(userId: number): void;
}

// Union of string literals
type Status = "banned" | "active" | "pending";

// Intersection: User plus an extra field
type UserProfile = User & {
  status: Status;
};

// Updates the email; if the object is an Admin ("banUser" exists) it also sets the id.
// The `in` check narrows `user` from User | Admin to Admin.
function handleUser(user: User | Admin): void {
  user.email = "updated@example.com";
  if ("banUser" in user) {
    user.id = 123;
  }
}

const regularUser: User = { id: 1, name: "Ali", email: "ali@example.com" };
const adminUser: Admin = {
  id: 2,
  name: "Sara",
  email: "sara@example.com",
  role: "superadmin",
  banUser: (userId: number) => console.log(`User ${userId} banned.`),
};
const profile: UserProfile = { ...regularUser, status: "active" };

handleUser(regularUser); // only the email changes
handleUser(adminUser); // email and id change

console.log(regularUser); // { id: 1, ..., email: 'updated@example.com' }
console.log(adminUser); // id: 123, email: 'updated@example.com'
console.log(profile.status); // active
