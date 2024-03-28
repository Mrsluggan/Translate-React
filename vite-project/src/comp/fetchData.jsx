
import { useEffect, useState } from "react";

const FetchData = (props) => {
    const [data, setData] = useState("")
    console.log(props);
    useEffect(() => {
        async function fetchMyAPI() {
            if (props.searchTerm == "") {
                
            }else{
                console.log();
                let response = await fetch(`https://api.mymemory.translated.net/get?q=${props.searchTerm}&langpair=${props.from}|${props.to}`)
                response = await response.json()
                console.log(response);
                setData(response.responseData.translatedText)
            }

        }

        fetchMyAPI()
    }, [props])
    return <div>{data}</div>
}
export default FetchData;