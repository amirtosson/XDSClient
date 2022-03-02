export class NewsDatServerFunctions {

  constructor() { }


  static async fetchMoviesJSON() 
  {
    const response = await fetch('http://141.99.126.56:3000/getnews', {
      method:'GET',
      headers: {
          'Content-Type':'application/json', 
          'Access-Control-Allow-Origin': '*'
        } 
      });
    const movies = await response.json();


    return movies;
  }
};

