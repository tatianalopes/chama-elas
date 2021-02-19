import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Alert } from '@material-ui/lab';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import api from '../../services/api';

import logoImg from '../../resources/assets/logo.svg';
import {
  Container,
  Content,
  FormButton,
  Header,
  SideImage
} from './styles';
import strings from '../../resources/values/strings';

interface SignInFormData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const yupSchema = Yup.object().shape({
  name: Yup.string().required(strings.field_required),
  email: Yup.string().required(strings.field_required),
  password: Yup.string().required(strings.field_required),
  passwordConfirmation: Yup.string().required(strings.field_required)
    .oneOf([Yup.ref('password'), ''], strings.signUp_passwordConfirmation_error),
});

const SignUp: React.FC = () => {
  const history = useHistory();

  const [isFormAlertOpen, setIsFormAlertOpen] = useState(false);

  const returnToDashboard = useCallback(() => {
    history.push('/');
  }, [history]);

  const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(yupSchema) });
  const onSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        await api.post('/user', {
          name: data.name,
          email: data.email,
          password: data.password,
        });

        history.push('/signin');
      } catch (err) {
        setIsFormAlertOpen(true);
      }
    },
    [history]
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="ChamaElas" onClick={returnToDashboard} />
        <Header>{strings.signUp_header}</Header>

        <form onSubmit={handleSubmit(onSubmit)}>
          { isFormAlertOpen &&
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => setIsFormAlertOpen(false)}
                >
                <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {strings.signUp_error}
            </Alert>
          }

          <TextField
            name="name"
            error={!!errors.name}
            inputRef={register}
            type="name"
            label={strings.signUp_name}
            variant="outlined"
            margin="dense"
            helperText={errors.name?.message}
          />
          <TextField
            name="email"
            error={!!errors.email}
            inputRef={register}
            type="email"
            label={strings.email}
            variant="outlined"
            margin="dense"
            helperText={errors.email?.message}
          />
          <TextField
            name="password"
            error={!!errors.password}
            inputRef={register}
            type="password"
            label={strings.password}
            variant="outlined"
            margin="dense"
            helperText={errors.password?.message}
          />
          <TextField
            name="passwordConfirmation"
            error={!!errors.passwordConfirmation}
            inputRef={register}
            type="password"
            label={strings.signUp_passwordConfirmation}
            variant="outlined"
            margin="dense"
            helperText={errors.passwordConfirmation?.message}
          />

          <FormButton type="submit" variant="contained" color="primary">{strings.signUp_button}</FormButton>
        </form>

        <p>{strings.signUp_hasAccount} <Link to="/signin">{strings.signUp_signIn}</Link></p>
      </Content>

      <SideImage />
    </Container>
  );
};

export default SignUp;
