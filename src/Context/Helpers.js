import { marked } from 'marked';
import DOMPurify from 'dompurify';

export const getHTMLData = (markdown) => {
    const htmlString = marked(markdown);
    const sanitisedHtmlString = DOMPurify.sanitize(htmlString);

    return sanitisedHtmlString;
}

export const cleanUpAbout = (responseData) => {
    const { sys, fields } = responseData;
    const { id } = sys;
    const aboutPageTitle = fields.title;
    const aboutPageDescription = getHTMLData(fields.content);
    const aboutPageImage = fields.image.fields.file.url;
    let cleanAboutPage = { id, aboutPageTitle, aboutPageDescription, aboutPageImage };
    
    return cleanAboutPage;
};

export const cleanUpCarouselSlides = (responseData) => {
    const cleanSlides = responseData.map((slide) => {
        const { sys, fields } = slide;
        const { id } = sys;
        const slideTitle = fields.title;
        const slideDescription = fields.description;
        const slideBgImage = fields.image.fields.file.url;
        const updatedSlide = { id, slideTitle, slideDescription, slideBgImage };
        
        return updatedSlide;
    });
    
    return cleanSlides;
};
