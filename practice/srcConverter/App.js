import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState({});
  const [usd, setUSD] = useState(0);
  const onChange = (event) => {
    setUSD(event.target.value);
    console.log(usd);
  };
  const onCoinSelect = (event) => {
    // if (event.target.value === "") {
    //   setCoin({});
    //   return;
    // }
    const selectedCoin = coins.find((coin) => coin.id === event.target.value);
    setCoin(selectedCoin);
  };
  console.log(coin);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        //! const defaultCoin = coins.find((coin) => coin.id === "btc-bitcoin");
        //! => coins is not defined yet! => use json!
        const defaultCoin = json.find((coin) => coin.id === "btc-bitcoin");
        setCoin(defaultCoin);
        setLoading(false);
      });
  }, []);
  // [x]: create an input, if 20 usd, show how much bitcoin can be bought
  return (
    <div>
      <h1>The Coin ₿ ({loading ? "" : coins.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <input
            value={usd}
            onChange={onChange}
            type="number"
            placeholder="Write amount of USD..."
          />
          {/* <select onChange={onCoinSelect} value={coin?.id || ""}> */}
          <select onChange={onCoinSelect} value={coin?.id || "btc-bitcoin"}>
            {/* <option value="">Select Option</option> */}
            {coins.map((coin) => (
              <option key={coin.id} value={coin.id}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
              </option>
            ))}
          </select>
          {/* {!coin || Object.keys(coin).length === 0 ? null : ( */}
          {Object.keys(coin).length === 0 ? null : (
            <span>
              You can buy {usd / coin.quotes.USD.price} of {coin.name}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
