const url = localStorage.getItem('url');

const countryDisplay = document.querySelector(".country-details");
    
const fetchData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    
const displayData = (data) => {
        const newData = data.map((item)=>{
           let currencyname = Object.keys(item.currencies);
           console.log(currencyname);
           currencyname = currencyname.map((item)=>{return item});
           let {name:{common}} = item;
           let {capital,population,continents,area} = item;
           let {flags:{png:flag}} = item;
           let {borders} = item;
           let {car:{side}}=item;
           let {coatOfArms:{png:coatOfArms}}=item;
           let {tld} = item;
           return `<article>
           <h2 class="details-h2">${common}</h2>
           <div class="img-container">
           <img class="details-img" src="${flag}">
           <img class="details-img" src="${coatOfArms}">
           </div>
           <ul>
           <li><b>Continent :</b> ${continents}</li>
           <li><b>Area :</b> ${area/1000} km²</li>
           <li><b>Population :</b> ${population} inhabitants</li>
           <li><b>Capital :</b> ${capital}</li>
           <li><b>Currency :</b> ${currencyname}</li>
           <li><b>This country borders :</b> 
           ${borders.map((item)=>{return(item)})}</li>
           <li><b>In this country, people drive on the :</b> ${side}</li>
           <li><b>Internet sites termination :</b> ${tld.map((item)=>{return(item)})}
           </ul>
           </article>`
        }).join('');
        countryDisplay.innerHTML=newData;
    }
    
const init = async (url) => {
        const data = await fetchData(url);
        displayData(data);
    }
    
init(url);

