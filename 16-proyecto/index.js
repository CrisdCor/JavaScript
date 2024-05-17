class User {
  static #url = "https://jsonplaceholder.typicode.com/users";
  static #users = [];

  static async getAll() {
    try {
      const response = await fetch(this.#url);
      if (!response.ok) throw response;
      this.#users = await response.json();
      return this.#users;
    } catch (error) {
      console.log("Error:", error);
    }
  }
}

async function main() {
  const users = await User.getAll();
  console.log(users);
}

main();
