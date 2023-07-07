import React, { useEffect, useState } from 'react';
import get_Info from "../api";


function Selectors(){
    const [currencyData, setCurrencyData] = useState([]);

    useEffect(() => {
        async function fetchData() {
        const data = await get_Info();
        setCurrencyData(data.conversion_rates);
    }

    fetchData();
  }, []);
    return(
        <div className="Select">
            <select>
                {Object.entries(currencyData).map(([currency, rate]) => (
                <option value={rate}>{currency}</option>
                ))}
            </select>
            <input type="text"></input>
            <button>Exchange</button>
            <select>
                {Object.entries(currencyData).map(([currency, rate]) => (
                <option value={rate}>{currency}</option>
                ))}
            </select>
            <input type="text"></input>
        </div>
    )
}

export default Selectors;