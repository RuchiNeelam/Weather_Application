
let form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let fetchData = async() =>{
        let key="98add702a99ef0690852f0443a93b2bd"
        let place = document.querySelector("#location").value
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`)
        let finalOutput = await data.json()
        console.log(finalOutput)

        let tempValue = document.querySelector(".temp_value")
        let humidValue = document.querySelector(".humid_value")
        let weatherCondition = document.querySelector(".weatherCondition")
        let weatherImage = document.querySelector("#weather_image") 
        let background = document.getElementById("#main_container")
        //   console.log(background)
        

        let finalTemp = Math.round(finalOutput.main.temp-273)
        let finalHumid = finalOutput.main.humidity
        let finalWeather = finalOutput.weather[0].main.toLowerCase()
        // console.log(finalWeather)

        tempValue.innerHTML = `${finalTemp} <sup>0</sup>C`
        humidValue.innerHTML = `${finalHumid} kmph`
        weatherCondition.innerHTML=`${finalWeather}`

          
              switch(finalWeather){
            case"dust":
            weatherImage.src='./assets/dust.avif'
            backgroung.style.backgroungimage="url(./assets/dust_background)"

            case "clouds":
                weatherImage.src='./assets/cloud.jpg'
                backgroung.style.backgroungimage="url(./assets/cloud_background.gif)"

                case "rain":
                    weatherImage.src=`./assets/Light_Rain_Cloud.png`
                    background.style.backgroundImage="url(./rain_background.gif)"
                case "haze":
                    weatherImage.src=`./assets/haze.png`
                    background.style.backgroundImage="url(./haze_background.gif)"

                case "snow":
                    weatherImage.src=`./assets/snow.jpeg`
                    background.style.backgroundImage="url(./snow_background.gif)"


                // case "clear":


         }

    } 
    fetchData()
})