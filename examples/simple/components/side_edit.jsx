import EX from 'reactalikeSource';

class SideEdit extends EX.Component {
   render () {
      let { dispatch} = this.props;
      return (
         <section>
            <h4>Edit</h4>
            <div class="row">
               <button class="btn btn-info" onClick={() =>  dispatch({type: 'VIEW_CHANGE', payload: 'edit'})}>Add NameTag</button>
            </div>
         </section>
      )
   }
}

export default SideEdit;
