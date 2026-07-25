import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import RegistrationPage from '../pageobjects/registration.page.js'
import Registration from '../data/registration.js'
import VaahAsserts from "../vaah-webdriverio/VaahAsserts.js";

let Page = new RegistrationPage();
let Data = new Registration();
let Asserts = new VaahAsserts();
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

    params.test = Data.groups[0].tests[2];
    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[2];
        await Page.open();
        await Page.mandatorySymbolVisibility(Data, inputs.assert);
    })
})
