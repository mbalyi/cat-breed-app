import { MainLayout } from "./layout/Main.layout";
import { BreedsPage } from "./features/breeds/Breeds.page";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <MainLayout>
        <BreedsPage />
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
