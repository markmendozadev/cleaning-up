import FallbackProvider from "./context/fallback-provider";
import { FormProvider } from "./context/form-provider";
import PageRoutes from "./routes";
import { Box } from "@mui/material";

function App() {
  return (
    <FallbackProvider>
      <FormProvider>
        <Box>
          <PageRoutes />
        </Box>
      </FormProvider>
    </FallbackProvider>
  );
}

export default App;
