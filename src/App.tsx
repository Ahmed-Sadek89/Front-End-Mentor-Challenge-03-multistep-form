import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Routes';
import Context from './Context/Context';

function App() {
  return (
    <Context>
      <RouterProvider router={routes} />
    </Context>
  );
}

export default App;
