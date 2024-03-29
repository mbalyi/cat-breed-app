import { MainLayout } from "./layout/Main.layout";
import { BreedsPage } from "./features/breeds/Breeds.page";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";

/**
 * The default theme for the cat breed app.
 */
const defaultTheme = createTheme({
  palette: {
    secondary: {
      main: "#ffb5b5",
      contrastText: "#fff",
    },
  },
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          ".Mui-focused.MuiInputLabel-root": {
            color: "#407088",
          },
          ".Mui-focused.MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffb5b5",
          },
        },
      },
    },
  },
});

/**
 * The query client used for fetching data in the application.
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <MainLayout>
          <BreedsPage />
        </MainLayout>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
