function createPortfolio() {
    return {};
}

function isEmpty(portfolio) {
    return Object.keys(portfolio).length === 0;
}

function purchase(portfolio, symbol, shares) {
    if (!portfolio[symbol] | portfolio[symbol] === 0) {
        portfolio[symbol] = shares
    }
    else {
        portfolio[symbol] = portfolio[symbol] + shares
    }
}

module.exports = {
    createPortfolio, isEmpty, purchase
};