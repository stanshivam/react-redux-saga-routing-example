export const userService = {
  getUsers: async () => {
    return await fetch('https://reqres.in/api/users');
  }
};
