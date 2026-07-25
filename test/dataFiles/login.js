import Page from '../vaah-webdriverio/Page.js'

export default class Registration extends Page{
    constructor() {
        super();
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            cookie_accept_btn_id: 'onetrust-accept-btn-handler',
            page_heading_text: 'h1=Create my account',
            welcome_message_class: 'register-wrapper',
            title_label_span: 'span*=Title',
            title: '//*[text()="Title*"]/../select',
            first_name_label: 'label*=First name',
            first_name_id: 'firstName',
            last_name_label: 'label*=Last name',
            last_name_id: 'lastName',
            landline_id: 'landline',
            mobile_label: 'label*=Mobile',
            mobile_id: 'mobile'
        }
        this.value = {
            title: 'Mr',
            first_name: 'Tom',
            last_name: 'howard',
            landline: '442045780871',
            invalid_password: 'testing',
            placeholder: 'placeholder',
        }
        this.params.page = {
            id: "RG",
            name: "Registration",
            url : this.base_url+"/register"
        }
        this.groups = [
            {
                count: 1,
                name: "UI",
                tests: [
                    {
                        count: 1.1,
                        name: "Verify the URL of the registration page",
                        expect: "The URL should be: "+this.params.page.url,
                        assert: this.params.page.url
                    },
                    {
                        count: 1.2,
                        name: "Verify the title of the registration page",
                        expect: "The title should be: Toolstation",
                        assert: "Toolstation"
                    },
                    {
                        count: 1.3,
                        name: "Verify if the heading is visible on the registration page or not",
                        expect: "The heading should be visible on the registration page",
                    }
                ]
            }
        ]
    }
}
