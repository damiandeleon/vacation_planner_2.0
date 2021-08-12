// Global Variables
var firstName = document.querySelector('.firstName');
var headerName = document.querySelector('header');
var mountainButton = document.querySelector("#mountains");
var beachButton = document.querySelector("#beach");
var displayBeach = document.getElementById("beachlocations");
var displayMountains = document.getElementById("mountainlocations");
var themeOptions = document.getElementById("themeoptions");
var themePictures = document.getElementById("themes");
var greeting = document.getElementById('greeting');
var firstSubmit = document.querySelector('.firstSubmit');


// Open Weather Map Global Variables
var selectedMalibu = document.querySelector("#malibu");
var selectedFlKeys = document.querySelector("#flkeys");
var selectedHawaii = document.querySelector("#hawaii");
var selectedBreckenridge = document.querySelector("#breckenridge");
var selectedBanff = document.querySelector("#banff");
var selectedSnowshoe = document.querySelector("#snowshoe");

// Zomato Global Variables
var eateryList = document.querySelector("#eateryList");
var eatAt1 = document.querySelector("#eatAt1");
var eatAt2 = document.querySelector("#eatAt2");
var eatAt3 = document.querySelector("#eatAt3");

// OpenWeather URLs - establish static url set specifically for the desired city.  Cities are detemined by their lat and lon coordiantes, which were found on google.  the url string was created using the Open Weather Map api documents.
var weatherMalibu = ("https://api.openweathermap.org/data/2.5/onecall?lat=34.005&lon=-118.8101&exclude=current,hourly,minutely,alerts&units=imperial&appid=73764a83501606e04b74a8e0281a654b")
var weatherFlKeys = ("https://api.openweathermap.org/data/2.5/onecall?lat=24.5557&lon=-81.7826&exclude=current,hourly,minutely,alerts&units=imperial&appid=73764a83501606e04b74a8e0281a654b")
var weatherHawaii = ("https://api.openweathermap.org/data/2.5/onecall?lat=20.785&lon=-156.4656&exclude=current,hourly,minutely,alerts&units=imperial&appid=73764a83501606e04b74a8e0281a654b")
var weatherBreckenridge = ("https://api.openweathermap.org/data/2.5/onecall?lat=32.7557&lon=-98.9023&exclude=current,hourly,minutely,alerts&units=imperial&appid=73764a83501606e04b74a8e0281a654b")
var weatherBanff = ("https://api.openweathermap.org/data/2.5/onecall?lat=51.1762&lon=-115.5698&exclude=current,hourly,minutely,alerts&units=imperial&appid=73764a83501606e04b74a8e0281a654b")
var weatherSnowshoe = ("https://api.openweathermap.org/data/2.5/onecall?lat=38.4128&lon=-79.9964&exclude=current,hourly,minutely,alerts&units=imperial&appid=73764a83501606e04b74a8e0281a654b")

// Zomato URLs - establish static urls set specifically for the desired city.  Cities are determined by the unique ID assigned by the Zomato API
var eatBanff = "https://developers.zomato.com/api/v2.1/location_details?entity_id=2866&entity_type=city"
var eatMalibu = "https://developers.zomato.com/api/v2.1/location_details?entity_id=10925&entity_type=city"
var eatFlKeys = "https://developers.zomato.com/api/v2.1/location_details?entity_id=571&entity_type=city"
var eatHawaii = "https://developers.zomato.com/api/v2.1/location_details?entity_id=640&entity_type=city"
var eatBreckenridge = "https://developers.zomato.com/api/v2.1/location_details?entity_id=4409&entity_type=city"
var eatSnowshoe = "https://developers.zomato.com/api/v2.1/location_details?entity_id=10372&entity_type=city"

// Local Storage Logic

