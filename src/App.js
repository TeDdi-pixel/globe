import './assets/styles/style.scss';
import Context from './Context/Context';
import AppRouter from './Router/AppRouter';

function App() {

  return (
    <Context >
      <AppRouter />
    </Context>
  );
}

export default App;