import AuthProvider from "./store/AuthProvider";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </QueryClientProvider>
      <ToastContainer/>
    </>
  );
}

export default App;
