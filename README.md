# Automated Testing with Nightwatch JS

### Installation

1. Make sure you've got the latest [Browser Drivers](http://nightwatchjs.org/gettingstarted#browser-drivers-setup) for your OS in the `./bin` directory (Chrome, Gecko, Edge).
1. Same thing for [Selenium Server Standalone](http://nightwatchjs.org/gettingstarted#selenium-server-setup) located in the `.bin` directory. Note the latest version isn't working with Firefox. You need to test the testing tool!
1. From project root, `cd tests` and then `npm install`.

### Running locally with npm

1. Confirm you read the installation section above.
1. From project root, `cd tests` and then `npm run test` to run both firefox and chrome tests in parallel.

### Running remotely with npm
1. Confirm you read the installation section above.
1. For DEV Server: From project root, `cd tests` and then `npm run testDev`.
1. For STAGE Server: From project root, `cd tests` and then `npm run testStage`.

### Running with nightwatch
1. For this trick, you need to be able to run `nightwatch` from command line, either install it globally or [something from here](http://stackoverflow.com/questions/9679932/how-to-use-package-installed-locally-in-node-modules).
* To run on local: `nightwatch -e default,firefox` (default is chrome)
* To run on dev: `nightwatch -e dev,firefox`
* To run on stage: `nightwatch -e stage,firefox`


### Configuration

1. See `nightwatch.json`, it's all there.

##### References

* http://nightwatchjs.org/gettingstarted
