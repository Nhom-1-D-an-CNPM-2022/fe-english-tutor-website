import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Card,
  CardActions,
  CardContent,
  ListItemText,
  ListItemButton,
  Divider,
  Button,
  TextField,
} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import './Checkout.scss';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export const Checkout = () => {
  const history = useHistory();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function convert(money: number): string {
    return money.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
  }
  const [open1, setOpen1] = React.useState(false);
  const handleOpen = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  return (
    <>
      <Grid container justifyContent={'center'}>
        <Grid
          container
          spacing={3}
          justifyContent={'center'}
          style={{ width: '100%', margin: '10px 100px' }}
        >
          <Grid xs={12} sm={8} md={6}>
            <Box>
              <Typography>Lịch thanh toán</Typography>
              <br />
              <div>
                <Grid container spacing={1}>
                  <Grid item xs={12} lg={6}>
                    <Card sx={{ minWidth: 275 }}>
                      <CardContent>
                        <Typography sx={{ fontSize: 14 }} gutterBottom variant="body1">
                          Thanh toán trả trước
                        </Typography>
                        <Typography sx={{ mb: 1.5 }}>
                          {convert(location.state.duration * location.state.total)}
                        </Typography>
                        <Typography variant="body2">
                          Thanh toán toàn bộ khóa học trong một lần
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </div>
            </Box>
            <br />
            <br />
            <Typography>Thông tin thanh toán</Typography>
            <Button
              id="demo-positioned-button"
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              Phương thức
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={handleClose}>Ví Momo</MenuItem>
              <MenuItem onClick={handleClose}>Credit/Debit</MenuItem>
            </Menu>
            <br />
            <TextField id="demo-helper-text-aligned" label="Số thẻ" />
          </Grid>
          <Grid xs={12} sm={8} md={6}>
            <Typography>Tóm tắt</Typography>
            <List dense sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
              <ListItem secondaryAction={<h1>{location.state.minute}</h1>} disablePadding>
                <ListItemButton>
                  <ListItemText primary={`Số phút mỗi ngày`} />
                </ListItemButton>
              </ListItem>
              <ListItem secondaryAction={<h1>{location.state.day}</h1>} disablePadding>
                <ListItemButton>
                  <ListItemText primary={`Số ngày mỗi tuần`} />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem secondaryAction={<h1>{location.state.duration}</h1>} disablePadding>
                <ListItemButton>
                  <ListItemText primary={`Số tháng thanh toán`} />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem
                secondaryAction={<h1>{convert(location.state.total * location.state.duration)}</h1>}
                disablePadding
              >
                <ListItemButton>
                  <ListItemText primary={`Học phí theo tháng`} />
                </ListItemButton>
              </ListItem>
            </List>
            <Button variant="contained" fullWidth onClick={handleOpen}>
              Mua
            </Button>
            <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Mua thành công
          </Typography>
          <Button variant="contained"  onClick={() => {history.push("/")}}>
              Về trang chủ
            </Button>
        </Box>
      </Modal>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
