import './assets/styles/style.scss';
import AppRouter from './Router/AppRouter';
import Context from './components/Context/Context';

function App() {

  return (
    <Context >
      <AppRouter />
    </Context>
  );
}

export default App;