let firstNameLocStor = localStorage.getItem('firstName');
let destinationLocStor = localStorage.getItem('destination');
//create function called "checkLocalStorage" to determine what to first display to the user.  check local storage and retrieve the last searched destination that the user selected.  
function checkLocalStorage() {
    if (localStorage.getItem('destination') !== null) {
        //if the destination key is NOT empty, present the user with a greeting modal which populates with the user's name and last checked destination.  If the user wishes to start a new search, they just need to reenter their name and click Submit to start a new search.
        //use access the "greeting" variable which is linked to the modal with the ID of "greeting", and populate it with the greeting message using the local storage getItem methods to pull the name and destination out.

        // console.log(firstNameLocStor, destinationLocStor)
        headerName.textContent = "Plan Your Next Vacation, " + firstNameLocStor + "!";
        console.log(firstNameLocStor, destinationLocStor);
        greeting.textContent = "Welcome back " + firstNameLocStor + "!  Your last search was " + destinationLocStor + ". Enter your name again and click Submit to start a new search."
        //else if the destination is empty then present the same modal withthe ID of "greeting" which is already html coded to request they provide their name and click submit
    } else {
        //set up an event listener in the modal.  By clicking submit, this launches an event
        firstSubmit.addEventListener('click', function (event) {
            event.preventDefault();
            //clear out the modal so it does not hide behind other screens or modals
            document.querySelector('.bg-modal').style.display = 'none';
            //set the 'fristName' key in local storage to the value which was entered
            localStorage.setItem("firstName", firstName.value);
            firstNameLocStor = localStorage.getItem('firstName');
            headerName.textContent = "Plan Your Next Vacation, " + firstNameLocStor + "!";
            console.log(firstNameLocStor, destinationLocStor)
        });
    };


}
//call the checkLocalStorage Function
checkLocalStorage();

// Code for Modal 1
// Takes the name entered by the user and appends it to the end of the header. The modal also closes when the user clicks 'submit'.
firstSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    if (firstName.value === "") {
        document.querySelector('.bg-modal').style.display = 'none';
    } else {
        headerName.textContent = "Plan Your Next Vacation, " + firstName.value + "!";
        document.querySelector('.bg-modal').style.display = 'none';
        localStorage.setItem("firstName", firstName.value);
        firstNameLocStor = localStorage.getItem('firstName');
    }
    console.log(firstNameLocStor, destinationLocStor);
});

// localStorage.getItem('firstName');

// Code for Modal 2
// The modal also closes when the user clicks 'submit'.
document.querySelector('.button').addEventListener('click', function (event) {
    event.preventDefault();
    // Takes the name entered by the user and appends it to the end of the header. The modal also closes when the user clicks 'submit'.
    document.querySelector('.button').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('.bg-modal').style.display = 'none';
    });

    // Code for Modal 3 - mountain theme
    mountainButton.addEventListener('click', function () {
        event.preventDefault();
        console.log("You clicked Mountains")
        document.querySelector('.bg-modal2').style.display = 'none';
        document.querySelector(".bg-modal3").style.display = "flex";
    });

    // Code for Modal 4 - beach theme
    beachButton.addEventListener('click', function () {
        event.preventDefault();
        console.log("You clicked Beach")
        document.querySelector('.bg-modal2').style.display = 'none';
        document.querySelector(".bg-modal4").style.display = "flex";
    });

    //Code to display Malibu weather and eateries
    selectedMalibu.addEventListener('click', function () {
        event.preventDefault();
        console.log("You clicked Malibu")
        document.querySelector('.bg-modal4').style.display = 'none';
        localStorage.setItem("destination", selectedMalibu.value);
        destinationLocStor = localStorage.getItem('destination');
        document.getElementById('destination').textContent = "Enjoy your Trip to " + destinationLocStor;
        document.querySelector('.bg-modal').style.display = 'none';
    });

    //Code to display Florida keys weather and eateries
    selectedFlKeys.addEventListener('click', function () {
        event.preventDefault();
        console.log("You clicked Florida Keys")
        document.querySelector('.bg-modal4').style.display = 'none';
        localStorage.setItem("destination", selectedFlKeys.value);
        destinationLocStor = localStorage.getItem('destination');
        document.getElementById('destination').textContent = "Enjoy your Trip to " + destinationLocStor;
        document.querySelector('.bg-modal').style.display = 'none';
    });

    //Code to display Hawaii weather and eateries
    selectedHawaii.addEventListener('click', function () {
        event.preventDefault();
        console.log("You clicked Hawaii")
        document.querySelector('.bg-modal4').style.display = 'none';
        localStorage.setItem("destination", selectedHawaii.value);
        destinationLocStor = localStorage.getItem('destination');
        document.getElementById('destination').textContent = "Enjoy your Trip to " + destinationLocStor;
        document.querySelector('.bg-modal').style.display = 'none';
    });

    //Code to display Breckenridge weather and eateries
    selectedBreckenridge.addEventListener('click', function () {
        event.preventDefault();
        console.log("You clicked Breckenridge")
        document.querySelector('.bg-modal3').style.display = 'none';
        localStorage.setItem("destination", selectedBreckenridge.value);
        destinationLocStor = localStorage.getItem('destination');
        document.getElementById('destination').textContent = "Enjoy your Trip to " + destinationLocStor;
        document.querySelector('.bg-modal').style.display = 'none';
    });

    //Code to display Banff weather and eateries
    selectedBanff.addEventListener('click', function () {
        event.preventDefault();
        console.log("You clicked Banff")
        document.querySelector('.bg-modal3').style.display = 'none';
        localStorage.setItem("destination", selectedBanff.value);
        destinationLocStor = localStorage.getItem('destination');
        document.getElementById('destination').textContent = "Enjoy your Trip to " + destinationLocStor;
        document.querySelector('.bg-modal').style.display = 'none';
    });

    //Code to display Snowshoe weather and eateries
    selectedSnowshoe.addEventListener('click', function () {
        event.preventDefault();
        console.log("You clicked Snowshoe")
        document.querySelector('.bg-modal3').style.display = 'none';
        localStorage.setItem("destination", selectedSnowshoe.value);
        destinationLocStor = localStorage.getItem('destination');
        document.getElementById('destination').textContent = "Enjoy your Trip to " + destinationLocStor;
        document.querySelector('.bg-modal').style.display = 'none';
    });

    // Storing the first name to local storage.
    localStorage.getItem('firstName');
    document.querySelector('.bg-modal2').style.display = 'flex';
    localStorage.setItem("firstName", firstName.value);
});

