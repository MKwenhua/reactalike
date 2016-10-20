const EX = require("../../src/ex.js");

const NameTag = EX.component({
  componentName: 'nametag',
  componentRender: (props) => {
    return (
     <div class="padd-center">
      <div class="tag">
        <header>
            <div class="hello">HELLO</div>
        </header>
        <div class="mynameis">my name is</div>
          <div class="my-name-is">
            {props.ex_person.name}
          </div>
        <div class="dottedline"></div>
      </div>
    </div>
    )
  }
});
let AppState = {
  guests: [
  {
    name: 'Pete',
    job: 'Orderly Drifter'
  }, 
  {
    name: 'Bing Bing',
    job: 'works at 呷哺呷哺'
  }, 
  {
    name: 'Jackie',
    job: 'Movie Star'
  },
  {
    name: 'Bachman',
    job: 'chief innovation officer'
  }
  ]
}

const Layout = {
  state: AppState,
  render: () => {
    let {
      guests
    } = Layout.state;

    let ppl = guests.map((itm, ii) => {
      return  <NameTag ex_person={itm} />;
    });
    return (
      <div class="container">
          {ppl}
      </div>
    )
  }
};
EX.rootComponent = Layout;
EX.SetState = (() => {
  return (payload) => {
    Layout.state = Object.assign({}, Layout.state, payload);
    EX.objectChange(Layout.render());
    console.log(Layout.state);
  }
})();

EX.createComponent(
  Layout.render(), document.getElementById('root'));