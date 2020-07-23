import React, { useState } from 'react';
import './App.css';

import Members from './members';
import Form from './form';

function App() {


  const testMembers = [
    {
      name: "aaron",
      email: "merrified48@dsad.com",
      role: "tl"
    },
    {
      name: "aarsdason",
      email: "merridsadfied48@dsad.com",
      role: "tll"
    }
  ]

  const [membersList, setMembersList] = useState(testMembers);
 
  return (
    <div className="App">
      <Form setMembersList={setMembersList} membersList={membersList}/>
      <Members membersList={membersList}/>
    </div>
  );
}

export default App;
