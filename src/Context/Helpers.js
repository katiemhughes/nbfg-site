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
    const financeEmail = fields.financeEmailAddress;
    const contactSignature = fields.signature;
    const portfolioLink = fields.portfolioLink;
    const emailTitle = fields.emailTitle;
    let cleanContactPage = { id, contactTitle, contactEmail, financeEmail, contactSignature, emailTitle, portfolioLink };
    
    return cleanContactPage;
};

export const cleanUpNavbar = (responseData) => {
    const { sys, fields } = responseData;
    const { id } = sys;
    const icon = fields.navbarIcon.fields.file.url;
    const homeLink = fields.homeLink;
    const aboutLink = fields.aboutLink;
    const meetTheGangLink = fields.meetTheGangLink;
    const contactLink = fields.contactLink;
    let cleanNavbar = { id, icon, homeLink, aboutLink, meetTheGangLink, contactLink };
    
    return cleanNavbar;
};

export const cleanUpUnderConstruction = (responseData) => {
    const { sys, fields } = responseData;
    const { id } = sys;
    const underConstructionTitle = fields.title;
    const underConstructionDescription = getHTMLData(fields.content);
    const underConstructionImage = fields.image.fields.file.url;
    let cleanAboutPage = { id, underConstructionTitle, underConstructionDescription, underConstructionImage };
    
    return cleanAboutPage;
};

export const cleanUpMaracuya = (responseData) => {
    const { sys, fields } = responseData;
    const { id } = sys;
    const maracuyaTitle = fields.title;
    const maracuyaDescription = getHTMLData(fields.content);
    const maracuyaImage = fields.image.fields.file.url;
    let cleanMaracuya = { id, maracuyaTitle, maracuyaDescription, maracuyaImage };
    
    return cleanMaracuya;
};
