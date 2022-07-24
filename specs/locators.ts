import { By } from "selenium-webdriver";

export const URL = "https://www.onliner.by/";

export let walletLink = (By.xpath("//div/div[6]/header/h2/a"));
export let loadMore = (By.css('[class="news-more__text"]'));
export let prices = (By.xpath('//div[2]/div[5]/div/div/div/div[1]/ul/li[3]/a'));
export let aboutCompany = (By.linkText('О компании'));
export let returnPolicy = (By.xpath('//footer/div/div/div/div[1]/ul/li[11]/a'));
export let frame = (By.xpath('//iframe[@class="modal-iframe"]'));
export let inputField = (By.css('[class="fast-search__input"]'));
export let Trimmers = (By.xpath('/html/body/div[1]/div[2]/ul/li[1]/div/div/a')); 
export let loginButton = (By.className("auth-bar__item auth-bar__item--text"));
export let emailField =(By.xpath("//div[1]/div/div[2]/div/div/div/div/input"));
export let passwordField = (By.xpath("//div[2]/div/form/div[2]/div/div/div[1]/div/input"));
