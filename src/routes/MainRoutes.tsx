import { lazy } from "react";

// web routing
const HomePage = lazy(() => import("@/pages/HomePage"));
const FormPage = lazy(() => import("@/pages/Forms"));
const ExpenseTrackerPage = lazy(() => import("@/pages/TransactionTracker"));

// ==============================|| AUTH ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  children: [
    {
      name: "Home Page",
      path: "/",
      element: <HomePage />,
    },
    {
      name: "Forms",
      path: "/forms",
      element: <FormPage />,
    },
    {
      name: "Transaction Tracker Page",
      path: "/transaction-tracker",
      element: <ExpenseTrackerPage />,
    },
  ],
};

export default MainRoutes;
