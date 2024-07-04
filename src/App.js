import { BrowserRouter , Route,  Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './ContactForm';
 
 
function App() {
  return (
    <div className="App">
      
        <h1> Redux Contact Form  </h1> 
         <BrowserRouter>
            <Routes>
              <Route path='/' element={<ContactForm />} />
            </Routes>         
         </BrowserRouter>
      
    </div>
  );
}

export default App;
