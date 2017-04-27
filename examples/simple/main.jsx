import EX  from 'reactalikeSource';
import Layout from './layout'
import store from './store'


EX.mountAppToNode(
  EX.ReduxConnect(Layout, store), document.getElementById('root'));
