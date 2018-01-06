import EX from 'reactalikeSource';
import NameTag from 'component/name_tag'
import EditNameTag from 'component/edit_name_tag'
import {
  VIEW_CHANGE
} from 'constants'

class Profile extends EX.Component {
  goBack = () => this.props.dispatch({type: VIEW_CHANGE, payload: 'list_view'})
  render() {
    const { profile, person, nametags, dispatch } = this.props;
    const { mode, guest } = profile
    return (
      <section>
        <button class='btn btn-info'
          onClick={ this.goBack }>
          Go Back
        </button>
        <h2>
          <b>Name:</b>
          {person.name}
        </h2>
        <h4>
          <b>Occupation:</b>
          {person.job}
        </h4>
        <div class='row align-items-center'>
          <div class='col-md-10'>
            <EditNameTag
              person={person}
              nametags={nametags}
              dispatch={dispatch}
              editMode={mode === 'edit_nametag'}/>
          </div>
        </div>
      </section>
    )
  }
}

export default Profile;
