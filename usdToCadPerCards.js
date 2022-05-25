fetch('https://stonkch.art/api2api/https%3A%2F%2Fquery1.finance.yahoo.com%2Fv10%2Ffinance%2FquoteSummary%2FUSDCAD%3DX%3Fmodules%3DsummaryProfile%2Cprice%2CdefaultKeyStatistics%2CfinancialData')
.then(res => res.json())
.then(data=> {
    let laPrice = document.querySelector(`div.price-box-container:nth-child(1) > div:nth-child(1) > div:nth-child(2)`);
    if (laPrice) {
        laPrice.textContent = laPrice.textContent + ` (${(Number(laPrice.textContent.slice(2).replace(/[^0-9.-]+/g,""))*Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
    }
});
