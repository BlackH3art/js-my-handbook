import { ThemeProvider } from 'styled-components';
import { AnimatePresence, AnimateSharedLayout } from "framer-motion"

import { Header } from './components/header';

import { theme } from './utilise/theme';
import './App.css';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <AnimateSharedLayout>
      <AnimatePresence>


        <Header />

        <div className="App">
          asddf
        </div>


      </AnimatePresence>
      </AnimateSharedLayout>
    </ThemeProvider>
  );
}

export default App;
