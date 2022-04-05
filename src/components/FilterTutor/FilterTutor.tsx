import React, { useState } from 'react';
import { CardOption } from './CardOption/CardOption';
import './FilterTutor.scss';

export const FilterTutor = () => {
    const [listFilter, setListFilter] = useState([
        { title: 'Khóa học Cambly', options: ['Bussiness English', 'hehe','Bussiness English', 'hehe','Bussiness English', 'hehe','Bussiness English', 'hehe',], isShow: false },
        {title: "Cấp độ Bài học",
        options: ["Bussiness English","hehe"]},
        {title: "Giọng nói gia sư",
        options: ["Bussiness English","hehe"]},
        {title: "Tính cách gia sư",
        options: ["Bussiness English","hehe"]},
        {title: "Có mặt",
        options: ["Bussiness English","hehe"]},
      ])
    const handleChangeShow = (index:any) =>{
        listFilter[index].isShow = !listFilter[index].isShow;
        setListFilter([...listFilter]);
        console.log(listFilter[index].isShow)
    }
  return (
    <div className="filter-tutor">
      {listFilter.map((items: any, index: number) => {
        return (
          <div key={index}>
            <button className="filter-tutor__button" onClick={()=>handleChangeShow(index)}>{items.title}</button>
            <CardOption isShow={items.isShow} data={items.options}></CardOption>
          </div>
        );
      })}
    </div>
  );
};