// Storing the first name to local storage.
localStorage.getItem('firstName');

// Malibu Weather Fetch
function malibu(event) {
    event.preventDefault();
    fetch(weatherMalibu)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
           //cycle 5 times, with each cycle do the following to create a set of cards for each day in the 5 day forecast...
            for (i = 1; i < 6; i++) {
                //find the elements in the index.html page with the id of 1,2,3,4,and 5 (with each pass) and assign it a variable called "weatherCardMalibu"
                var weatherCardMalibu = document.getElementById(i);

                //create the following elements for each pass
                var divForImg = document.createElement("div");
                var imgIconMalibu = document.createElement("img");
                var malibuDayTemp = document.createElement("div");
                var malibuNightTemp = document.createElement("div");
                var humidityMalibu = document.createElement("div");
                var windMalibu = document.createElement("div");

                //code to create and populate the dates for each 5 day card
                var dateMalibu = new Date(data.daily[i].dt * 1000).toLocaleDateString("en-US");
                weatherCardMalibu.textContent = dateMalibu;

                //style and format the image icon, and append it to the card with each pass
                divForImg.style = "text-align: center; display: flex; justify-content: center;";
                imgIconMalibu.setAttribute("src", "https://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png");
                imgIconMalibu.style = "width: 45px; height: 45px;"
                divForImg.append(imgIconMalibu);

                //style and format the Day temp element
                malibuDayTemp.innerHTML = "Day Temp: " + data.daily[i].temp.day + "°F";
                malibuDayTemp.style = "justify-content: center;";

                //style and format the Night temp element
                malibuNightTemp.innerHTML = "Night Temp: " + data.daily[i].temp.night + "°F";
                malibuNightTemp.style = "justify-content: center;"

                //style and format the humidity
                humidityMalibu.innerHTML = "Humidity: " + data.daily[i].humidity + "%";
                humidityMalibu.style = "justify-content: center;"

                //style and format the wind speed
                windMalibu.innerHTML = "Wind Speed: " + data.daily[i].wind_speed + "MPH";
                windMalibu.style = "justify-content: center;"

                //append each item to the card
                weatherCardMalibu.append(divForImg, malibuDayTemp, malibuNightTemp, humidityMalibu, windMalibu);
            }
        })
    getEatMalibu(eatMalibu);
}

// Fetch Malibu Zomato
function getEatMalibu(url) {
    fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'user-key': "e520bba2bf7f434d5803aa5e81d5ad4a",
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            eatAt1.textContent = data.best_rated_restaurant[0].restaurant.name
            eatAt2.textContent = data.best_rated_restaurant[1].restaurant.name
            eatAt3.textContent = data.best_rated_restaurant[2].restaurant.name
        });
}

selectedMalibu.addEventListener("click", malibu)

