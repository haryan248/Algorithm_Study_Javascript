function ensure(value) {
    if (value !== undefined) return value;
    throw "Error";
}

try {
    console.log(ensure());
} catch (err) {
    console.log(err);
}
