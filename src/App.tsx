import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppView from './views/AppView';
import ComponentView from './views/ComponentView';
import ViewSwitcher from './components/ViewSwitcher';
import './styles/custom-bootstrap.scss';

function App() {
  const [view, setView] = useState<'app' | 'components'>('app');

  return (
    <div className="container mt-4 pt-5 bg-gray">
      <ViewSwitcher view={view} onSwitch={() => setView(view === 'app' ? 'components' : 'app')} />
      <hr />
      {view === 'app' ? <AppView /> : <ComponentView />}
    </div>
  );
}

export default App;