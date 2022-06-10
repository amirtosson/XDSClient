export class DashboardDataServerFunctions {

  static async UploadDataset(userId: Number, file:any) 
  {
    const response = await fetch('http://141.99.126.56:3000/uploadfile', {
      method:'PUT',
      headers: {
          'Content-Type':'application/json', 
          'Access-Control-Allow-Origin': '*'
        } , 
        body: JSON.stringify({'user_id':userId, 'file':file}) 
      });
    const news = await response.json();
    return news;
  }
};

