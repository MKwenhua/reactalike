import EX from 'reactalikeSource';
import {
  VIEW_CHANGE
} from 'constants'

class SideEdit extends EX.Component {
  render() {
    const {dispatch} = this.props;
    return (
      <section>
        <h4>Edit</h4>
        <div class='row'>
          <button class='btn btn-info hidden'
            onClick={() => dispatch({type: VIEW_CHANGE, payload: 'edit'})}>
            Add NameTag
          </button>
        </div>
      </section>
    )
  }
}

export default SideEdit;
