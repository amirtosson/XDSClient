import { User } from '../Models/userModel/user.model';


export class UserDataServerFunctions {
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
};