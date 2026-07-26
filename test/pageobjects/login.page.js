import { $ } from '@wdio/globals'
import Page from './page.js'
import Selector from '../Wdio-helpers/Selector.js'  
import Asserts from '../Wdio-helpers/Asserts.js'

let Asserts = new VaahAsserts();
let Sl = new Selector();


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    constructor() {
        super();
        this.params.page.id = "LG";
        this.params.page.name = "Login";
        this.params.page.path = "/login";
        this.params.page.url = this.base_url+this.params.page.path;
    }

    async open() {
        await browser.maximizeWindow();
        await Asserts.pause();
        await super.open(this.params.page.url);
    }

    async firstNameFieldTypeFunctionality(data, assert){
        await Sl.id(data.element.first_name_id).setValue(data.value.first_name);
        await expect(Sl.id(data.element.first_name_id)).toHaveValueContaining(assert);
    }

    async lastNameFieldTypeFunctionality(data, assert){
        const last_name = await Sl.id(data.element.last_name_id);
        await last_name.setValue(data.value.last_name);
        await expect(last_name).toHaveValueContaining(assert);
    }
}


export default new LoginPage();
