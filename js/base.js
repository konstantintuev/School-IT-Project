let navBarHTML = `
        <li><a href="/index.html" translation="intro" id="intro_nav"></a></li>
        <li><a href="/html/car.html" translation="car" id="car_nav"></a></li>
        <li><a href="/html/when.html" translation="when" id="when_nav"></a></li>
        <li><a href="/html/journey.html" translation="journey" id="journey_nav"></a></li>
        <li><a onclick="switchLanguage();" translation="lang" translation_attr_name="title"></a></li>
    `;

window.onload = function () {
    let navBar = document.getElementById("navbar");
    let active = navBar.getAttribute("activate_item");
    navBar.innerHTML = navBarHTML;
    let element = document.getElementById(active+"_nav");
    if (element != null) {
        element.className = "active";
    }
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
          navBar.style.top = "0";
      } else {
          navBar.style.top = "-40pt";
      }
      prevScrollpos = currentScrollPos;
    }
    initTranslations();
}