import React, {Suspense, lazy} from 'react';
import Style from './Style';
import SimpleComponent from './SimpleComponent';

const LazyLoadedComponent = lazy(() => import('./LazyLoadedComponent'));


function App() {
  return (
    <div className="App">
      <h1>Styling React Components</h1>
      <Style/>
      <SimpleComponent/>
      
     < Suspense fallback={<div>Loading--</div>}>
     <LazyLoadedComponent />
     </Suspense>
      
    </div>
  );
}
export default App;
