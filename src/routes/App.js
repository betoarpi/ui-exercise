import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '../redux/store';

import Layout from '../components/Layout';
import Home from '../screens/Home';
import Email from '../screens/Email';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/email/:id" component={Email} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;