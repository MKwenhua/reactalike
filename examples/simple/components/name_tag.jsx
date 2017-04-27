import EX  from 'reactalikeSource';

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

export default NameTag;
