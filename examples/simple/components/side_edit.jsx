import EX from 'reactalikeSource';

const SideEdit = EX.component({
   componentName: 'SideEdit',
   componentRender: (props) => {
      let {ex_dispatch} = props;
      return (
         <section>
            <h4>Edit</h4>
            <div class="row">
               <button class="btn btn-info" onClick={() => ex_dispatch({type: 'VIEW_CHANGE', payload: 'edit'})}>Add NameTag</button>
            </div>
         </section>
      )
   }
})

export default SideEdit;
