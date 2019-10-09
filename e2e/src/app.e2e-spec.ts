import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Protractor Demo App by id', function () {
  const subject = element(by.id('idSubject'));
  const verbs = element(by.id('idVerbs'));
  const object = element(by.id('idObject'));
  const result = element(by.id('idResult'));
  const goButton = element(by.id('idGobutton'));
  it('should get a sentence from inputs.', function () {

    browser.get('https://angular-e2e-demo.firebaseapp.com');
    subject.sendKeys('I');
    verbs.sendKeys('am');
    object.sendKeys('Tony');
    goButton.click();
    expect(result.getText()).toEqual('I am Tony');
  });
});

describe('Protractor Demo App by name', function () {
  const subject = element(by.name('nameSubject'));
  const verbs = element(by.name('nameVerbs'));
  const object = element(by.name('nameObject'));
  const result = element(by.name('nameResult'));
  const goButton = element(by.name('nameGobutton'));
  it('should get a sentence from inputs.', function () {

    browser.get('https://angular-e2e-demo.firebaseapp.com');
    subject.sendKeys('I');
    verbs.sendKeys('am');
    object.sendKeys('Tony');
    goButton.click();
    expect(result.getText()).toEqual('I am Tony');
  });
});

describe('Protractor Demo App collections', function () {
  const fibonacciLevel = element(by.id('idFibonacciLevel'));
  const fibonacciButton = element(by.id('idFibonacciButton'));

  beforeEach(() => {
    browser.get('https://angular-e2e-demo.firebaseapp.com');
  });

  it('should get a fibonacci.', function () {
    fibonacciLevel.sendKeys(5);
    fibonacciButton.click();
    const collections = element.all(by.id('idCollections'));
    expect(collections.count()).toEqual(5);

    let itemValue = collections.first().element(by.tagName('h4')).getText();
    expect(itemValue).toEqual('1');

    itemValue = collections.get(2).element(by.tagName('h4')).getText();
    expect(itemValue).toEqual('2');

    itemValue = collections.last().element(by.tagName('h4')).getText();
    expect(itemValue).toEqual('5');

    const fibonacciLevelError = element(by.id('idFibonacciLevelError'));
    expect(fibonacciLevelError.isPresent()).toBe(false);
  });

  it('should not get a fibonacci.', function () {
    fibonacciLevel.sendKeys(2);
    fibonacciButton.click();

    const collections = element.all(by.id('idCollections'));
    expect(collections.isPresent()).toBe(false);

    const fibonacciLevelError = element(by.id('idFibonacciLevelError'));
    expect(fibonacciLevelError.getText()).toEqual('Please input a number greater than 2.');
  });
});

describe('Protractor Demo App radio button', function () {
  const opt1 = element(by.id('idOpt1'));
  const opt2 = element(by.id('idOpt2'));
  const opt3 = element(by.id('idOpt3'));
  const rbValue = element(by.id('idRbValue'));

  beforeEach(() => {
    browser.get('https://angular-e2e-demo.firebaseapp.com');
  });

  it('should show selected option.', function () {
    const value = browser.executeScript('return arguments[1].value', opt1, opt2);
    expect(value).toEqual('Option 2');

    browser.executeScript('arguments[0].click()', opt2, opt3);
    expect(opt2.getAttribute('checked')).toEqual('true');
    expect(rbValue.getText()).toEqual('Option 2');
  });
});

/*describe('Protractor Demo App radio button', function () {
  const fibonacciButton3 = element(by.id('rbval'));
  const fibonacciButton2 = element(by.id('idObservable'));
  beforeEach(() => {
    browser.get('http://localhost:4200');
  });

  it('should get a fibonacci await.', function () {
    fibonacciButton2.click().then(() => {
      expect(fibonacciButton3.getText()).toEqual('Jane!');
    });
  });

  it('should get a fibonacci.', function () {
    fibonacciButton2.click();
    expect(fibonacciButton3.getText()).toEqual('Jane!');
  });
  fibonacciButton2.click().then(() => {
    expect(fibonacciButton3.getText()).toEqual('Jane!');
  });
});*/

/*describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('e2e-demo app is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});*/
