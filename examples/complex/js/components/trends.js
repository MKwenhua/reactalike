const EX = require("../src/ex.js");

let goBackList = () => {
  EX.SetState({
    compDisplay: "list"
  });

};

const Trends = EX.component({
  componentName: 'trends',
  componentRender: (props) => {
    
    return (
      <div class="col-xs-12">
        <p class="center-text paddy"><h1>Need to parse and analyze GitHub archive data. . .  </h1></p>
            <div class="block-button">
        <div onClick={goBackList} class="big-butt cool-button">Back to List</div>
     </div>
     </div>
    )
  }
});
module.exports = Trends;