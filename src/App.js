import { ThemeProvider } from 'styled-components';

import { Header } from './components/header';

import { theme } from './utilise/theme';
import './App.css';

function App() {

  return (
    <ThemeProvider theme={theme}>

      <Header />

      <div className="App">
        asddf
      </div>
    </ThemeProvider>
  );
}

export default App;
