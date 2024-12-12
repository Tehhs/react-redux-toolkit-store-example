import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addPerson, PeopleStateType, PersonType } from './redux/peopleReducer';

function App() {
  const [formState, setFormState] = useState<{
    name?: string, 
    age?: number, 
    gender?: string 
  }>({});
  const dispatch = useDispatch(); 

  const _setFormName = (name:string) => setFormState({...formState, name})
  const _setFormAge = (age:number) => setFormState({...formState, age})
  const _setFormGender = (gender:string) => setFormState({...formState, gender})
  const _onButtonClick_AddPerson = () => {
    dispatch(addPerson({
      name: formState.name, 
      age: formState.age,
      gender: formState.gender 
    }))
    setFormState({})
  }

  const people = useSelector((state: any) => state.people);

  return (
    <>
      <h2>Redux store example</h2>
      <div>
        {people.map((person: PersonType, personIndex: number) => {
          return (
            <div key={personIndex}>
              <span>
                Name ({person.name}) {', '}
              </span>
              <span>
                Age ({person.age}) {', '}
              </span>
              <span>
                Gender ({person.gender}) {', '}
              </span>
            </div>
          );
        })}

        <br/>
        <br/>

        <div>
          <input value={formState.name} type='text' placeholder="name" onChange={e => _setFormName(e.target.value)}/>
          <input value={formState.age} type='text' placeholder="age" onChange={e => _setFormAge(Number(e.target.value))}/>
          <input value={formState.gender} type='text' placeholder="gender" onChange={e => _setFormGender(e.target.value)}/>
          <input onClick={_onButtonClick_AddPerson} type='button' value="Add"/>
        </div>
      </div>
    </>
  );
}

export default App;
