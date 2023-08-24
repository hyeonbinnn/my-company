import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import Router from './routes/Router';
import ScrollTopButton from './components/common/Button/ScrollTopButton';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
      <ScrollTopButton />
    </ThemeProvider>
  );
}
export default App;
