fetch('https://stonkch.art/api2api/https%3A%2F%2Fquery1.finance.yahoo.com%2Fv10%2Ffinance%2FquoteSummary%2FUSDCAD%3DX%3Fmodules%3DsummaryProfile%2Cprice%2CdefaultKeyStatistics%2CfinancialData')
    .then(res => res.json())
    .then(data => {
        let laTable = document.querySelector(".tablesorter-bootstrap-popover-paper");
        let laTableLength = laTable.rows.length;
        let laPrice = document.querySelector(`.paper-block > td:nth-child(1) > div:nth-child(1) > div:nth-child(2)`);
        if (laPrice) {
            laPrice.textContent = laPrice.textContent + ` (${(Number(laPrice.textContent.slice(2).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
        }
        let laPriceDif = document.querySelector(`.paper-block > td:nth-child(2) > div:nth-child(1) > div:nth-child(2)`);
        if (laPriceDif) {
            laPriceDif.textContent = laPriceDif.textContent + ` (${(Number(laPriceDif.textContent.replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)})`;
        }
        for (let i = 1; i <= laTableLength; i++) {
            let element = document.querySelector(`.tablesorter-bootstrap-popover-paper > tbody:nth-child(2) > tr:nth-child(${i}) > td:nth-child(4)`);
            if (element) {
                element.textContent = element.textContent + ` (${(Number(element.textContent.replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)})`;
            }
            let element2 = document.querySelector(`.tablesorter-bootstrap-popover-paper > tbody:nth-child(2) > tr:nth-child(${i}) > td:nth-child(5) > div:nth-child(1)`);
            if (element2) {
                element2.textContent = element2.textContent + ` (${(Number(element2.textContent.replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)})`;
            }
            let element3 = document.querySelector(`.tablesorter-bootstrap-popover-paper > tbody:nth-child(2) > tr:nth-child(${i}) > td:nth-child(7) > div:nth-child(1)`);
            if (element3) {
                element3.textContent = element3.textContent + ` (${(Number(element3.textContent.replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)})`;
            }
        }
    });
