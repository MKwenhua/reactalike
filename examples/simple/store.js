import{ createStore } from 'redux'

const AppState = {
  view: 'list_view',
  guests: [
  {
    name: 'Pete',
    job: 'Orderly Drifter'
  },
  {
    name: 'Bing Bing',
    job: 'works at 呷哺呷哺'
  },
  {
    name: 'Jackie',
    job: 'Movie Star'
  },
  {
    name: 'Bachman',
    job: 'chief innovation officer'
  }
  ]
}
function reducer(state = AppState, action) {
  switch (action.type) {
  case 'ADD_GUEST':
    return {...state,  guests: action.payload }
  case 'REMOVE_GUEST':
    return {...state,  guests: action.payload}
  case 'VIEW_CHANGE':
   return {...state,  view: action.payload}
  default:
    return state
  }
}

const store = createStore(reducer)
export default store
