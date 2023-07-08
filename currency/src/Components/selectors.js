import React, { useEffect, useState } from 'react';
import get_Info from "../api";



function Selectors(){
    const [currencyData, setCurrencyData] = useState([]);
    const [inputData, setInputData]=useState('');
    const [selectedCurrency, setSelectedCurrency] = useState('');

    useEffect(() => {
        async function fetchData() {
        const data = await get_Info();
        setCurrencyData(data.conversion_rates);
    }

    fetchData();
  }, []);

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    const selectedCurrency = event.target.value;
    setSelectedCurrency(selectedCurrency);
  };

    return(
        <div className="Select">
            <select>
                {Object.entries(currencyData).map(([currency, rate]) => (
                <option key={currency} value={rate}>{currency}</option>
                ))}
            </select>
            <input type="text" value={inputData} onChange={handleInputChange}></input>
            <button>Exchange</button>
                    <select value={selectedCurrency} onChange={handleCurrencyChange}>
                        {Object.entries(currencyData).map(([currency, rate]) => (
                            <option key={currency} value={rate}>{currency}</option>
                        ))}
                    </select>
            <input type="text" value={inputData*selectedCurrency} readOnly></input>
        </div>
    )
}

export default Selectors;