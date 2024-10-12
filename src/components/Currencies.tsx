import React, { FC, useEffect } from 'react'
import { Offcanvas } from 'react-bootstrap'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
interface Props {
	Close: any,
	show: boolean,
	AddChoice: any
}

const Currencies: FC<Props> = ({ Close, show, AddChoice }) => {
	const dispatch = useDispatch()
	const currencies = useSelector((state: any) => state.currencies.currencies)
	const getData = async () => {
		const data = await axios('http://localhost:5000')
		console.log(data.data.ValCurs.Valute)
		dispatch({type: "ADD_CURRENCIES",currencies: data.data.ValCurs.Valute})
	}
	useEffect(() => {
		console.log('fe')
		getData()
	}, [])

    return (
        <Offcanvas show={show}>
        	<Offcanvas.Header style={{position: "relative"}}>
	            <h1 className="fs-3">Выберите валюту</h1>
	            <div className="btn btn-close" onClick={() => Close()} style={{position: "absolute", top: "26px", left: "339px"}}></div>
	        </Offcanvas.Header>
	        <Offcanvas.Body style={{display: "flex", alignItems: "center", flexDirection: "column", gap: "30px"}}>
	        	{ 
	        		currencies.length > 0 && 

	        		currencies.map((el: any) => (
	        			<div className="offcanvas-item" onClick={() => {
	        				AddChoice(el.CharCode[0])
	        				Close()
	        			}}>
			        		<h1>{el.CharCode}</h1>
			        		<img src="./images/currencies/currency-ruble-circle-svgrepo-com.svg" alt="" width={25} height={25} />
			        	</div>
	        		))
	        	}

	        </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Currencies