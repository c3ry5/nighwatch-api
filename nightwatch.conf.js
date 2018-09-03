module.exports = (function(settings) {
  settings.selenium.server_path = require('selenium-server-standalone-jar').path;
  settings.selenium.cli_args['webdriver.chrome.driver'] = require('chromedriver').path
  return settings;
})(require('./nightwatch.json'));