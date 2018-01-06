import EX from 'reactalikeSource';

class NameTag extends EX.Component {
  setOnBlur = (keyName, nametag) => e => this.props.change({
    ...nametag,
    [keyName]: e.target.innerText.trim()
  })
  render() {
    const {nametag, editMode} = this.props;
    return (
      <div class='padd-center'>
        <div class='tag' style={`border-color:${nametag.color}`}>
          <header style={`background:${nametag.color}`}>
            <div class='hello'
              contentEditable={editMode}
              onBlur={this.setOnBlur('headerText', nametag)}>
              {nametag.headerText}
            </div>
          </header>
          <section>
            <div class='mynameis'
              contentEditable={editMode}
              onBlur={this.setOnBlur('intro', nametag)}>
              {nametag.intro}
            </div>
            <div class='my-name-is'
              contentEditable={editMode}
              onBlur={this.setOnBlur('displayName', nametag)}>
              {nametag.displayName}
            </div>
          </section>
          <div class='dottedline'></div>
        </div>
      </div>
    )
  }
}

export default NameTag;
