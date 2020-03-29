describe('Index page', () => {
  let page;

  beforeAll(async () => {
    jest.setTimeout(50000)
    page = await browser.newPage()
    await page.goto('http://127.0.0.1:3000')
  });

  afterAll(async () => {
    await page.close()
  });

  it ('Display catch copy ', async () => {
    let text = await page.evaluate(() => document.body.textContent)

    await expect(text).toContain('ああ');
  })
});