import React, { useState, useEffect } from 'react';
import Calendar, { CalendarTileProperties } from 'react-calendar';
import { isEqual, format, set, sub, add } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowLeft from '@material-ui/icons/ArrowBackIos';
import ArrowRight from '@material-ui/icons/ArrowForwardIos'

import {
  Container,
  HourSelectionContainer,
  HourSelectionInner,
  HourSelectionBack,
  HourSelectionHeader,
  HourSelectionNoAvailability,
  HourSelectionContent,
  HourSelectionSlot,
  HourSelectionlButton
} from './styles';
import strings from '../../resources/values/strings';

interface CalendarProps {
  availableDates: Date[];
  currentDate: Date | undefined;
  onDateChange: (value: Date) => void;
  onDateSelected: (value: Date) => void;
}

const Dashboard: React.FC<CalendarProps> = ({ availableDates, currentDate, onDateChange, onDateSelected }) => {
  const [availableHours, setAvailableHours] = useState<number[]>([]);
  const [showCalendar, setShowCalendar] = useState(true);

  useEffect(() => {
    if (currentDate) {
      // TODO: call API to return available hours for the selected day
      const respose = [8, 9, 10, 13];
      if (currentDate.getDay()%2 === 0) {
        setAvailableHours(respose);
      } else {
        setAvailableHours([]);
      }
    }

    setShowCalendar(currentDate === undefined);
  }, [currentDate]);

  const calendarDisabledDates = ({ date }: CalendarTileProperties) => {
    return !availableDates.some(availableDate => isEqual(availableDate, date));
  }

  const goBack = () => {
    setShowCalendar(true);
  }

  const goToPreviousDay = () => {
    if (currentDate) {
      onDateChange(sub(currentDate, { days: 1 }));
    }
  }

  const goToNextDay = () => {
    if (currentDate) {
      onDateChange(add(currentDate, { days: 1 }));
    }
  }

  const handleHourSelected = (hours: number) => {
    if (currentDate) {
      onDateSelected(set(currentDate, { hours }));
    }
  }

  return (
    <Container>
      {(!showCalendar && currentDate) ? (
        <HourSelectionContainer>
          <HourSelectionBack  onClick={goBack}>
            <ArrowBack />
            <span>{strings.actionBack}</span>
          </HourSelectionBack>
          <HourSelectionInner>
            <HourSelectionHeader>
              <ArrowLeft onClick={goToPreviousDay} />
              <span>{format(currentDate, 'PPPP', { locale: pt })}</span>
              <ArrowRight onClick={goToNextDay} />
            </HourSelectionHeader>
            {availableHours.length === 0 ? (
                <HourSelectionNoAvailability>{strings.sechedule_no_available_hours}</HourSelectionNoAvailability>
              ) : (
                <HourSelectionContent>
                  {availableHours.map(hour =>
                    <HourSelectionSlot>
                      <span>{hour}:00</span>
                      <HourSelectionlButton
                        variant="contained"
                        color="primary"
                        onClick={() => handleHourSelected(hour)}
                      >
                        {strings.actionSelect}
                      </HourSelectionlButton>
                    </HourSelectionSlot>
                  )}
                </HourSelectionContent>
              )
          }
          </HourSelectionInner>
        </HourSelectionContainer>
      ) : (
        <Calendar
          onChange={onDateChange}
          value={currentDate}
          tileDisabled={calendarDisabledDates}
        />
      )}
    </Container>
  );
};

export default Dashboard;
