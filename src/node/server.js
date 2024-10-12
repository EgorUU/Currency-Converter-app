const cors = require('cors')
const express = require('express')
const app = express()
const xml2js = require('xml2js')
const date = require('./modules/date')
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
	const newDate = date.date()
	const urlXml = 'http://www.cbr.ru/scripts/XML_daily.asp?date_req=' + newDate
	const getData = async () => {
		const response = await fetch(urlXml)
		const data = await response.text()
		  let parser = new xml2js.Parser()
		  parser.parseString(data, (err, result) => {
		    if (err) {
		      console.log('Ошибка')
		      return;
		    }
		    else {
		      res.json(result)
		    }


		 })
	}
	getData()
})


app.post('/days', (req, res) => {
	const numbersOfDay = req.body.i < 10 ? `0${req.body.i}` : `${req.body.i}`
	console.log(req.body.i)
	const newDate = date.date2()
	const urlXml = 'http://www.cbr.ru/scripts/XML_daily.asp?date_req=' + numbersOfDay + newDate
	console.log(urlXml)
	const getData = async () => {
		const response = await fetch(urlXml).catch(() => console.log('Ошибка'))
		const data = await response.text()
		let parser = new xml2js.Parser()
		parser.parseString(data, (err, result) => {
			if (err) {
			    console.log('Ошибка')
				return;
			}
			else {
				console.log('Успешное получение данных')
			    res.json(result)
			}
		})
	}
	getData()
})

app.listen(5000, () => {
	console.log('Сервер запущен')
})