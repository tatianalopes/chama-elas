import styled from 'styled-components';
import GoogleLogin from 'react-google-login';

import sideImg from '../../resources/assets/sign-in_side-image.png';
import colors from '../../resources/values/colors';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding-top: 60px;

  width: 100%;
  max-width: 700px;

  form {
    margin-top: 35px;
    width: 340px;
    display: flex;
    flex-direction: column;
    text-align: center;

    button {
      width: 100%;
      margin: 20px 0px;
    }
  }

  p {
    color: ${colors.gray};

    a {
      color: ${colors.primary};
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${colors.primaryDark};
      }
    }
  }
`;

export const Header = styled.h1`
  size: 48px;
  font-weight: 400;

  margin: 10px 0px 30px;
`;

export const GoogleButton = styled(GoogleLogin)`
  border: 1px solid ${colors.grayLight} !important;
  border-radius: 8px !important;

  span {
    font-family: 'BenchNine';
    font-size: 18px;
  }
`;

export const EmailSection = styled.div`
  display: flex;
  flex-direction: row;
  color: ${colors.gray};
  text-transform: uppercase;
  font-size: 16px;

  margin-bottom: 30px;

  &:before, &:after{
    content: "";
    flex: 1 1;
    border-bottom: 1px solid ${colors.gray};
    margin: auto;
  }

  &:before {
    margin-right: 10px
  }

  &:after {
    margin-left: 10px
  }
`;

export const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;

  a {
    color: ${colors.primary};
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${colors.primaryDark};
    }
  }
`;

export const SideImage = styled.div`
  flex: 1;
  background: url(${sideImg}) no-repeat center;
  background-size: cover;
`;
