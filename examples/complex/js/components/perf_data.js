const parseFloats = (obb) => {
   let newObject = {};
   Object.keys(obb).forEach((itm) => {
      let h = obb[itm];
      newObject[itm] = {
         v: parseFloat(h.v),
         sd: parseFloat(h.sd)
      };
   });
   return newObject;
}

let frameWorkPrefs = {};
frameWorkPrefs['Ember'] = parseFloats(JSON.parse('{"create rows":{"v":"747.01","sd":"13.05"},"replace all rows":{"v":"583.99","sd":"15.99"},"partial update":{"v":"37.67","sd":"0.83"},"select row":{"v":"42.24","sd":"0.93"},"swap rows":{"v":"74.69","sd":"1.83"},"remove row":{"v":"92.95","sd":"1.43"},"create many rows":{"v":"5905.1","sd":"191.34"},"append rows to large table":{"v":"1211.5","sd":"12.02"},"clear rows":{"v":"1182.97","sd":"12.84"},"clear rows a 2nd time":{"v":"1617.69","sd":"14.12"}}'));
frameWorkPrefs['Angular1'] = parseFloats(JSON.parse('{"create rows":{"v":"249.56","sd":"6.29"},"replace all rows":{"v":"262.91","sd":"14.03"},"partial update":{"v":"16.41","sd":"0.17"},"select row":{"v":"7.85","sd":"1.4"},"swap rows":{"v":"50.53","sd":"1.5"},"remove row":{"v":"70.72","sd":"1.9"},"create many rows":{"v":"2573.01","sd":"105.2"},"append rows to large table":{"v":"826.88","sd":"17.85"},"clear rows":{"v":"840.63","sd":"6.94"},"clear rows a 2nd time":{"v":"1644.59","sd":"22.86"}}'));
frameWorkPrefs['Angular2'] = parseFloats(JSON.parse('{"create rows":{"v":"192.38","sd":"4.51"},"replace all rows":{"v":"210.64","sd":"5.51"},"partial update":{"v":"11.87","sd":"0.44"},"select row":{"v":"5.08","sd":"0.29"},"swap rows":{"v":"51.76","sd":"1.5"},"remove row":{"v":"133.52","sd":"2.53"},"create many rows":{"v":"1842","sd":"9.49"},"append rows to large table":{"v":"679.67","sd":"14.07"},"clear rows":{"v":"436.54","sd":"27.78"},"clear rows a 2nd time":{"v":"411.59","sd":"31.34"}}'));
frameWorkPrefs['Inferno'] = parseFloats(JSON.parse('{"create rows":{"v":"153.6","sd":"4.05"},"replace all rows":{"v":"160.18","sd":"2.21"},"partial update":{"v":"13.7","sd":"0.41"},"select row":{"v":"6.31","sd":"0.88"},"swap rows":{"v":"48.09","sd":"0.96"},"remove row":{"v":"61.91","sd":"0.42"},"create many rows":{"v":"1488.96","sd":"21.3"},"append rows to large table":{"v":"285.41","sd":"13.48"},"clear rows":{"v":"227.16","sd":"2.26"},"clear rows a 2nd time":{"v":"227.97","sd":"3.15"}}'));
frameWorkPrefs['React'] = parseFloats(JSON.parse('{"create rows":{"v":"187.28","sd":"8.94"},"replace all rows":{"v":"190.16","sd":"2.20"},"partial update":{"v":"16.40","sd":"0.66"},"select row":{"v":"5.96","sd":"0.63"},"swap rows":{"v":"48.25","sd":"1.02"}, "remove row":{"v":"64.89","sd":"2.16"},"create many rows":{"v":"1839.96","sd":"24.52"},"append rows to large table":{"v":"297.09","sd":"18.33"},"clear rows":{"v":"371.16","sd":"18.56"},"clear rows a 2nd time":{"v":"354.71","sd":"23.41"}}'));
frameWorkPrefs['Vue'] = parseFloats(JSON.parse('{"create rows":{"v":"259.77","sd":"9.46"},"replace all rows":{"v":"261.84","sd":"8.52"},"partial update":{"v":"15.76","sd":"0.56"},"select row":{"v":"7.33","sd":"0.48"},"swap rows":{"v":"52.96","sd":"1.02"},"remove row":{"v":"70.61","sd":"0.85"},"create many rows":{"v":"2705.86","sd":"148.47"},"append rows to large table":{"v":"743.44","sd":"14.95"},"clear rows":{"v":"434.58","sd":"12.47"},"clear rows a 2nd time":{"v":"435.33","sd":"7.33"}}'));


module.exports = frameWorkPrefs;