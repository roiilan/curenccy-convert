
function onSetFromCurrency(currency) {
    setFromCurrency(currency);
    // doTrans();
    // render();
}

function onSetToCurrency(currency) {
    setToCurrency(currency);
    // doTrans();
    // render();
}

function onConvert(){
const elAmount = document.querySelector('.amount-calc');
var amount =elAmount.value;

convert(amount);
}

function renderRes(res){
document.querySelector('h3').innerText=res;
}