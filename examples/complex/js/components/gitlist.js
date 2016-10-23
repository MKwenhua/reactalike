const EX = require("../src/ex.js");
const moment = require('moment');

let detailsClick = (framework, data, appdata) => {
  return () => {
    let payLoad = Object.assign({}, appdata, {
      compDisplay: "details",
      details: {
        onview: framework
      }
    });
    EX.SetState(payLoad);
  }
};
let draggedRepo = (repo) => {
  return () => {
    console.log('dragged', repo);
    EX.SetState({
      dragged: repo
    });
  }
}
let draggedRepoEnd = (repo, app, data) => {
  return () => {
    if (!app.dropzoneOver) {
      return
    }
    console.log('draggedEnd', repo);
    data.repoName = app.dragged;
    let dropSee = app.dropzoneOver ? data : null;
    EX.SetState({
      dragged: null,
      dropzoneOver: false,
      dropSee: dropSee
    });
  }
}

const dragCallBacks = (repo, event) => {
  if (event === 'drag') {
    return draggedRepo(repo)
  }
  if (event === 'dragend') {
    return draggedRepo(repo)
  }

};
const GitRepo = EX.component({
  componentName: 'list2',
  state: {

  },
  componentRender: (props) => {
    let {
      ex_framework,
      ex_data,
      ex_app,
      ex_stars
    } = props;
    let show = ex_app.activefw === ex_framework;

    let g = ex_data.general;
    let theFunc = () => {
      let change = ex_app.activefw === ex_framework ? "none" : ex_framework;
      let payLoad = Object.assign({}, ex_app, {
        activefw: change
      });
      EX.SetState(payLoad);
    };

    let getDetails = detailsClick(ex_framework, ex_data, ex_app);

    return (
    <a class="li-scale li-box" draggable="true" onDragStart={draggedRepo(ex_framework)} onDragEnd={draggedRepoEnd(ex_framework,ex_app ,ex_data)} style={props.ex_ani} > 
      <div class="info-block" onClick={theFunc}> 
          <img class="li-img" src={g.owner.avatar_url}   />
          <strong class="fw-header" >{ex_framework}</strong>
          <span class="float-right"><i class="fa fa-star yellow-star" aria-hidden="true"></i></span>
          <span class="float-right">{ex_stars.toString()}</span>
      </div>
    <div class={show ? "details-block height-auto" : "details-block height-zero" }>
      <div class="col-xs-6 center-text">
       <p class="p-heading">Framework Age:</p>
       { moment(g.created_at, "YYYYMMDD").fromNow() }
       </div>
      <div class="col-xs-6 center-text"> 
        <p class="p-heading">Framework HomePage:</p>
        <a href={ g.homepage}>{ g.homepage}</a>
      </div>
      
     <div  class="row center-text">
      <strong onClick={getDetails} class="more-info">More info on {ex_framework}</strong>
     </div>
    </div>
    </a>

    )
  }
});
module.exports = GitRepo;