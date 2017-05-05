import EX from 'reactalikeSource';

class ResultAction extends EX.Component {
  render() {
    let {word, img_src, imdb} = this.props.ex_data
    return (
      <div class="action-list-item">
        <div class="col-xs-4">
        <img src={img_src} height="50" />
        </div>
        <div class="col-xs-8">
       <b>{word}</b>
        <p><a href={imdb}>IMDB Link</a></p>
        </div>
      </div>

      )

  }
}
export default ResultAction
