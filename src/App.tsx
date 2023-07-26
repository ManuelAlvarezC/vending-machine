import './App.css';
import { Login, NotFound, VendingMachine } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
	return (
	  <BrowserRouter>
		  <Routes>
			  <Route path="/" element={<Login />} />
			  <Route path="/vending-machine" element={<VendingMachine url="/vending-machine" />} />
			  <Route path="*" element={<NotFound />} />
		  </Routes>
	  </BrowserRouter>
	);
  }


  
export default App;
