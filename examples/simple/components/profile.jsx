import EX from 'reactalikeSource';
import NameTag from 'component/name_tag'
import EditNameTag from 'component/edit_name_tag'

class Profile extends EX.Component {
   render () {
      let { profile,  person,  nametags,  dispatch} = this.props;
      let {mode, guest} =  profile
      console.log('profile props', this.props)
      return (
         <section>
            <button class="btn btn-info" onClick={() =>  dispatch({type: 'VIEW_CHANGE', payload: 'list_view'})}>Go Back</button>
            <h2><b>Name:</b>{ person.name}</h2>
            <h4><b>Occupation:</b>{ person.job}</h4>
            <div class="row align-items-center">
               <div class="col-md-10">
                  <EditNameTag  person={ person}  nametags={ nametags}  dispatch={ dispatch}  editMode={ mode === 'edit_nametag'}/>
               </div>
            </div>
         </section>
      )
   }
}

export default Profile;
