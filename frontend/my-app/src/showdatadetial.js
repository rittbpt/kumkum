import { useParams } from "react-router-dom"
import axios from 'axios';
import Sidebar from './Sidebar';
import Showdatadetail from './showdatadetail.css'
import { useState } from "react";



const edititem_api = 'http://localhost:8080/edititem'

const Showdatadetial = (edit) => {
    const { id } = useParams()
    const [ordername, setOrdername] = useState('asfasf')
    const handleorder = (e) => {
        setOrdername(e.target.value)
    }
    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = () => {
        setIsChecked(!isChecked);
    };

    console.log(id)
    axios.post(edititem_api, {
        id: id
    }).then((res) => {
        console.log(res)
    });
    return (
        <>
            <div>
                <Sidebar />
            </div>
            <div className="edit-container">
                <form>
                    <label htmlFor="Order Name">Order name</label>
                    <input
                        type="email"
                        className="form-control"
                        value={ordername}
                        onChange={e => handleorder(e)}
                    />
                    <label htmlFor="Tag">Tag</label>
                    <input type="checkbox" checked={isChecked} onChange={handleCheck} />
                    เลือกตัวเลือกนี้
                    <label htmlFor="Inputpassword">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Enter password"
                    />

                </form>
                <button type="submit" className="btn btn-primary">
                    Edit
                </button>
            </div>
        </>
    )
}

export default Showdatadetial
