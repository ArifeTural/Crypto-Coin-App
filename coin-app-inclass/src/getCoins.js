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

export const getCoins = async (query) =>{
    console.log(query);
    const url = `https://api.coinranking.com/v2/coins?search=${query}`;
    
    const options = {
        headers: {
          'x-access-token': 'coinrankingfb7262aca66d8a48683b6657b1b550c3c8d00b52bff7fe43',
        },
      };
      try{
        const res = await fetch(url,options)
        const coinData = await res.json()
        console.log(coinData);    
      }catch(error){
        console.log(error);

      }
       
    }
      
   