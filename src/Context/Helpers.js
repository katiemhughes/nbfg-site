import { marked } from 'marked';
import DOMPurify from 'dompurify';

export const getHTMLData = (markdown) => {
    const htmlString = marked(markdown);
    const sanitisedHtmlString = DOMPurify.sanitize(htmlString);

    return sanitisedHtmlString;
}

export const extractCarouselData = (responseData) => {
    const updatedCarouselSlides = responseData.map((slide) => {
        const { sys, fields } = slide;
        const { id } = sys;
        // console.log('fields', fields);
        const slideTitle = fields.title;
        const slideDescription = fields.description;
        const slideBgImage = fields.image.fields.file.url;
        const updatedSlide = { id, slideTitle, slideDescription, slideBgImage };
        
        return updatedSlide;
    });
    
    return updatedCarouselSlides;
};

export const extractAboutData = (responseData) => {
    const { sys, fields } = responseData;
    const { id } = sys;
    const aboutPageTitle = fields.title;
    const aboutPageDescription = getHTMLData(fields.content);
    const aboutPageImage = fields.image.fields.file.url;
    let updatedAbout = { id, aboutPageTitle, aboutPageDescription, aboutPageImage };
    
    return updatedAbout;
};

export const extractContactData = (responseData) => {
    const { sys, fields } = responseData;
    const { id } = sys;
    const contactTitle = fields.title;
    const contactEmail = fields.emailAddress;
    const financeEmail = fields.financeEmailAddress;
    const contactSignature = fields.signature;
    const instagramLink = fields.instagramLink;
    const facebookLink = fields.facebookLink;
    const twitterLink = fields.twitterLink;
    const twitterAlt = fields.twitterAlt;
    const tiktokLink = fields.tiktokLink;
    const tiktokAlt = fields.tiktokAlt;
    const soundcloudLink = fields.soundcloudLink;
    const soundcloudAlt = fields.soundcloudAlt;
    const portfolioLinkText = fields.portfolioLinkText;
    const portfolioLink = fields.portfolioLink;
    const portfolioLinkName = fields.portfolioLinkName;
    const emailTitle = fields.emailTitle;
    let updatedContact = { id, contactTitle, contactEmail, financeEmail, instagramLink, facebookLink, twitterLink, twitterAlt, tiktokLink, tiktokAlt, soundcloudLink, soundcloudAlt, contactSignature, emailTitle, portfolioLinkText, portfolioLink, portfolioLinkName };
    
    return updatedContact;
};

export const extractNavbarData = (responseData) => {
    const { sys, fields } = responseData;
    const { id } = sys;
    const icon = fields.navbarIcon.fields.file.url;
    const iconAlt = fields.navbarAlt;
    const homeLink = fields.homeLink;
    const aboutLink = fields.aboutLink;
    const meetTheGangLink = fields.meetTheGangLink;
    const contactLink = fields.contactLink;
    const instagramLink = fields.instagramLink;
    const facebookLink = fields.facebookLink;
    const twitterLink = fields.twitterLink;
    const twitterAlt = fields.twitterAlt;
    const tiktokLink = fields.tiktokLink;
    const tiktokAlt = fields.tiktokAlt;
    const soundcloudLink = fields.soundcloudLink;
    const soundcloudAlt = fields.soundcloudAlt;
    let updatedNavbar = { id, icon, iconAlt, homeLink, aboutLink, meetTheGangLink, contactLink, instagramLink, facebookLink, twitterLink, twitterAlt, tiktokLink, tiktokAlt, soundcloudLink, soundcloudAlt };
    
    return updatedNavbar;
};

export const extractUnderConstructionData = (responseData) => {
    const { sys, fields } = responseData;
    const { id } = sys;
    const underConstructionTitle = fields.title;
    const underConstructionDescription = getHTMLData(fields.content);
    const underConstructionImage = fields.image.fields.file.url;
    let updatedUnderConstruction = { id, underConstructionTitle, underConstructionDescription, underConstructionImage };
    
    return updatedUnderConstruction;
};

export const extractTheGangData = (responseData) => {
    const { items } = responseData;
    const extractedGang = items.map((item) => {
        const { fields } = item;
        const title = fields.title;
        const description = getHTMLData(fields.content);
        const image = fields.image.fields.file.url;
        const slug = fields.slug;
        const email = fields.email;
        const instagram = fields.instagram;
        const facebook = fields.facebook;
        const soundcloud = fields.soundcloud;
        const mixcloud = fields.mixcloud;
        const primaryPronoun = fields.primaryPronoun;
        const secondaryPronoun = fields.secondaryPronoun;
        const tertiaryPronoun = fields.tertiaryPronoun;
        const updatedGang = { title, description, image, slug, email, instagram, facebook, soundcloud, mixcloud, primaryPronoun, secondaryPronoun, tertiaryPronoun };
        
        return updatedGang;
    });
    
    return extractedGang;
};
