import React, { FC, useState, useRef, useEffect } from 'react'
import '../scss/blocks/home.scss'
import { Offcanvas } from 'react-bootstrap'
import Currencies from '../components/Currencies'
import MonthlyCourse  from '../components/MonthlyCourse'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

const Home: FC = () => {
    const [show, setShow] = useState<boolean>(false)
    const currentCurrency = useSelector((state: any) => state.currencies.currencies)
    const Close = () => {
        setShow(!show)
    }
    const dispatch = useDispatch()
    const AddChoice = (currency: any) => {
        if (choice === 0) {
            setFirst(currency)
        }
        else {
            setSecond(currency)
        }

    }
    const input = useRef<null | any>(null)
    const [result, setResult] = useState<any>(0)
    const currencyCalculation: any = (currenciesData: any) => {
        let value1 = 0
        let value2 = 0
        currenciesData.forEach((el: any) => {
            if (el.CharCode[0] == firstChoice) {
                value1 = el.Value[0].split(',').join('.')
            }
            if (el.CharCode[0] == secondChoice) {
                value2 = el.Value[0].split(',').join('.')
            }
        })
        const res = (Number(input.current?.value) * Number(value1)) / Number(value2)
        return res.toFixed(3)
    }

    const currenciesWithDate = useSelector((state: any) => state.currenciesWithDate.currencies)

    
    const Chart = async () => {
        const numbersOfDays: any = new Date().getDate()
        dispatch({type: "RESET_CURRENCIES"})
        console.log(numbersOfDays)
        for (let i = 1; i <= numbersOfDays; i++) {
            console.log(i)
            const data = await axios.post('http://localhost:5000/days', { i })   // <-- получение данных
            console.log(data)  // <-- получение данных
            await dispatch({type: "ADD_CURRENCIES_WITH_DATE", currencies: data.data.ValCurs.Valute})
        }
    }
    const [valuess, setValuess] = useState<number[] | null>(null)

    useEffect(() => {
        const calculateValues = async () => {
            const calculatedValues = await Promise.all(currenciesWithDate.map(async (el: any) => {
                const result = await currencyCalculation(el);
                return Number(result);
            }));
            setValuess(calculatedValues);
        };
        calculateValues();
    }, [currenciesWithDate])

    const ComplitingDownload = () => {
        setLoading(false)
    }
    const [choice, setChoice] = useState<number>(0)
    const [firstChoice, setFirst] = useState<string>('RUB')
    const [secondChoice, setSecond] = useState<string>('USD')
    const [loading, setLoading] = useState<boolean>(false)
    return (
        <section className="home">
        	<div className="home-container">
        		<div className="card bg-dark home-card card-dark">
        			<div className="card-header card-home-header row" style={{justifyContent: "center", width: "698px",margin: "0 auto"}}>
        				<div className="card-title col-md-5 form" style={{display: "flex", alignItems: "center"}}>
        					<input ref={input} type="number" id="card-currency" style={{paddingLeft: "5px"}}/>
        					<div className="card-currency-pin" onClick={() => {
                                setChoice(0)
                                Close()
                            }}>
        						<h1>{firstChoice}</h1>
        						<img src="./images/currencies/currency-ruble-circle-svgrepo-com.svg" alt="" width={25} height={25} />
        					</div>
        				</div>
        				<div className="card-title col-md-1" onClick={() => console.log(valuess)} style={{display: "flex", alignItems: "center"}}><img src="./images/arrow_znuvkwsvl42e.svg" style={{transform: "rotate(90deg)"}} alt="" width={25} height={25} /></div>
        				<div className="card-title col-md-5 form" style={{display: "flex", alignItems: "center"}}>
        					<div id="card-currency" style={{background: "#6CA4EA", padding: "0", display: "flex", alignItems: "center", justifyContent: "center"}}><h1 style={{fontSize: "20px", margin: "0"}}>{result}</h1></div>
        					<div className="card-currency-pin" onClick={() => {
                                setChoice(1)
                                Close()
                            }}>
        						<h1>{secondChoice}</h1>
        						<img src="./images/currencies/currency-ruble-circle-svgrepo-com.svg" alt="" width={25} height={25} />
        					</div>
        				</div>
        			</div>
        			<div className="card-footer">
        				<button className="btn btn-warning w-100" onClick={() => {
                            setResult(currencyCalculation(currentCurrency))
                            setLoading(true)
                            Chart()
                        }}>Конвертировать</button>
        			</div>
        		</div>
                <MonthlyCourse ComplitingDownload={ComplitingDownload} currencyCalculation={currencyCalculation} loading={loading} chart={Chart} days={valuess} currentValue={[{value: input.current?.value, course: firstChoice, course2: secondChoice}]}/>
        	</div>
            <Currencies show={show} Close={Close} AddChoice={AddChoice} />
        </section>
    )
}

export default Home