import './index.css';
import store from './lib/store';
import { Provider } from 'react-redux';
import InboxScreen from './components/InboxScreen';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
+       <InboxScreen />
+   </Provider>
    </div>
  );
}

export default App;
