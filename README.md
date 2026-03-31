# Quantity Measurement App - Frontend

A modern React + TypeScript application for managing quantity measurements and unit conversions. Built with industry best practices and a focus on type safety and performance.

---

## 🏗️ Tech Stack

### Core Technologies
- **React 19.2.4** - UI library with concurrent features
- **TypeScript 5.9.3** - Type-safe JavaScript for robust code
- **Vite 8.0.1** - Lightning-fast build tool and dev server
- **React Router DOM 7.13.2** - Client-side routing with nested routes

### Styling & UI
- **Tailwind CSS 4.2.2** - Utility-first CSS framework
- **Lucide React 1.7.0** - Beautiful icon library
- **Tailwind CSS Vite Plugin** - Optimized Tailwind integration with Vite

### API & State Management
- **Axios 1.13.6** - HTTP client for API requests
- **React Context API** - State management for authentication

### Development Tools
- **ESLint 9.39.4** - Code linting and quality
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Vite React Plugin** - Optimized HMR for React development

---

## 📁 Project Structure

```
src/
├── apis/                      # API integration layer
│   ├── apiClient.ts          # Axios instance configuration
│   ├── authApi.ts            # Authentication API calls
│   └── measurementApi.ts     # Measurement API calls
├── component/                 # Reusable React components
│   ├── auth/                 # Authentication components
│   │   ├── LoginForm.tsx
│   │   ├── SignupForm.tsx
│   │   └── VisibilityIcons.tsx
│   ├── cards/                # Card components
│   │   ├── ConvertOperationCard.tsx
│   │   ├── MeasurementCard.ts # Runtime card configuration
│   │   └── OtherOperationsCard.tsx
│   └── dashboard/            # Dashboard layout components
│       ├── CategoryPanel.tsx
│       ├── NavBar.tsx
│       ├── SideBar.tsx
│       └── config/
│           └── sidebarThemes.ts
├── context/                   # React Context providers
│   └── AuthContext.tsx       # Authentication state management
├── pages/                     # Page components
│   ├── DashboardPage.tsx     # Main dashboard (protected)
│   ├── HistoryPage.tsx       # Measurement history
│   └── WelcomePage.tsx       # Login/signup page
├── routes/                    # Route configuration
│   └── index.ts              # Route constants and definitions
├── types/                     # TypeScript type definitions
│   ├── models/               # Domain models
│   │   ├── AuthApiModel.ts
│   │   ├── AuthContextValueModel.ts
│   │   ├── AuthIdentityModel.ts
│   │   ├── MeasurementApiModel.ts
│   │   ├── MeasurementCardModel.ts
│   │   └── WelcomeTabModel.ts
│   └── props/                # Component prop interfaces
│       ├── CategoryPanelProps.ts
│       └── OperationCardProps.ts
├── utils/                     # Utility functions
│   └── auth.ts               # Authentication helpers
├── App.tsx                   # Root component with providers
├── AppRouter.tsx             # Route configuration
├── main.tsx                  # Application entry point
└── index.css                 # Global styles
```

---

## 🔄 Application Flow

### Authentication Flow
1. **Welcome Page** (`WelcomePage.tsx`) - Initial entry point
2. User can **Login** or **Sign Up** via auth forms
3. Authentication requests handled via **AuthApi** (`authApi.ts`)
4. **AuthContext** stores authentication state globally
5. On success, user is redirected to **Dashboard**

### Dashboard Flow
1. **ProtectedRoute** component validates authentication
   - Redirects unauthenticated users back to Welcome page
2. **DashboardPage** renders with:
   - **NavBar** - Header navigation
   - **SideBar** - Category selection (with themes: `sidebarThemes.ts`)
   - **CategoryPanel** - Displays active category content
3. **Dynamic Routes** based on measurement categories:
   - Each measurement card has multiple operations
   - Routes are dynamically generated from `MeasurementCard.ts` configuration
   - Example: `/dashboard/length/convert`, `/dashboard/weight/convert`

### User Actions Flow
1. User selects a measurement category from sidebar
2. **CategoryPanel** displays available operations
3. User selects an operation (Convert, Compare, etc.)
4. **Operation Card** components render appropriate UI
5. API calls made via **MeasurementApi** for calculations
6. Results displayed or saved to history
7. User can view **HistoryPage** for past operations

### State Management
- **AuthContext** - Manages `isAuthenticated` and user identity globally
  - Provides user authentication status across the application
  - Prevents unauthorized access to protected routes
- **Component State** - Local state for form inputs and UI interactions
  - Form validation and error handling
  - UI state (loading, visibility toggles)
- **API Layer** - Centralized API calls with Axios
  - `apiClient.ts` - Configured Axios instance with base URL and interceptors
  - `authApi.ts` - Login, signup, and token management
  - `measurementApi.ts` - Measurement operations and calculations

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Starts Vite dev server with HMR on `http://localhost:5173`

### Build
```bash
npm run build
```
Compiles TypeScript and bundles with Vite

### Linting
```bash
npm lint
```

---

## � Key Components & Features

### Authentication Components
- **LoginForm.tsx** - User login with email and password
- **SignupForm.tsx** - New user registration
- **VisibilityIcons.tsx** - Toggle password visibility in forms
- **AuthContext.tsx** - Global authentication state provider

### Dashboard Components
- **NavBar.tsx** - Top navigation with user info and logout
- **SideBar.tsx** - Category selection with theme support
- **CategoryPanel.tsx** - Displays operations for selected category
- **sidebarThemes.ts** - Theme configuration for sidebar styling

### Operation Cards
- **ConvertOperationCard.tsx** - Unit conversion functionality
- **OtherOperationsCard.tsx** - Additional measurement operations (compare, calculate, etc.)
- **MeasurementCard.ts** - Runtime configuration for all measurement categories and their operations

### API Integration
- **apiClient.ts** - Pre-configured Axios instance with base URL and common headers
- **authApi.ts** - Handles user authentication, registration, and session management
- **measurementApi.ts** - Provides endpoints for measurement calculations and data retrieval

### Type Safety
All components are fully typed with TypeScript interfaces:
- **Models** - Domain objects (Auth, Measurement, etc.)
- **Props** - Component prop contracts for better IDE support and error checking

---

## 🔐 Authentication & Authorization

1. Users start at the **Welcome Page** where they can login or signup
2. Successful authentication stores tokens (typically in localStorage via API)
3. **AuthContext** provides the `isAuthenticated` flag globally
4. **ProtectedRoute** component wraps the Dashboard:
   - If not authenticated → redirects to Welcome Page
   - If authenticated → allows access to Dashboard
5. User can logout via NavBar, which clears auth state and redirects to Welcome Page

---

## 🎨 Styling & Theming

- **Tailwind CSS** - All components use utility classes for responsive design
- **Sidebar Themes** - Multiple color themes available via `sidebarThemes.ts`
- **Lucide Icons** - Consistent icon set for UI elements
- **Responsive Design** - Mobile-first approach with breakpoints for all screen sizes

---

## 🔗 Routing Architecture

- **Welcome Page** - `/` - Public route for authentication
- **Dashboard** - `/dashboard` - Protected route
  - **Categories** - Dynamic nested routes based on measurement types
  - **History** - `/dashboard/history` - View past operations
  - **Operations** - `/dashboard/{category}/{operation}` - Specific measurement operations

---

## 📝 Available Scripts

| Command | Purpose |
|---------|----------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (TypeScript + Vite bundling) |
| `npm run lint` | Run ESLint to check code quality |
| `npm run preview` | Preview production build locally |
