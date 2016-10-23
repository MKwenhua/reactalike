const EX = require("../src/ex.js");
const GraphINTERFACE = require("../graphs/graphs.js");
const GraphOptions = require("../graphs/data_transform.js");

const addMetric = (num, compData) => {
  return () => {
    let mOn = compData.metricsOn;

    let mOnln = mOn.length;
    let ok = mOn.filter((v) => v !== num)
    if (ok.length === mOnln || ok.length === 0) {
      ok.push(num);
    } 

    if (ok.length > 3) {
      ok.shift();
    }

    let newData = Object.assign({}, compData, {
      metricsOn: ok
    });

    EX.SetState({
      graph: newData
    });

  }
} 
const makeList = (metrics, graphData) => {
  let mt = graphData.metricsOn
  return metrics.map((met, i) => {
    let res = mt[0] === i || mt[1] === i || mt[2] === i;
    let whenClicked = addMetric(i, graphData);
    return <li onClick={whenClicked} class={res ? "metric m-select": "metric"} >{met.m2}</li>
  });
}
let goBackList = () => {

  EX.SetState({
    compDisplay: "list"
  });

};
let mapMetrics = (mList, metrics) => {
  return mList.map((itm) => {
    return metrics[itm].m
  });
}
let graphCallBack = (mList, metrics, gType) => {
  let graphInfo = GraphOptions[gType](mapMetrics(mList, metrics));
  console.log('graphInfo', graphInfo);
  return () => {
    GraphINTERFACE[gType](graphInfo, "chartContainer");
  }
}
const Graph = EX.component({
  componentName: 'graph',
  componentRender: (props) => {
    let metricList = makeList(props.ex_metrics, props.ex_data);

    EX.WhenMounted(graphCallBack(props.ex_data.metricsOn, props.ex_metrics, props.ex_data.type));
    return (
      <div class="col-xs-12 graph-part">
         <p class="has-source"><a class="data-from" href="http://www.stefankrause.net/wp/" target="_blank">Data Source</a></p>
         <ul class="metricsList">
           {metricList}
         </ul>
         <div id="chartContainer" class="chart-contain">
         </div>
        <div class="block-button">
        <div onClick={goBackList} class="big-butt cool-button">Back to List</div>
     </div>
     </div>
    )
  }
});

module.exports = Graph;