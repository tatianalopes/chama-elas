import React, { useEffect, useState, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { GridListTile, IconButton, DialogContent } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import CategoryIcon from '@material-ui/icons/Category';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import LocationIcon from '@material-ui/icons/LocationOn';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteFillIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Chat';
import CloseIcon from '@material-ui/icons/Close';
import Schedule from '../../components/Schedule'

import Navbar from '../../components/Navbar';
import strings from '../../resources/values/strings';
import { ICategory } from '../../resources/values/categories';
import mockProfessionals, { IProfessional } from '../../resources/values/professionals';
import defaultAvatar from '../../resources/assets/defaultAvatar.svg';

import {
  Filters,
  FilterBox,
  CategoryBanner,
  GridList,
  ProfessionalCard,
  ProfessionalCardIcons,
  ProfessionalTopContainer,
  ProfessionalInfo,
  ProfessionalName,
  ProfessionalMainContainer,
  ProfessionalButton,
  Dialog,
  UserAvatar,
  DialogTitle
} from './styles';

interface IState {
  category: ICategory;
}

const Dashboard: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const category = (location.state as IState).category;

  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [isAvailabilitySelected, setIsAvailabilitySelected] = useState(false);
  const [isLocationSelected, setIsLocationSelected] = useState(false);

  const [professionals, setProfessionals] = useState<IProfessional[]>([]);

  const [scheduleModalOpen, setScheduleModelOpen] = useState(false);
  const [selectedProfessional, setSelectedProfessional] = useState<IProfessional | undefined>();
  const [calendarSelectedDate, setCalendarSelectedDate] = useState<Date | undefined>();
  const [calendarAvailableDates, setCalendarAvailableDates] = useState<Date[]>([]);

  // TODO: get values from API
  useEffect(() => {
    setProfessionals(mockProfessionals);
  }, []);

  const handleSendMessage = useCallback((e, professional) => {
    e.stopPropagation();

    history.push({
      pathname: '/messages',
      state: {professional},
    });
  }, [history]);

  const handleFavorite = useCallback((e, updatedProfessional:IProfessional) => {
    e.stopPropagation();

    const updatedList = professionals.map((professional) => {
      if (professional.id === updatedProfessional.id) {
        return {...professional, isFavorite: !updatedProfessional.isFavorite};
      }
      return professional;
    });

    setProfessionals(updatedList);
  }, [professionals]);

  const handleScheduleService = useCallback((e, professional) => {
    e.stopPropagation();

    // TODO: fetch available dates for selected professional
    setCalendarAvailableDates([new Date(2021, 5, 20), new Date(2021, 5, 21), new Date(2021, 5, 22)]);

    setScheduleModelOpen(true);
    setSelectedProfessional(professional);
  }, []);

  const closeScheduleModal = () => {
    setScheduleModelOpen(false);
    setCalendarSelectedDate(undefined);
  }

  const handleDateSelected = (date: Date) => {
    setScheduleModelOpen(false);

    // TODO: call API to schedule service
  }

  const renderDialog = () => {
    return (
      <Dialog onClose={closeScheduleModal} open={scheduleModalOpen}>
        <UserAvatar src={selectedProfessional?.avatar || defaultAvatar} alt='profile-pic'/>
        <DialogTitle>
          <p>{selectedProfessional?.name}</p>
          <IconButton onClick={closeScheduleModal}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Schedule
            availableDates={calendarAvailableDates}
            currentDate={calendarSelectedDate}
            onDateChange={setCalendarSelectedDate}
            onDateSelected={handleDateSelected}
          />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <>
      <Navbar />
      <Filters>
        <FilterBox selected={isCategorySelected} onClick={() => {setIsCategorySelected(!isCategorySelected)}}>
          <CategoryIcon color="action" />
          {strings.filter_category}
        </FilterBox>

        <FilterBox selected={isAvailabilitySelected} onClick={() => {setIsAvailabilitySelected(!isAvailabilitySelected)}}>
          <CalendarIcon color="action" />
          {strings.filter_availability}
        </FilterBox>

        <FilterBox selected={isLocationSelected} onClick={() => {setIsLocationSelected(!isLocationSelected)}}>
          <LocationIcon color="action" />
          {strings.filter_location}
        </FilterBox>
      </Filters>
      { category &&
        <CategoryBanner color={category.color}>
            <img src={category.img} alt={category.title} />
            <span>{category.title}</span>
        </CategoryBanner>
      }
      <GridList cols={0} cellHeight={290} spacing={20} >
        {professionals.map((professional) => (
          <GridListTile key={professional.id} >
            <ProfessionalCard>
              <ProfessionalMainContainer>
                <img src={professional.avatar} alt={professional.name} />

                <ProfessionalInfo>
                  <ProfessionalTopContainer>
                    <ProfessionalName>{professional.name}</ProfessionalName>

                    <ProfessionalCardIcons>
                      <button type="button" onClick={(e) => handleSendMessage(e, professional)}>
                        <MessageIcon color="action" />
                      </button>

                      <button type="button" onClick={(e) => handleFavorite(e, professional)}>
                        {professional.isFavorite ? <FavoriteFillIcon color="primary" /> : <FavoriteBorderIcon color="action" />}
                      </button>
                    </ProfessionalCardIcons>
                  </ProfessionalTopContainer>

                  <Rating
                    value={professional.rating}
                    size="small" precision={0.5}
                    readOnly
                  />

                  <p>{professional.description}</p>
                </ProfessionalInfo>
              </ProfessionalMainContainer>

              <ProfessionalButton
                variant="contained"
                color="primary"
                onClick={(e) => handleScheduleService(e, professional)}
              >
                {strings.dashboard_schedule_service}
              </ProfessionalButton>
            </ProfessionalCard>
          </GridListTile>
        ))}
      </GridList>
      {renderDialog()}
    </>
  );
};

export default Dashboard;
