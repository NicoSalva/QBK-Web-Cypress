const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    
      baseUrl: "https://www.qubika.com",
    
    supportFile:false,
    setupNodeEvents(on, config) {
    },
  },
});
