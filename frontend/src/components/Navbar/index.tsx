import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu, MenuItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import LogoutIcon from '@material-ui/icons/KeyboardTab';

import { Container, Logo, ButtonProfessional, ButtonSignIn, UserAvatar, ProfileModal } from './styles';

import logoImg from '../../resources/assets/logo-with-name.svg';
import strings from '../../resources/values/strings';
import defaultAvatar from '../../resources/assets/defaultAvatar.svg';

import { useAuth } from '../../hooks/auth';

const Navbar: React.FC = () => {
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);

  const history = useHistory();
  const { user } = useAuth();

  const handleOpenMenu = (e: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(e.currentTarget);
  }

  const handleCloseMenu = () => {
    setMenuAnchor(null);
  }

  return (
    <Container>
        <Logo to='/'>
          <img src={logoImg} alt="ChamaElas" />
        </Logo>

        { !!user
          ? <UserAvatar onClick={(event) => handleOpenMenu(event)} selected={!!menuAnchor}>
              <img src={user.avatar || defaultAvatar}/>
            </UserAvatar>
          : <div>
              <ButtonProfessional to='/professional-signup' >{strings.navbar_becomeAProfessional}</ButtonProfessional>
              <ButtonSignIn
                onClick={() => history.push('/signin')}
                variant="contained"
                color="secondary">
                  {strings.signIn_button}
              </ButtonSignIn>
            </div>
        }

        <Menu
          open={!!menuAnchor}
          onClose={handleCloseMenu}
          anchorEl={menuAnchor}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          // transformOrigin={{
          //   vertical: 'top',
          //   horizontal: 'center',
          // }}
        >
          <MenuItem onClick={handleCloseMenu}>
            <ListItemIcon>
              <HomeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Painel" />
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Configurações" />
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Sair" />
          </MenuItem>
        </Menu>
    </Container>
  );
};

export default Navbar;
