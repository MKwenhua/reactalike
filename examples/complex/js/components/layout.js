const EX = require("../src/ex.js");
const AppState = require("../data.js");
const FWlist = require("./fwlist.js");
const Graph = require("./graph.js");
const Details = require("./details.js");
const Trends   = require("./trends.js");
const AChart   = require("./achart.js");
const histData = require("../historicalEvents.js");

histData((allData, reducedData) => {
  console.log('framework events history', allData);
  console.log('framework events history reduced', reducedData);
  EX.SetState({histData: allData, eventsData: reducedData});
})
let displaySwitch = (place) => {
  return () => {
   EX.SetState({
      compDisplay: place
   });
  }
};
const Layout = {
   state: AppState,
   githubHook: (res) => {
      console.log('成龍大哥');
      console.log('responseAholic', res);
      EX.SetState({
         data: res,
         loaded: true,
         frameworks: ['React', 'Angular', 'Vue', 'Inferno', 'Ember']
      });

   },
   render: () => {
      let { 
         frameworks,
         data,
         loaded,
         activefw,
         details,
         graph,
         compDisplay
      } = Layout.state;
 
      
      return (
         <div>
          <div class={ loaded ?  "section-opts" : "hide-elm" }>
            <span onClick={displaySwitch("list")} class={(compDisplay === "list" || compDisplay === "details" )? "opts-span opt-on" : "opts-span"}>
            List
            </span>
             <span  onClick={displaySwitch("graph")} class={compDisplay === "graph" ? "opts-span opt-on" : "opts-span"}>
               Performance
            </span>
             <span onClick={displaySwitch("achart")} class={compDisplay === "achart" ? "opts-span opt-on" : "opts-span"}>
               Compare Events
            </span>
            <span onClick={displaySwitch("trends")} class={compDisplay === "trends" ? "opts-span opt-on" : "opts-span"}>
               Trends
            </span>
          </div>
        <div class={ loaded ? "hide-elm" : "loader" }>Getting Data...</div>
         <div class={ (loaded &&  compDisplay === "list" ) ? "ok" : "hide-elm"}>
            <FWlist ex_data={data} ex_app={Layout.state} ex_loaded={loaded} />
          </div>
          <div class={ compDisplay === "details" ? "fadeinto" : "hide-elm"}>
             <Details ex_data={details.data} ex_app={Layout.state}  ex_framework={details.onview} />
          </div>
          <div class={ compDisplay === "graph" ? "ok" : "hide-elm"}>
            <Graph ex_metrics={graph.metrics}  ex_data={graph} />
          </div>
           <div class={compDisplay === "achart" ? "ok" : "hide-elm"}>
             <AChart  ex_app={Layout.state} />
           </div>
           <div class={compDisplay === "trends" ? "ok" : "hide-elm"}>
              <Trends />
          </div>
      </div>
      )
   }
};
EX.rootComponent = Layout;
EX.SetState = (() => {
   return (payload) => {
      Layout.state = Object.assign({}, Layout.state, payload);
      EX.objectChange(Layout.render());
      console.log(Layout.state);
   }
})();



module.exports = Layout;