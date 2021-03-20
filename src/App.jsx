import React, { useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Context } from './context';
import Navbar from './components';
import { Home, Login, Profile } from './pages';

import { PageWrapper, StyledBgVideo, ContentWrapper } from './style';

import bgVideo from './Video/Particle - 5187.mp4';

const App = () => {
  const { isLogged } = useContext(Context);

  useEffect(() => {
    console.log('placeholder');
  }, []);

  return (
    <>
      <StyledBgVideo autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
      </StyledBgVideo>
      <PageWrapper>
        {!isLogged ? (
          <Login />
        ) : (
          <>
            <ContentWrapper>
              <Switch>
                <Route exact path="/home" render={() => <Home />} />
                <Route exact path="/profile" render={() => <Profile />} />
                <Route
                  exact
                  path="/my_application"
                  render={() => <p>my application</p>}
                />
                <Route path="/tech" render={() => <p>tech</p>} />
              </Switch>
            </ContentWrapper>
            <Navbar />
          </>
        )}
      </PageWrapper>
    </>
  );
};

export default App;
