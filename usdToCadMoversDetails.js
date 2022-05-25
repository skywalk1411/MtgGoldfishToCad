fetch('https://stonkch.art/api2api/https%3A%2F%2Fquery1.finance.yahoo.com%2Fv10%2Ffinance%2FquoteSummary%2FUSDCAD%3DX%3Fmodules%3DsummaryProfile%2Cprice%2CdefaultKeyStatistics%2CfinancialData')
.then(res => res.json())
.then(data=> {
    let laTable = document.querySelector(".table");
    if (laTable) {
        for (let i=1;i<=laTable.rows.length;i++) {
            let element = document.querySelector(`.table > tbody:nth-child(2) > tr:nth-child(${i}) > td:nth-child(4)`);
            if (element) {
                element.textContent = element.textContent + ` (${(Number(element.textContent.slice(2).replace(/[^0-9.-]+/g,""))*Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
            }
        }
    }
});
