import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './test.css';
import Sidebar from './Sidebar';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import LinearProgress from '@mui/material/LinearProgress';
import CreateIcon from '@mui/icons-material/Create';
// import { editContext } from './routes/AuthRoutes';

var start = 0
var end = 3

const getitem_api = 'http://localhost:8080/getitem'

function Showuser() {
  const [check, setCheck] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [load, setLoad] = React.useState(true);
  const [load2, setLoad2] = React.useState(false);
  const [more, setMore] = React.useState(false);
  const [x, setX] = React.useState("")
  const [nodata, setNodata] = React.useState(false)
  const [load3, setLoad3] = React.useState(false)
  const [opt, setOpt] = React.useState(['0', '1', '2', '3'])
  // const {edata, seteData} = useContext(editContext)

  const handleCheckboxChange = (cbIndex) => {
    setLoad3(true)
    var arr = []
    opt.forEach(i => {
      arr.push(i)
    });
    if (arr[cbIndex] == '-1') {
      arr[cbIndex] = cbIndex.toString()
    }
    else {
      arr[cbIndex] = '-1'
    }
    setOpt(arr)
  }
  useEffect(() => {
    show()
  }, [x, opt]);


  const show = React.useCallback(() => {
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
      else { setNodata(false) }
      setData(res.data);
      setLoad(false)
      setLoad2(false)
      setLoad3(false)
      setCheck(true);
      setMore(true)

      if (res.data.length < end) {
        setMore(false)
      }
    });
  }, [x, opt]);

  const getmore = () => {
    setMore(false)
    setLoad2(true)
    end += 4
    show()
    return
  }

  return (
    <>
      <div>
        <Sidebar />
      </div>
      {load && <Box className='load'>
        <CircularProgress />
        <p>Loading ...</p>
      </Box>}
      <div>
        <div className='rapper'>
          {check && (<Box >
            <TextField id="outlined-basic" label="Search" variant="outlined" className='searchbox' onChange={e => {
              setX(e.target.value.toString().trim())
            }} /></Box>)}
          {check && (<div className='checkbix'>
            <Checkbox defaultChecked color="default" onChange={() => { handleCheckboxChange(0) }} />
            <CircleIcon className='tag0'></CircleIcon>

            <Checkbox defaultChecked color="default" onChange={() => { handleCheckboxChange(1) }} />
            <CircleIcon className='tag1'></CircleIcon>

            <Checkbox defaultChecked color="default" onChange={() => { handleCheckboxChange(2) }} />
            <CircleIcon className='tag2'></CircleIcon>

            <Checkbox defaultChecked color="default" onChange={() => { handleCheckboxChange(3) }} />
            <CircleIcon className='tag3'></CircleIcon>
          </div>)}
        </div>
        <div>
          {load3 && <LinearProgress className='loadline' />}
        </div>
        {nodata && (<h2 className='nodata'>Data not found!</h2>)}
        {data?.map((item) => (
          <div className='box'>
            <div>
              <Link to={`/Detail/${item.item_id}`} className='editdata'>
                <button className='editdata' >
                  <CreateIcon></CreateIcon>
                </button>
              </Link>
              <CircleIcon className={item.tag}></CircleIcon>
              <h2>No. {item.item_id}</h2>
              <p>process: {item.process}</p>
              <p>deadline: {item.duedate}</p>
              <p>name: {item.order_name}</p>
            </div>
          </div>
        ))}
        {load2 && (<Box className='load2'>
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
