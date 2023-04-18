import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './test.css';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

var start = 0
var end = 3

const getitem_api = 'http://localhost:8080/getitem'

function Showuser() {
  const [check, setCheck] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [load, setLoad] = React.useState(true);
  const [load2, setLoad2] = React.useState(false);
  const [more, setMore] = React.useState(false);
  const [x, setX] = React.useState("")
  const [nodata, setNodata] = React.useState(false)
  const [cb1, setCb1] = React.useState(false)
  const [cb2, setCb2] = React.useState(false)
  const [cb3, setCb3] = React.useState(false)
  const [cb4, setCb4] = React.useState(false)
  const [opt, setOpt] = React.useState([])

  useEffect(() => {
    show();
  }, [x]);

  const handleCheckboxChange = (cbIndex) => {
    switch (cbIndex) {
      case 1:
        setCb1(!cb1);
        break;
      case 2:
        setCb2(!cb2);
        break;
      case 3:
        setCb3(!cb3);
        break;
      case 4:
        setCb4(!cb4);
        break;
      default:
        break;
    }
    setarr();
  }


  const show = () => {
    axios.post(getitem_api, {
      start: start,
      end: end,
      x: x,
      opt: opt
    }).then((res) => {
      console.log(res)
      if (res.data.length == 0) {
        setNodata(true)
      }
      else {setNodata(false)}
      setData(res.data);
      setLoad(false)
      setLoad2(false)
      setCheck(false);
      setMore(true)

      if (res.data.length < end) {
        setMore(false)
      }
    });
    return
  };

  const setarr = () => {
    var arr = []
    if (cb1 == true) {
      arr.push("0")
    }
    if (cb2 == true) {
      arr.push("1")
    }
    if (cb3 == true) {
      arr.push("2")
    }
    if (cb4 == true) {
      arr.push("3")
    }
    setOpt(arr)
    show()
    return
  }

  const getmore = () => {
    setMore(false)
    setLoad2(true)
    end += 4
    show()
    return
  }

  return (
    <>
      {check && show()}
      <div>
        <Sidebar />
      </div>
      <div>
        {load && <Box className='load2'>
          <CircularProgress />
          <p>Loading ...</p>
        </Box>}
        <Box className='searchbox'>
          <TextField onChange={e => {
            setX(e.target.value.toString().trim())
          }} />
          <Checkbox {...label} color="default" onChange={() => handleCheckboxChange(1)} />
          <CircleIcon className='tag0'></CircleIcon>

          <Checkbox {...label} color="default" onChange={() => handleCheckboxChange(2)} />
          <CircleIcon className='tag1'></CircleIcon>
          
          <Checkbox {...label} color="default" onChange={() => handleCheckboxChange(3)} />
          <CircleIcon className='tag2'></CircleIcon>

          <Checkbox {...label} color="default" onChange={() => handleCheckboxChange(4)} />
          <CircleIcon className='tag3'></CircleIcon>

        </Box>
        {nodata && (<h2 className='nodata'>Not found data!</h2>)}
        {data?.map((item) => (
          <div className='box'>
            <div>
              <CircleIcon className={item.tag}></CircleIcon>
              <h2>No. {item.item_id}</h2>
              <p>process: {item.process}</p>
              <p>deadline: {item.duedate}</p>
              <p>name: {item.order_name}</p>
            </div>
          </div>
        ))}
        {load2 && (<Box className='load'>
          <CircularProgress />
        </Box>)}
        {more && (
          <button onClick={(e) => getmore()} className='showmore'>
            <h3>Show more</h3>
          </button>
        )}
      </div>

    </>
  );
}

export default Showuser;
