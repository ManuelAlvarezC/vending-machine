import './App.css';
import { Login, NotFound, VendingMachine } from './pages';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux'

ReactDOM.render(
	<Provider store={store}>
	  <App />
	</Provider>,
	document.getElementById('root')
  )
  
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
