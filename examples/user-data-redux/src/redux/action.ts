interface addUser {
  id: number;
  name: string;
  surname: string;
  age: number;
}
export const addUser = ({ id, name, surname, age }: addUser) => ({
  type: "add_user",
  userdata: {
    id,
    name,
    surname,
    age,
  },
});
