import React, { useEffect, useState } from 'react';
import { FilterTutor, TutorCard } from '../../components';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import SvgIcon from '@mui/material/SvgIcon';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ButtonBase from '@mui/material/ButtonBase';
import tutorApi from '../../services/aixos/tutorApi';


<>
<div>
    <div className='DaiNgayHienTai'>
        <h2>0</h2>
        <div>Dải Ngày Hiện tại</div>
    </div>
    <div className='GiaSuGapGo'>
        <h2>0</h2>
        <div>Gia sư Gặp gỡ</div>
    </div>
    <div className='SoPhutHoiThoai'>
        <h2>0</h2>
        <div>Số phút Hội thoại tiếng Anh</div>
    </div>
</div>
<button>Chứng chỉ Cambly</button>
<button>Sổ Điểm danh</button>
<div><h3>Lịch sử Bài học</h3></div>
<h5>Lịch sử trò chuyện của bạn sẽ xuất hiện tại đây sau khi bạn trò chuyện với một gia sư.</h5>
<button>Thực hành tiếng Anh!</button>
</>