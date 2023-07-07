import React, { useEffect, useState } from 'react';
import get_Info from "../api";

function CurrencyTable() {
  const [currencyData, setCurrencyData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await get_Info();
      setCurrencyData(data.conversion_rates);
    }

    fetchData();
  }, []);

  return (
    <div className="tableBlock">
      <h2>Currency in Ukraine</h2>
      <table>
        <tbody>
          <tr>
            <td>Назва валюти</td>
            <td>Сума</td>
          </tr>
          {Object.entries(currencyData).map(([currency, rate]) => (
            <tr key={currency}>
              <td>{currency}</td>
              <td>{rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CurrencyTable;
