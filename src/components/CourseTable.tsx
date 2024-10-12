import React, { FC, useState } from 'react'

const CourseTable: FC<any> = ({ el, date, currentValue, i }) => {
	const [show, setShow] = useState<boolean>(false)
	const currentMonth = new Date().toString().split(' ')[1]
	console.log(currentMonth)
    return (
        <div className="day-column" style={{width: `${693 / date}px`}} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
			<div className={!show ? "course-table" : "course-table table-active"}>
				<div className="course-table-current">
					<h1>{currentValue[0].value}</h1>
					<h2>{currentValue[0].course}</h2>
				</div>
				<div className="course-table-result">
					<h1>{el}</h1>
					<h2>{currentValue[0].course2}</h2>
				</div>
			</div>
			<div className="day-column__date">
				<h1>{i + 1}</h1>
				<h2>{currentMonth}</h2>
			</div>
		</div>
    )
}

export default CourseTable