// import React from "react";
// import Axios from "axios";
// import { useState, useEffect } from "react";

// const QuoteGenerator = () => {
//   const [quote, setQuote] = useState("");

//   const apiCallFunc = async () => {
//     try {
//       const data = await Axios.get("https://dummyjson.com/quotes/random");
//       setQuote(data.data.quote);
//     } catch (error) {
//       console.log(error);
//     }
//   };

    // useEffect(() => {
    // apiCallFunc();
    // }, []);

//   return (
//     <div>
//       <button onClick={apiCallFunc}>Generate Quote</button>
//       <h1>{quote}</h1>
//     </div>
//   );
// };

// export default QuoteGenerator;

import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";

const Quotegenrator = () => {

    const [quote, setQuote] = useState("");

    const apiCallFunc = async ()=> {
        try{
            const data = await Axios.get("https://dummyjson.com/quotes/random");
            setQuote(data.data.quote);
        } catch (error){
            console.log(error);
        }
    }

        useEffect(() => {
          apiCallFunc();
        }, []);

    return (
        <div>
            <button onClick={apiCallFunc}>Generate Quote</button>
            <h1>{quote}</h1>
        </div>
    )

}

export default Quotegenrator;































