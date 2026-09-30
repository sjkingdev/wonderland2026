import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import WorkPage from "./pages/WorkPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminEditor from "./pages/AdminEditor";

const rootRoute = createRootRoute({
  component: () => (
    <div className="page-shell">
      <Header />
      <main className="page-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const workRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/work",
  component: WorkPage,
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: BlogPage,
});

const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/$slug",
  component: () => {
    const { slug } = blogPostRoute.useParams();
    return <BlogPostPage slug={slug} />;
  },
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

const adminIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: () => (
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  ),
});

const adminNewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/new",
  component: () => (
    <ProtectedRoute>
      <AdminEditor postId="new" />
    </ProtectedRoute>
  ),
});

const adminEditRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/edit/$postId",
  component: () => {
    const { postId } = adminEditRoute.useParams();
    return (
      <ProtectedRoute>
        <AdminEditor postId={postId} />
      </ProtectedRoute>
    );
  },
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  servicesRoute,
  workRoute,
  blogRoute,
  blogPostRoute,
  contactRoute,
  loginRoute,
  adminIndexRoute,
  adminNewRoute,
  adminEditRoute,
]);

export const router = createRouter({ routeTree });
