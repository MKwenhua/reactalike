import EX from 'reactalikeSource';
import NameTag from './components/name_tag'
import SideEdit from './components/side_edit'

class Layout extends EX.Container {
   render() {
      let { dispatch, store } = this.props;
      let { guests } = store;

      const ppl = guests.map((itm, ii) => {
         return <NameTag ex_person={itm}/>;
      });
      return (
         <div class="container">
            <div class="col-md-10">
               {ppl}
            </div>
            <div class="col-md-2">
               <SideEdit ex_dispatch={dispatch}/>
            </div>
         </div>
      )
   }
}

export default Layout
