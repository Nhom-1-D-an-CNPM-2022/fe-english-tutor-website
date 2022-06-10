import React from 'react';
import { useHistory } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './Subcription.scss';
import { alignProperty } from '@mui/material/styles/cssUtils';

export const Subcription = () => {
  const [minute, setMinute] = React.useState(0);
  const [day, setDay] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const history = useHistory();
  const handleChange = (event: any) => {
    setMinute(event.target.value);
  };

  const handleChange1 = (event: any) => {
    setDay(event.target.value);
  };
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event: any, index: any) => {
    setSelectedIndex(index);
    switch (index) {
      case 1:
        setTotal(600000 * day * minute);
        break;
      case 3:
        setTotal(600000 * day * minute * 0.9);
        break;
      case 12:
        setTotal(600000 * day * minute * 0.75);
      default:
        break;
    }
    console.log(total);
  };
  const handleCheckout = () => {
    history.push({
      pathname: '/student/checkout',
      state: {
        total: total,
        duration: selectedIndex,
        minute: minute,
        day: day,
      }
    })
    
  };
  function convert(money: number): string {
    return money.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
  }
  return (
    <div id="subscription-page">
      <div className="container page-section text-center">
        <div>
          <div className="row">
            <div className="col-md-6">
              <div className="subscription-section subscription-section-agenda">
                <div className="subscription-section-header">
                  <h3>Chọn thời lượng bạn muốn cam kết luyện tập mỗi tuần</h3>
                </div>
                <div className="subscription-section-content">
                  <div className="content-item">
                    <AccessTimeIcon style={{marginRight: '30px'}}></AccessTimeIcon>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Số phút</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={minute}
                          label="Minutes"
                          onChange={handleChange}
                          style={{ width: '400px' }}
                        >
                          <MenuItem value={1}>15 phút mỗi ngày</MenuItem>
                          <MenuItem value={2}>30 phút mỗi ngày</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                  <div className="content-item">
                    <CalendarMonthIcon style={{marginRight: '30px'}}></CalendarMonthIcon>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Số ngày</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={day}
                          label="Day"
                          onChange={handleChange1}
                          style={{ width: '400px' }}
                        >
                          <MenuItem value={1}>1 ngày</MenuItem>
                          <MenuItem value={2}>2 ngày</MenuItem>
                          <MenuItem value={3}>3 ngày</MenuItem>
                          <MenuItem value={5}>5 ngày</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="subscription-section">
                <div className="subscription-section-header">
                  <h3>Chọn giới hạn thanh toán (tự động gia hạn nếu thanh toán qua thẻ)</h3>
                </div>
                <div className="subscription-section-content">
                  <Box sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
                    <List component="nav" aria-label="secondary mailbox folder">
                      <ListItemButton
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                      >
                        <ListItemText primary="Tháng" />
                        <ListItemText primary={convert(600000 * day * minute)} />
                      </ListItemButton>
                      <Divider />
                      <ListItemButton
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 3)}
                      >
                        <ListItemText primary="Quý" />
                        <ListItemText primary={convert(600000 * day * minute * 0.9)} />
                      </ListItemButton>
                      <Divider />
                      <ListItemButton
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 12)}
                      >
                        <ListItemText primary="Năm" />
                        <ListItemText primary={convert(600000 * day * minute * 0.75)} />
                      </ListItemButton>
                    </List>
                  </Box>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="subscription-section subscription-section-checkout">
                <div>
                  <div className="subscription-section-header">
                    <h3>Tóm tắt gói học</h3>
                  </div>
                  <div id="payment-summary">
                    <List dense sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
                      <ListItem secondaryAction={<h1>{minute * 15}</h1>} disablePadding>
                        <ListItemButton>
                          <ListItemText primary={`Số phút mỗi ngày`} />
                        </ListItemButton>
                      </ListItem>
                      <ListItem secondaryAction={<h1>{day}</h1>} disablePadding>
                        <ListItemButton>
                          <ListItemText primary={`Số ngày mỗi tuần`} />
                        </ListItemButton>
                      </ListItem>
                      <Divider />
                      <ListItem secondaryAction={<h1>{convert(total)}</h1>} disablePadding>
                        <ListItemButton>
                          <ListItemText primary={`Học phí theo tháng`} />
                        </ListItemButton>
                      </ListItem>
                    </List>
                    <Button variant="contained" endIcon={<SendIcon />} onClick={handleCheckout}>
                      Chọn gói học
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
