export class ServerFunctions {

  static async GenerateDataset(
    datasetName:string,
    constant:number,
    beta:number,
    gamma:number,
    noiseFactor:number,
    size:number,
    ) 
  {
    const response = await fetch('/api/python/generatedataset', {
      method:'POST',
      headers: {
          'Content-Type':'application/json', 
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json'
        },
      body: JSON.stringify(
        {
          'name':datasetName, 
          'constant':constant,
          'beta':beta,
          'gamma':gamma,
          'noiseFactor':noiseFactor,
          'size':size,
        })  
      })
    const data = await response.json();
    return data;
  }

  static async DenoiseDataset(dataset:number[]) {
    const response = await fetch('/api/python/denoisedataset', {
      method:'POST',
      headers: {
          'Content-Type':'application/json', 
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json'
        },
      body: JSON.stringify(
        {
          'data':dataset, 
        })  
      })
    const data = await response.json();
    return data;
  }

  static async SaveDataset(dataset:any, userID:any) {
    const response = await fetch('/api/python/savedataset',{
      method:'POST',
      headers: {
          'Content-Type':'application/json', 
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json'
        },
      body: JSON.stringify(
        {
          'data':dataset, 
          'user_id':userID
        })  
    })
    const data = await response.json();
    return data;
  }

  static async GetSavedDatasets(userID:any){
    const response = await fetch('/api/python/getsaveddatasets', {
      method:'POST',
      headers: {
          'Content-Type':'application/json', 
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json'
        },
      body: JSON.stringify(
        {
          'user_id':userID
        }) 
    })
    const data = await response.json();
    return data;
  }

  static async GetDatasetParasByDOI(datasetDOI:string, userID:any){
    const response = await fetch('/api/python/getdatasetsparasbydoi', {
      method:'POST',
      headers: {
          'Content-Type':'application/json', 
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json'
        },
      body: JSON.stringify(
        {
          'user_id':userID,
          'dataset_doi':datasetDOI
        }) 
    })
    const data = await response.json();
    return data;
  }

  static async DeleteSavedDatasetByDOI(datasetDOI:string, userID:any) {
    const response = await fetch('/api/python/deletesaveddatasetbydoi', {
      method:'POST',
      headers: {
          'Content-Type':'application/json', 
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json'
        },
      body: JSON.stringify(
        {
          'user_id':userID,
          'dataset_doi':datasetDOI
        }) 
    })
    const data = await response.json();
    return data;
    
  }

};

