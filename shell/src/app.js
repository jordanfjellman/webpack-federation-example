import React from 'react';
import Header from './header';

const Uno = React.lazy(() => import('uno/app'));
const Dos = React.lazy(() => import('dos/app'));

const App = ({ title }) => {
  return (
    <>
      <Header />
      <div>{title}</div>
      <React.Suspense fallback="Loading Uno">
        <Uno />
      </React.Suspense>
      <React.Suspense fallback="Loading Dos">
        <Dos />
      </React.Suspense>
    </>
  );
}

export default App;
