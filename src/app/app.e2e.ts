import { browser, by, element } from 'protractor';

describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should pass', () => {
    expect(true).toEqual(true);
  });

});
