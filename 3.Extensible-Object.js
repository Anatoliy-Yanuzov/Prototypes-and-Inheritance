function extensibleObject() {

    const childObject = {
        extend: function (template) {
            for (const parentProperties of Object.keys(template)) {
                if (typeof (template[parentProperties]) === 'function') {
                    Object.getPrototypeOf(childObject)[parentProperties] = template[parentProperties];
                } else {
                    childObject[parentProperties] = template[parentProperties];
                }
            }
        }
    }
    return childObject
}
extensibleObject();
