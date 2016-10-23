module.exports = () => {
   return (data) => {
    var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
        text: "Framework Performance Results"
      },
      animationEnabled: true,
      data: data
    });
      chart.render();

   }
}
