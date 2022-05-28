import React, { Component, useEffect, useState } from 'react';
import './Review.scss';
import Comment from '../../components/Comment/Comment';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';

export const Review = () => {
    const [content, setContent] = useState("");
    const [star, setStar] = useState(0);

    const changeInput = (e: any) => {
        setContent(e.target.value);
    }
    const SubmitComment = () => {
        let comment = {
            content: content,
            star: star
        }
        alert(`${comment.content} - ${comment.star}`);
    }
  return (
    <div className="Review-page">
      <Comment
        id={1}
        name="Nguyen Van A"
        date="tháng 12, 2020"
        body="He has a great gift of emphaty. He listening carefully,
        and really trying to teach and share something.
        And also you feel he cares about you. Thank you Fabian."
      />
      <Comment
        id={2}
        name="Nguyen Van A"
        date="tháng 12, 2020"
        body="He has a great gift of emphaty. He listening carefully,
        and really trying to teach and share something.
        And also you feel he cares about you. Thank you Fabian."
      />
      <Comment
        id={3}
        name="Nguyen Van A"
        date="tháng 12, 2020"
        body="He has a great gift of emphaty. He listening carefully,
        and really trying to teach and share something.
        And also you feel he cares about you. Thank you Fabian."
      />
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginTop: 5 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Give some review here"
          inputProps={{ 'aria-label': 'give review' }}
          onChange={changeInput}
        />
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} onChange={(_, value) => {
          setStar(value);
        }}/>
        <IconButton color="primary" sx={{ p: '10px' }} aria-label="send" onClick={SubmitComment}>
          <SendIcon />
        </IconButton>
      </Paper>
    </div>
  );
};
