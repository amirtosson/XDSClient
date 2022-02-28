
export class NewsDatServerFunctions {

  

  constructor() { }
  static getNewsData = async(url = 'http://127.0.0.1:3000/home') => {
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

