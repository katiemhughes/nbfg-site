import { marked } from 'marked';
import DOMPurify from 'dompurify';

export const getHTMLData = (markdown) => {
    const htmlString = marked(markdown);
    const sanitisedHtmlString = DOMPurify.sanitize(htmlString);

    return sanitisedHtmlString;
}

export const cleanUpCarouselSlides = (responseData) => {
    const cleanSlides = responseData.map((slide) => {
        const { sys, fields } = slide;
        const { id } = sys;
        console.log('fields', fields);
        const slideTitle = fields.title;
        const slideDescription = fields.description;
        const slideBgImage = fields.image.fields.file.url;
        const updatedSlide = { id, slideTitle, slideDescription, slideBgImage };
        
        return updatedSlide;
    });
    
    return cleanSlides;
};

export const cleanUpAbout = (responseData) => {
    const { sys, fields } = responseData;
    const { id } = sys;
    const aboutPageTitle = fields.title;
    const aboutPageDescription = getHTMLData(fields.content);
    const aboutPageImage = fields.image.fields.file.url;
    let cleanAboutPage = { id, aboutPageTitle, aboutPageDescription, aboutPageImage };
    
    return cleanAboutPage;
};

export const cleanUpContact = (responseData) => {
    const { sys, fields } = responseData;
    const { id } = sys;

    console.log('fields', fields)
    const contactTitle = fields.title;
    // const aboutPageDescription = getHTMLData(fields.content);
    const contactEmail = fields.emailAddress;
    const contactSignature = fields.signature;
    const portfolioLink = fields.portfolioLink;
    const emailTitle = fields.emailTitle;
    let cleanContactPage = { id, contactTitle, contactEmail, contactSignature, emailTitle, portfolioLink };
    
    return cleanContactPage;
};

export const cleanUpNavbar = (responseData) => {
    const { sys, fields } = responseData;
    const { id } = sys;
    const icon = fields.navbarIcon.fields.file.url;
    const homeLink = fields.homeLink;
    const aboutLink = fields.aboutLink;
    const contactLink = fields.contactLink;
    let cleanNavbar = { id, icon, homeLink, aboutLink, contactLink };
    
    return cleanNavbar;
};