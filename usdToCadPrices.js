fetch('https://stonkch.art/api2api/https%3A%2F%2Fquery1.finance.yahoo.com%2Fv10%2Ffinance%2FquoteSummary%2FUSDCAD%3DX%3Fmodules%3DsummaryProfile%2Cprice%2CdefaultKeyStatistics%2CfinancialData')
    .then(res => res.json())
    .then(data => {
        for (let element of document.querySelectorAll(".priceList > * > * > * > :nth-child(2)")) {
            if (element.textContent !== "\nRetail\n\n\n\n" && element.textContent !== "EV") {
                element.textContent = `\n${element.textContent.slice(2,element.textContent.indexOf('\n\n\n\n'))} (${(Number(element.textContent.slice(3,element.textContent.indexOf('\n\n\n\n')).replace(/[^0-9.-]+/g, ""))* Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)\n\n\n\n`;
                //element.style.whiteSpace = 'nowrap';
                //element.textContent = element.textContent + ` (${(Number(element.textContent.slice(2).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
            }
        }
        for (let element of document.querySelectorAll(".priceList > * > * > * > :nth-child(3)")) {
            if (element.textContent !== `\nRetail\n\n\n\n` && element.textContent !== "EV") {
                element.textContent = `\n${element.textContent.slice(2,element.textContent.indexOf('\n\n\n\n'))} (${(Number(element.textContent.slice(3,element.textContent.indexOf('\n\n\n\n')).replace(/[^0-9.-]+/g, ""))* Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)\n\n\n\n`;
                //element.style.whiteSpace = 'nowrap';
                //element.textContent = element.textContent + ` (${(Number(element.textContent.slice(2).replace(/[^0-9.-]+/g, "")) * Number(data.quoteSummary.result[0].price.regularMarketPrice.raw)).toFixed(2)}$)`;
            }
        }
    });
