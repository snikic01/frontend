// Definicija klase User
export class User {
  id!: string;
  email!: string;
  password!: string;
  name!: string;
  porudzbine?: { naziv: string; status: string; kolicina: number }[];
}
