import * as React from 'react';

// modules
import {Provider} from 'react-redux';

// navigation
import Navigation from 'src/navigation';

// store
import {store} from 'src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
