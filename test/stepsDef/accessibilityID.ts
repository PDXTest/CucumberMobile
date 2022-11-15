import {Given, Then, When} from '@wdio/cucumber-framework'
import Accessibility from '../screens/accessibilityScreen'
import Locators from '../locators/Locators'

import allureReporter from '@wdio/allure-reporter'

const accessibility = new Accessibility();
const locators = new Locators();

Given("user is using Accessibilty",async () => {

 allureReporter.addFeature('Feature_name');
 allureReporter.addStory('Story_name');

   (await locators.alertView).click();
   allureReporter.addStep("First test caes is passed");

   }) 

 When("User is albe click", async () =>{
 
   await accessibility.testentry.click();

   })

Then("user is able to validate", async () =>{

   await accessibility.setValue.setValue('Hello');
   await (await accessibility.clkOKbtn).click();
   await (await accessibility.clkConfirmCancel).click();
   await (await accessibility.btnConfim).click();
   
   })
//**************************************************** */   

// Given("user is using xpath", async () =>{
  
//     const alertView = await $('~Alert Views');
//     await alertView.click();
 
//    })

//    When("User is albe click xpath", async () =>{
//     const TextEntry = await $('~Text Entry');
//     await TextEntry.click();

//     })

//  Then("user is able to validate xpath", async () =>{
//     const Entervalue = await $('[type="XCUIElementTypeCell"]');
//     await Entervalue.setValue('Hello Text');

//     const btnOK = await $('~OK');
//     await btnOK.click();

//     const btnConfirm = await $('~Confirm / Cancel');
//     await btnConfirm.click();

// }) 

// Given("user is using xpath new", async () =>{
  
//     const alertView = await $('~Alert Views');
//     await alertView.click();
//     console.log("Hi2")
//    })

//    When("User is albe click xpath new", async () =>{
//     const TextEntry = await $('~Text Entry');
//     await TextEntry.click();

//     })

//  Then("user is able to validate xpath new", async () =>{
//     const Entervalue = await $('[type="XCUIElementTypeCell"]');
//     await Entervalue.setValue('Hello Text');

//     const btnOK = await $('~OK');
//     await btnOK.click();

//     const btnConfirm = await $('~Confirm / Cancel');
//     await btnConfirm.click();

// }) 

// Given("user is using xpath",async () => {
//     const alertView = await $('~Alert Views');
//     await alertView.click();
//     })

//   When("User is albe click xpath", async () =>{
//     const TextEntry = await $('~Text Entry');
//     await TextEntry.click();
//     })

// Then("user is able to validate xpath", async () =>{
//     const Entervalue = await $('[type="XCUIElementTypeCell"]');
//     await Entervalue.setValue('Hello');

//     const btnOK = await $('~OK');
//     await btnOK.click();

//     const btnConfirmCancel = await $('~Confirm / Cancel');
//     await btnConfirmCancel.click();
//     const btnConfirm = await $('~Confirm');
//     await btnConfirm.click();

//    // driver.pause(40000);
//     driver.back();
//     })

// Given("user is using xpath new", async () =>{
  
//     const alertView = await $('~Alert Views');
//     await alertView.click();
//    })

//    When("User is albe click xpath new", async () =>{
//     const TextEntry = await $('~Text Entry');
//     await TextEntry.click();
//     })

//  Then("user is able to validate xpath new", async () =>{
//     const Entervalue = await $('[type="XCUIElementTypeCell"]');
//     await Entervalue.setValue('Hello Text');

//     const btnOK = await $('~OK');
//     await btnOK.click();

//     const btnConfirmCancel = await $('~Confirm / Cancel');
//     await btnConfirmCancel.click();

//     const btnConfirm = await $('~Confirm');
//     await btnConfirm.click();

// }) 