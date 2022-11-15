import {Given, Then, When} from '@wdio/cucumber-framework'
  
Given("user is using xpath new",async () => {

   const alertViewselector = '**/XCUIElementTypeStaticText[`label == "Alert Views"`]'
   const alertView = await $(`-ios class chain:${alertViewselector}`)
   await alertView.click();

   // const alertView = await $('**/XCUIElementTypeStaticText[`label == "Alert Views"`]');
   // await alertView.click();

   })

 When("User is albe click xpath new", async () =>{
   // const TextEntry = await $('**/XCUIElementTypeStaticText[`label == "Text Entry"`]');
   // await TextEntry.click();

   const TextEntryselector = '**/XCUIElementTypeStaticText[`label == "Text Entry"`]'
   const TextEntry = await $(`-ios class chain:${TextEntryselector}`)
   await TextEntry.click();

   })

Then("user is able to validate xpath new", async () =>{
   // const Entervalue = await $('**/*[`type="XCUIElementTypeCell"`]');
   // await Entervalue.setValue('Hello');

   const TEntervalueselector = '**/*[`type="XCUIElementTypeCell"`]'
   const Entervalue = await $(`-ios class chain:${TEntervalueselector}`)
   await Entervalue.setValue('Hello');

   // const btnOK = await $('**/XCUIElementTypeButton[`label == "OK"`]');
   // await btnOK.click();

   const btnOKselector = '**/XCUIElementTypeButton[`label == "OK"`]'
   const btnOK = await $(`-ios class chain:${btnOKselector}`)
   await btnOK.click();

   // const btnConfirm = await $('**/XCUIElementTypeStaticText[`label == "Confirm / Cancel"`]');
   // await btnConfirm.click();

   const btnConfirmselector = '**/XCUIElementTypeStaticText[`label == "Confirm / Cancel"`]'
   const btnConfirm = await $(`-ios class chain:${btnConfirmselector}`)
   await btnConfirm.click();

   // const btnConfirmcancel = await $('**/XCUIElementTypeButton[`label == "Confirm"`]');
   // await btnConfirmcancel.click();

   const btnConfirmcancelelector = '**/XCUIElementTypeButton[`label == "Confirm"`]'
   const btnConfirmcancel = await $(`-ios class chain:${btnConfirmcancelelector}`)
   await btnConfirmcancel.click();
   
   })
//**************************************************** */