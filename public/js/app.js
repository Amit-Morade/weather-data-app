const form  = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('.message1')
const message2 = document.querySelector('.message2')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    message1.textContent = "loading..."
    message2.textContent = ""
    const location = search.value
    fetch('/weather?location=' + location).then((response) =>{
        response.json().then((data) =>{
            if(data.error){
                message1.textContent = data.error
            }else{
                message1.textContent = "Weather is " + data.weather_description
                message2.textContent = "Temperature is " + data.temperature + "°C"
            }
            
            
        })
    })

})