class Selector {

    id(id) {
        return $("#" + id);
    }

    class(name) {
        return $("." + name);
    }

    $(selector) {
        return $(selector);
    }

    xpath(xpath) {
        return $(xpath);
    }

    attr(attribute, value) {
        return $('[' + attribute + '="' + value + '"]');
    }

    arialabel(name, value = null) {
        let el = this.attr('aria-label', name);
        if (value) {
            el.setValue(value);
        }
        return el;
    }
}

export default Selector;
