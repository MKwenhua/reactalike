
module.exports = () => {
   return (data) => {
      const chart = new CanvasJS.Chart("donutContain", {
         title: {
            text: "Event Types"
         },
         legend: {
            maxWidth: 350,
            itemWidth: 120
         },
         data: [{
            type: "doughnut",
            showInLegend: false,
            dataPoints: data
         }]
      });
      chart.render();
   }

}