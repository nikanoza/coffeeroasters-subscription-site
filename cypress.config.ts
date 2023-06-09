import { defineConfig } from "cypress";
import coverageFunc from "@cypress/code-coverage/task";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      coverageFunc(on, config);
      return config;
    },
    baseUrl: "http://localhost:5173",
  },
});
