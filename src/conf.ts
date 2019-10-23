exports.config = {
    framework: 'jasmine',
    directConnect: true,
    baseUrl: 'http://192.168.171.191:4200/#/login',
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
  
    // Spec patterns are relative to the location of the spec file. They may
    // include glob patterns.
    //specs: ["../build/testcases/TC_LI001.js"],
    suites: {
        TC1: ["../build/testcases/TC_LI001.js"],
        TC3: ["../build/testcases/TC_LI003.js"],
        TC4: ["../build/testcases/TC_LI004.js"],
        TC5: ["../build/testcases/TC_LI005.js"]
      },
};  