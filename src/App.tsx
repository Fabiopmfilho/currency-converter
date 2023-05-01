import { useState, useEffect } from "react";
import XMLParser from "react-xml-parser";

function App() {
  const [currencies, setCurrencies] = useState([] as any[]);

  useEffect(() => {
    const getCurrent = async () => {
      try {
        fetch("https://economia.awesomeapi.com.br/xml/available/uniq")
          .then((result) => result.text())
          .then((data) => {
            let xml = new XMLParser().parseFromString(data);
            // console.log(xml.children);
            setCurrencies(xml.children);
          });
      } catch (err) {
        console.log("erro -> ", err);
      }
    };
    getCurrent();
  }, []);
  
  const nameCurrenciesFiltered = ["USD", "EUR", "BRL", "BTC"];

  const currenciesFiltered = currencies?.filter((cur: any) =>
    nameCurrenciesFiltered.includes(cur.name)
  );
  console.log("filter -> ", currenciesFiltered);

  return (
    <div>
      <h1>teste</h1>

      <div className="dropdown-menu">{/* {currencies} */}</div>
    </div>
  );
}

export default App;
