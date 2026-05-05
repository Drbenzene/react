import logo from './logo.svg';
import './App.css';
import InputComp from './components/InputComp'

function App() {
  console.log("Hello, World!");

      const userInfo = {
        email: 'test@gmail.com',
        age: 90,
        dob: '12/22/1920'
    }
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

        <InputComp age="40" userName="Sodi" school="Enegxi"/>
        <InputComp age="10" userName="OSB" userInfo={userInfo}/>
        <InputComp type="email" label="Email Address" userName="AY"/>
        <InputComp userName="AY"/>
        <InputComp userName="NEIGBORU"/>
        <InputComp userName="DDDDDD"/>
        <InputComp userName="DDDDD"/>
        <InputComp userName="A44555Y"/>


      </header>
    </div>
  );
}

export default App;
