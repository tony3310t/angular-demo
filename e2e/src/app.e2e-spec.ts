import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Protractor Demo App by id', function () {
  const subject = element(by.id('idSubject'));
  const verbs = element(by.id('idVerbs'));
  const object = element(by.id('idObject'));
  const result = element(by.id('idResult'));
  const goButton = element(by.id('idGobutton'));
  it('should get a sentence from inputs.', function () {

    browser.get('http://localhost:4200');
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

    browser.get('http://localhost:4200');
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

  it('should get a fibonacci.', function () {
    browser.get('http://localhost:4200');

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
    browser.get('http://localhost:4200');

    fibonacciLevel.sendKeys(2);
    fibonacciButton.click();

    const collections = element.all(by.id('idCollections'));
    expect(collections.isPresent()).toBe(false);

    const fibonacciLevelError = element(by.id('idFibonacciLevelError'));
    expect(fibonacciLevelError.getText()).toEqual('Please input a number greater than 2.');
  });
});

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
