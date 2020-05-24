import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.scss';
import HomePage from './home-page/home-page.component';
import Error404 from './error-404/error-404.component';
import Header from './common/header/header.component';
import Footer from './common/footer/footer.component';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="*" component={Error404}></Route>
          </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
