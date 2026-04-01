import type { ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { measurementCards } from "./component/cards/MeasurementCard";
import { CategoryPanel } from "./component/dashboard/CategoryPanel";
import { useAuth } from "./context/AuthContext";
import DashboardPage from "./pages/DashboardPage";
import HistoryPage from "./pages/HistoryPage";
import OAuthRedirectPage from "./pages/OAuthRedirectPage";
import WelcomePage from "./pages/WelcomePage";
import { APP_ROUTES, DASHBOARD_ROUTES } from "./routes";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={APP_ROUTES.home} replace />;
  }

  return children;
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_ROUTES.home} element={<DashboardPage />}>
          <Route index element={<Navigate to={`${DASHBOARD_ROUTES.length}/compare`} replace />} />
          <Route
            path={DASHBOARD_ROUTES.history}
            element={
              <ProtectedRoute>
                <HistoryPage />
              </ProtectedRoute>
            }
          />
          {measurementCards.map((card) => (
            <Route
              key={`${card.route}-index`}
              path={card.route}
              element={<Navigate to={`${card.route}/${card.operations[0]}`} replace />}
            />
          ))}
          {measurementCards.map((card) => (
            <Route
              key={`${card.route}-operation`}
              path={`${card.route}/:operation`}
              element={
                <CategoryPanel
                  categoryRoute={card.route}
                  title={card.name}
                  description={card.description}
                  quantities={card.quantities}
                  operations={card.operations}
                />
              }
            />
          ))}
        </Route>

        <Route path={APP_ROUTES.auth} element={<WelcomePage />} />
        <Route path={APP_ROUTES.oauthRedirect} element={<OAuthRedirectPage />} />
        <Route path="*" element={<Navigate to={APP_ROUTES.home} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;