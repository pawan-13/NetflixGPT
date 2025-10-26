
import Login from "./components/Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import { ToastContainer } from 'react-toastify';
import ErrorBoundary from "./error-boundary/ErrorBoundary";
import ResetPassword from "./components/ResetPassword";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ErrorBoundary>
          <Login />
        </ErrorBoundary>
      )
    },
    {
      path: "/home",
      element: (
        <ErrorBoundary>
          <Home />
        </ErrorBoundary>
      )
    },
    {
      path: "/reset-password",
      element: (
        <ErrorBoundary>
          <ResetPassword />
        </ErrorBoundary>
      )
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App