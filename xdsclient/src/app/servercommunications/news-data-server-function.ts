export class NewsDatServerFunctions {

  static async GetNews() 
  {
    const response = await fetch('http://141.99.126.56:3000/getnews', {
      method:'GET',
      headers: {
          'Content-Type':'application/json', 
          'Access-Control-Allow-Origin': '*'
        } 
      });
    const news = await response.json();

    console.log(news);
    return news;
  }
};

