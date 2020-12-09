import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Loading from '@/components/Loading.jsx';
import routes from '@/routes.jsx';

const App = () => (
  <Suspense fallback={<Loading />}>
    <Router>
      <Switch>
        {routes.map((props, index) => (
          <Route key={index} {...props} />
        ))}
      </Switch>
    </Router>
  </Suspense>
);

export default App;
