import React from 'react';
import Routesroute from './routes/Routesroute';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Correct import
import store from './store/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routesroute />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
