function dayName(date) {
const daysOfTheWeek = ["domenica", "lunedi", "martedi", "mercoledi", "giovedi", "venerdi", "sabato"];
return daysOfTheWeek[date.getDay()];
}

function greeting(date) {
	return `Ciao, mondo! Felice ${dayName(date)}.`;
}