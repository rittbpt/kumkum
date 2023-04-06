import { DarkModeSharp } from '@mui/icons-material'
import axios from 'axios'
import React from 'react'

var check = false

function Showuser() {
	const [data, setData] = React.useState([])
	const show = () => {
		if (check) {
			setData([])	
			check = false
			return
		}
		axios.get('http://localhost:8080/show')
			.then((res) => {
				setData(res.data)
				check = true
			})
	}
	return (
		<div>
			<button onClick={e => show()} type="submit" className="btn btn-primary">
				show
			</button>
			{data?.map((res) => {
				return <h1>{res.username}</h1>
			})}
		</div>
	)

}

export default Showuser

