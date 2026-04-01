export const APP_ROUTES = {
  home: "/",
  auth: "/auth",
  oauthRedirect: "/oauth2/redirect",
  dashboard: "/dashboard",
} as const;

export const DASHBOARD_ROUTES = {
  length: "length",
  weight: "weight",
  volume: "volume",
  temperature: "temperature",
  history: "history",
} as const;

export type AppRouteKey = keyof typeof APP_ROUTES;