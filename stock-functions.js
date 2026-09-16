function createPortfolio() {
    return {};
}

function isEmpty(portfolio) {
    return Object.keys(portfolio).length === 0;
}

function purchase(portfolio, symbol, shares) {
    portfolio[symbol] = (portfolio[symbol] || 0) + shares;
}

module.exports = {
    createPortfolio, isEmpty, purchase
};