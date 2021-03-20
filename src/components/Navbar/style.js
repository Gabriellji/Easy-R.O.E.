import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from '../../styles/theme';

const StyledNavContainer = styled.aside`
  background-color: ${theme.colors.light};
  height: 100%;
  width: 30vw;
  border: ${theme.spacer.two} solid ${theme.colors.purple};
  border-radius: ${theme.spacer.double};
  padding: ${theme.spacer.double};
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  gap: ${theme.spacer.quad};
  box-shadow: 11px 11px 10px 0px rgba(100, 100, 100, 0.8);
`;

const StyledNavHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${theme.spacer.quad};

    img {
      width: 8rem;
      height: 8rem;
      text-align: center;
      border: ${theme.spacer.tone} solid ${theme.colors.purple};
      border-radius: 50%;
    }

    p {
      font-size: 30px;
      font-weight: bold;
    }
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacer.double};
`;

const activeClassName = 'active';

const LinkElem = styled(NavLink).attrs({ activeClassName })`
  font-size: 30px;
  text-decoration: none;
  color: ${theme.colors.dark};

    &:active {
      color: ${theme.colors.purple};
    }

    &.${activeClassName} {
      color: ${theme.colors.purple};
    }
`;

export {
  StyledNavContainer, StyledNavHeader, StyledNav, LinkElem,
};
