let navBarHTML = `
        <li id="intro_nav"><a href="/index.html" translation="intro"></a></li>
        <li id="car_nav"><a href="/html/car.html" translation="car"></a></li>
        <li id="when_nav"><a href="/html/when.html" translation="when"></a></li>
        <li id="journey_nav"><a href="/html/journey.html" translation="journey"></a></li>
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
    let elementNavSize = document.getElementById('navbar');
    let elementNavSizeHeight = elementNavSize.getBoundingClientRect().height;
    console.log("elementNavSizeHeight: "+elementNavSizeHeight);
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          navBar.style.top = "0";
      } else {
          navBar.style.top = "-"+elementNavSizeHeight+"px";
      }
      prevScrollpos = currentScrollPos;
    }
    initTranslations();
}