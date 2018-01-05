import EX from 'reactalikeSource';
import NameTag from 'component/name_tag'

const nameTagStarter = person => [person.id] = {
  color: '#ffa500',
  headerText: 'HELLO',
  intro: 'my name is',
  displayName: person.name
}

class EditNameTag extends EX.Component {
  nameTagChanged = nameTagChange => (this.props.dispatch({
    type: 'NAMETAG_CHANGE',
    payload: {
      [nameTagChange.TAGid]: nameTagChange
    }
  }))
  setColorChange = nametag => e => this.nameTagChanged({
    ...nametag,
    color: e.target.value.trim()
  });
  saveNameTag = () => this.props.dispatch({
    type: 'NAMETAG_SAVE',
    payload: {
      mode: 'default',
      guest: this.props.person.id
    }
  })
  setEditMode = payload => () => this.props.dispatch({type: 'EDIT_NAMETAG', payload})
  addNameTag = payload => () => this.props.dispatch({type: 'ADD_NAMETAG', payload})
  render() {
    console.log('EditNameTag props', this.props)
    const {person, nametags, editMode, dispatch} = this.props;
    const nametag = nametags[person.id];
    if (!nametag) {
      return (
        <div class="text-center">
          <h4>You do not have a nametag</h4>
          <button class="btn btn-info" onClick={ this.addNameTag(nameTagStarter(person)) }>
            Generate NameTag
          </button>
        </div>
      )
    }
    return (
      <section>
        <div class="col-md-8">
          <NameTag person={person} nametag={nametag} change={this.nameTagChanged} editMode={editMode}/>
        </div>
        <div class="col-md-4">
          <div class={editMode ? '' : 'hidden'}>
            <input type="color" value={nametag.color} onBlur={this.setColorChange(nametag)}/>
          </div>
          <div class={editMode ? '' : 'hidden'}>
            <button class="btn btn-success full-btn" onClick={this.saveNameTag}>
              Save
            </button>
          </div>
          <div class={editMode ? 'hidden' : ''}>
            <button class="btn btn-success full-btn" onClick={this.setEditMode({ mode: 'edit_nametag',  guest: person.id})}>
              Edit
            </button>
          </div>
        </div>
      </section>
    )
  }
}

export default EditNameTag;
