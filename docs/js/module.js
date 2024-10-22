class UniqueUsernames {
  constructor() {
      this.usernames = new Set();
  }

  addUser(username) {
      this.usernames.add(username);
  }

  exists(username) {
      return this.usernames.has(username);
  }

  count() {
      return this.usernames.size;
  }
}
  
  const uniqueUsernames = new UniqueUsernames()
  uniqueUsernames.addUser('john_doe')
  uniqueUsernames.addUser('jane_doe')
  uniqueUsernames.addUser('john_doe')
  
  console.log(`Існує 'john_doe': ${uniqueUsernames.exists('john_doe')}`)
  console.log(`Кількість унікальних імен: ${uniqueUsernames.count()}`)
  
  export { UniqueUsernames }
  