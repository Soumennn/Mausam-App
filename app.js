var input = document.getElementById('search');
const container = document.getElementById('container');
const ul = document.getElementById('list');

// api key
const apiKey = '189ae7b85b57840c8d08336b96be338e';

// listening to an event
container.addEventListener('keypress', (event)=> {

    if( event.key == "Enter"){

        // console.log( "You pressed ",event.key);
        // console.log('you enquired about', input.value)
        // console.log(`aapne ${input.value} ke barein mein pucha`);

        // console.log("your get api request is given below :");
        // console.log(`api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`);
        // console.log(addr);

        // -------------------------------------------------------------------------------------------


        async function getWeatherData() {
                // fetching the data
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${apiKey}`);
            
               

                // waiting for the entire data to arrive inorder to parse the same
                const fetchedData = await response.json()
                // a few statements below have been used to test the displaying of various information elements-----
                // console.log(fetchedData);    
                // console.log(fetchedData.main.temp);                 
                // console.log(fetchedData.main.temp_max);
                // console.log(fetchedData.main.temp_min);
                // console.log(fetchedData.name,",",fetchedData.sys.country);
                // console.log(fetchedData.weather[0].main,'(',fetchedData.weather[0].description,')')
                // ---------------------------------------------------------------------------------------------------
                
                //clearing the old data when enquiry about new data is being made
                ul.innerText = ""

                // creating various dynamic li elements as per request to display weather specific inf
                const d = new Date();
                const samay = document.createElement('li');
                samay.classList.add('zero');
                samay.innerHTML = d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear()+" , "+d.getHours()+":"+d.getMinutes();
                
                const naam = document.createElement('li');
                naam.classList.add('one')
                naam.innerHTML = fetchedData.name+" , "+fetchedData.sys.country;  
                
                const tem = document.createElement('li');
                tem.classList.add('two')
                tem.innerHTML = fetchedData.main.temp + ' &deg; C';
                
                const minmax = document.createElement('li');
                minmax.classList.add('three')
                minmax.innerHTML = fetchedData.main.temp_min+ ' &deg; C'+" / "+fetchedData.main.temp_max+ ' &deg; C';              
                const visual = document.createElement('li');
                visual.classList.add('four')
                visual.innerText = fetchedData.weather[0].main;             
                const feel = document.createElement('li');
                feel.classList.add('five')
                feel.innerText = "Feels like: "+fetchedData.main.feels_like
                //appending all the created li elements to the  ul-list
                ul.append(naam,samay,tem,minmax,visual,feel); 
            
                // clearing the input space after request has been made
                input.value = "";
        
              
         
                
        }
        // calling the function and capturing the promise
        getWeatherData()
            .then(()=> { 
                console.log("resolved");
            })
            .catch((e)=> {
                console.log("Error", e);
               
                
            });




            


    }

    
    
   
})



