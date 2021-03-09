import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DefaultLayout from "../layout/DefaultLayout";
import ProductDetailPage from '../pages/ProductDetailPage';
import ProductListPage from '../pages/ProductListPage';

const Routes = () => (
  <Switch>
    <DefaultLayout>
      <Route exact path='/' component={ProductListPage} />
      <Route path='/:id' component={ProductDetailPage} />
    </DefaultLayout>
  </Switch>
)

export default Routes
