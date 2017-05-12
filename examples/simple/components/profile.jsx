import EX from 'reactalikeSource';
import NameTag from 'component/name_tag'
import EditNameTag from 'component/edit_name_tag'

class Profile extends EX.Component {
   render () {
      let {ex_profile, ex_person, ex_nametags, ex_dispatch} = this.props;
      let {mode, guest} = ex_profile
      console.log('profile props', this.props)
      return (
         <section>
            <button class="btn btn-info" onClick={() => ex_dispatch({type: 'VIEW_CHANGE', payload: 'list_view'})}>Go Back</button>
            <h2><b>Name:</b>{ex_person.name}</h2>
            <h4><b>Occupation:</b>{ex_person.job}</h4>
            <div class="row align-items-center">
               <div class="col-md-10">
                  <EditNameTag ex_person={ex_person} ex_nametags={ex_nametags} ex_dispatch={ex_dispatch} ex_editMode={ mode === 'edit_nametag'}/>
               </div>
            </div>
         </section>
      )
   }
}

export default Profile;
