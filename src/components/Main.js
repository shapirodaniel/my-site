import { Route, Switch } from 'react-router-dom';
import { About, Blog } from './';

export default function Main() {
	return (
		<Switch>
			<Route path='/home' component={Blog} />
			<Route path='/about' component={About} />
			<Route path='*' component={Blog} />
		</Switch>
	);
}
