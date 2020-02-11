const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
console.log(logo);


//image sources updated----------
//Header Img---
let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])
// console.log(headerImg);

//Middle Img---
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])
// console.log(middleImg);


//nav bar STARTS---------
let aTags = document.querySelectorAll('a');
aTags[0].textContent = siteContent['nav']['nav-item-1'];
aTags[1].textContent = siteContent['nav']['nav-item-2'];
aTags[2].textContent = siteContent['nav']['nav-item-3'];
aTags[3].textContent = siteContent['nav']['nav-item-4'];
aTags[4].textContent = siteContent['nav']['nav-item-5'];
aTags[5].textContent = siteContent['nav']['nav-item-6'];

//button and DOM is Awesome content text START-------
let btn = document.querySelector('button');
btn.textContent = siteContent['cta']['button'];

let ctaHeader = document.querySelector('h1');
ctaHeader.textContent = siteContent['cta']['h1'];


//main content STARTS------------
//TOP CONTENT START------
//H4---
let topHeader = document.querySelectorAll('.top-content .text-content h4');
let featuresHeader = topHeader[0];
let aboutHeader = topHeader[1];
featuresHeader.textContent = siteContent['main-content']['features-h4'];
aboutHeader.textContent = siteContent['main-content']['about-h4'];
//P's
let topPs = document.querySelectorAll('.top-content .text-content p');
let featuresP = topPs[0];
let aboutP = topPs[1];
featuresP.textContent = siteContent['main-content']['features-content'];
aboutP.textContent = siteContent['main-content']['about-content'];


//BOTTOM CONTENT START------
//H4---
let bottomHeader = document.querySelectorAll('.bottom-content .text-content h4');
let servicesHeader = bottomHeader[0];
let productHeader = bottomHeader[1];
let visionHeader = bottomHeader[2];
servicesHeader.textContent = siteContent['main-content']['services-h4'];
productHeader.textContent = siteContent['main-content']['product-h4'];
visionHeader.textContent = siteContent['main-content']['vision-h4'];
//P's
let bottomPs = document.querySelectorAll('.bottom-content .text-content p');
let servicesP = bottomPs[0];
let productP = bottomPs[1];
let visionP = bottomPs[2];
servicesP.textContent = siteContent['main-content']['services-content'];
productP.textContent = siteContent['main-content']['product-content'];
visionP.textContent = siteContent['main-content']['vision-content'];


//contact section STARTS-------
//H4----
let contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent['contact']['contact-h4'];
//P's-----
let contactInfo = document.querySelectorAll('.contact p');
let contactAddress = contactInfo[0];
let contactPhone = contactInfo[1];
let contactEmail = contactInfo[2];
contactAddress.textContent = siteContent['contact']['address'];
contactPhone.textContent = siteContent['contact']['phone'];
contactEmail.textContent = siteContent['contact']['email'];




//footer section STARTS------
let footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];

