import './App.css'
import {useState} from "react";

function App() {
    const [amountOfStrawberries, setAmountOfStrawberries] = useState(0)
    const [amountOfBananas, setAmountOfBananas] = useState(0)
    const [amountOfAppels, setAmountOfAppels] = useState(0)
    const [amountOfKiwis, setAmountOfKiwis] = useState(0)

    const increment = () => {
        increment()
        this.counter += 1;
    }

    const decrement = () => {
        decrement()
        this.counter += 1;
    }

        const resetCounters = () => {
            setAmountOfStrawberries(0)
            setAmountOfBananas(0)
            setAmountOfAppels(0)
            setAmountOfKiwis(0)
        };

        return (
            <>
                <h1>Fruitmand bezorgservice</h1>
                <section>
                    <h2>Aardbeien</h2>
                    <button onClick={() => setAmountOfStrawberries(previous => previous - 1)}>-</button>
                    <p>{amountOfStrawberries}</p>
                    <button onClick={() => setAmountOfStrawberries(previous => previous + 1)}>+</button>
                </section>

                <section>
                    <h2>Bananen</h2>
                    <button onClick={() => setAmountOfBananas(previous => previous - 1)}>-</button>
                    <p>{amountOfBananas}</p>
                    <button onClick={() => setAmountOfBananas(previous => previous + 1)}>+</button>
                </section>

                <section>
                    <h2>Appels</h2>
                    <button onClick={() => setAmountOfAppels(previous => previous - 1)}>-</button>
                    <p>{amountOfAppels}</p>
                    <button onClick={() => setAmountOfAppels(previous => previous + 1)}>+</button>
                </section>

                <section>
                    <h2>Kiwi's</h2>
                    <button onClick={() => setAmountOfKiwis(previous => previous - 1)}>-</button>
                    <p>{amountOfKiwis}</p>
                    <button onClick={() => setAmountOfKiwis(previous => previous + 1)}>+</button>
                </section>

                <button>Reset</button>
            </>
        )
    }

    export default App;