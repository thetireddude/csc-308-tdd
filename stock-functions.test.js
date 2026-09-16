const { createPortfolio, isEmpty, } = require("./stock-functions");

test("a new portfolio starts empty", () => {
    const portfolio = createPortfolio();

    expect(portfolio).toEqual({});
});

test("a portfolio is empty", () => {
    const portfolio = createPortfolio();

    expect(isEmpty(portfolio)).toBe(true);
});