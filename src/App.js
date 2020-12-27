import { ThemeProvider } from 'styled-components';
import { AnimateSharedLayout } from "framer-motion";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Header } from './components/header';
import { MainPage } from './components/main page';
import { Javascript } from './components/javascript page';

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
            <QueryClientProvider client={queryClient}>


              <Header />

              <Switch>

                <Route path="/" exact>
                  <MainPage />
                </Route>

                <Route path="/lib/javascript">
                  <Javascript />
                </Route>

                <Route path="/lib/typescript">

                </Route>    

              </Switch>


            </QueryClientProvider>
          </AnimateSharedLayout>
        </ThemeProvider>      
      </Provider>      
    </Router>


  );
}

export default App;
