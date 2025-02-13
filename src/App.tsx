import { Provider } from 'react-redux'
import Router from '../src/router';

import { store } from './redux/createStore';

function App() {

  return (
    <>
      <Provider store={store} >
        <Router />
      </Provider>
    </>
  )
}

export default App
