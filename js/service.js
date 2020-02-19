var gFromCurrency='USD';
var gToCurrency='ILS';


function setFromCurrency(currency) {
    gFromCurrency = currency;
}

function setToCurrency(currency) {
    gToCurrency = currency;
}


function convert(amount){
    // let currency = ;

   getCurrencyVal(gFromCurrency,gToCurrency)
    .then(currency =>{        
    //    console.log(currency[`${gFromCurrency}_${gToCurrency}`]*amount);
        renderRes(currency[`${gFromCurrency}_${gToCurrency}`]*amount) ;  
    })           
    // .catch(error => null)    
}





function getCurrencyVal(fromCurrency,toCurrency){

    return axios.get(`https://free.currconv.com/api/v7/convert?q=${fromCurrency}_${toCurrency}&compact=ultra&apiKey=c37937be72574cb27508`)
    .then(res => res.data)
    
    // var prm = new Promise((resolve, reject)=>{      


    //     var httpRequest = new XMLHttpRequest();
    //     httpRequest.onreadystatechange = () => {
    //         if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
    //             prm = JSON.parse(httpRequest.responseText);
    //             prm=`prm.${fromCurrency}_${toCurrency}`;
    //         }
    //     };
    //     httpRequest.open("GET", `https://free.currconv.com/api/v7/convert?q=${fromCurrency}_${toCurrency}&compact=ultra&apiKey=c37937be72574cb27508`, true);
    //     httpRequest.send();


    // });
    // return prm;
}
