import React from 'react';
import { Route } from 'react-router-dom';
import { lazyLoad } from '#commons/services/lazy-load';
import './store';

const SamplePageModule = lazyLoad(
  () => import('./containers/sample-page'),
  'SamplePage'
);

export const SampleModule = () => (
  <>
    <Route exact path={'/'} component={SamplePageModule} />
    <Route path={'/sample'} component={SamplePageModule} />
  </>
);
