import { User } from '../Models/userModel/user.model';


export class UserDataServerFunctions {
  static loggedInUserID = 0;
  constructor() { }
  static getData = async(url = '', userData: User) => {
    const response = await fetch(url, {
      method:'POST',
      credentials:'same-origin',
      headers: {
          'Content-Type':'application/json',
        
      }, 
      body : JSON.stringify(userData)
      });
    try {
        const dataFromServer = await response.json();
        return dataFromServer;
    } catch (error) {
        console.log(error);
        return error;
    }

  };

  static async LoginUser(user_name: string, user_pwd: string) 
  {
    const response = await fetch
    (
      'http://141.99.126.56:3000/login', 
      {
        method:'POST',
        headers: {
            'Content-Type':'application/json', 
            'Access-Control-Allow-Origin': '*'
          }, 
        body: JSON.stringify({'user_name':user_name, 'user_pwd':user_pwd })                  
      }
    );
    const res = await response.json();
    return res;
  }

  static async UserActivities() 
  {
    const response = await fetch
    (
      'http://141.99.126.56:3000/userrecentactivities', 
      {
        method:'POST',
        headers: {
            'Content-Type':'application/json', 
            'Access-Control-Allow-Origin': '*'
          }, 
        body: JSON.stringify({'user_id':this.loggedInUserID})                  
      }
    );
    
    const res = await response.json();
    console.log(res);
    return res;
  }

  static async UserDatasets() 
  {
    console.log(this.loggedInUserID);
    const response = await fetch
    (
      'http://141.99.126.56:3000/userdatasets', 
      {
        method:'POST',
        headers: {
            'Content-Type':'application/json', 
            'Access-Control-Allow-Origin': '*'
          }, 
        body: JSON.stringify({'user_id':this.loggedInUserID})                  
      }
    );
    
    const res = await response.json();
    console.log(res);
    return res;
  }

  static async UserDatasetsMetadata() 
  {
    console.log(this.loggedInUserID);
    const response = await fetch
    (
      'http://141.99.126.56:3000/userdatasetsmetadata', 
      {
        method:'POST',
        headers: {
            'Content-Type':'application/json', 
            'Access-Control-Allow-Origin': '*'
          }, 
        body: JSON.stringify({'user_id':this.loggedInUserID})                  
      }
    );
    
    const res = await response.json();
    return res;
  }

};