import EX from 'reactalikeSource';

class ListItem extends EX.Component {
  render() {
    let {suggestion, typed, clickAction} = this.props.ex_data
    let regex = new RegExp( '(' + typed + ')', 'gi')
    let matchText = new RegExp( typed, 'i')
    let highlightedText = suggestion.split(regex).map((text, i) => {
      if (matchText.test(text)){
        return <b>{text}</b>
      }
      return <span>{text}</span>
    })
    return <li onClick={clickAction}>{highlightedText}</li>

  }
}
export default ListItem
