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

    owned = portfolio[symbol] || 0

    if (shares > owned) {
        throw new Error("Not possible to sell this number of shares.");
    }

    portfolio[symbol] -= shares;

    if (portfolio[symbol] === 0) {
        delete portfolio[symbol];
    }
}

function getTickerCount(portfolio) {
    return Object.keys(portfolio).length;
}

function getShares(portfolio, symbol) {
    return portfolio[symbol] || 0
}

module.exports = {
    createPortfolio, isEmpty, purchase, sell, getTickerCount, getShares
};