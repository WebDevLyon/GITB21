const users = [
    {
      username: "nijlak",
      password: "ASMC21",
      associate: "ASMC Badminton"
    }
  ];
  
  /**
   * @param {String} username
   * @param {String} password
   *
   * @return {?Object}
   */
  function login(username, password) {
    return users.find(user => user.username === username && user.password === password) || null;
  }
  
  export { login };