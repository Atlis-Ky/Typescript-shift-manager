import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppView from './views/AppView';
import ComponentView from './views/ComponentView';
import { Button } from 'react-bootstrap';

function App() {
  const [view, setView] = useState<'app' | 'components'>('app');

  return (
    <div className="container mt-4 pt-5">
      <Button variant="secondary" onClick={() => setView(view === 'app' ? 'components' : 'app')}>
        Switch to {view === 'app' ? 'Component View' : 'App View'}
      </Button>
      <hr />
      {view === 'app' ? <AppView /> : <ComponentView />}
    </div>
  );
}

export default App;