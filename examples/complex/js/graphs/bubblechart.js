
module.exports = () => {
   return (data) => {
      const chart = new CanvasJS.Chart("chartContainer", {
         title: {
            text: "Comparison among Countries on Fertility Rate Vs Life Expectancy in 2009"
         },
         data: [{
            type: "bubble",
            dataPoints: [{
                  x: 64.8,
                  y: 2.66,
                  z: 12074.4,
                  name: "India"
               }, {
                  x: 73.1,
                  y: 1.61,
                  z: 13313.8,
                  name: "China"
               }, {
                  x: 78.1,
                  y: 2.00,
                  z: 306.77,
                  name: "US"
               }, {
                  x: 68.5,
                  y: 2.15,
                  z: 237.414,
                  name: "Indonesia"
               }, {
                  x: 72.5,
                  y: 1.86,
                  z: 193.24,
                  name: "Brazil"
               }, {
                  x: 76.5,
                  y: 2.36,
                  z: 112.24,
                  name: "Mexico"
               }, {
                  x: 50.9,
                  y: 5.56,
                  z: 154.48,
                  name: "Nigeria"
               }, {
                  x: 68.6,
                  y: 1.54,
                  z: 141.91,
                  name: "Russia"
               },

               {
                  x: 82.9,
                  y: 1.37,
                  z: 127.55,
                  name: "Japan"
               }, {
                  x: 79.8,
                  y: 1.36,
                  z: 81.90,
                  name: "Australia"
               }, {
                  x: 72.7,
                  y: 2.78,
                  z: 79.71,
                  name: "Egypt"
               }, {
                  x: 80.1,
                  y: 1.94,
                  z: 61.81,
                  name: "UK"
               }, {
                  x: 55.8,
                  y: 4.76,
                  z: 39.24,
                  name: "Kenya"
               }, {
                  x: 81.5,
                  y: 1.93,
                  z: 21.95,
                  name: "Australia"
               }, {
                  x: 68.1,
                  y: 4.77,
                  z: 31.09,
                  name: "Iraq"
               }, {
                  x: 47.9,
                  y: 6.42,
                  z: 33.42,
                  name: "Afganistan"
               }, {
                  x: 50.3,
                  y: 5.58,
                  z: 18.55,
                  name: "Angola"
               }
            ]
         }]
      });

      chart.render();

   }
}
