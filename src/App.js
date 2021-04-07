// import { Profile, LoginForm } from './components'
import { Provider } from 'react-redux'
import './App.css';
import { store } from './store';
import { Routing } from './routing/Routing';


function App() {
  return (
    <Provider store={store}>
    <div className='app' >
      <Routing />
     {/* <Profile /> */}
     {/* <LoginForm /> */}
    </div>
    </Provider>
  );
  
}

export default App;
