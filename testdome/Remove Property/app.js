function removeProperty(obj, prop) {
    if (obj[prop] !== undefined) {
        delete obj[prop];
        return true;
    }
    return false;
}

removeProperty(obj, prop);
