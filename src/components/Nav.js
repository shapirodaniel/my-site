import { navLinks } from './nav-links';
import { NavContainer, StyledNavLink } from '../style/components';

export default function Nav() {
	return (
		<NavContainer>
			{navLinks.map(({ id, name, to }) => (
				<StyledNavLink exact key={id} to={to}>
					{name}
				</StyledNavLink>
			))}
		</NavContainer>
	);
}
