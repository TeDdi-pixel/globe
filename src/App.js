import './styles/style.scss';
import AppRouter from './AppRouter/AppRouter';
// import { createContext, useState } from 'react';
// import { data } from './fakeData';

function App() {
  // const DataContext = createContext();
  // const [newData, setNewData] = useState(data);

  return (
    // <DataContext.Provider value={newData}>
    // <div className="container">
    <AppRouter />
    // </div>
    // </DataContext.Provider>
  );
}

export default App;