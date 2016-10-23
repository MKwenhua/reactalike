const EX = require("../src/ex.js");
const Capitalize = require("../src/lib/handy_funcs.js").capitalize;
const moment = require('moment');

let infoClick = (framework) => {
  return () => {
    EX.SetState({
      compDisplay: "details",
      activefw: framework,
      details: {
        onview: framework
      }
    });
  }
};

const DropView = EX.component({
  componentName: 'dropview',
  state: {

  },
  componentRender: (props) => {
    let {
      ex_data,
      ex_app
    } = props;
    if (!ex_data) {
      return (<div>No Repo</div>)
    }
 
    let g = ex_data.general;
    let repoName = Capitalize(g.name);
    let getInfo = infoClick(ex_data.repoName);
    let fsClass = "bold-span"
    if (ex_data.stats.size > 200) {
      fsClass = "bold-span bold-huge";
    }
    if (ex_data.stats.size < 100) {
      fsClass = "bold-span bold-great";
    }

    return (
      <div class="repo-data-stuff"  > 
         <div class="block-pic-name">
         <img class="detials-img" src={g.owner.avatar_url}   />
         <div class="repo-info-block">
          <h4 class="bold-h4">{ex_data.repoName}</h4>
          <div class="col-xs-6">
            <p><span class="bold-span-title">Created:</span> { moment(g.created_at, "YYYYMMDD").fromNow() }</p>
            <p><span class="bold-span-title">HomePage:</span> <a href={ g.homepage}>{ g.homepage}</a></p>
             <p><span class="bold-span-title">File Size:</span><span class={fsClass}> { ex_data.stats.fileSize}</span>{ex_data.stats.fsx}</p>
          </div>
          <div class="col-xs-6">
            <p><span class="icon-span"><i class="fa fa-star yellow-star" aria-hidden="true"></i></span> { g.stargazers_count }</p>
            <p><span class="icon-span" ><i class="fa fa-code-fork" aria-hidden="true"></i></span>{g.forks}</p>
             <p><span class="icon-span" ><i class="fa fa-exclamation-circle" aria-hidden="true"></i></span>{g.open_issues}</p>
          </div>
         </div>
       

 
     
      </div>
      
     <div  class="row center-text">
      <strong onClick={getInfo} class="more-info">More info on {ex_data.repoName}</strong>
     </div>
   
    </div>

    )
  }
});
module.exports = DropView;