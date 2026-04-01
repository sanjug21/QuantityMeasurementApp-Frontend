
import AppRouter from "./AppRouter";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID as string | undefined;

  const appContent = (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );

  return (
    googleClientId
      ? <GoogleOAuthProvider clientId={googleClientId}>{appContent}</GoogleOAuthProvider>
      : appContent
  );
}

export default App;
