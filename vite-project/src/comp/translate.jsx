
import React, { useState } from "react";
import FetchData from "./fetchData";

const Translate = (props) => {

    const [text, setText] = useState("")
    const [from, setFrom] = useState("sv")
    const [to, setTo] = useState("en")
    const getInput = (t) => {
        console.log(t);
        setText(t)
    }

    const getFrom = (f) => {
        console.log(f);
        setFrom(f)
    }

    const getTo = (t) => {
        setTo(t)
    }
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ marginBottom: '10px' }}>Translate React:</h1>
            <p>Type the text and get instant translation</p>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ marginRight: '10px' }}>Translate from:</span>
                <select style={{ marginRight: '10px' }} onChange={(e) => getFrom(e.target.value)}>
                    <option value="sv">Svenska</option>
                    <option value="en">Engelska</option>
                    <option value="de">Tyska</option>
                </select>
                <span style={{ marginLeft: 'auto', marginRight: '10px' }}>Translate to:
                </span>
                <select onChange={(e) => getTo(e.target.value)}>
                    <option value="en">Engelska</option>
                    <option value="sv">Svenska</option>

                    <option value="de">Tyska</option>
                </select>

            </div>
            <textarea type="textArea" onChange={(e) => getInput(e.target.value)} style={{ marginBottom: '10px', padding: '5px', height: '200px', width: '500px' }} />
            <FetchData searchTerm={text} from={from} to={to}/>
        </div>
    );
}



export default Translate;