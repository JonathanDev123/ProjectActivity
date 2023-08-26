import './App.css';

// Ito yun second item sa activity pre
import './styles/second.scss';
import Second from './SecondActivity/SecondActivity';

// ito yun first item sa activity
// import './styles/first.scss';
// import Calculator from './FirstSimpleComponent';

// TYPE MO LANG " CTRL + / " para mag uncomment

function App() {
  return (
    <div className="App">
      {/* First Item sa Activity */}
      {/* <Calculator/> */}

      {/* Second Item sa Activity */}
      <Second></Second>
    </div>
  );
}

export default App;
