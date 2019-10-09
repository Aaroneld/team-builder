import React, {useState} from 'react';
import Members from './Members';
import FormBuild from './form';
import './App.css';

function App() {

  const [teamList, setTeamList] = useState([]);
  

  function addNewMember (note) {

    const member = {

      id: Date.now(),
      name: note["name"],
      email: note["email"],
      role: note["role"],
    };

    setTeamList([...teamList, member]);
  }

  function deleteMember (id) {

    const memberFilter = teamList.filter(member =>{
      return member.id !== id;
    });

    setTeamList(memberFilter);
  }

  return (
    <div className="App">
      <FormBuild teamListSetter={addNewMember} />
      <Members memberList={teamList} deleteMember={deleteMember} />

    </div>
  );
}

export default App;
