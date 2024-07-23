import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Loading from '@/components/Loading.jsx';
import routes from '@/routes.jsx';
import Layout from '@/components/Layout.jsx';

const App = () => (
  <Router>
    <Layout>
      <Suspense fallback={<Loading />}>
        <Routes>
          {routes.map(({ Component, ...props }, index) => {
            return <Route key={index} element={<Component />} {...props} />;
          })}
        </Routes>
      </Suspense>
    </Layout>
  </Router>
);

export default App;
