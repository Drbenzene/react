import { useState } from 'react';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputComp from './components/InputComp'
import { STATES_LGA } from './utils/constants/states';
import SelectInputField from './components/Input/SelectInput';

function App() {
  console.log("Hello, World!");
  const [userName, setUserName] = useState("")
  const [state, setState] = useState("")
  const [lgas, setLgas] = useState([])
  let [count, setCount] = useState(0)
  console.log(userName)


  // setUserName("Ayomide")

  console.log(userName)

  const students = [
    {name: 'ato', age:40, id:1},
    {name: 'ato', age:40, id:2},
    {name: 'ato', age:40, id:3},
    {name: 'ato', age:40, id:4},
    {name: 'ato', age:40, id:5},
    {name: 'ato', age:40, id:6},
    {name: 'ato', age:40, id:7},
    {name: 'ato', age:40, id:8},
    {name: 'ato', age:40, id:9},
    {name: 'ato', age:40, id:10}
  ]

      const userInfo = {
        email: 'test@gmail.com',
        age: 90,
        dob: '12/22/1920'
    }

    const interest = ['Football', 'Football', 'volleybal', 'basketball', 'tenis', 'golf']

    // STATES


    //CONDITIONAL RENDERIRNG
    const gender= 'woman'

    return (
    <div className="App">
      <header  id="me" className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link text-5xl"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <SelectInputField  options={[]} label="States" />

      

        {gender === 'male' && (
          <>I'M A GUY OOOOO</>
        )}

        {gender === 'male' ? (<div>
          I'M MALE 00000000
        </div>) : (<div>
          I'M FEMALE OOOOOO
        </div>)}

        {gender === 'male' ? (<div>
          I'M A MALE OOOO
        </div>) : gender === 'guy' ? (<div>
          I'M A GUY OOOOOOO
        </div>) : gender === 'girl' ? (<div>
          I'M A GIRL OOOOOOO
        </div>) : gender === 'woman' ? (<div>
          I'M A WOMAN OOOOOOO
        </div>) : (<div>
          I NO SABI YOU
        </div>)}
        
        <label>
          Email Address
        </label>
        <input
        className='b-2 p-4 w- h-10 text-black'
        placeholder='Welcome'
        type='email'
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value)
        }}
        />

        <button
        onClick={(e) => {
          setCount( count++)
        }}
         className='bg-black text-red rounded-full  px-3 py-1 '>Clieck Me To Increaee</button>

<p>Count  = {count}</p>

{STATES_LGA.map((state, i) => (
  <div>
    <p>{state.state} </p>
    <p>LGAs ARE </p>
    {state.lgas.map((lga, i) => (
      <p>{lga.name}</p>
    ))}
  </div>
))}

        
        <InputComp age="40" userName="Sodi" school="Enegxi"/>
        <InputComp age="10" userName="OSB" userInfo={userInfo}/>
        <InputComp type="email" label="Email Address" userName="AY"/>
        <InputComp userName="AY"/>
        <InputComp userName="NEIGBORU"/>
        <InputComp userName="DDDDDD"/>
        <InputComp userName="DDDDD"/>
        <InputComp userName="A44555Y"/>

        {interest.map((theInterest, i) => (
          <div key={i} >
            <p className='w-20 h-10 b-10 br-20 bg-black ' >{theInterest}</p>
          </div>
        ))}

        <div>These are the students here</div>
        
        {students.map((student) => (
          <div key={student.id} >
            <p> ID: {student.id}, Age: {student.age} - Name: {student.name}</p>
          </div>
        ))}



{/* //LISTOINMG IN REACK */}
      </header>
    </div>
  );
}

export default App;


// ASSIGNMENT -
// CREATE A NEW REACT PROJECT 


// Write a function longestSubstring(str) that returns the length 
// of the longest substring without repeating characters.
// Input
// longestSubstring("abcabcbb")
// longestSubstring("bbbbb")
// Output
// 3  // "abc"
// 1  // "b"

