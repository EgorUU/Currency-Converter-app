import React, { FC, useRef, useEffect, useState } from 'react'
import '../scss/blocks/monthly-course.scss'
import axios from 'axios'
import CourseTable from './CourseTable'

const MonthlyCourse: FC<any> = ({ currencyCalculation, chart, days, currentValue, loading, ComplitingDownload }) => {
	const date = new Date().getDate()
	const canvas: any = useRef<null | any>(null)
	const drawChart = () => {
		if (!canvas.current) return;
	    const ctx = canvas.current.getContext('2d');
	    const canvasHeight = 487 - 8
	    const canvasWidth = 695
	    const fraction = canvasWidth / date
	    ctx.beginPath()
	    const normalizedValueFor = (days[0] - Math.min(...days)) / (Math.max(...days) - Math.min(...days));
		const currentPercentFor = normalizedValueFor * 100
	    ctx.moveTo(fraction * 0, (canvasHeight * currentPercentFor) / 100)
	   	ctx.lineWidth = 6

	   	console.log(fraction, canvasHeight * (days[0] - Math.min(...days)) / (Math.max(...days) - Math.min(...days)) / 100)

	   	days.forEach((el: any, index: number) => {
	   		const normalizedValue = (days[index] - Math.min(...days)) / (Math.max(...days) - Math.min(...days));
			const currentPercent = normalizedValue * 100
			ctx.strokeStyle = 'white'
			ctx.lineTo(/* x: */ fraction * (index + 1), /* y: */ (canvasHeight * currentPercent) / 100)
	   		console.log(days[index])
	   		console.log(currentPercent)
	   		console.log(`x: ${fraction * index}, y: ${(canvasHeight * currentPercent) / 100}`)
	   	})
	   	ctx.stroke()
	}
	useEffect(() => {
		if (days?.length == date) {
			drawChart()
			ComplitingDownload()
		}

		console.log(days)

	}, [days])
	const ChartContent = () => {
		if (loading) {
			if (!canvas.current) return;
	    	const ctx = canvas.current.getContext('2d');
	    	ctx.clearRect(0, 0, 693, 487)
			return (
				<button className="btn btn-warning" type="button" style={{height: "30px", display: "flex", alignItems: "center", gap: "5px", position: "absolute", top: `${467 / 2}px`, left: `${(565) / 2}px`}} disabled>
				  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
				  Загрузка...
				</button>
			)
		}
		if (days?.length == date) {
			console.log('yex')
			return (

			<>
				{
				days?.length == date &&
				
					
					days.map((el: any, index: number) => (
						<CourseTable el={el} key={index} i={index} currentValue={currentValue} date={date} />
					))

				}
			</>
			)
		}
	}
    return (
       	<div className="chart">
       		<canvas id="canvas" width="693" height="487" ref={canvas}>
       		</canvas>
       		<div className="hover" style={{width: days?.length == date ? "738.5px" : "695px", height: days?.length == date ? "518px" : "500px"}}>
       			{
       				<div className="hover-columns">{ChartContent()}</div>
       			}
       			{
       				days?.length == date && (
       				<div className="hover-char-values">
	       				<h1>{Math.max(...days)}</h1>
	       				<h1>{Math.min(...days)}</h1>
       			    </div>
       			    )
       			}

   			</div>
       	</div>
    )
}

export default MonthlyCourse