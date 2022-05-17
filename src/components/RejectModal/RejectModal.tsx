import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import scheduleApi from '../../services/aixos/schedule';
interface IRejectModal {
  changeReservation: any;
  appointmentData: any;
}
export const RejectModal: React.FC<IRejectModal> = ({ changeReservation, appointmentData }) => {
  console.error(appointmentData);
  const [open, setOpen] = React.useState(false);
  const [contentCancel, setContentCancel] = React.useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleRejectReservation = async (bookingId: string, tutorResponse: string) => {
    const response = await scheduleApi.rejectReservation({
      bookingId: bookingId,
      tutorResponse: tutorResponse,
    });
    // appointmentData.handleChangeListReservation(bookingId);
    window.location.reload()
  };
  return (
    <div>
      <Button
        variant="contained"
        color="warning"
        onClick={handleClickOpen}
        sx={{ textTransform: 'capitalize' }}
      >
        Cancel Reservation
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ fontWeight: 600 }}>Cancel Reservation</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ marginBottom: '10px', color: '#000' }}>
            Students are often disappointed with cancellation, and an apologetic message can go a
            long way.
          </DialogContentText>
          <TextareaAutosize
            value={contentCancel}
            onChange={(e) => {
              setContentCancel(e.target.value);
            }}
            aria-label="minimum height"
            minRows={3}
            placeholder="Cancellation reason..."
            style={{
              width: '100%',
              height: '250px',
              border: '1px solid #ccc',
              padding: '10px',
              fontSize: '14px',
              borderRadius: '5px',
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleClose();
              handleRejectReservation(appointmentData.groupingInfo._id, contentCancel);
            }}
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
