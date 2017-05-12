import EX from 'reactalikeSource';
import NameTag from 'component/name_tag'

const nameTagStarter = (person) => {
   let newNametag = {}
   newNametag[person.id] = {
            color: '#ffa500',
            headerText: 'HELLO',
            intro: 'my name is',
            displayName: person.name
   }
   return newNametag
}
const setNameTagChange = (nametags, dispatch) => {
   return (nameTagChange) => {
      console.log('nameTagChange', nameTagChange)
       let nametagsCopy = Object.assign({}, nametags);
       nametagsCopy[nameTagChange.TAGid] = nameTagChange;
       console.log('nameTagChange.TAGid', nameTagChange.TAGid)
       console.log('nametagsCopy', nametagsCopy)
      dispatch({type: 'NAMETAG_CHANGE', payload: nametagsCopy });
   }
}
const setColorChange = ( nametag, cb) => {
   if(!cb) return () => {}
   return (e,a,b) => {
      console.log('keyName e', e)
      console.log('keyName e.target', e.target)
      let text = e.target.value.trim();
      console.log('keyName text', text)
      let nametagCopy = Object.assign({}, nametag)
      nametagCopy.color = text
      cb(nametagCopy)
   }
}

class EditNameTag extends EX.Component {
 render() {
      console.log('EditNameTag props', this.props)
      let {person, nametags, editMode , dispatch} = this.props;
      let nametag =  nametags[ person.id];
      if(!nametag) {
         let newNametag = nameTagStarter( person);

         return (
            <div class="text-center">
            <h4>You do not have a nametag</h4>
               <button class="btn btn-info" onClick={() =>  dispatch({type: 'ADD_NAMETAG', payload: Object.assign({},  nametags ,newNametag) })}>Generate NameTag</button>
            </div>
            )
      }
      const nameTagChange = setNameTagChange(  nametags,  dispatch)
      return (
         <section>

             <div class="col-md-8">
                <NameTag  person={ person}  nametag={nametag}  change={nameTagChange}  editMode={ editMode} />
            </div>
            <div class="col-md-4">
               <div class={ editMode ? '' : 'hidden'}>
               <input type="color" value={nametag.color} onBlur={setColorChange(nametag,nameTagChange )} />
               </div>
               <div class={ editMode ? '' : 'hidden'}>
                  <button class="btn btn-success full-btn" onClick={() =>  dispatch({type: 'NAMETAG_SAVE', payload: { mode: 'default', guest:  person.id }})}>Save</button>
               </div>
               <div class={ editMode ? 'hidden' : ''}>
                  <button class="btn btn-success full-btn" onClick={() =>  dispatch({type: 'EDIT_NAMETAG', payload: { mode: 'edit_nametag', guest:  person.id } })}>Edit</button>
               </div>
            </div>
         </section>
      )
   }
}

export default EditNameTag;
