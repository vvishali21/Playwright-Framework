# Playwright-Framework


# INSTALL USING COMMAND AS NPM PACKAGE

Step 1 - Create a new folder and open in VS Code 

Step 2 – Go to Terminal and run command 

              npm init playwright@latest 

Step 3 - Following will be added 

- package.json - node project management file
  
- playwright.config.js - Configuration file
  
- tests folder - basic example test
  
- tests-examples folder - detailed example tests
  
- .gitignore - to be used during git commit and push
  
- playwright.yml - to be used during ci cd pipeline (github workflows)
  
Step 4 - Check playwright added 
           
           npm playwright -v 

Step 5 - Check playwright command options 
       
            npx playwright -h



# HOW TO RUN TESTS | COMMANDS

npx playwright test – runs all tests on all browsers in headless mode

npx playwright show-report – It will generate report

npx playwright test --workers 3 – runs with 3 workers in parallel

npx playwright test one.spec.js – runs a specific test file

npx playwright test one.spec.js two.spec.js – runs the files specified

npx playwright test (any starting name) – run files that have that name

npx playwright test -g “check title” – runs test with the title

npx playwright test --project chromium – runs on specific browser

npx playwright test --headed – runs tests in headed mode

npx playwright test --project chromium --headed – runs tests in headed mode with chrome

npx playwright test --project chromium --debug – debug tests

npx playwright test ex.spec.js --debug – debug specific test file

npx playwright test ex.spec.js:21 --debug – debug starting from specific line where test(..start)



# HOW TO RECORD TEST – TEST GENERATOR

Playwright comes with a tool - codegen also called Test Generator

Can be used to record test and generate test scripts

It opens 2 windows

1. A browser window to interacts with the website
  
2. Playwright inspector window to record test
   
Step 1 – Open terminal and run codegen 

               npx playwright codegen

Step 2 – Check 2 windows open-Browser and playwright inspector

Step 3 – Record your test steps and check the test scripts getting created

Step 4 – Save the recorded script in a test file | Run and check

               npx playwright codegen google.com
               
Record on a specific browser - npx playwright codegen --browser firefox  (default chromium)

Record and save to a file - npx playwright codegen --target javascript -o record_example.spec.js

Set viewport -screen resolution(size) - npx playwright codegen --viewport-size=1000,1000

Emulate devices - npx playwright codegen --device=”iphone 11”

Emulate color scheme - npx playwright --color-scheme=dark

See all options - npx playwright codegen --help


# TRACE VIEWER

GUI tool that helps viewing the executed test along with snapshots, timeline and other details (traces).

How to use Trace Viewer

Step 1 – Open config file and set trace:’on-first-retry’

It means – Collect trace when trying the failed test for the 1st time only

Step 2 – Add in 29th and 30th line

            // retries: process.env.CI ? 2 : 0,
               retries: 1,
               
Step 3 – Save and Run a test to fail 

Step 4 – npx playwright test record_keo.spec.js --headed --project=chromium

    Open report Go to -> Retry -> Check Trace -> Open the image
    
Step 5 – Check trace.zip created under test-results folder

Step 6 – View trace 

             npx playwright show-trace test-results\record_keo-test-chromium-retry1\trace.zip


