var lang = "";
window.onload = function () {
    lang = localStorage.getItem("lang") || (
        (
            (
                navigator.userLanguage || navigator.language
            ).replace(
                '-', '_'
            )
        ).toLowerCase()
    ).split('_')[0];
    console.log("lang: "+lang);
    if (lang !== "en" && lang !== "bg") {
        lang = "en";
    }
    handleNewLang();

}

function translateStrings() {
    [].forEach.call(document.querySelectorAll('[translation]'), function(element) {
        let text = getString(element.getAttribute("translation"));
        let attrToChange = element.getAttribute("translation_attr_name");
        if (attrToChange != null) {
            element.setAttribute(attrToChange, text);
        }
        element.innerHTML = text.replaceAll("\n", "<br>");
    });

    [].forEach.call(document.querySelectorAll('[translation_attr]'), function(element) {
        let attrToChange = element.getAttribute("translation_attr_name");
        element.setAttribute(attrToChange, getString(element.getAttribute("translation_attr")));
    });

    /*[].forEach.call(document.querySelectorAll('[translation_both]'), function(element) {
        let text = getString(element.getAttribute("translation_both"));
        let attrToChange = element.getAttribute("translation_attr_name");
        element.setAttribute(attrToChange, text);
        element.innerHTML = text;
    });*/
}

function switchLanguage() {
    if (lang === "en") {
        lang = "bg";
    } else {
        lang = "en";
    }
    handleNewLang();
}

function handleNewLang() {
    localStorage.setItem("lang", lang);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            strings = JSON.parse(this.responseText);
            translateStrings();
        }
    };
    xmlhttp.open("GET", "translations/strings_"+lang+".json", true);
    xmlhttp.send();
}