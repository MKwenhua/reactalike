import EX from 'reactalikeSource';
import NameTag from 'component/name_tag'
import SideEdit from 'component/side_edit'
import Profile from 'component/profile'
import {
  VIEW_PROFILE
} from 'constants'


const setNameTagId = () => ('nt' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-6);

const setUserProfileLink = (personId, dispatch) => () => dispatch({type: VIEW_PROFILE, payload: personId})

window.EX = EX

class Layout extends EX.Container {
  render() {
    const { dispatch, store } = this.props;
    const { guests, nameTags, view, profile } = store;
    const nameTagList = Object.keys(guests).map( personId => (
      <div onClick={setUserProfileLink(personId, dispatch)}>
        <NameTag person={guests[personId]} nametag={nameTags[personId]} editMode='false'/>
      </div>
      )
    );
    return (
      <div class='container'>
        <section class={view === 'list_view' ? 'row' : 'hidden'}>
          <div class='col-md-2 pull-md-10'>
            <SideEdit dispatch={dispatch}/>
          </div>
          <div class='col-md-8 push-md-2'>
            <h2 class='name-tag-list-heading'>
              Name Tags
            </h2>
            { nameTagList }
          </div>
        </section>
        <section class={view === 'profile_view' ? 'row' : 'hidden'}>
          <Profile profile={profile} person={guests[profile.guest]} nametags={nameTags} dispatch={dispatch}/>
        </section>
      </div>
    )
  }
}

export default Layout
