import { Provider } from 'react-redux';
import '../src/html/styles.css';
import './App.css';
import Main from './Component/Main/Main';
import store from './Redux/Store/Store';

function App() {
  return (
    <Provider store={store}>
      <Main></Main>
    </Provider>
  );
}

export default App;
