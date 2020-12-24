import { ThemeProvider } from 'styled-components';
import { AnimateSharedLayout } from "framer-motion";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './components/header';
import { MainPage } from './components/main page';

import { theme } from './utilise/theme';
import store from './store';
import './App.css';

function App() {

  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AnimateSharedLayout>



            <Header />

            <Switch>

              <Route path="/">
                <MainPage />
              </Route>

              <Route path="/lib/javascript">
    
              </Route>

              <Route path="/lib/typescript">

              </Route>    

            </Switch>



          </AnimateSharedLayout>
        </ThemeProvider>      
      </Provider>      
    </Router>


  );
}

export default App;
