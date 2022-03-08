
const buscar = document.getElementById("buscar");
const boton = document.getElementById("boton");
const Principal = document.getElementById("principal");

const Image = document.getElementById("imagen");
const Population = document.getElementById("population");
const Country = document.getElementById("country");
const Cases = document.getElementById("cases");
const Paises = document.getElementById("Paises");
const Active = document.getElementById("active");
const TodayCases = document.getElementById("todayCases");
const Death = document.getElementById("death");
const TodayDeaths = document.getElementById("todayDeaths");
const Critical = document.getElementById("critical");
const Continent = document.getElementById("continent");
const Tests = document.getElementById("tests");
const Recovered = document.getElementById("recoreved");
const TodayRecovered = document.getElementById("todayRecovered");

boton.addEventListener("click", async (flag) => {
	getCountry(buscar.value);
	getFlag(buscar.value);
});

const getCountry = async (country) => {
	try {
		const res = await axios({
			method: "get",
			url: `https://disease.sh/v3/covid-19/countries/${country}?yesterday=today&strict=true`
		});
		console.log(res);
		const data = res.data;
		console.log(data);
		crearCountry(data);
	} catch (error) {
		console.log(error);
	}
};

const getFlag = async (flag) => {
	try {
		const res = await axios({
			method: "get",
			url: `https://restcountries.com/v3.1/name/${flag}`
		});
		console.log(res);
		const data = res.data;
		console.log(data[0].flags);
		crearflag(data);
	} catch (error) {
		console.log(error);
	}
};

const crearflag = (flag) => {
	const bandera = flag[0].flags.png;
	Image.setAttribute("src", bandera);
};

const crearCountry = (country) => {
	const pais = country.country;
	Active.textContent = `Pais: ${pais}`;

	const continente = country.continent;
	Paises.textContent = `Continente: ${continente}`;

	const populations = country.population;
	Population.textContent = `Poblacion Total: ${populations}`;

	const cases_confirm = country.cases;
	Cases.textContent = `Total Casos Confirmados: ${cases_confirm}`;

	const case_today = country.todayCases;
	TodayCases.textContent = `Casos Confirmados Hoy: ${case_today}`;

	const deaths = country.deaths;
	Death.textContent = `Muertes Total: ${deaths}`;

	const today_Deaths = country.todayDeaths;
	TodayDeaths.textContent = `Muertes de Hoy: ${today_Deaths}`;

	const criticals = country.critical;
	Critical.textContent = `Casos Criticos: ${criticals}`;

	const testing = country.tests;
	Tests.textContent = `Tests Realizados: ${testing}`;

	const recovery = country.recovered;
	Recovered.textContent = `Casos Recuperados: ${recovery}`;

	const today_Recovered = country.todayRecovered;
	TodayRecovered.textContent = `Recuperados Hoy: ${today_Recovered}`;
};

const obtenerDatos = async () => {
	try {
		let res = await axios({
			method: "get",
			url: "https://disease.sh/v3/covid-19/all"
		});
		console.log(res);
		let data = await res.data;
		console.log(data);

		const population = data.population;
		Population.textContent = `Poblacion Total: ${population}`;

		const casosTotales = data.cases;
		Cases.textContent = `Casos Totales: ${casosTotales}`;

		const casosActivos = data.active;
		Active.textContent = `Casos Activos: ${casosActivos}`;

		const affectedCountries = data.affectedCountries;
		Paises.textContent = `Paises Infectados: ${affectedCountries}`;

		const casesToday = data.todayCases;
		TodayCases.textContent = `Casos Confirmados Hoy: ${casesToday}`;

		const death = data.deaths;
		Death.textContent = `Muertes Total: ${death}`;

		const deathsToday = data.todayDeaths;
		TodayDeaths.textContent = `Muertes de Hoy: ${deathsToday}`;

		const casosCriticos = data.critical;
		Critical.textContent = `Casos Criticos: ${casosCriticos}`;

		const tests = data.tests;
		Tests.textContent = `Tests Realizados: ${tests}`;

		const recovered = data.recovered;
		Recovered.textContent = `Casos Recuperados: ${recovered}`;

		const todayRecovered = data.todayRecovered;
		TodayRecovered.textContent = `Casos Hoy Recuperados: ${todayRecovered}`;
	} catch (error) {
		console.log(error);
	}
};

obtenerDatos();
