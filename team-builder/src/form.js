import React, {useEffect, useState} from 'react';



function FormBuilder (props) {


    const [member, setMember] = useState();

    function handleChange (event) {

        setMember({...member, [event.target.name]: event.target.value })
    }

    function handleSubmit (event) {

        event.preventDefault();
        props.teamListSetter(member);
    }

    return (

        <div className="member-form">
            <form className="form-actual" onSubmit={handleSubmit}>
                <lable htmlFor="name">Name</lable>
                    <input id ="name" 
                    type="text" 
                    name="name"
                    onChange={event => handleChange(event)}
                    ></input>
                
                <lable htmlFor="email">E-Mail</lable>
                    <input id ="email"  
                    type="text" 
                    name="email"
                    onChange={event => handleChange(event)}/>
                
                <lable htmlFor Role>Role</lable>
                    <input id ="role"  
                    type="text" 
                    name="role"
                    onChange={event => handleChange(event)}/>
                <button type="submit">Add Member</button>
                
            </form>
        </div>

    )
}

export default FormBuilder;