import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface PersonType { 
  name: string, 
  age: number
  gender?: "female" | "male" | "other"
}

export type PeopleStateType = Array<PersonType>
const initialState : PeopleStateType = [
  {name: "Liam", age: 26, gender: "male"}
]

export const peopleSlice = createSlice({
  name: "people", 
  initialState, 
  reducers: {
    addPerson(state: PeopleStateType, action:PayloadAction<PersonType>) { 
      const personObject : PersonType = action.payload 
      if(personObject != undefined) {
        state.push(personObject)
      }
    },
    setAge(state: PeopleStateType, action:PayloadAction<{name: string, age: number}>) { 
      const personObject : PersonType | undefined = 
        state.find(person => person.name == action.payload.name)

      if(personObject == null) return; 
      personObject.age = action.payload.age
    }
  }
})

export const { addPerson, setAge } = peopleSlice.actions

export default peopleSlice.reducer