// Fetch Florida Keys Weather
function flKeys(event) {
    event.preventDefault();

    fetch(weatherFlKeys)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            //cycle 5 times, with each cycle do the following to create a set of cards for each day in the 5 day forecast...
            for (i = 1; i < 6; i++) {
                //find the elements in the index.html page with the id of 1,2,3,4,and 5 (with each pass) and assign it a variable called "weatherCardFlKeys"
                var weatherCardFlKeys = document.getElementById(i);

                //create the following elements for each pass
                var divForImg = document.createElement("div");
                var imgIconFlKeys = document.createElement("img");
                var flKeysDay = document.createElement("div");
                var flKeysNight = document.createElement("div");
                var flHumidity = document.createElement("div");
                var flWind = document.createElement("div");

                //code to create and populate the dates for each 5 day card
                var dateFlKeys = new Date(data.daily[i].dt * 1000).toLocaleDateString("en-US");
                weatherCardFlKeys.textContent = dateFlKeys;

                //style and format the image icon, and append it to the card with each pass
                divForImg.style = "text-align: center; display: flex; justify-content: center;";
                imgIconFlKeys.setAttribute("src", "https://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png");
                imgIconFlKeys.style = "width: 45px; height: 45px;"
                divForImg.append(imgIconFlKeys)

                //style and format the Day temp element
                flKeysDay.innerHTML = "Day Temp: " + data.daily[i].temp.day + "°F";
                flKeysDay.style = "justify-content: center;"

                //style and format the Night temp element 
                flKeysNight.innerHTML = "Night Temp: " + data.daily[i].temp.night + "°F";
                flKeysNight.style = "justify-content: center;"

                //style and format the humidity 
                flHumidity.innerHTML = "Humidity: " + data.daily[i].humidity + "%";
                flHumidity.style = "justify-content: center;"

                //style and format the wind speed 
                flWind.innerHTML = "Wind Speed: " + data.daily[i].wind_speed + "MPH";
                flWind.style = "justify-content: center;"

                //append each item to the card
                weatherCardFlKeys.append(divForImg, flKeysDay, flKeysNight, flHumidity, flWind);
            }
        })
    getEatFlKeys(eatFlKeys);
}

// Fetch Florida Keys Eatery
function getEatFlKeys(url) {
    fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'user-key': "e520bba2bf7f434d5803aa5e81d5ad4a",
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            eatAt1.textContent = data.best_rated_restaurant[0].restaurant.name
            eatAt2.textContent = data.best_rated_restaurant[1].restaurant.name
            eatAt3.textContent = data.best_rated_restaurant[2].restaurant.name
        });
}

selectedFlKeys.addEventListener("click", flKeys)

// Fetch Hawaii Weather
function hawaii(event) {
    event.preventDefault();

    fetch(weatherHawaii)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            //cycle 5 times, with each cycle do the following to create a set of cards for each day in the 5 day forecast...
            for (i = 1; i < 6; i++) {
                //find the elements in the index.html page with the id of 1,2,3,4,and 5 (with each pass) and assign it a variable called "weatherCardHawaii"
                var weatherCardHawaii = document.getElementById(i);

                //create the following elements for each pass
                var divForImg = document.createElement("div");
                var imgIconHawaii = document.createElement("img");
                var hawaiiDay = document.createElement("div");
                var hawaiiNight = document.createElement("div");
                var hawaiiHumidity = document.createElement("div");
                var hawaiiWind = document.createElement("div");

                //code to create and populate the dates for each 5 day card
                var dateHawaii = new Date(data.daily[i].dt * 1000).toLocaleDateString("en-US");
                weatherCardHawaii.textContent = dateHawaii;

                //style and format the image icon, and append it to the card with each pass
                divForImg.style = "text-align: center; display: flex; justify-content: center;";
                imgIconHawaii.setAttribute("src", "https://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png");
                imgIconHawaii.style = "width: 45px; height: 45px;"
                divForImg.append(imgIconHawaii)

               //style and format the Day temp element
                hawaiiDay.innerHTML = "Day Temp: " + data.daily[i].temp.day + "°F";
                hawaiiDay.style = "justify-content: center;"
          
                //style and format the Night temp element 
                hawaiiNight.innerHTML = "Night Temp: " + data.daily[i].temp.night + "°F";
                hawaiiNight.style = "justify-content: center;"
                
                //style and format the humidity
                hawaiiHumidity.innerHTML = "Humidity: " + data.daily[i].humidity + "%";
                hawaiiHumidity.style = "justify-content: center;"
              
                //style and format the wind speed
                hawaiiWind.innerHTML = "Wind Speed: " + data.daily[i].wind_speed + "MPH";
                hawaiiWind.style = "justify-content: center;"
                
                //append each item to the card
                weatherCardHawaii.append(divForImg, hawaiiDay, hawaiiNight, hawaiiHumidity, hawaiiWind);
            }
        })
    getEatHawaii(eatHawaii);
}

