import './App.css';
import Head from './Components/header';
import Selectors from './Components/selectors';
import CurrencyTable from './Components/table';
import Form from './Components/form';


function App() {
  
  return (
    <div className="App">
      <Head/>
      <Selectors/>
      <CurrencyTable/>
      <Form/>
    </div>
  );
}

export default App;
