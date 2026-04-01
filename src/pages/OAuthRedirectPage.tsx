import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { APP_ROUTES } from "../routes";

function OAuthRedirectPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { authenticateWithToken } = useAuth();

  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ""));
    const token =
      searchParams.get("token") ??
      searchParams.get("accessToken") ??
      searchParams.get("access_token") ??
      hashParams.get("token") ??
      hashParams.get("accessToken") ??
      hashParams.get("access_token");

    if (!token) {
      navigate(APP_ROUTES.auth, { replace: true });
      return;
    }

    try {
      authenticateWithToken(token);
      window.location.replace(APP_ROUTES.home);
    } catch {
      navigate(APP_ROUTES.auth, { replace: true });
    }
  }, [authenticateWithToken, navigate, searchParams]);

  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 text-slate-200">
      <p className="text-sm font-medium">Completing Google sign-in...</p>
    </main>
  );
}

export default OAuthRedirectPage;
