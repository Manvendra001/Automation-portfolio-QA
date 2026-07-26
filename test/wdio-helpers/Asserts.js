import Env from "../../wdio.env.js";

class asserts {

    async pause(seconds = null) {
        if (seconds === null) {
            seconds = params.is_human_pause;
        }

        if (params.is_human) {
            await browser.pause(seconds);
        }
    }

    pageUrl(text) {
        return expect(browser).toHaveUrl(text);
    }

    pageTitle(text) {
        return expect(browser).toHaveTitleContaining(text);
    }

    text(selector, text) {
        return expect(selector).toHaveTextContaining(text);
    }
}

export default new asserts();