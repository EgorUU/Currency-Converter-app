module.exports = {
	date: () => {
		const date = new Date()
		const currentDate = date.toString().split(' ').slice(1, 4)
		let mont = ''
		switch (currentDate[0]) {
			case "Jan":
				month = '01'
				break;
			case "Feb":
				month = '02'
				break;
			case "Mar":
				month = '03'
				break;
			case "Apr":
				month = '04'
				break;
			case "May":
				month = '05'
				break;
			case "Jun":
				month = '06'
				break;
			case "Jul":
				month = '07'
				break;
			case "Aug":
				month = '08'
				break;
			case "Sep":
				month = '09'
				break;
			case "Oct":
				month = '10'
				break;
			case "Nov":
				month = '11'
				break;
			case "Dec":
				month = '12'
				break;

		}
		return `${currentDate[1]}/${month}/${currentDate[2]}`
		
	},
	date2: () => {
		const date = new Date()
		const currentDate = date.toString().split(' ').slice(1, 4)
		let mont = ''
		switch (currentDate[0]) {
			case "Jan":
				month = '01'
				break;
			case "Feb":
				month = '02'
				break;
			case "Mar":
				month = '03'
				break;
			case "Apr":
				month = '04'
				break;
			case "May":
				month = '05'
				break;
			case "Jun":
				month = '06'
				break;
			case "Jul":
				month = '07'
				break;
			case "Aug":
				month = '08'
				break;
			case "Sep":
				month = '09'
				break;
			case "Oct":
				month = '10'
				break;
			case "Nov":
				month = '11'
				break;
			case "Dec":
				month = '12'
				break;

		}
		return `/${month}/${currentDate[2]}`
	}
}