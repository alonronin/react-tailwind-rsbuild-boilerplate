import { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Loading from '@/components/Loading.jsx';
import routes from '@/routes.jsx';
import Layout from '@/components/Layout.jsx';

const App = () => (
  <Router>
    <Layout>
      <Suspense fallback={<Loading />}>
        <Switch>
          {routes.map((props, index) => (
            <Route key={index} {...props} />
          ))}
        </Switch>
      </Suspense>
    </Layout>
  </Router>
);

export default App;
