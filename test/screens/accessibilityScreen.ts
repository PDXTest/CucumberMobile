import Locators from '../locators/Locators'

const locators = new Locators();

export default class aceesibilityscreen{

  get accessibilitylink (){
    return locators.alertView;
  }
  get testentry (){
    return locators.textentry;
  }
  get setValue(){
    return locators.setvalue;
  }
  get clkOKbtn(){
    return locators.btnOK;
  }
  get clkConfirmCancel(){
    return locators.confimCancel;
  }

  get btnConfim(){
    return locators.btnConfim;
  }


}