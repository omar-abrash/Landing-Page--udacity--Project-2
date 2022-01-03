// create navegation-bar (ul , li , a) and append are in nav tag
const navPart = document.querySelector('nav');
const ulPart = document.createElement('ul');
for (let i = 1; i <= 4; i++){
    const anchorPart = document.createElement('a');
    const liPart = document.createElement('li');
    switch (i) {
        case 1:
            liPart.appendChild(anchorPart);
            anchorPart.appendChild(document.createTextNode(`about us`));
            anchorPart.setAttribute(`href`,`#about-us`)
            break;
        case 2:
            liPart.appendChild(anchorPart);
            anchorPart.appendChild(document.createTextNode(`products`));
            anchorPart.setAttribute(`href`,`#products`)
            break;
        case 3:
            liPart.appendChild(anchorPart);
            anchorPart.appendChild(document.createTextNode(`raw materials`));
            anchorPart.setAttribute(`href`,`#raw-materials`)
            break;
        case 4:
            liPart.appendChild(anchorPart);
            anchorPart.appendChild(document.createTextNode(`contact us`));
            anchorPart.setAttribute(`href`,`#contact-us`)
    }
    ulPart.appendChild(liPart);
} 
navPart.appendChild(ulPart);
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// add active class to active sections 
// we have 4 sections 
const aboutUsPart = document.querySelector('section.about-us');
const productsPart = document.querySelector('section.products');
const rawMaterialsPart = document.querySelector('section.raw-materials');
const cuntactUsPart = document.querySelector('section.contact-us');
// this code need more modefication to make it compatible with (media query) . I will make it. (done)
document.body.onscroll = function () {
    // document.documentElement.scrollTop
    // console.log(document.documentElement.scrollTop);
    const viewElement = aboutUsPart.clientHeight;
    let view1 = 0;
    let view2 = 0;
    let view3 = 0;
    let view4 = 0;
    let view5 = 0;
    let view6 = 0;
    let view7 = 0;
    let view8 = 0;
    // console.log(viewElement);
    // console.log(document.documentElement.scrollTop);
    // first : select the media query depend on viewElement clinetHieght
    if (viewElement >= 2024) { // very small screens
        view1 = 400;
        view2 = 2300;
        view3 = 2301;
        view4 = 4400;
        view5 = 4401;
        view6 = 6400;
        view7 = 6401;
        view8 = 8500;
    } else if (viewElement == 1199) { // small screens
        view1 = 500;
        view2 = 1800;
        view3 = 1801;
        view4 = 3200;
        view5 = 3201;
        view6 = 4500;
        view7 = 4501;
        view8 = 5800;
    } else { // other screens
        view1 = 300;
        view2 = 1000;
        view3 = 1001;
        view4 = 1700;
        view5 = 1701;
        view6 = 2400;
        view7 = 2401;
        view8 = 4100;
    }
    // finally : determine active state for each parts
    if (document.documentElement.scrollTop >= view1 || document.documentElement.scrollTop <= view2) {
        aboutUsPart.classList.add('active')
    }
        if (document.documentElement.scrollTop < view1 || document.documentElement.scrollTop > view2) {
        aboutUsPart.classList.remove('active')
    }
    if (document.documentElement.scrollTop >= view3 || document.documentElement.scrollTop <= view4) {
        productsPart.classList.add('active')
    }
        if (document.documentElement.scrollTop < view3 || document.documentElement.scrollTop > view4) {
        productsPart.classList.remove('active')
    }
    if (document.documentElement.scrollTop >= view5 || document.documentElement.scrollTop <= view6) {
        rawMaterialsPart.classList.add('active')
    }
        if (document.documentElement.scrollTop < view5 || document.documentElement.scrollTop > view6) {
        rawMaterialsPart.classList.remove('active')
    }
    if (document.documentElement.scrollTop >= view7 || document.documentElement.scrollTop <= view8) {
        cuntactUsPart.classList.add('active')
    }
        if (document.documentElement.scrollTop < view7 || document.documentElement.scrollTop > view8) {
        cuntactUsPart.classList.remove('active')
    }
};