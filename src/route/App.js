// import '../style/style.scss'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importar nuestros componentes
import {Show as ListarCategorias} from '../components/category/Show';
import {Create as CrearCategorias} from '../components/category/Create';
import {Edit as EditarCategorias} from '../components/category/Edit';
import {Login} from '../components/login/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/category/' element={<ListarCategorias />} />
          <Route path='/category/create' element={<CrearCategorias />} />
          <Route path='/category/edit/:id' element={<EditarCategorias />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;