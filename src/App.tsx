import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Loading from '@/components/Loading';
import routes from '@/routes';
import { Layout } from '@/components/Layout';

export function App() {
  return (
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
}
