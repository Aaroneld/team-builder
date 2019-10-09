import React from "react";

const Members = props => {

    return (
    <div className="member-list">
        {props.memberList.map(member => {
            return (
            <div className="member" key={member.id}>
                <h2>{member.name}</h2>
                <p>E-mail: {member.email}</p>
                <p>Role: {member.role}</p>
                <button onClick={() => props.deleteMember(member.id)}>
                    Delete
                </button>
            </div>
            );
        })}
    </div>
    );
};

export default Members;