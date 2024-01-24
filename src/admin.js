import { useState, useEffect } from "react"
import {  getDocs} from "firebase/firestore";
import { database } from './API/firebase';
import Table from 'react-bootstrap/Table';

 function Admin() {
  
    const [users, setUsers] = useState([]);
    const usersCollectionRef =  (database, "users")

    useEffect (() => {

      const getUsers = async()=>{
       
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((docs)=>({...docs.data(), id: docs.id})))
      };
      getUsers()
          })
      
  return (
    <div className="Table">
    <Table striped="columns">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Umur</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {users.map((user)=>{
        return(
          <tr key={user.name}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.uid}</td>
          <td>
       
      &nbsp;
       
          </td>
          
        </tr>
        )
       })}
      </tbody>
    </Table>
  
    </div>
  )
}
export default Admin