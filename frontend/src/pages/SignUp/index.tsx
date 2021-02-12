import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';

import logoImg from '../../resources/assets/logo.svg';
import {
  Container,
  Content,
  Header,
  SideImage
} from './styles';
import strings from '../../resources/values/strings';

const SignUp: React.FC = () => {
  const history = useHistory();

  const returnToDashboard = useCallback(() => {
    history.push('/');
  }, [history]);

  const handleSubmit = useCallback(() => {

  }, []);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="ChamaElas" onClick={returnToDashboard} />
        <Header>{strings.signUp_header}</Header>

        <form onSubmit={handleSubmit}>
          <TextField id="name" label={strings.signUp_name} variant="outlined" margin="dense"/>
          <TextField id="email" label={strings.email} variant="outlined" margin="dense"/>
          <TextField
            id="password"
            type="password"
            label={strings.password}
            variant="outlined"
            margin="dense"
          />
          <TextField
            id="passwordConfirmation"
            type="password"
            label={strings.signUp_passwordConfirmation}
            variant="outlined"
            margin="dense"
          />

          <Button variant="contained" color="primary">{strings.signUp_button}</Button>
        </form>

        <p>{strings.signUp_hasAccount} <Link to="/signin">{strings.signUp_signIn}</Link></p>
      </Content>

      <SideImage />
    </Container>
  );
};

export default SignUp;