// Fetch Hawaii Eatery
function getEatHawaii(url) {
    fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'user-key': "e520bba2bf7f434d5803aa5e81d5ad4a",
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            eatAt1.textContent = data.best_rated_restaurant[0].restaurant.name
            eatAt2.textContent = data.best_rated_restaurant[1].restaurant.name
            eatAt3.textContent = data.best_rated_restaurant[2].restaurant.name
        });
}

selectedHawaii.addEventListener("click", hawaii)

// Fetch Breckenridge Weather
function breckenridge(event) {
    event.preventDefault();

    fetch(weatherBreckenridge)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            //cycle 5 times, with each cycle do the following to create a set of cards for each day in the 5 day forecast...
            for (i = 1; i < 6; i++) {
                //find the elements in the index.html page with the id of 1,2,3,4,and 5 (with each pass) and assign it a variable called "weatherCardBreck"
                var weatherCardBreck = document.getElementById(i);

                //create the following elements for each pass
                var divForImg = document.createElement("div");
                var imgIconBreckenridge = document.createElement("img");
                var breckDay = document.createElement("div");
                var breckNight = document.createElement("div");
                var breckHumidity = document.createElement("div");
                var breckWind = document.createElement("div");

                //code to create and populate the dates for each 5 day card
                var dateBreck = new Date(data.daily[i].dt * 1000).toLocaleDateString("en-US");
                weatherCardBreck.textContent = dateBreck;

                //style and format the image icon, and append it to the card with each pass
                divForImg.style = "text-align: center; display: flex; justify-content: center;";
                imgIconBreckenridge.setAttribute("src", "https://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png");
                imgIconBreckenridge.style = "width: 45px; height: 45px;"
                divForImg.append(imgIconBreckenridge)

                //style and format the Day temp element
                breckDay.innerHTML = "Day Temp: " + data.daily[i].temp.day + "°F";
                breckDay.style = "justify-content: center;"
          
                //style and format the Night temp element
                breckNight.innerHTML = "Night Temp: " + data.daily[i].temp.night + "°F";
                breckNight.style = "justify-content: center;"
              
                //style and format the humidity
                breckHumidity.innerHTML = "Humidity: " + data.daily[i].humidity + "%";
                breckHumidity.style = "justify-content: center;"
           
                //style and format the wind speed
                breckWind.innerHTML = "Wind Speed: " + data.daily[i].wind_speed + "MPH";
                breckWind.style = "justify-content: center;"

                //append each item to the card
                weatherCardBreck.append(divForImg, breckDay, breckNight, breckHumidity, breckWind);
            }
        })
    getEatBreckenridge(eatBreckenridge);
}

// Fetch Breckenridge Eatery
function getEatBreckenridge(url) {
    fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'user-key': "e520bba2bf7f434d5803aa5e81d5ad4a",
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            eatAt1.textContent = data.best_rated_restaurant[0].restaurant.name
            eatAt2.textContent = data.best_rated_restaurant[1].restaurant.name
            eatAt3.textContent = data.best_rated_restaurant[2].restaurant.name
        });
}

selectedBreckenridge.addEventListener("click", breckenridge)

