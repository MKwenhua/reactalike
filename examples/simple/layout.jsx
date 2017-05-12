import EX from 'reactalikeSource';
import NameTag from 'component/name_tag'
import SideEdit from 'component/side_edit'
import Profile from 'component/profile'

const setNameTagId = () => {
   return ("nt" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-6);
}

const setUserProfileLink = (personId, dispatch) => {
   console.log('setUserProfileLink personId', personId)
   return () => {

      dispatch({type: 'VIEW_PROFILE', payload: personId})
   }
}
window.EX = EX
class Layout extends EX.Container {
   render() {
      let { dispatch, store } = this.props;
      let { guests, nameTags, view, profile} = store;

      const ppl = Object.keys(guests).map((personId, ii) => {
         return (
            <div onClick={setUserProfileLink(personId, dispatch)}>

               <NameTag  person={guests[personId]}  nametag={nameTags[personId]}  editMode="false" />
            </div>
            )
      });
    let b =  ['w','1', '3'].map((u) => {
        return <div>{u}</div>
      })
      return (
         <div class="container">
         <section class={view === 'list_view' ? 'row' : 'hidden'}>
            <div class="col-md-2 pull-md-10">
               <SideEdit  dispatch={dispatch}/>
            </div>
            <div class="col-md-10 push-md-2">
               {ppl}
            </div>
         </section>
         <section class={view === 'profile_view' ? 'row' : 'hidden'}>
            <Profile  profile={profile}   person={guests[profile.guest]}   nametags={nameTags}  dispatch={dispatch}/>
         </section>
         </div>
      )
   }
}

export default Layout
