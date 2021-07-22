'use strict';
function updateExchangeRates(update) {
    const date = document.getElementById('date');
    const usdBuyRate = document.getElementById('usd-buy-rate');
    const usdSellRate = document.getElementById('usd-sell-rate');
    const eurBuyRate = document.getElementById('eur-buy-rate');
    const eurSellRate = document.getElementById('eur-sell-rate');

    date.textContent = update.date;
    usdBuyRate.textContent = update.usd.buyRate;
    usdSellRate.textContent = update.usd.sellRate;
    eurBuyRate.textContent = update.eur.buyRate;
    eurSellRate.textContent = update.eur.sellRate;
}
