const getYearMonth = (dateString) => {
  let yearMonth = new Date(Date.parse(dateString));
  return yearMonth.getFullYear() + '_' + (yearMonth.getMonth() + 1);
}

const getReduced = (fwData) => {
  return Object.keys(fwData).reduce((obb, item) => {
    obb[item] = fwData[item].reduce((ob, itm) => {
      let yMkey = getYearMonth(itm.created_at);
      if (!ob[yMkey]) {
        ob[yMkey] = 1;
      } else {
        ob[yMkey] += 1;
      }
      return ob;
    }, {});
    return obb;
  }, {});
}
const getHistData = (cb) => {
  // let xhr = new XMLHttpRequest();
  // xhr.open("GET", 'https://sampledemo-scgraph.rhcloud.com/xhrs/framework_events', true);
  // xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
  // xhr.setRequestHeader('Content-type', 'application/json');
  // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
  // xhr.onload = (e) => {
  //   if (xhr.readyState === 4) {
  //     if (xhr.status === 200) {

        let resp = JSON.parse(document.getElementById("histData").innerText);

        if (resp['angular']) {
          let evnts = Object.keys(resp).reduce((obj, fw) => {
            obj[fw] = getReduced(resp[fw]);
            return obj;
          }, {});

          cb(resp, evnts)
          
          } else {
            cb(resp, null)
          }

    //   } else {

    //   }
    // }
  // };
  // xhr.onerror = (e) => {

  // };
  // xhr.send();
}
module.exports = getHistData;