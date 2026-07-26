import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import Login from '../data/login.data.js'
import asserts from '../wdio-helpers/Asserts.js'

let Page = new LoginPage();
let Data = new Login();
let Asserts = new asserts();
let params = Data.params;
let inputs;

params.group = Data.groups[0];
describe(Page.groupId(params), () => {

    params.test = Data.groups[0].tests[0];
    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[0];
        await Page.open();
        await Asserts.pageUrl(inputs.assert);
    })

    params.test = Data.groups[0].tests[1];
    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[1];
        await Page.open();
        await Asserts.pageTitle(inputs.assert);
    })
})
