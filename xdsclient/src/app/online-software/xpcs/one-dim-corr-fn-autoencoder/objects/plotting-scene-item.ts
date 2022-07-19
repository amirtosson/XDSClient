function getLineColor(col:any) {
    return col;
  }
export class PlottingSceneItem
{
    name = "";
    isIntialized = false;

    type = 'line';
    
    data = {
        datasets: [
            {
              data: [],
              label: '',
              borderColor: 'rgba(148,159,177,1)',
              pointHoverBackgroundColor: 'rgba(148,159,177,1)',
              pointHoverBorderColor: 'rgba(148,159,177,0.8)',
              backgroundColor:'rgba(148,159,177,1)',
              borderWidth:0,
              pointRadius: 0,
            }
          ],
          labels: []
    };

    options = 
    { 
        responsive: true,
        elements: {
          line: {
            tension: 0,
          },
          point:{
            radius: 0
        }
          
        },
        plugins: {

            legend: {
                display: true,
                labels: {
                    color: 'black'
                },
                position:'right',
                maxHeight:200,
                amxWiedth:100
            },
            title: {
                display: true,
                text: ''
          }
        },
        scales: {
          x: {
            title:{
              display:true,
              text:'Time'
            },
            type:'logarithmic', 
            grid: {
              color: 'rgba(255,0,0,0.3)',
            },
            ticks: {
                color:'blue',
                callback: function(val:any){
                  return val.toExponential(1);
                }
              }
            },
          y: {
            title:{
              display:true,
              text:'Correlation'
            },
            grid: {
              color: 'rgba(255,0,0,0.3)',
            },
            ticks: {
              color: 'red'
            },
            
          }
        },
      };

}