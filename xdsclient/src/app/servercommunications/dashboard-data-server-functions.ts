export class DashboardDataServerFunctions {

  static async UploadDataset(userId: Number, file:string) 
  {
    const response = await fetch('http://141.99.126.56:3000/uploadfile', {
      method:'POST',
      headers: {
          'Content-Type':'application/json', 
          'Access-Control-Allow-Origin': '*'
        } , 
        body: JSON.stringify({'user_id':userId, 'file_name':file}) 
      });
    const news = await response.json();
    return news;
  }
};

