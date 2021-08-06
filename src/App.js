import React from 'react';
import Main from './components/Main/Main';
import DesktopNavBar from './components/Navbar/DesktopNavbar';
import MobileNavBar from './components/Navbar/MobileNavbar'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import sections from './assets/sections';
import mobileCheck from './utils/mobileCheck';
import { ThemeProvider } from 'react-jss';
import clsx from 'clsx';
import TestPage from './components/TestPage';
import NavDrawer from './components/Main/NavDrawer';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';

const theme = {
  
}

function App(props) {
  const [navbarTransparent, setNavbarTransparent] = React.useState(true);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [pageHidden, setPageHidden] = React.useState(true);
  const [coverImageUrl, setCoverImageUrl] = React.useState('');

  React.useEffect(() => {

    const handleScroll = () => {
        if (window.pageYOffset === 0) {
            setNavbarTransparent(true);
        } else {
            setNavbarTransparent(false);
        }
    }

      window.addEventListener('scroll', handleScroll, { passive: true });
      return (() => {
        window.removeEventListener('scroll', handleScroll);      });
  }, []);

  return (
    <>
    <div className={clsx('root', { 'drawer-open': drawerOpen })} hidden={false}>
      <ThemeProvider theme={theme}>
        <NavDrawer 
          onDrawerClose={() => setDrawerOpen(false)}
          open={drawerOpen}
          title='Art Showcase'
          sections={sections}
          placement='top'
        />
        { !mobileCheck()
            ? (
            <DesktopNavBar 
              sections={sections}
              title='Art Showcase'
              navTransparent={navbarTransparent}
            /> )
            : (
              <MobileNavBar
                title='Art Showcase'
                navTransparent={navbarTransparent}
                onButtonClick={() => setDrawerOpen(true)}
              />
            )
        }
        <Switch>
            <Redirect from='/' to='/home' exact />
            <Route path='/home' render={() => (
              <Main
                onNavTop={setNavbarTransparent}
                title='Art Show'
                onCoverImageLoad={coverImage => {
                  setPageHidden(false);
                  setCoverImageUrl(coverImage);
                }}
                coverImage={coverImageUrl}
              />
            )}
            />
            <Route path='/test' render={() => (
              <TestPage
              // onNavTop={setNavbarTransparent}
              // title='Youwen Wu'
              />
            )}
            />
        </Switch>
      </ThemeProvider>
    </div>
    </>
  );
}

const AppContainer = () => (
  <ThemeProvider>
    <ParallaxProvider>
      <Router>
        <App />
      </Router>
    </ParallaxProvider>
  </ThemeProvider>
);

export default AppContainer;
