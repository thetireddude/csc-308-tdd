function createPortfolio() {
    return {};
}

function isEmpty(portfolio) {
    return Object.keys(portfolio).length === 0;
}

module.exports = {
    createPortfolio, isEmpty
};