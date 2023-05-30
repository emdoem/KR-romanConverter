import './App.css';
import ArabicConverter from './components/ArabicConverter';
import RomanConverter from './components/RomanConverter';

function App() {
  return (
    <>
      <RomanConverter className="converter"/>
      <ArabicConverter className="converter"/>
    </>
    
  );
}

export default App;
