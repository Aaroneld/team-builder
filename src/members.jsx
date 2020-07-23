import React from 'react';

import Member from './member';


const Members = props => {


    return(
        <div>
            {props.membersList.map(member => (
                <Member key={member.email} member={member} />
            ))}
        </div>
    );
}

export default Members;