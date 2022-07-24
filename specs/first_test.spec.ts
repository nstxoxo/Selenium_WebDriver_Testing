import {Builder, WebDriver, By, WebElement, until, Key} from "selenium-webdriver";
import { URL, walletLink, loadMore, prices, aboutCompany, 
        returnPolicy, frame, inputField, Trimmers, loginButton, emailField, passwordField} from "../specs/locators";

describe("Onliner testing", () => {
  let driver: WebDriver;

  beforeEach(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get(URL);
  });

  afterEach(async () => {
    await driver.quit();
  });

  it("Check wallet link", async () => {
    const element: WebElement = await driver.findElement(walletLink);
    await element.click();
    await driver.wait(until.elementLocated(loadMore),2000);
    const price: WebElement = await driver.findElement(prices)
    await price.click()
    await driver.sleep(3000);
  });

  it("Check 'about company' link", async () => {
    const element: WebElement = await driver.findElement(aboutCompany)
    await driver.wait(until.elementLocated(returnPolicy), 2000);
    await element.click();
    await driver.sleep(3000);
  });

  it("Check the field for input data 1", async () => {
    const element: WebElement = await driver.findElement(inputField);
    await element.click()
    await element.sendKeys("Массажёры");
    await driver.sleep(3000);
    await driver.switchTo().frame(driver.findElement(frame));
    await driver.findElement(By.xpath("//div[1]/div[2]/div/div/div[4]")).click();
    await driver.sleep(3000);
  });

  it("Check the field for input data 2", async () => {
    const element: WebElement = await driver.findElement(inputField);
    await element.click()
    await element.sendKeys("Триммеры");
    await driver.sleep(3000);
    await driver.switchTo().frame(driver.findElement(frame));
    await driver.findElement(Trimmers).click();
    await driver.sleep(3000);
  });

  it("Checking the authorization of an unregistered user", async () => {
    await driver.findElement(loginButton).click();
    let email: WebElement = await driver.findElement(emailField);
    await email.click()
    await driver.wait(until.elementLocated(By.linkText("Я не помню пароль")), 2000);
    await email.sendKeys("Name");
    let password: WebElement = await driver.findElement(passwordField);
    await password.sendKeys("11111", Key.RETURN);
    await driver.sleep(3000);
  });
});
