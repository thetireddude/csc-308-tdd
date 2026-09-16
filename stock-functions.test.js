const { createPortfolio, isEmpty, purchase} = require("./stock-functions");

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