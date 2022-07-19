export class OnlineAnalysisServerFunctions {

  static async GetAvailableSoftware() 
  {
    const response = await fetch('http://141.99.126.56:3000/availablesoftware', {
      method:'GET',
      headers: {
          'Content-Type':'application/json', 
          'Access-Control-Allow-Origin': '*'
        } 
      });
    const data = await response.json();
    return data;
  }
};

