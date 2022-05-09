import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  MonthView,
  WeekView,
  EditRecurrenceMenu,
  AllDayPanel,
  ConfirmationDialog,
  DateNavigator,
  Toolbar,
  TodayButton,
  DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui';
import { appointments } from './RawData';
import { styled } from '@mui/material/styles';
import Room from '@mui/icons-material/Room';
import MoreIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import classNames from 'clsx';
import Box from '@mui/material/Box';
import { TutorCard } from '../TutorCard/TutorCard';
import { Button } from '@mui/material';

const LocalizationMessagesForm = {
  detailsLabel: 'Chọn thời gian học',
  moreInformationLabel: '',
  titleLabel: 'Nhắn nội dung cần học',
  repeatLabel: 'Lên lịch nhanh',
  commitCommand: 'Đặt lịch',
  allDayLabel: 'Cả ngày',
  daily: 'Hàng ngày',
  weekly: 'Hàng tuần',
  monthly: 'Hàng tháng',
  yearly: 'Hàng năm',
};

const PREFIX = 'Schedule';
const classes = {
  icon: `${PREFIX}-icon`,
  textCenter: `${PREFIX}-textCenter`,
  firstRoom: `${PREFIX}-firstRoom`,
  secondRoom: `${PREFIX}-secondRoom`,
  thirdRoom: `${PREFIX}-thirdRoom`,
  header: `${PREFIX}-header`,
  commandButton: `${PREFIX}-commandButton`,
};

const StyledAppointmentTooltipHeader = styled(AppointmentTooltip.Header)(() => ({
  [`&.${classes.firstRoom}`]: {
    background: 'url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/Lobby-4.jpg)',
  },
  [`&.${classes.secondRoom}`]: {
    background: 'url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/MeetingRoom-4.jpg)',
  },
  [`&.${classes.thirdRoom}`]: {
    background: 'url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/MeetingRoom-0.jpg)',
  },
  [`&.${classes.header}`]: {
    height: '260px',
    backgroundSize: 'cover',
  },
}));

const StyledIconButton = styled(IconButton)(() => ({
  [`&.${classes.commandButton}`]: {
    backgroundColor: 'rgba(255,255,255,0.65)',
  },
}));

const StyledGrid = styled(Grid)(() => ({
  [`&.${classes.textCenter}`]: {
    textAlign: 'center',
  },
}));

const StyledRoom = styled(Room)(({ theme: { palette } }) => ({
  [`&.${classes.icon}`]: {
    color: palette.action.active,
  },
}));

const StyledAppointmentTooltipCommandButton = styled(AppointmentTooltip.CommandButton)(() => ({
  [`&.${classes.commandButton}`]: {
    backgroundColor: 'rgba(255,255,255,0.65)',
  },
}));

const getClassByLocation = (classes: any, location: any) => {
  if (location === 'Room 1') return classes.firstRoom;
  if (location === 'Room 2') return classes.secondRoom;
  return classes.thirdRoom;
};

const Header = ({ children, appointmentData, ...restProps }: any) => (
  <StyledAppointmentTooltipHeader
    {...restProps}
    className={classNames(getClassByLocation(classes, appointmentData.location), classes.header)}
    appointmentData={appointmentData}
  >
    <StyledIconButton
      /* eslint-disable-next-line no-alert */
      onClick={() => alert(JSON.stringify(appointmentData))}
      className={classes.commandButton}
      size="large"
    >
      <MoreIcon />
    </StyledIconButton>
  </StyledAppointmentTooltipHeader>
);

const Content = ({ children, appointmentData, ...restProps }: any) => (
  <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
    {/* <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={3} />
    </Box> */}
    <Grid container alignItems="center">
      <StyledGrid item xs={2} className={classes.textCenter}>
        <StyledRoom className={classes.icon} />
      </StyledGrid>
      <Grid item xs={10}>
        <span>{appointmentData.location}</span>
      </Grid>
      <Grid item xs={12}>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
          <Button
            variant="contained"
            color="warning"
            disableRipple
            sx={{ textTransform: 'capitalize' }}
          >
            Cancel reservation
          </Button>
        </div>
      </Grid>
    </Grid>
  </AppointmentTooltip.Content>
);
const FormSchedule = ({ children, appointmentData, ...restProps }: any) => (
  <AppointmentForm.BasicLayout {...restProps} appointmentData={appointmentData}>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={3} />
    </Box>
  </AppointmentForm.BasicLayout>
);
const CommandButton = ({ ...restProps }) => (
  <StyledAppointmentTooltipCommandButton {...restProps} className={classes.commandButton} />
);
const Appointment = ({ children, style, ...restProps }: any) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      backgroundColor: 'rgb(100, 181, 246);',
      borderRadius: '5px',
    }}
  >
    {children}
  </Appointments.Appointment>
);
// const CustomLayout = (props: AppointmentForm.LayoutProps) => {
//   // const { commandLayoutComponent } = props;

