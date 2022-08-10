import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, LogarithmicScale } from 'chart.js';
import { PlottingSceneItem } from "../../objects/plotting-scene-item";
import { PlottingScenesService } from "../../services/plotting-scenes.service";

@Component({
  selector: 'app-plotting-scene',
  templateUrl: './plotting-scene.component.html',
  styleUrls: ['./plotting-scene.component.css']
})
export class PlottingSceneComponent implements OnInit {
  @ViewChild(BaseChartDirective) _chart?: BaseChartDirective;

  ChartsScenes : PlottingSceneItem[] = []
  Charts : {canvasName:string, datasetsPlotted:string[] , chart:Chart}[] = []

  newColor:string = '';
  backGroundColor:string = '';
  isNameAlreadyUsed = false;
  constructor(private pSS : PlottingScenesService) 
  { 
    Chart.register(LogarithmicScale);
  }

  public chartClicked(e: any): void {

  }

  chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {

  }


  ngOnInit(): void {
  }

  Test($event:string){
    //var s = $event as string;
    var col = document.getElementById("datasets") as HTMLSelectElement;
    var foundInd = -1
    for (let index = 0; index < this.ChartsScenes.length; index++) {
      if (this.ChartsScenes[index].name === $event) {
        foundInd = index;
      } 
    }

    var chart = this.ChartsScenes[foundInd]
    var chartConfig = chart as ChartConfiguration;
    for (let index = 0; index < chartConfig.data.datasets.length; index++) {
      if (chartConfig.data.datasets[index].label === col.value) {
        chartConfig.data.datasets[index].borderColor = this.newColor;
        chartConfig.data.datasets[index].hoverBorderColor = this.newColor;
        chartConfig.data.datasets[index].hoverBackgroundColor = this.newColor;
        chartConfig.data.datasets[index].backgroundColor =  this.newColor;
        break;
      } 
    }
    var el = document.getElementById($event) as HTMLCanvasElement;
    el.style.backgroundColor = this.backGroundColor
    this.Charts[foundInd].chart.update()

  }


  AddNewPlottingScene(){
    var scene = new PlottingSceneItem()
    var inp = document.getElementById("scene-name") as HTMLInputElement;
    scene.name = inp.value;
    for (let index = 0; index < this.ChartsScenes.length; index++) {
      this.isNameAlreadyUsed = scene.name == this.ChartsScenes[index].name
      if(this.isNameAlreadyUsed)break
    }

    if(this.isNameAlreadyUsed)return;
    
    this.ChartsScenes.push(scene)
    this.pSS.AddScene(scene.name)
    this.ClosePlottingSceneDetails()
  }

  RemoveAllScenes(){
    this.ChartsScenes = [];
    this.pSS.RemoveAll()
  }

  OpenPlottingSceneDetails(){
    var sD = document.getElementById("scene-details")as HTMLDivElement;
    sD.style.display = "block"

  }

  ClosePlottingSceneDetails(){
    var sD = document.getElementById("scene-details")as HTMLDivElement;
    sD.style.display = "none";
  }

  onLogScaleCheckboxChange(event: { target: any; }){

  }

