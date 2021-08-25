const currencyOne = document.getElementById( "currency-one" );
const amountOne = document.getElementById( "amount-one" );
const currencyTwo = document.getElementById( "currency-two" );
const amountTwo = document.getElementById( "amount-two" );

const swap = document.getElementById( "swap" );

let rateDiv = document.getElementById( "rate" );


swap.addEventListener( "click", function ()
{
    currencyELOne = currencyOne.value;
    currencyELTwo = currencyTwo.value;

    fetch( `https://api.exchangerate-api.com/v4/latest/${ currencyELOne }` )
        .then( res => res.json() )
        .then( data =>
        {
            const rate = data.rates[currencyELTwo];
            rateDiv.innerText = ` 1 ${ currencyELOne } = ${ rate } ${ currencyELTwo}`;
            
            const firstRate = parseFloat(amountOne.value * rate).toFixed(2);
            amountTwo.value = +firstRate;
        })
} );

