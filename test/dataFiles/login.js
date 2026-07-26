import Page from '../wdyio-helpers/Page.js'

export default class Login extends Page{
    constructor() {
        super();
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            
        }
        this.value = {
            
        }
        this.params.page = {
            id: "LG",
            name: "Login",
            url : this.base_url+"/login"
        }
        this.groups = [
            {
                count: 1,
                name: "UI",
                tests: [
                    {
                        count: 1.1,
                        name: "Verify the URL of the login page",
                        expect: "The URL should be: "+this.params.page.url,
                        assert: this.params.page.url
                    },
                    {
                        count: 1.2,
                        name: "Verify the title of the login page",
                        expect: "The title should be: Faceboook",
                        assert: "Faceboook"
                    },
                    
                ]
            }
        ]
    }
}
