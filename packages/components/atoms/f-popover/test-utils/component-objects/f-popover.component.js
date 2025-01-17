const Page = require('@justeat/f-wdio-utils/src/page.object');
const { COMPONENT } = require('./f-popover-selectors')

module.exports = class Popover extends Page {

    get component () { return $(COMPONENT); }

    open () {
        super.openComponent('atom', 'popover-component');
    }

    waitForComponent () { 
        super.waitForComponent(this.component);
    }

    isComponentDisplayed () {
        return this.component.isDisplayed();
    }
}
