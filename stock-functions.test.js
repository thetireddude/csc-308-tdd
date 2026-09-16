const { createPortfolio } = require("./stock-functions");

test("a new portfolio starts empty", () => {
    const portfolio = createPortfolio();

    expect(portfolio).toEqual({});
});