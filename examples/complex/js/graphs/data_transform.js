const frameWorkPrefs = require("../components/perf_data.js");
console.log('frameWorkPrefs', frameWorkPrefs);

const perfKeys = ['React', 'Angular1', 'Angular2', 'Vue', 'Inferno', 'Ember'];
const colorKeys = {
  Angular1: "#1976D2",
  Angular2: "#D81159",
  React: "#00d8ff",
  Vue: "#4fc08d",
  Ember: "#dd6a58",
  Inferno: "#3c4859"
} 
const eventKeys = {
  angular: "#1976D2",
  react: "#00d8ff",
  vue: "#4fc08d",
  ember: "#dd6a58",
  inferno: "#3c4859"
} 
const bar = (metrics) => {
  return perfKeys.map((keyy, ii) => {
    let p = frameWorkPrefs[keyy];
    return {
      type: "bar",
      showInLegend: true,
      legendText: keyy,
      color: colorKeys[keyy],
      dataPoints: metrics.map((type, ii) => {
        return {
          y: p[type].v,
          label: type
        }
      })
    }
  });
}

const column = (metrics, eventz) => {
  return  ['angular', 'ember', 'vue', 'react', 'inferno'].map((fw) => {
    let cl = eventKeys[fw];
    let fww = fw;
    return {
        color: cl,
        dataPoints: metrics.map((met, ii) => {
           let x = ( 5 * ii) + 5;
           return { y: eventz[fw][met]['2016_9'], label: met };
        }) 
      }
         
  });
}
const pie = (obb) => {
  return Object.keys(obb).map((keyy, ii) => {
    return {
          y: obb[keyy].length,
          indexLabel: keyy
        }
    
  });
}

module.exports = {
  bar: bar,
  pie: pie,
  column: column
}