import '../style/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importar nuestros componentes
import {Show as ListarCategorias} from '../components/category/Show';
import {Create as CrearCategorias} from '../components/category/Create';
import {Edit as EditarCategorias} from '../components/category/Edit';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/category/' element={<ListarCategorias />} />
          <Route path='/category/create' element={<CrearCategorias />} />
          <Route path='/category/edit/:id' element={<EditarCategorias />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;