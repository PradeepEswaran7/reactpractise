import logo from './logo.svg';
import './App.css';
import FunctionComp from './componets/FunctionComp';
import ClassComp from './componets/ClassComp';
import MyStateComp from './componets/MyStateComp';
import MyEventsComp from './componets/MyEventsComp';
import MyImagesCom from './componets/MyImagesCom';
import MyCssComp from './componets/MyCssComp';
import ParentComp from './componets/ParentComp';
import ClickCounter from './componets/ClickCounter';
import HoverCounter from './componets/HoverCounter';
import CondRenComp from './componets/CondRenComp';
import MynameComp from './componets/MynameComp';
import MyRoutingComp from './componets/MyRoutingComp';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1 className='text-primary bg-info'>Welcome You All In React Session</h1>
       {/* <FunctionComp myName="Panchashil" post="FUllstack Developer"/>
       <ClassComp myName="Anmol" post="Python Developer" /> */}
       {/* <MyStateComp ></MyStateComp>
       <MyEventsComp></MyEventsComp>
       <MyImagesCom ></MyImagesCom>
       <MyCssComp></MyCssComp>
       <ParentComp></ParentComp>
       <ClickCounter></ClickCounter>
       <HoverCounter></HoverCounter> */}
       {/* <CondRenComp /> */}
       {/* <MynameComp /> */}
       <MyRoutingComp/>
    </div>
  );
}

export default App;
