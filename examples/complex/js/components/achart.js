const EX = require("../src/ex.js");
const GraphINTERFACE = require("../graphs/graphs.js");
const GraphOptions = require("../graphs/data_transform.js");

let goBackList = () => {
  EX.SetState({
    compDisplay: "list"
  });

};

let setMetricsClose = (achart) => {
  return (metric) => {
    return () => {
      let allM = Object.assign({}, achart.metrics);
      let m = allM[metric];
      allM[metric] = !m;
      if (achart.graphed.length === 1 && achart.graphed[0] === metric) {
        return
      }
      let graphed = Object.keys(allM).reduce((ob, met) => {
        if (allM[met]) {
          ob.push(met);
        }
        return ob;
      }, []);
      if (graphed.length === 0) {
        graphed.push(metric);
        allM[metric] = true;
      }
      EX.SetState({
        achart: {
          graphed: graphed,
          metrics: allM
        }
      });
    }
  }
}
let setGraph = (type, data, events) => {
  let theData = GraphOptions[type](events, data);
  return () => {
    GraphINTERFACE[type](theData, "aChart");
  }
}
const AChart = EX.component({
  componentName: 'chart',
  componentRender: (props) => {
    let ex_app = props.ex_app;
    let metricView = setMetricsClose(ex_app.achart);
    if (ex_app.eventsData) {
      EX.WhenMounted(setGraph('column', ex_app.eventsData, ex_app.achart.graphed));
    }
    return (
      <div class="col-xs-12">
        <p class="center-text" ><h3>Events by type this Month</h3></p>
        <p class="center-text disclaimer"><small>The general API has a limit to the number of events accessible, so I only have this month. Sorry!</small></p>
      
        <div class="btn-group list-by-w">
         <div onClick={metricView('WatchEvent')} class={  ex_app.achart.metrics.WatchEvent ? "btn btn-info-o tab-sets active" : "btn btn-info-o tab-sets"}>
          WatchEvent
         </div>
         <div onClick={metricView('PushEvent')} class={  ex_app.achart.metrics.PushEvent ? "btn btn-info-o tab-sets active" : "btn btn-info-o tab-sets"}>
          PushEvent
         </div>
         <div onClick={metricView('IssuesEvent')}  class={  ex_app.achart.metrics.IssuesEvent ? "btn btn-info-o tab-sets active" : "btn btn-info-o tab-sets"}>
          IssuesEvent
         </div>
         <div  onClick={metricView('ForkEvent')} class={  ex_app.achart.metrics.ForkEvent ? "btn btn-info-o tab-sets active" : "btn btn-info-o tab-sets"}>
          ForkEvent
         </div>
          <div  onClick={metricView('PullRequestEvent')} class={  ex_app.achart.metrics.PullRequestEvent ? "btn btn-info-o tab-sets active" : "btn btn-info-o tab-sets"}>
          PullRequestEvent
         </div>
  
         </div> 
             <ul class="graphLegend">
         <li><div class="angular"></div>Angular</li>
          <li><div class="ember"></div>Ember</li>
          <li><div class="vue"></div>Vue</li>
          <li><div class="react"></div>React</li>
           <li><div class="inferno"></div>Inferno</li>
         </ul>
           <div id="aChart" class="chart-contain">
         </div>
       
            <div class="block-button">
        <div onClick={goBackList} class="big-butt cool-button">Back to List</div>
     </div>
     </div>
    )
  }
});
module.exports = AChart;