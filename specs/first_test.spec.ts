import { Builder, WebDriver, By, WebElement, until, Key } from "selenium-webdriver";

describe("Onliner testing", () => {
  it("Check wallet link", async () => {
    const driver: WebDriver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get("https://onliner.by");
    await driver.findElement(By.xpath("//div/div[6]/header/h2/a")).click();
    await driver.sleep(3000);
    await driver.quit();
  });

  it("Check login page link", async () => {
    const driver: WebDriver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get("https://onliner.by");
    await driver.wait(until.elementLocated(By.xpath('//div/div[1]/a[1]')),2000)
    await driver
      .findElement(By.className("auth-bar__item auth-bar__item--text"))
      .click();

    await driver.sleep(3000);
    await driver.quit();
  });

  it("Check the field for input data", async () => {
    const driver: WebDriver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get("https://onliner.by");
    
    const element: WebElement = await driver.findElement(By.css("#fast-search > form > input.fast-search__input"))
    await element.sendKeys("Триммеры")
    await driver.sleep(6000);
    await element.sendKeys(Key.RETURN)
    await driver.sleep(6000);
    await driver.quit();
  });

  it("Check link 'auto'", async () => {
    const driver: WebDriver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get("https://onliner.by");
    await driver.findElement(By.xpath("//div/div[10]/footer/a")).click();
    await driver.sleep(3000);
    await driver.quit();
  });
});
