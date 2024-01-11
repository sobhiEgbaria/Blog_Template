class User {
  id: number;
  username: string;
  email: string;
  isAdmin: boolean;

  constructor(id: number, username: string, email: string, isAdmin: boolean) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.isAdmin = isAdmin;
  }
}
export default User;
