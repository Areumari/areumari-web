import Router from "./components/Router";
import {ThemeProvider} from "styled-components";
import {lightTheme} from "src/styles/theme";

function App() {
  return (
      <ThemeProvider theme={lightTheme}>
        <Router/>
      </ThemeProvider>
  );
}

export default App;
