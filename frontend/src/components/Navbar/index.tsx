import React from 'react';
import { useHistory } from 'react-router-dom';

import logoImg from '../../resources/assets/logo-with-name.svg';
import strings from '../../resources/values/strings';
import { Container, Logo, ButtonProfessional, ButtonSignIn } from './styles';

const Navbar: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
        <Logo to='/'>
          <img src={logoImg} alt="ChamaElas" />
        </Logo>

        <div>
          <ButtonProfessional to='/professional-signup' >{strings.dashboard_becomeAProfessional}</ButtonProfessional>
          <ButtonSignIn
            onClick={() => history.push('/signin')}
            variant="contained"
            color="secondary">
              {strings.signIn_button}
          </ButtonSignIn>
        </div>
    </Container>
  );
};

export default Navbar;
