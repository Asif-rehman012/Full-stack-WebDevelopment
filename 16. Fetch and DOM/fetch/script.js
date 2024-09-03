// const response = fetch('https://dummyjson.com/products/1')
//     .then((response) => {

//     })
//     .catch(err => {

//     })


// OTHER WAY TO FETCH API
// async function fetchdata() {
//     try{
//          const response = await fetch('https://dummyjson.pom/products/1');//pass url and get data eg weather, news apis data
//         console.log(response); //we can convert above response data into json
   
//         const jsonData = await response.json();
//         console.log(jsonData); // now we will get json code 

//         const phoneTextElement = document.getElementById('phone-title')
//         phoneTextElement.innerHTML = jsonData.title //with this line we can now use json in our website it will show description/title etc
        
//     } catch(err){
//         console.log(err);
        
//     }
    
// }

// fetchdata();

     //writing in well manner
     async function fetchData() {
        try {
    
            const loadingElement = document.getElementById('loading');
            const phoneBox = document.getElementById('box');
    
            loading.style.display = 'block';
            phoneBox.style.display = 'none';
    
            const response = await fetch('https://dummyjson.com/products/1');
    
            console.log(response);
    
            if(response.statusText == "OK") {
                const jsonData = await response.json(); //await mtlb wait for promises
                console.log(jsonData);
        
                phoneBox.style.display = 'block';
                loading.style.display = 'none';
        
                loadData(jsonData);
            } else {
                loading.innerHTML = "Invalid response";
            }
    
            
    
        } catch (err) {
            console.log(err);
            loading.innerHTML = "Invalid response";
        } 
        
    }
    
    function loadData(jsonData) {
        const phoneTextElement = document.getElementById('phone-title');
        const phoneDescElement= document.getElementById('phone-desc');
        const phoneImg = document.getElementById('phone-img');
    
        const { title, description, thumbnail } = jsonData;
    
        phoneTextElement.innerHTML = title;
        phoneDescElement.innerHTML = description;
        phoneImg.src = thumbnail;
    }
    
    fetchData(); //calling fetchdata