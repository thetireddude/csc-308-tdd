function createPortfolio() {
    return {};
}

function isEmpty(portfolio) {
    return Object.keys(portfolio).length === 0;
}

function purchase(portfolio, symbol, shares) {
    portfolio[symbol] = (portfolio[symbol] || 0) + shares;
}

function sell(portfolio, symbol, shares) {
    portfolio[symbol] -= shares;

    if (portfolio[symbol] === 0) {
        delete portfolio[symbol];
    }
}

function getTickerCount(portfolio) {
    return Object.keys(portfolio).length;
}

module.exports = {
    createPortfolio, isEmpty, purchase, sell, getTickerCount
};