// import { useState } from "react";
import { useLoaderData } from "react-router-dom";



const Update = () => {

    const loadedUser = useLoaderData();
    // const [users, setUsers] = useState(loadedUsers)

    // getting updated information to set into the database
    const handleUpdate = (event) => {
        event.preventDefault()

        // data capture
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const UpdatedUser = { name, email }
        console.log(UpdatedUser)


        // update operation - server er shathe connection
        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0){
                    alert("User updated successfully.")
                }
            })
    }


    return (
        <div>
            <h3>Updated information of {loadedUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser?.name} />
                <br />
                <input type="email" name="email" id="" defaultValue={loadedUser?.email} />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;