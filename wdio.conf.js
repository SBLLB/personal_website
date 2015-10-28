exports.config = {
    // =====================
    // Server Configurations
    // =====================
    // Host address of the running Selenium server. This information is usually obsolete as
    // WebdriverIO automatically connects to localhost. Also if you are using one of the
    // supported cloud services like Sauce Labs, Browserstack or Testing Bot you also don't
    // need to define host and port information because WebdriverIO can figure that our
    // according to your user and key information. However if you are using a private Selenium
    // backend you should define the host address, port, and path here.
    //
    // host: '0.0.0.0',
    // port: 4444,
    // path: '/wd/hub',
    //

    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
        'test/features/*.js'
    ],
    // Patterns to exclude.
    // exclude: [
    //     'test/spec/multibrowser/**',
    //     'test/spec/mobile/**'
    // ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilties at the same
    // time. Depending on the number of capabilities WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude option in
    // order to group specific specs to a specific capability.
    //
    // If you have trouble getting all important capabilities together check out Sauce Labs
    // platform configurator. A great tool to configure your capabilities.
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [{
        browserName: 'chrome'
    }],
    // Level of logging verbosity.
    logLevel: 'silent',
    //Options: verbose | silent | command | data | result

    // Enables colors for log output
    coloredLogs: true,
    //
    framework: 'mocha',
    reporter: 'spec',
    mochaOpts: {
        ui: 'bdd'
    },

    // =====
    // Hooks
    // =====
    // Run functions before or after the test. If one of them return with a promise, WebdriverIO
    // will wait until that promise got resolved to continue.
    // see also: http://webdriver.io/guide/testrunner/hooks.html

    // Gets executed before all workers get launched.
    // onPrepare: function() {
    //     console.log('let\'s go');
    // },
    // //
    // // Gets executed before test execution begins. At this point you will have access to all global
    // // variables like `browser`. It is the perfect place to define custom commands.
    // before: function() {
    //     console.log('run the tests');
    // },
    // //
    // // Gets executed after all tests are done. You still have access to all global variables from
    // // the test.
    // after: function() {
    //     console.log('finish up the tests');
    // },
    // //
    // // Gets executed after all workers got shut down and the process is about to exit. It is not
    // // possible to defer the end of the process using a promise.
    // onComplete: function() {
    //     console.log('that\'s it');
    // }
};
