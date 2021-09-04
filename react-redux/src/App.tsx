import React, { FC } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Header } from './components/header/header';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Details } from './components/details/details';
import { PageNotFound } from './pages/404/404';

const App: FC = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <TransitionGroup exit={false}>
        <CSSTransition timeout={300} classNames="transition" key={location.key}>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/details/:id" component={Details} />
            <Route component={PageNotFound} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default App;
