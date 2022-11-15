import AccessibilityLoc from '../locators/accessibility'

const accessibilityLoc = new AccessibilityLoc();

export default class aceesibilityscreen{

  get accessibilitylink (){
    return accessibilityLoc.alertView;
  }
  get testentry (){
    return accessibilityLoc.textentry;
  }
  get setValue(){
    return accessibilityLoc.setvalue;
  }
  get clkOKbtn(){
    return accessibilityLoc.btnOK;
  }
  get clkConfirmCancel(){
    return accessibilityLoc.confimCancel;
  }

  get btnConfim(){
    return accessibilityLoc.btnConfim;
  }


}