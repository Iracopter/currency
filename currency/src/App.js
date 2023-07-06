import './App.css';
import Head from './Components/header';
import Selectors from './Components/selectors';
import CurrencyTable from './Components/table';

function App() {
  return (
    <div className="App">
      <Head/>
      <Selectors/>
      <CurrencyTable/>
    </div>
  );
}

export default App;
