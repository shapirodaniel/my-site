import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
	margin-left: 2rem;
	text-decoration: none;

	&.active {
		color: blue;
	}

	&:visited:not(.active) {
		color: inherit;
	}
`;
