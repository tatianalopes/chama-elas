import styled, { css } from 'styled-components';
import { Button as MaterialButton, GridList as MaterialGridList } from '@material-ui/core';

import colors from '../../resources/values/colors';

interface FilterProps {
  selected: boolean;
}

interface CategoryProps {
  color: string;
}

export const Filters = styled.div`
  padding: 100px 0px 20px 30px;

  display: flex;

  background-color: white;
`;

export const FilterBox = styled.button<FilterProps>`
  width: fit-content;
  padding: 10px 17px;
  border-radius: 20px;
  margin-right: 20px;

  font-size: 16px;
  color: ${props => (props.selected ? colors.primary : colors.gray)};

  background: white;
  border:1px solid ${props => (props.selected ? colors.primary : colors.grayLight)};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    ${props => !props.selected && css`
      border-color: ${colors.gray};
    `}
  }

  svg {
    height: 16px;
    width: 16px;
    margin-right: 10px;

    color: ${props => (props.selected ? colors.primary : colors.gray)};
  }
`;

export const CategoryBanner = styled.div<CategoryProps>`
  height: 180px;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 40px;

  background: ${props => (props.color)};

  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;
  font-size: 64px;

  span {
    margin-left: 17px;
  }
`;

export const GridList = styled(MaterialGridList)`
  justify-content: center;

  div {
    border-radius: 8px;
  }
`;

export const ProfessionalCard = styled.div`
  height: 290px;
  width: 447px;
  padding: 25px 15px 30px 15px;

  background: white;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ProfessionalCardIcons = styled.div`
  button {
    background: transparent;
    border: 0;
    cursor: pointer;
    margin-left: auto;

    align-self: flex-start;

    svg {
      margin-left: 10px
    }
  }
`;

export const ProfessionalTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProfessionalInfo = styled.div`
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;

    margin-top: 15px;
  }
`;

export const ProfessionalName= styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
`;

export const ProfessionalMainContainer = styled.div`
  display: flex;

  img {
    height: 150px;
    min-width: 157px;

    margin-right: 10px;
  }
`;


export const ProfessionalButton = styled(MaterialButton)`
  width: 287px;
`;


