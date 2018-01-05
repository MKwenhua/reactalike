import {createStore, applyMiddleware} from 'redux'
import logger from "redux-logger"

const AppState = {
   view: 'list_view',
   profile: {
      mode: 'default',
      guest: 'nt789w'
   },
   nameTags: {
      nt789w: {
         color: '#ffa500',
         headerText: 'HELLO',
         intro: 'my name is',
         displayName: 'Pete',
         TAGid: 'nt789w'
      },
      nt5y0r: {
         color: '#ffa500',
         headerText: 'HELLO',
         intro: 'my name is',
         displayName: 'Bing Bing',
         TAGid: 'nt5y0r'
      },
      nthwvu: {
         color: '#ffa500',
         headerText: 'HELLO',
         intro: 'my name is',
         displayName: 'Jackie',
         TAGid: 'nthwvu'
      },
      ntwq8b: {
         color: '#ffa500',
         headerText: 'HELLO',
         intro: 'my name is',
         displayName: 'Bachman',
         TAGid: 'ntwq8b'
      }

   },
   guests: {
      nt789w: {
         name: 'Pete',
         job: 'Orderly Drifter',
         id: 'nt789w'
      },
      nt5y0r: {
         name: 'Bing Bing',
         job: 'works at 呷哺呷哺',
         id: 'nt5y0r'
      },
      nthwvu: {
         name: 'Jackie',
         job: 'Movie Star',
         id: 'nthwvu'
      },
      ntwq8b: {
         name: 'Bachman',
         job: 'chief innovation officer',
         id: 'ntwq8b'
      }
   }
}

function reducer(state = AppState, action) {
   switch (action.type) {
      case 'ADD_GUEST':
         return {
            ...state,
            guests: action.payload
         }
      case 'REMOVE_GUEST':
         return {
            ...state,
            guests: action.payload
         }
      case 'VIEW_CHANGE':
         return {
            ...state,
            view: action.payload
         }
      case 'VIEW_PROFILE':
         return {
            ...state,
            view: 'profile_view',
            profile: {
               mode: 'default',
               guest: action.payload
            }
         }
      case 'EDIT_NAMETAG':
         return {
            ...state,
            profile: {
              ...state.profile,
              ...action.payload
            }
         }
      case 'NAMETAG_CHANGE':
         return {
             ...state,
             nameTags: {
              ...state.nameTags,
              ...action.payload
             }
         }
      case 'NAMETAG_SAVE':
         return {
            ...state,
            profile: action.payload
         }
      case 'ADD_NAMETAG':
            return {
            ...state,
            nameTags: {
              ...state.nameTags,
              ...action.payload
            }
          }
      default:
         return state
   }
}

export default createStore(reducer, applyMiddleware(logger))
