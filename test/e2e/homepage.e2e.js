'use strict'

module.exports = {

  'Validate Home Page': (browser) => {
    // setup the login page object
    const globalSections = browser.page.globalContent();

    // navigate to the login page
    globalSections.navigate()
      .waitForElementVisible('@mainContent', 1000)
      .waitForElementVisible('@loginBar', 1000)
      .waitForElementVisible('@navigation', 1000)
      .waitForElementVisible('@countDown', 1000);
    browser
      .pause(1000)
      .end()
  },
};
