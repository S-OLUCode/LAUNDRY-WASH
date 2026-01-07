import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy } from "react";
import { PrivateRoute, PublicRoute } from "./ProtectedRoute";
import { useAuth } from "@/hooks/useAuth";
import { Suspense } from "react";
import Users from "@/pages/users/Users";
import AdminOrders from "@/pages/dashboard/Adminorders/AdminOrders";
import ErrorBoundary from "@/components/ErrorBoundary";
import Lazyspinner from "@/components/Lazyspinner";

const ForgetLayout = lazy(() => import("../layout/ForgetLayout"));
const AuthLayout = lazy(() => import("../layout/AuthLayout"));
const RootLayout = lazy(() => import("../layout/RootLayout"));
const AdminLayout = lazy(() => import("../layout/AdminLayout"));
const Signup = lazy(() => import("../pages/auth/Signup"));
const Login = lazy(() => import("../pages/auth/Login"));
const Home = lazy(() => import("../pages/home/Home"));
const ForgetPassword = lazy(() => import("../pages/auth/ForgetPassword"));
const Confirmpassword = lazy(() => import("../pages/auth/Confirmpassword"));
const VerifyEmail = lazy(() => import("../pages/verify-email/VerifyEmail"));
const CheckVerification = lazy(() =>
  import("../pages/verify-email/CheckVerification")
);
const BookingLayout = lazy(() => import("../layout/BookingLayout"));
const ProfileLayout = lazy(() => import("../layout/ProfileLayout"));
const BookLaundry = lazy(() => import("../pages/booking/BookLaundry"));
const BookingSummary = lazy(() => import("../pages/booking/BookingSummary"));
const PaymentOptions = lazy(() =>
  import("../pages/paymentOptions/PaymentOptions")
);
const Orders = lazy(() => import("../pages/orders/Orders"));
const PersonalInfo = lazy(() => import("../pages/profile/PersonalInfo"));
const Payments = lazy(() => import("../pages/payments/Payments"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));

// const Users = lazy(() => import ("../pages/dashboard/users/Users"));
// const AdminOrders = lazy(() => import ("../pages/dashboard/Adminorders/AdminOrders"));
const Revenue = lazy(() => import("../pages/dashboard/revenue/Revenue"));

export default function AppRoutes() {
  const { accessToken } = useAuth();
  const routes = [
    {
      errorElement: <ErrorBoundary />,
      element: (
        <Suspense fallback={<Lazyspinner />}>
          <PublicRoute accessToken={accessToken}>
            <AuthLayout />
          </PublicRoute>
        </Suspense>
      ),
      children: [
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    {
      errorElement: <ErrorBoundary />,
      element: (
        <Suspense fallback={<Lazyspinner />}>
          <PublicRoute accessToken={accessToken}>
            <ForgetLayout />
          </PublicRoute>
        </Suspense>
      ),
      children: [
        {
          path: "forgotpassword",
          element: <ForgetPassword />,
        },
        {
          path: "confirmpassword",
          element: <Confirmpassword />,
        },
      ],
    },

    {
      path: "/",
      errorElement: <ErrorBoundary />,
      element: (
        <Suspense fallback={<Lazyspinner />}>
          <RootLayout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "profile",
          errorElement: <ErrorBoundary />,
          element: (
            <Suspense fallback={<Lazyspinner />}>
              <PrivateRoute accessToken={accessToken}>
                <ProfileLayout />
              </PrivateRoute>
            </Suspense>
          ),
          children: [
            {
              index: true,
              element: (
                <PrivateRoute accessToken={accessToken}>
                  <PersonalInfo />
                </PrivateRoute>
              ),
            },
            {
              path: "orders",
              errorElement: <ErrorBoundary />,
              element: (
                <PrivateRoute accessToken={accessToken}>
                  <Orders />
                </PrivateRoute>
              ),
            },
            {
              path: "payments",
              errorElement: <ErrorBoundary />,
              element: (
                <PrivateRoute accessToken={accessToken}>
                  <Payments />
                </PrivateRoute>
              ),
            },
          ],
        },
      ],
    },
    {
      path: "verify-email/:userId/:verifyTokenLink",
      errorElement: <ErrorBoundary />,
      element: (
        <Suspense fallback={<Lazyspinner />}>
          <PrivateRoute accessToken={accessToken}>
            <VerifyEmail />
          </PrivateRoute>
        </Suspense>
      ),
    },
    {
      path: "verify-email",
      errorElement: <ErrorBoundary />,
      element: (
        <Suspense fallback={<Lazyspinner />}>
          <PrivateRoute accessToken={accessToken}>
            <CheckVerification />
          </PrivateRoute>
        </Suspense>
      ),
    },

    {
      errorElement: <ErrorBoundary />,
      element: (
        <Suspense fallback={<Lazyspinner />}>
          <PrivateRoute accessToken={accessToken}>
            <BookingLayout />
          </PrivateRoute>
        </Suspense>
      ),
      children: [
        {
          path: "book-laundry",
          errorElement: <ErrorBoundary />,
          element: (
            <Suspense fallback={<Lazyspinner />}>
              <PrivateRoute accessToken={accessToken}>
                <BookLaundry />
              </PrivateRoute>
            </Suspense>
          ),
          children: [
            {
              path: "booking-summary",
              errorElement: <ErrorBoundary />,
              element: (
                <Suspense fallback={<Lazyspinner />}>
                  <PrivateRoute accessToken={accessToken}>
                    <BookingSummary />
                  </PrivateRoute>
                </Suspense>
              ),
            },
            {
              path: "payment-options/:bookingId",
              errorElement: <ErrorBoundary />,
              element: (
                <Suspense fallback={<Lazyspinner />}>
                  <PrivateRoute accessToken={accessToken}>
                    <PaymentOptions />
                  </PrivateRoute>
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
    {
      path: "admin",
      errorElement: <ErrorBoundary />,
      element: (
        <Suspense fallback={<Lazyspinner />}>
          <PrivateRoute accessToken={accessToken}>
            <AdminLayout />
          </PrivateRoute>
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <PrivateRoute accessToken={accessToken}>
              <Dashboard />
            </PrivateRoute>
          ),
        },
        {
          path: "users",
          errorElement: <ErrorBoundary />,
          element: (
            <PrivateRoute accessToken={accessToken}>
              <Users />
            </PrivateRoute>
          ),
        },
        {
          path: "orders",
          errorElement: <ErrorBoundary />,
          element: (
            <PrivateRoute accessToken={accessToken}>
              <AdminOrders />
            </PrivateRoute>
          ),
        },
        {
          path: "revenue",
          errorElement: <ErrorBoundary />,
          element: (
            <PrivateRoute accessToken={accessToken}>
              <Revenue />
            </PrivateRoute>
          ),
        },
      ],
    },
  ];
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
