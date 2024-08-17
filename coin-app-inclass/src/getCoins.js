import axios from "axios" 
import displayCoins from "./displayCoins.js";

// export const getCoins = (query) =>{
// console.log(query);
// const url = `https://api.coinranking.com/v2/coins?search=${query}`;



// const options = {
//     headers: {
//       'x-access-token': 'coinrankingfb7262aca66d8a48683b6657b1b550c3c8d00b52bff7fe43',
//     },
//   };
  
//   fetch(url, options)
//     .then((response) => response.json())
//     .then((result) => console.log(result));
// }

// export const getCoins = async (query) =>{
//     console.log(query);
//     const url = `https://api.coinranking.com/v2/coins?search=${query}`;
    
//     const options = {
//         headers: {
//           'x-access-token': 'coinrankingfb7262aca66d8a48683b6657b1b550c3c8d00b52bff7fe43',
//         },
//       };
//       try{
//         const res = await fetch(url,options)
//         const coinData = await res.json()
//         console.log(coinData);    
//       }catch(error){
//         console.log(error);

//       }
       
//     }


    export const getCoins = async (query) =>{
        console.log(query);
        const url = `https://api.coinranking.com/v2/coins?search=${query}`;
        
        const options = {
            headers: {
              'x-access-token': 'coinrankingfb7262aca66d8a48683b6657b1b550c3c8d00b52bff7fe43',
            },
          };
          try{
           const res = await axios(url,options)
           console.log(res.data);
           if(!res.data.data.coins.lenght){
            alert("Coin nnot found")
           }else{
            displayCoins(res.data.data.lenght[0])
           }
          }catch(error){
            console.log(error);
    
          }
           
        }
      
   