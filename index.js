
const buscar = document.getElementById("buscar");
const boton = document.getElementById("boton");


const Image = document.getElementById("imagen")
const Population = document.getElementById("population") 
const Country = document.getElementById("country") 
const Cases = document.getElementById("cases") 
const Paises = document.getElementById("Paises")
const Active = document.getElementById("active") 
const TodayCases = document.getElementById("todayCases") 
const Death = document.getElementById("death") 
const TodayDeaths = document.getElementById("todayDeaths") 
const Critical = document.getElementById("critical") 
const Continent = document.getElementById("continent") 
const Tests = document.getElementById("tests") 
const Recovered = document.getElementById("recoreved") 
const TodayRecovered = document.getElementById("todayRecovered") 


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
  const bandera =  flag[0].flags.png
  Image.setAttribute("src", bandera)
};


const crearCountry = (country) => {
  const pais =  country.country
	Country.textContent = `Pais: ${pais}`; 

  const continent =  country.continent
  Continent.textContent = `Continente: ${continent}`;

  const populations =  country.population
	Population.textContent = `Poblacion Total: ${populations}`; 

  const caseConfirm =  country.cases
	Cases.textContent = `Total Casos Confirmados: ${caseConfirm}`;

  const casetoday =  country.todayCases
	TodayCases.textContent = `Casos Confirmados Hoy: ${casetoday}`;
  
  const active =  country.active
	Active.textContent = `Casos Activos: ${active}`; 

  const death =  country.deaths
  Death.textContent = `Muertes: ${death}`; 

  const todayDeaths =  country.todayDeaths
	TodayDeaths.textContent = `Muertes de Hoy: ${todayDeaths}`; 

  const critical =  country.critical
	Critical.textContent = `Casos Criticos: ${critical }`;

  const tests =  country.tests
	Tests.textContent = `Tests Realizados: ${tests}`;

  const todayRecovered =  country.todayRecovered
	TodayRecovered.textContent = `Recuperados Hoy: ${todayRecovered}`;

};


const obtenerDatos = async () => {
	try {
    let res = await axios ({
      method: "get",
      url: "https://disease.sh/v3/covid-19/all"
    })
    console.log(res);
    let data  = await res.data
    console.log(data);
    
    const population =  data.population
    Population.textContent = `Poblacion Total: ${population}`

    const casosTotales =  data.cases
    Cases.textContent = `Casos Totales: ${casosTotales}`

    const casosActivos =  data.active
    Active.textContent = `Casos Activos: ${casosActivos}`

    const affectedCountries =  data.affectedCountries
    Paises.textContent = `Paises Infectados: ${affectedCountries}`

    const casesToday =  data.todayCases
    TodayCases.textContent = `Casos Confirmados Hoy: ${casesToday}`

    const death =  data.deaths
    Death.textContent = `Muertes: ${death}`

    const deathsToday =  data.todayDeaths
    TodayDeaths.textContent = `Muertes de Hoy: ${deathsToday}`

    const casosCriticos =  data.critical
    Critical.textContent = `Casos Criticos: ${casosCriticos}`

    const tests =  data.tests
    Tests.textContent = `Texts Realizados: ${tests}`

    const recovered =  data.recovered
    Recovered.textContent = `Casos Recuperados: ${recovered}`
 
    const todayRecovered =  data.todayRecovered
    TodayRecovered.textContent = `Casos Hoy Recuperados: ${todayRecovered}`
                            
	} catch (error) {
		console.log(error);
	}
};

obtenerDatos()

