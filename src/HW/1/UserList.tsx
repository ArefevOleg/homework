
type AddressType = {
  street: string; // ПОДПРАВЛЯЕМ any
  city: string; // ПОДПРАВЛЯЕМ any
};

type UserType = {
  // ПРИДЕТСЯ САМОМУ)
  address: AddressType;
  age: number;
  id: number;
  name: string;
};

type UserListPropsType = {
  users: UserType[]; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ... 
};

export const UserList = (props: UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <ul>
       {props.users.map((user) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
         <li key={user.id} id={`hw01-user-${user.id}`}>
           <strong>{users.name}</strong> (Age: {users.age})<strong> Address:</strong>
           {users.address.street}, {users.address.city}
         </li>
       ))}
      </ul>
    </div>
  );
};
