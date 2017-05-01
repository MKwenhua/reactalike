import EX from 'reactalike';

const MovieDisplay = EX.component({
  componentName: 'movie display',
  componentRender: (props) => {
    let whenClicked = theEvent(props)
    return (
     <div class="movie-modal">
      <div onClick={whenClicked} class="tag">
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