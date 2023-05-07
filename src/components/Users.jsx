import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {

    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)

    // to delete user
    const handleDelete = (_id) => {
        console.log("delete", _id)

        // delete operation
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert("Deleted Successfully")
                    const remaining = users.filter(user => user._id !== _id)
                    setUsers(remaining);
                }
            })
    }



    return (
        <div>
            <h2>Current users: {users.length}</h2>

            {/* UI te data dekhanor jonno */}
            <div>
                {
                    users.map(user => <p
                        key={user._id}
                    >{user.name} : {user.email} : {user._id} 
                    <br />
                    <Link to={`/update/${user._id}`}>
                        <button>Update</button>
                    </Link>
                    <button onClick={() => handleDelete(user._id)}
                    >X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;