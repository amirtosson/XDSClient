
export class NewsDatServerFunctions {

  

  constructor() { }
  static getNewsData = async(url = '') => {
    const response = await fetch(url, {
      method:'GET',
      credentials:'same-origin',
      headers: {
           'Content-Type':'application/json', 
         }, 
       });
     try {
        const dataNewsServer = await response.json();
        return dataNewsServer;
        
     } catch (error) {
        console.log(error);
         return error;
     }

  };
};

