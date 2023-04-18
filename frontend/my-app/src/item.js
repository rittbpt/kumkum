import * as React from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Alertt from './Alert';
import Sidebar from './Sidebar';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const finditem_api = 'http://localhost:8080/finditem'

function Item_main() {
    const [ch, setCh] = React.useState(false);
    const [showAlert, setShowalert] = React.useState(false)
    const [check, setCheck] = React.useState(false);
    const [itemid, setItemid] = React.useState('');
    const [data, setData] = React.useState([]);

    const closefind = () => {
        setCheck(false);
        return
    };

    const finditem = () => {
        if (itemid.trim() == '') {
            setShowalert(true)
            setTimeout(() => {
                setShowalert(false);
            }, 3000);
            setCh(8)
            return
        }
        axios.post(finditem_api, {
            item_id: itemid,
        }).then((res) => {
            if (res.data.item_id == 0 || res.data.length == 0) {
                setShowalert(true)
                setTimeout(() => {
					setShowalert(false);
				}, 3000);
                setCh(9)
                return
            }
            else {
                setData(res.data)
                setCheck(true)
            }
        })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <>
            <div>
                {showAlert && (Alertt(ch))}
            </div>
            <Sidebar />
            <div className="login-container">
                <h2>Find Item</h2>
                <form>
                    <label htmlFor="InputUsername">No.item</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter item number"
                        onChange={e => setItemid(e.target.value)}
                    />
                </form>
                <button onClick={e => finditem(e)} type="submit" className="btn btn-primary">
                    Find
                </button>
                {check && (
                    <div className="popup">
                        <div className="popup-table">
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>item_id</th>
                                            <th>tag</th>
                                            <th>order_name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((item) => (
                                            <tr key={item.item_id}>
                                                <td>{item.item_id}</td>
                                                <td>{item.tag}</td>
                                                <td>{item.order_name}</td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <button onClick={(e) => closefind()} type="submit" className="btn btn-primary">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <div>
                    <h3>Add more item?</h3>
                    <button >additem</button>
                </div>
            </div>
        </>
    )
}

export default Item_main;