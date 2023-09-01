import './styles/style.scss';
import LandingPage from './pages/LandingPage/LandingPage';
import { createContext, useState } from 'react';
import { data } from './fakeData';

function App() {
  // const DataContext = createContext();
  const [newData, setNewData] = useState(data);

  return (
    // <DataContext.Provider value={newData}>
      <div className="container">
        <LandingPage />
      </div>
    // </DataContext.Provider>
  );
}

export default App;