// Styles and libs
import './App.scss';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import RootLayout from './layout/RootLayout.jsx';
// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
// Hooks
import useDisableMediaInteractions from './hooks/useDisableMediaInteractions';

// Pages
import Homepage from './pages/public/Home.jsx';
import Features from './pages/public/Features.jsx';
import Pricing from './pages/public/Pricing.jsx';
import Demo from './pages/public/Demo.jsx';
import Contact from './pages/public/Contact.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route index element={<Homepage />}/>
        <Route path="features" element={<Features />}/>
        <Route path="pricing" element={<Pricing />}/>
        <Route path="demo" element={<Demo />}/>
        <Route path="contact" element={<Contact />}/>
    </Route>
  )
)

function App() {
  // Call hook to avoid media download
  useDisableMediaInteractions();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;