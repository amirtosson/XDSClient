export class NewsDatServerFunctions {

  

  constructor() { }
  static getNewsData = async(url = 'http://141.99.126.56:3000/getnews') => {
    const response = await fetch(url, {
      method:'GET',
      mode: 'no-cors',
      headers: {
           'Content-Type':'application/json', 
           'Access-Control-Allow-Origin': '*'
         }, 
       });
     try {
        const dataNewsServer = await response.json();
        console.log(dataNewsServer);
        return dataNewsServer;
        
     } catch (error) {
        console.log(error);
         return error;
     }

  };
};

