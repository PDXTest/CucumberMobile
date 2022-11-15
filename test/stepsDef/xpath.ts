import {Given, Then, When} from '@wdio/cucumber-framework'
  
Given("user is using xpath",async () => {
   const alertView = await $('//XCUIElementTypeStaticText[@name="Alert Views"]');
   await alertView.click();

   })

 When("User is albe click xpath", async () =>{
   const TextEntry = await $('//XCUIElementTypeStaticText[@name="Text Entry"]');
   await TextEntry.click();

   })

Then("user is able to validate xpath", async () =>{
   const Entervalue = await $('//XCUIElementTypeCell');
   await Entervalue.setValue('Hello');

   const btnOK = await $('//XCUIElementTypeButton[@name="OK"]');
   await btnOK.click();

   const btnConfirm = await $('//XCUIElementTypeStaticText[@name="Confirm / Cancel"]');
   await btnConfirm.click();

   const btnConfirmcancel = await $('//XCUIElementTypeButton[@name="Confirm"]');
   await btnConfirmcancel.click();

   })
//**************************************************** */