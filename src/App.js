//ESTILOS
import './App.css';
import './bootstrap.min.css';
import './estilos.css';

//STORE
import { Provider } from 'react-redux';
import { store } from './store/store';

//RUTEO
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//COMPONENTES
import Cabezal from './componentes/Cabezal';
import Login from "./componentes/Login";
import Registro from './componentes/Registro';
import Dashboard from './componentes/Dashboard';
import NoEncontrado from './componentes/NoEncontrado';
import Footer from './componentes/Footer';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cabezal />} >
            <Route path="/" element={<Login />} />
            <Route path="/Registro" element={<Registro />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="*" element={<NoEncontrado />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </Provider>
  );
}

export default App;
