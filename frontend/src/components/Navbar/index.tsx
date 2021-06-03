import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MenuItem, ListItemIcon, ListItemText, Popper, Grow, Paper, ClickAwayListener, MenuList } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import LogoutIcon from '@material-ui/icons/KeyboardTab';

import { Container, Logo, ButtonProfessional, ButtonSignIn, UserAvatar } from './styles';

import logoImg from '../../resources/assets/logo-with-name.svg';
import strings from '../../resources/values/strings';
import defaultAvatar from '../../resources/assets/defaultAvatar.svg';

import { useAuth } from '../../hooks/auth';

const Navbar: React.FC = () => {
  const history = useHistory();
  const { user, signOut } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuAnchor = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => {
    setIsMenuOpen((prevOpen) => !prevOpen);
  };

  const handleCloseMenu = (event: React.MouseEvent<EventTarget>) => {
    if (menuAnchor.current && menuAnchor.current.contains(event.target as HTMLElement)) {
      return;
    }

    setIsMenuOpen(false);
  };

  const handleProfileClicked = () => {
    history.push('/profile')
  }

  const handleSettingsClicked = () => {
    history.push('/settings')
  }

  const handleLogOut = () => {
    signOut();
  }

  const renderUnloggedOptions = () => {
    return (
      <div>
        <ButtonProfessional to='/professional-signup' >{strings.navbar_becomeAProfessional}</ButtonProfessional>
        <ButtonSignIn
          onClick={() => history.push('/signin')}
          variant='contained'
          color='secondary'>
            {strings.signIn_button}
        </ButtonSignIn>
      </div>
    )
  }

  const renderLoggedOptions = () => {
    return (
      <>
        <UserAvatar onClick={handleToggleMenu} selected={isMenuOpen} ref={menuAnchor}>
          <img src={user.avatar || defaultAvatar} alt='profile-pic'/>
        </UserAvatar>

        <Popper
          open={isMenuOpen}
          anchorEl={menuAnchor.current}
          role={undefined}
          transition
          placement='bottom-end'
          popperOptions={{
            modifiers: {
               offset: {
                offset: '0, 10',
               },
            },
          }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseMenu}>
                  <MenuList>
                    <MenuItem onClick={handleProfileClicked}>
                      <ListItemIcon>
                        <HomeIcon fontSize='small' />
                      </ListItemIcon>
                      <ListItemText primary='Painel' />
                    </MenuItem>
                    <MenuItem onClick={handleSettingsClicked}>
                      <ListItemIcon>
                        <SettingsIcon fontSize='small' />
                      </ListItemIcon>
                      <ListItemText primary='Configurações' />
                    </MenuItem>
                    <MenuItem onClick={handleLogOut}>
                      <ListItemIcon>
                        <LogoutIcon fontSize='small' />
                      </ListItemIcon>
                      <ListItemText primary='Sair' />
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </>
    )
  }

  return (
    <Container>
        <Logo to='/'>
          <img src={logoImg} alt='ChamaElas' />
        </Logo>

        { !!user
          ? renderLoggedOptions()
          : renderUnloggedOptions()
        }

        
    </Container>
  );
};

export default Navbar;
