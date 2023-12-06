# Playwright Amazon Automation

## Description
This repository contains Playwright test scripts for automating various scenarios on the Amazon.in website.


## Getting Started

These instructions will help you set up and run this Playwright scripts on your local machine.

#Used Framewrok

Playwright https://playwright.dev/

## Setup
1. Clone this repository to your local machine.
2. Ensure you have Node.js and npm installed.(You can download and install them from [https://nodejs.org/].

#Instalation of playwright
npm init

npm install -D @playwright/test

## To Run the Test Scripts:

npx playwright test

## Run in headed(interactive) mode

npx playwright test -- --headed

## Run a single test case

npx playwright test Script_Name


**Notes : **

1. In the test cases You need to replace the sample ID and Password with your Login ID and Password.

2. In the Test scripts Like Adding to cart and Purchasing the Product You must be sign in to your amazon.in account.

3. You can change the product in all these test cases according to your choice. 