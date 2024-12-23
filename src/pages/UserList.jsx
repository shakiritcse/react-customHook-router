import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users?_limit=5`)
    .then(res=>res.json())
    .then(data=>{
        setUsers(data)
        setisLoading(false)
    })
    .catch((err)=>{
     setError(err.message);
     setisLoading(false);
     setUsers([])
    })
  },[])

  if(isLoading){
    return <div>Loading...</div>
}
if(error){
    return <div>{error}</div>
}
  return (
    <div>
      <h2>User List Are Given:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
