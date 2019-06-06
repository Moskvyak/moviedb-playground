import * as React from 'react';

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './pages/AppRoutes';

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