  PlotData(X:number[], Y:number[][], scenename:string, datasetName:string){
    
    var ctx = document.getElementById(scenename) as HTMLCanvasElement;
    var ctxa = ctx.getContext('2d')!;

    var foundInd = -1
    for (let index = 0; index < this.ChartsScenes.length; index++) {
      if (this.ChartsScenes[index].name === scenename) {
        foundInd = index;
      } 
    }

    var chart = this.ChartsScenes[foundInd]

    var chartConfig = chart as ChartConfiguration;
    var d_pure = {
      data: Y[0],
      label: datasetName +'_Pure',
    }
    var d_noise = {
      data: Y[1],
      label:datasetName +'_Noise',
    }

    var d_denoised = {
      data: Y[2],
      label:datasetName +'_Denoised',
    }


    if (chart.isIntialized) {
      if((chartConfig.data.datasets.length % 3)!= 0){
        if(Y[2].length>0)chartConfig.data.datasets.push(d_denoised)
        this.Charts[foundInd].chart.update()
      }
      if (this.Charts[foundInd].datasetsPlotted.includes(datasetName)) {
        return
      }
      chartConfig.data.datasets.push(d_pure)
      chartConfig.data.datasets.push(d_noise)

      if(Y[2].length>0)chartConfig.data.datasets.push(d_denoised)
      this.Charts[foundInd].datasetsPlotted.push(datasetName)
      this.Charts[foundInd].chart.update()
    } else {
      var chartConfig = chart as ChartConfiguration;
      chartConfig.data.datasets[0] =  d_pure
      chartConfig.data.datasets.push(d_noise)
      if(Y[2].length>0)chartConfig.data.datasets.push(d_denoised)
      chartConfig.data.labels= X
      chart.isIntialized = true
      chartConfig.options?.onClick?.bind(this.chartClicked)
      const myChart = new Chart(ctxa, chartConfig);
      this.Charts.push({canvasName:scenename, datasetsPlotted:[datasetName],chart:myChart })
    }
  }
  ResetData(){

  }

   OpenChartSetting(e: string){
      var el = document.getElementById(e+'-setting') as HTMLDivElement;
      el.classList.toggle('hidden')
   }

  CanvasDownload(canvasID:string){
    var el = document.getElementById(canvasID) as HTMLCanvasElement;
    var image = el.toDataURL();
    var aDownloadLink = document.createElement('a');
    aDownloadLink.download = canvasID+'_image.png';
    aDownloadLink.href = image;
    aDownloadLink.click();
  }
}








  // public lineChartData: ChartConfiguration['data'] = {
  //   datasets: [
  //     {
  //       data: [ ],
  //       label: '',
  //       backgroundColor: 'rgba(0,0,0,0)',
  //       borderColor: 'rgba(148,159,177,1)',
  //       pointBackgroundColor: 'rgba(148,159,177,1)',
  //       pointBorderColor: '#fff',
  //       pointHoverBackgroundColor: '#fff',
  //       pointHoverBorderColor: 'rgba(148,159,177,0.8)',
  //       fill: 'start',
  //     }
  //   ],
  //   labels: []
  // };



  // public lineChartOptions: ChartConfiguration['options'] = {
  //   elements: {
  //     line: {
  //       tension: 0.9
  //     }
  //   },
  //   plugins: {
  //     title: {
  //         display: true,
  //         text: 'Custom Chart Title'
  //     }
  //   },
  //   scales: {
  //     x: {
  //       title:{
  //         display:true,
  //         text:'Time'
  //       },
  //       type:'logarithmic', 
  //       grid: {
  //         color: 'rgba(255,0,0,0.3)',
  //       },
  //       ticks: {
  //           color:'blue',
  //           callback: function(val:any){
  //             return val.toExponential(1);
  //           }
  //         }
  //       },
  //     y: {
  //       title:{
  //         display:true,
  //         text:'Correlation'
  //       },
  //       grid: {
  //         color: 'rgba(255,0,0,0.3)',
  //       },
  //       ticks: {
  //         color: 'red'
  //       },
        
  //     }
  //   },
  // };

  // public lineChartType: ChartType = 'line';
  

  // onLogScaleCheckboxChange(event: { target: any; }){

  //   let clone = JSON.parse(JSON.stringify(this.lineChartOptions));
  //   clone.scales.x.ticks.callback = function(val:any){
  //     return val.toExponential();
  //   }

  //   if(event.target.checked){
  //     clone.scales.x.type = "logarithmic"
  //   }
  //   else{
  //     clone.scales.x.type = "linear"
  //   }
  //   //this.lineChartOptions = clone
  // }
