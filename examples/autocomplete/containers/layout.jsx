import EX from 'reactalikeSource';
import BuildTrie from 'action-autocomplete';
import ListItem from 'component/list_item'
import ResultAction from 'component/result_action';
import AppState from '../state/appstate'
const WordList  = require('src/word_list');
const WordActions = require('src/word_actions');
const Autocomplete = BuildTrie(WordList, WordActions);

const logAction = (word) => {
  return () => {

    console.log('WordActions[word]', word , WordActions[word]);
  }
}
const searchType = (e, elem, otherNode) => {
	let typed = elem.value.toLowerCase().trim()
  let sugg = Autocomplete.lookup(typed)
  console.log('sugg', sugg)
    EX.SetState({
    suggestions: sugg,
    typed: typed
  });
}

const Layout = {
  state: AppState,
  render: () => {
    let {
      suggestions,
      typed
    } = Layout.state;

    let movieSuggestions = suggestions.map((itm) => {
      if (typeof itm === 'string') {
        let data = {suggestion: itm, typed: typed, clickAction: logAction(itm)}
        return <ListItem ex_data={data}/>
      }
      return <ResultAction ex_data={itm}/>
    })
    return (
    	<div class="row">
        <div onClick={() => {console.log('clicked this!')}} class="col-sm-6 col-sm-offset-3">
            <div id="imaginary_container">
                <div class="input-group stylish-input-group">
                    <input  onKeyUp={ searchType } type="text" class="form-control"  placeholder="Search" />
                    <span class="input-group-addon">
                        <button type="submit">
                            <span class="glyphicon glyphicon-search"></span>
                        </button>
                    </span>
                </div>
            </div>
            <ul id="search_list">
            { movieSuggestions }
            </ul>
        </div>
    	</div>
    )
  }
};

export default Layout
