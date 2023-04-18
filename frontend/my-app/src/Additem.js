import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Alertt from './Alert';
import Sidebar from './Sidebar';

const additem_api = 'http://localhost:8080/additem'

function Additem() {
    const [tag, setTag] = React.useState('')
    const [ordername, setOrdername] = React.useState('')
    const [detail, setDetail] = React.useState('')
    const [orderdate, setOrderdate] = React.useState('')
    const [duedate, setDuedate] = React.useState('')
    const [ch, setCh] = React.useState(0)
    const [showAlert, setShowAlert] = React.useState(false);
    console.log(duedate)

    const navigate = useNavigate();
    const Adddataitem = () => {
        if (tag.trim() == '' || ordername.trim() == '' || detail.trim() == '' || orderdate.trim() == '' || duedate.trim() == '') {
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
            setCh(10)
            return
        }
        axios.post(additem_api, {
            item_id: 0,
            tag: "tag"+tag,
            order_name: ordername,
            process: 0,
            detail: detail,
            start: orderdate,
            duedate: duedate,
            active:'y'
        }).then((res) => {
            if (res.data.chk == 1) {
                setCh(11)
                setShowAlert(true)
                setTimeout(() => {
                    setShowAlert(false);
                }, 3000);
                window.location.href = '/Additem'
                return
            }
        })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <>
            {showAlert && (Alertt(ch))}
            <Sidebar />
            <div className="login-container">
                <h1>Additem</h1>
                <form>
                    <label htmlFor="Inputtag">tag</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Tag"
                        onChange={e => setTag(e.target.value)}
                    />
                    <label htmlFor="InputOrdername">Order name</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Order name"
                        onChange={e => setOrdername(e.target.value)}
                    />
                    <label htmlFor="InputDetail">detail</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Detail"
                        onChange={e => setDetail(e.target.value)}
                    />
                    <label htmlFor="InputOrderdate">Order date (Ex. 15012023)</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Enter Order date"
                        onChange={e => setOrderdate(e.target.value)}
                    />
                    <label htmlFor="Inputpassword">Due date (Ex.15012023)</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Enter Due Date"
                        onChange={e => setDuedate(e.target.value)}
                    />
                </form>
                <button onClick={e => Adddataitem()} type="submit" className="btn btn-primary">
                    Add
                </button>
            </div>
        </>
    );
}

export default Additem;