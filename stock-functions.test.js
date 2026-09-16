const { createPortfolio, isEmpty, purchase, sell, getTickerCount, getShares} = require("./stock-functions");

test("a new portfolio starts empty", () => {
    const portfolio = createPortfolio();

    expect(portfolio).toEqual({});
});

test("a portfolio is empty", () => {
    const portfolio = createPortfolio();

    expect(isEmpty(portfolio)).toBe(true);
});

test("purchasing shares adds them to the portfolio", () => {
    const portfolio = createPortfolio();

    purchase(portfolio, "GME", 5);

    expect(portfolio.GME).toBe(5);
});

test("selling shares subtracts them from the portfolio", () => {
    const portfolio = createPortfolio();

    purchase(portfolio, "GME", 5);
    sell(portfolio, "GME", 2);

    expect(portfolio.GME).toBe(3);
});

test("portfolio reports number of unique ticker symbols/ stocks", () => {
    const portfolio = createPortfolio();

    purchase(portfolio, "GME", 5);
    purchase(portfolio, "RBLX", 10);

    expect(getTickerCount(portfolio)).toBe(2);
});

test("selling all shares removes the ticker from the portfolio", () => {
    const portfolio = createPortfolio();

    purchase(portfolio, "GME", 5);
    sell(portfolio, "GME", 5);

    expect(portfolio).toEqual({});
});

test("portfolio returns number of shares owned for a ticker symbol", () => {
    const portfolio = createPortfolio();

    purchase(portfolio, "GME", 5);

    expect(getShares(portfolio, "GME")).toBe(5);
});

test("portfolio returns 0 shares for a ticker that doesn't exist", () => {
    const portfolio = createPortfolio();

    expect(getShares(portfolio, "RBLX")).toBe(0);
});

test("selling more shares than owned throws an error", () => {
    const portfolio = createPortfolio();

    purchase(portfolio, "GME", 5);

    expect(() => {
        sell(portfolio, "GME", 6);
    }).toThrow("Not possible to sell this number of shares.");
});