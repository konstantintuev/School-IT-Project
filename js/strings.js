var strings = {}
function getString(string) {
    let out = strings[string];
    if (out == null) {
        return "";
    }
    return out;
}