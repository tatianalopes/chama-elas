import styled from 'styled-components';
import {
  Button as MaterialButton
} from '@material-ui/core';

import colors from '../../resources/values/colors';

export const Container = styled.div`
  .react-calendar {
    width: 350px;
    max-width: 100%;
    background: white;
    border: 1px solid ${colors.gray};
    line-height: 1.125em;
    padding: 10px 25px;
    color: ${colors.gray};
  }
  .react-calendar--doubleView {
    width: 700px;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    height: 44px;
    margin-bottom: 1em;
  }
  .react-calendar__navigation__label {
    > span {
      display: inline-block;
    }
    > span:first-letter {
      text-transform: uppercase;
    }

    color: ${colors.gray};
  }
  .react-calendar__navigation button {
    min-width: 44px;
    background: none;

    color: ${colors.gray};
  }
  .react-calendar__navigation button[disabled] {
    color: ${colors.grayLightest};
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: capitalize;
    font-size: 1.1em;

    abbr[title] {
      text-decoration: none;
    }
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }
  .react-calendar__month-view__weekNumbers {
    font-weight: bold;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    padding: calc(0.75em / 0.75) calc(0.5em / 0.75);
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    visibility: hidden;
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 0.5em 0.5em;
  }
  .react-calendar__tile {
    max-width: 100%;
    text-align: center;
    padding: 0.5em 0.5em;
    background: none;

    color: ${colors.primary};
  }
  .react-calendar__tile:disabled {
    color: ${colors.grayLight};
  }
  .react-calendar__tile:enabled:hover {
    background-color: ${colors.grayLightest};
    border-radius: 50%;
  }
  .react-calendar__tile--now {
    background: ${colors.primaryLight};
    border-radius: 50%;
  }
  .react-calendar__tile--hasActive {
    background: ${colors.primary};
    color: white !important;
    border-radius: 50%;
  }
  .react-calendar__tile--hasActive:enabled:hover {
    background: ${colors.primaryDark};
  }
  .react-calendar__tile--active {
    background: ${colors.primary};
    color: white !important;
    border-radius: 50%;
  }
  .react-calendar__tile--active:enabled:hover {
    background: ${colors.primaryDark};
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: ${colors.grayLightest};
  }
`;

export const HourSelectionContainer = styled.div`
  border: 1px solid ${colors.grayLight};
`;

export const HourSelectionBack = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 0 10px;
  color: ${colors.gray};

  cursor: pointer;

  > svg {
    font-size: 14px;
  }

  span {
    font-size: 14px;
  }
`;

export const HourSelectionInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 55px 40px 55px;
`;

export const HourSelectionHeader = styled.div`
  display: flex;
  margin-bottom: 50px;
  color: ${colors.gray};

  span {
    padding-left: 20px;
    padding-right: 20px;
  }

  svg {
    color: ${colors.gray};
    font-size: 20px;

    cursor: pointer;
  }
`;

export const HourSelectionNoAvailability = styled.span`
  align-self: center;

  font-style: italic;
`;

export const HourSelectionContent = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

export const HourSelectionSlot = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 15px;
`;

export const HourSelectionlButton = styled(MaterialButton)`
  width: 90px;
  height: 22px;

  &.MuiButton-root {
    font-size: 14px;
  }
`;