// Fetch Banff Weather
function banff(event) {
    event.preventDefault();

    fetch(weatherBanff)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            //cycle 5 times, with each cycle do the following to create a set of cards for each day in the 5 day forecast...
            for (i = 1; i < 6; i++) {
                //find the elements in the index.html page with the id of 1,2,3,4,and 5 (with each pass) and assign it a variable called "weatherCardBanff"
                var weatherCardBanff = document.getElementById(i);

                //create the following elements for each pass 
                var divForImg = document.createElement("div");
                var imgIconBanff = document.createElement("img");
                var banffDay = document.createElement("div");
                var banffNight = document.createElement("div");
                var banffHumidity = document.createElement("div");
                var banffWind = document.createElement("div");

                //code to create and populate the dates for each 5 day card
                var dateBanff = new Date(data.daily[i].dt * 1000).toLocaleDateString("en-US");
                weatherCardBanff.textContent = dateBanff;

                //style and format the image icon, and append it to the card with each pass
                divForImg.style = "text-align: center; display: flex; justify-content: center;";
                imgIconBanff.setAttribute("src", "https://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png");
                imgIconBanff.style = "width: 45px; height: 45px;"
                divForImg.append(imgIconBanff);

                //style and format the Day temp element
                banffDay.innerHTML = "Day Temp: " + data.daily[i].temp.day + "°F";
                banffDay.style = "justify-content: center;"
                
                //style and format the Night temp element 
                banffNight.innerHTML = "Night Temp: " + data.daily[i].temp.night + "°F";
                banffNight.style = "justify-content: center;"
         
                     //style and format the humidity 
                banffHumidity.innerHTML = "Humidity: " + data.daily[i].humidity + "%";
                banffHumidity.style = "justify-content: center;"
        
                //style and format the wind speed 
                banffWind.innerHTML = "Wind Speed: " + data.daily[i].wind_speed + "MPH";
                banffWind.style = "justify-content: center;"

                //append each item to the card
                weatherCardBanff.append(divForImg, banffDay, banffNight, banffHumidity, banffWind);
            }
        })
    getEatBanff(eatBanff);
}

// Fetch Banff Eatery
function getEatBanff(url) {
    fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'user-key': "e520bba2bf7f434d5803aa5e81d5ad4a",
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            eatAt1.textContent = data.best_rated_restaurant[0].restaurant.name
            eatAt2.textContent = data.best_rated_restaurant[1].restaurant.name
            eatAt3.textContent = data.best_rated_restaurant[2].restaurant.name
        });
}

selectedBanff.addEventListener("click", banff)

// Fetch Snowshoe Weather
function snowshoe(event) {
    event.preventDefault();

    fetch(weatherSnowshoe)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
             //cycle 5 times, with each cycle do the following to create a set of cards for each day in the 5 day forecast...
            for (i = 1; i < 6; i++) {
                //find the elements in the index.html page with the id of 1,2,3,4,and 5 (with each pass) and assign it a variable called "weatherCardSnowshoe"
                var weatherCardSnowshoe = document.getElementById(i);

                //create the following elements for each pass
                var divForImg = document.createElement("div");
                var imgIconSnowshoe = document.createElement("img");
                var snowshoeDay = document.createElement("div");
                var snowshoeNight = document.createElement("div");
                var snowshoeHumidity = document.createElement("div");
                var snowshoeWind = document.createElement("div");

                //code to create and populate the dates for each 5 day card
                var dateSnowshoe = new Date(data.daily[i].dt * 1000).toLocaleDateString("en-US");
                weatherCardSnowshoe.textContent = dateSnowshoe;

                //style and format the image icon, and append it to the card with each pass
                divForImg.style = "text-align: center; display: flex; justify-content: center;";
                imgIconSnowshoe.setAttribute("src", "https://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png");
                imgIconSnowshoe.style = "width: 45px; height: 45px;"
                divForImg.append(imgIconSnowshoe);

                //style and format the Day temp element
                snowshoeDay.innerHTML = "Day Temp: " + data.daily[i].temp.day + "°F";
                snowshoeDay.style = "justify-content: center;"
            
                //style and format the Night temp element 
                snowshoeNight.innerHTML = "Night Temp: " + data.daily[i].temp.night + "°F";
                snowshoeNight.style = "justify-content: center;"
             
                //style and format the humidity 
                snowshoeHumidity.innerHTML = "Humidity: " + data.daily[i].humidity + "%";
                snowshoeHumidity.style = "justify-content: center;"
               
                //style and format the wind speed 
                snowshoeWind.innerHTML = "Wind Speed: " + data.daily[i].wind_speed + "MPH";
                snowshoeWind.style = "justify-content: center;"

                //append each item to the card
                weatherCardSnowshoe.append(divForImg, snowshoeDay, snowshoeNight, snowshoeHumidity, snowshoeWind);
            }
        })
    getEatSnowshoe(eatSnowshoe);
}

// Fetch Snowshoe Eatery
function getEatSnowshoe(url) {
    fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'user-key': "e520bba2bf7f434d5803aa5e81d5ad4a",
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            eatAt1.textContent = data.best_rated_restaurant[0].restaurant.name
            eatAt2.textContent = data.best_rated_restaurant[1].restaurant.name
            eatAt3.textContent = data.best_rated_restaurant[2].restaurant.name
        });
}

selectedSnowshoe.addEventListener("click", snowshoe);
