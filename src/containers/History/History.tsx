import React, { useEffect, useState } from 'react';
import './History.scss';
import bookingApi from '../../services/aixos/booking';
export const History = () => {

    const [listBooking, setListBooking] = useState([]);
    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [hasPrevPage, setHasPrevPage] = useState(false);
    const [time, setTime] = useState(0);
    const [meet, setMeet] = useState(0);

    useEffect(() => {
        async function fetchMyAPI() {
          let response = await bookingApi.getHistory();
          let data = response.data;
          let ti = 0;
          let i = 0;
          while (i<data.length){
            let res = data[i];
            let date = new Date(res.schedule.startTime)
            date.setTime(date.getTime() - 7*60*60*1000)
            if (date >= (new Date())){
                data.splice(data.indexOf(res),1);
            }
            else{
                ti = ti + parseInt(res.schedule.interval);
                i++;}
          }
          setTime(ti);
          setMeet(data.length);
          setListBooking(data);
        }
        fetchMyAPI();
      }, []);

  return (
    <div className="main">
        <div className="fullLine">
            <div className="line1">
                <div style={{display: 'flex', flexFlow: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
                    <h2 style={{color: "#484848", fontSize: "30px", lineHeight: '1.17', fontWeight: "300"}}>0</h2>
                    <small>Dải Ngày Hiện tại</small>
                </div>
                <div style={{width: '1px', borderRight: '1px solid rgb(204, 204, 204)'}}></div>
                <div style={{display: 'flex', flexFlow: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
                    <h2 style={{color: "#484848", fontSize: "30px", lineHeight: '1.17', fontWeight: "300"}}>{meet}</h2>
                    <small>Gặp gỡ gia sư</small>
                </div>
                <div style={{display: 'flex', flexFlow: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
                    <h2 style={{color: "#484848", fontSize: "30px", lineHeight: '1.17', fontWeight: "300"}}>{time}</h2>
                    <small>Số phút hội thoại tiếng anh</small>
                </div>
            </div>
            <div className="line2" style={{flexFlow: 'row'}}>
                <div style={{display: 'flex', flexFlow: 'column', justifyContent: 'space-around', alignItems: 'center', width: '22%', backgroundColor: '#fff'}}>
                <div style={{margin: '10px'}}>
                    <p>
                        <a href="/en/student/settings/certificate" style={{textDecoration: 'none'}}>
                            <button className="btn btn-accent btn-block">Chứng chỉ Cambly</button>
                        </a>
                    </p>
                    <p>
                        <a href="/en/student/forms/record" style={{textDecoration: 'none'}}>
                            <button className="btn btn-secondary btn-block">Sổ Điểm danh</button>
                        </a>
                    </p>
                </div>
                </div>
                <div style={{display: 'flex', flexFlow: 'column', justifyContent: 'space-around', alignItems: 'center', width: '75%'}}>
                    <div style={{width: '100%'}}>
                        <div style={{backgroundColor: "#f5f5f5"}}>
                            <h3 className="panel-title">Lịch sử bài học</h3>
                        </div>
                        {listBooking.length>0 ?
                        <div style={{backgroundColor: "#fff", textAlign: 'left'}}>
                            <div style={{width: '100%', display: 'flex'}}>
                                <div style={{width: '30%'}}>Ngày</div>
                                <div style={{width: '30%'}}>Gia sư</div>
                                <div style={{width: '30%'}}>Thời gian(phút)</div>
                            </div>
                            {listBooking.map((item, index)=>
                            <div style={{width: '100%', display: 'flex'}}>
                                <div style={{width: '30%'}}>{item.schedule.startTime}</div>
                                <div style={{width: '30%'}}>{item.schedule.tutor.displayName}</div>
                                <div style={{width: '30%'}}>{item.schedule.interval}</div>
                            </div>
                        )}
                        </div>:
                        <div style={{backgroundColor: "#fff", textAlign: 'center'}}>
                            <h5>
                                Lịch sử trò chuyện của bạn sẽ xuất hiện tại đây sau khi bạn trò chuyện với một gia sư.
                            </h5>
                            <button className="btn btn-accent btn-block" style={{width: "auto"}}>Thực hành tiếng anh</button>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
