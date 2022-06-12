import { BrowserRouter as Router } from 'react-router-dom';
import { Nav, Main } from './components';
import './style/index.css';

export default function App() {
	return (
		<Router>
			<Nav />
			<Main />
		</Router>
	);
}
