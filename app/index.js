import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import Home from './App';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#663399',
    secondary: 'yellow',
    tertiary: 'pink',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <Home />
    </PaperProvider>
  );
};