//   // return (
//   //   <div style={{ border: "1px solid red" }}>
//   //     <AppointmentForm.CommandLayout>
//   //       {commandLayoutComponent}
//   //     </AppointmentForm.CommandLayout>
//   //   </div>
//   // );
//   const { commandLayoutComponent } = props;
//   return (
//     <AppointmentForm.Layout
//       {...props}
//       commandLayoutComponent={() => {
//         return null;
//       }}
//     >
//        <Box
//       sx={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         '& > :not(style)': {
//           m: 1,
//           width: 128,
//           height: 128,
//         },
//       }}
//     >
//       <Paper elevation={3} />
//     </Box>
//     {(commandLayoutComponent as React.FunctionComponent).call(commandLayoutComponent)}
//     </AppointmentForm.Layout>
//   );
// };
const TextEditor = (props: any) => {
  // eslint-disable-next-line react/destructuring-assignment
  if (props.type === 'multilineTextEditor') {
    return null;
  }
  return <AppointmentForm.TextEditor {...props} />;
};

const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }: any) => {
  const onCustomFieldChange = (nextValue: any) => {
    onFieldChange({ customField: nextValue });
  };

  return (
    <AppointmentForm.BasicLayout
      appointmentData={appointmentData}
      onFieldChange={onFieldChange}
      {...restProps}
    >
      <AppointmentForm.Label text="Chọn gia sư" />
      {/* <AppointmentForm.Label
          text="Custom Field"
        />
        <AppointmentForm.TextEditor
          value={appointmentData.customField}
          onValueChange={onCustomFieldChange}
          placeholder="Custom field"
        /> */}
    </AppointmentForm.BasicLayout>
  );
};
export class ScheduleWeekView extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: appointments,
      currentDate: '2018-06-27',

      addedAppointment: {},
      appointmentChanges: {},
      editingAppointment: undefined,
    };

    this.commitChanges = this.commitChanges.bind(this);
    this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
    this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
    this.changeEditingAppointment = this.changeEditingAppointment.bind(this);
  }

  changeAddedAppointment(addedAppointment: any) {
    this.setState({ addedAppointment });
  }

  changeAppointmentChanges(appointmentChanges: any) {
    this.setState({ appointmentChanges });
  }

  changeEditingAppointment(editingAppointment: any) {
    this.setState({ editingAppointment });
  }

  commitChanges({ added, changed, deleted }: any) {
    let { data } = this.state;
    if (added) {
      const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
      data = [...data, { id: startingAddedId, ...added }];
    }
    if (changed) {
      data = data.map((appointment: any) =>
        changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment,
      );
    }
    if (deleted !== undefined) {
      data = data.filter((appointment: any) => appointment.id !== deleted);
    }

    this.setState({ data });
  }
  handleClickAddSchedule() {}
  render() {
    const { currentDate, data, addedAppointment, appointmentChanges, editingAppointment } =
      this.state;

    return (
      <Paper>
        <Scheduler data={data} locale="vi-VN">
          <ViewState defaultCurrentDate={currentDate} />
          <EditingState
            onCommitChanges={this.commitChanges}
            addedAppointment={addedAppointment}
            onAddedAppointmentChange={this.changeAddedAppointment}
            appointmentChanges={appointmentChanges}
            onAppointmentChangesChange={this.changeAppointmentChanges}
            editingAppointment={editingAppointment}
            onEditingAppointmentChange={this.changeEditingAppointment}
          />
          <IntegratedEditing />
          <WeekView cellDuration={60} />
          <Toolbar />
          <DateNavigator />
          <TodayButton messages={{ today: 'Ngày hôm nay' }} />
          <AllDayPanel />
          <EditRecurrenceMenu />
          <ConfirmationDialog />
          <Appointments appointmentComponent={Appointment} />
          <AppointmentTooltip
            // headerComponent={Header}
            contentComponent={Content}
            // commandButtonComponent={CommandButton}
            // showCloseButton
            // showOpenButton
            // showDeleteButton
          />
          <AppointmentForm
            basicLayoutComponent={BasicLayout}
            textEditorComponent={TextEditor}
            messages={LocalizationMessagesForm}
          />
          <DragDropProvider />
        </Scheduler>
      </Paper>
    );
  }
}
