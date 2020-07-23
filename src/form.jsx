import React, { useState } from 'react';



const Form = props => {

    const initialValues = {
        name: "",
        email: "",
        role: ""
    };

    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = e => {
        console.dir(e.target.value, e.target.name);

        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });    
        console.log(formValues);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.setMembersList([...props.membersList,
                            formValues]);
    };

    return (
        <form>
            <label htmlFor="name">Name: </label>
            <input 
                name="name"
                type="text"
                value={formValues.name}
                onChange={handleChange}
                />
            <label htmlFor="email">Email: </label>
            <input 
                name="email"
                type="text"
                value={formValues.email}
                onChange={handleChange}
                />
            <label htmlFor="role">Role: </label>
            <input 
                name="role"
                type="text"
                value={formValues.role}
                onChange={handleChange}
                />
            <button onClick={handleSubmit}>Add Member</button>
        </form>
    );
}

export default Form