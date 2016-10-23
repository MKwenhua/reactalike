const EX = require("../src/ex.js");
const moment = require('moment');
const GraphINTERFACE = require("../graphs/graphs.js");
const GraphOptions = require("../graphs/data_transform.js");
let goBackList = () => {

  EX.SetState({
    compDisplay: "list"
  });

};
let setPie = (frameworkData) => {
  let pieData = GraphOptions.pie(frameworkData);
  return () => {
    GraphINTERFACE.pie(pieData);
  }

}

const Details = EX.component({
  componentName: 'details',
  componentRender: (props) => {
    let ex_framework = props.ex_framework;
    let ex_app = props.ex_app
    if (!ex_framework) {
      return (<div class="col-xs-12">No Data</div>);
    }
    let g = ex_app.data[ex_app.activefw].general;
    let fwInfo = ex_app.fwinfo[ex_app.activefw];
    let showGraphs = false;
    if (ex_app.histData) {
      if (!ex_app.histData.w) {
        showGraphs = true;
        EX.WhenMounted(setPie(ex_app.histData[ex_app.activefw.toLowerCase()]));
      }

    }

    return (
      <div class="col-xs-12 margin-t">
         
          <div class="row">
          <div class="col-xs-3 col-sm-2">
              <img class="details-img" src={g.owner.avatar_url}   />
          </div>
           <div class="col-xs-3 col-sm-3">
             <h2 class="fw-name" >
                {ex_framework}
              </h2>
              <strong>First Commit</strong>
              <p>{moment(g.created_at).format('LL')}</p>
          </div>
            <div class="col-xs-7">
              <table class="table">
                 <thead>    
              <tr>
                <th>Subscribers</th>
                <th>Forks</th>
                <th>Watching</th>
                <th>Open Issues</th>
              </tr>
            </thead>
                <tbody>
                  <tr>
                    <td class="bold-green"> { g.subscribers_count}</td>
                     <td class="bold-green">{ g.forks}</td>
                      <td class="bold-green">{ g.watchers}</td>
                      <td class="bold-red">{g.open_issues}</td>   
                  </tr>
                 
                </tbody>
              </table>
           <p>{fwInfo.intro}</p>
           <strong>Key Features</strong>
            <p>{fwInfo.extra}</p>
          </div>
      </div>
      
     
     <div class={showGraphs ? "row" : "row hide-elm"}>
     
        <div id="donutContain" class="chart-contain donut-chart col-sm-6">
         </div>
          <div id="growthRate" class="chart-contain donut-chart aaa col-sm-6">
         </div>
     </div>
     <div class="block-button">
        <div onClick={goBackList} class="big-butt cool-button">Back to List</div>
     </div>
     </div>
    )
  }
});

module.exports = Details;