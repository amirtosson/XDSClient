 
export class GenerateData { 
    public unitTest = [
        {
            "corr": this.getRndArr(0,1,64),
            "time": this.getRndArr(0.0001,10.0,64),
        }
      ];
    getRndInteger(min:number, max:number) {
        return Math.random() * (max - min)  + min;
    }

    getRndArr(min:number, max:number, length:number) {
        let randArr = []
        for (let index = 0; index < length; index++) {
            randArr.push(this.getRndInteger(min,max))
        }
        return randArr; 
    }
}
