


export class User{
    userData:{ [key: string]: any } ={
        user_token:"" ,
        about: "",
        affiliation: "",
        firstname: "",
        group: "",
        id: 1,
        img_url: "",
        lastname: "",
        loginname: "",
        position: "",
        topics: [''],
        _id:""
    };
    constructor(){}    
    UserMap(user: any, token:string){
        var keys = Object.keys(user)
        keys.forEach(k =>{
            this.userData[k] = user[k]
           
        })
        this.userData.user_token = token
    }

}
