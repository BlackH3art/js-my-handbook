import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Header } from './components/header';
import { MainPage } from './components/main page';
import { Javascript } from './components/javascript page';
import { ReactPage } from './components/react page';
import { LoadingIndicator } from './components/loading indicator';

import { theme } from './utilise/theme';
import store from './store';
import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
})


function App() {

  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AnimateSharedLayout>
            <AnimatePresence>
              <QueryClientProvider client={queryClient}>


                <Header />

                <Switch>

                  <div className="page-container">

                    <Route path="/" exact>
                      <MainPage />
                    </Route>

                    <Route path="/lib/javascript">
                      <Suspense fallback={<LoadingIndicator />}>
                        <Javascript />
                      </Suspense>
                    </Route>

                    <Route path="/lib/typescript">

                    </Route>   

                    <Route path="/lib/react">
                      <Suspense fallback={<LoadingIndicator />}>
                        <ReactPage />
                      </Suspense>
                    </Route>    

                  </div>

                </Switch>


              </QueryClientProvider>
            </AnimatePresence>
          </AnimateSharedLayout>
        </ThemeProvider>      
      </Provider>      
    </Router>


  );
}

export default App;
