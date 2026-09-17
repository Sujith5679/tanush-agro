import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { BusinessDetail } from './pages/BusinessDetail';
import { Placeholder } from './pages/Placeholder';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'businesses/:id', element: <BusinessDetail /> },
      { path: 'about', element: <Placeholder title="About Tanush Group" /> },
      { path: 'our-work', element: <Placeholder title="Our Work & Projects" /> },
      { path: 'gallery', element: <Placeholder title="Inside Tanush" /> },
      { path: 'contact', element: <Placeholder title="Let's Connect" /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
