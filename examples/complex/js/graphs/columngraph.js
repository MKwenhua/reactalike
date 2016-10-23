module.exports = () => {
  return (data, chartId) => {
    var chart = new CanvasJS.Chart(chartId, {

      animationEnabled: true,
      data: data
    });
    chart.render();

  }
}