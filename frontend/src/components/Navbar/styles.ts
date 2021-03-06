import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import colors from '../../resources/values/colors';

interface UserAvatarProps {
  selected: boolean;
}

export const Container = styled.nav`
  height: 80px;
  width: 100%;
  padding: 0 30px;
  background: white;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);

  overflow: hidden;
  position: fixed;
  top: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  img {
    height: 30px;
  }
`;

export const ButtonProfessional = styled(Link)`
  color: ${colors.textDark};
  margin-right: 30px;
  text-decoration: none;
`;

export const ButtonSignIn = styled(Button)`
  &.MuiButton-root {
    min-width: 60px;
    padding: 1px 0px;
  }
`;

export const UserAvatar = styled.div<UserAvatarProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid ${props => (props.selected ? colors.primary : "transparent")};

  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
