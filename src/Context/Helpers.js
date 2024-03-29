import { marked } from 'marked';
import DOMPurify from 'dompurify';

export const getHTMLData = (markdown) => {
  const htmlString = marked(markdown);
  const sanitisedHtmlString = DOMPurify.sanitize(htmlString);

  return sanitisedHtmlString;
};

export const extractCarouselData = (responseData) => {
  const updatedCarouselSlides = responseData.map((slide) => {
    const { sys, fields } = slide;
    const { id } = sys;
    // console.log('fields', fields);
    const slideTitle = fields.title;
    const slideSlug = fields.slug;
    const slideDescription = fields.description;
    const slideBgImage = fields.image.fields.file.url;
    const updatedSlide = {
      id, slideTitle, slideSlug, slideDescription, slideBgImage,
    };

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
  const updatedAbout = {
    id, aboutPageTitle, aboutPageDescription, aboutPageImage,
  };

  return updatedAbout;
};

export const extractContactData = (responseData) => {
  const { sys, fields } = responseData;
  const { id } = sys;
  const contactTitle = fields.title;
  const contactEmail = fields.emailAddress;
  const financeEmail = fields.financeEmailAddress;
  const contactSignature = fields.signature;
  const { instagramLink } = fields;
  const { facebookLink } = fields;
  const { twitterLink } = fields;
  const { twitterAlt } = fields;
  const { tiktokLink } = fields;
  const { tiktokAlt } = fields;
  const { soundcloudLink } = fields;
  const { soundcloudAlt } = fields;
  const { portfolioLinkText } = fields;
  const { portfolioLink } = fields;
  const { portfolioLinkName } = fields;
  const { emailTitle } = fields;
  const updatedContact = {
    id,
    contactTitle,
    contactEmail,
    financeEmail,
    instagramLink,
    facebookLink,
    twitterLink,
    twitterAlt,
    tiktokLink,
    tiktokAlt,
    soundcloudLink,
    soundcloudAlt,
    contactSignature,
    emailTitle,
    portfolioLinkText,
    portfolioLink,
    portfolioLinkName,
  };

  return updatedContact;
};

export const extractNavbarData = (responseData) => {
  const { sys, fields } = responseData;
  const { id } = sys;
  const icon = fields.navbarIcon.fields.file.url;
  const iconAlt = fields.navbarAlt;
  const { homeLink } = fields;
  const { aboutLink } = fields;
  const { meetTheGangLink } = fields;
  const { newsLink } = fields;
  const { contactLink } = fields;
  const { instagramLink } = fields;
  const { facebookLink } = fields;
  const { twitterLink } = fields;
  const { twitterAlt } = fields;
  const { tiktokLink } = fields;
  const { tiktokAlt } = fields;
  const { soundcloudLink } = fields;
  const { soundcloudAlt } = fields;
  const updatedNavbar = {
    id,
    icon,
    iconAlt,
    homeLink,
    aboutLink,
    meetTheGangLink,
    newsLink,
    contactLink,
    instagramLink,
    facebookLink,
    twitterLink,
    twitterAlt,
    tiktokLink,
    tiktokAlt,
    soundcloudLink,
    soundcloudAlt,
  };

  return updatedNavbar;
};

export const extractUnderConstructionData = (responseData) => {
  const { sys, fields } = responseData;
  const { id } = sys;
  const underConstructionTitle = fields.title;
  const underConstructionDescription = getHTMLData(fields.content);
  const underConstructionImage = fields.image.fields.file.url;
  const updatedUnderConstruction = {
    id, underConstructionTitle, underConstructionDescription, underConstructionImage,
  };

  return updatedUnderConstruction;
};

export const extractTheGangData = (responseData) => {
  const { items } = responseData;
  const extractedGang = items.map((item) => {
    const { fields } = item;
    // console.log('fields', fields);
    const { title } = fields;
    const description = getHTMLData(fields.content);
    const image = fields.image.fields.file.url;
    const { slug } = fields;
    const { email } = fields;
    const { instagram } = fields;
    const { facebook } = fields;
    const { soundcloud } = fields;
    const { mixcloud } = fields;
    const { primaryPronoun } = fields;
    const { secondaryPronoun } = fields;
    const { tertiaryPronoun } = fields;
    const { soundcloudEmbed } = fields;
    const updatedGang = {
      title,
      description,
      image,
      slug,
      email,
      instagram,
      facebook,
      soundcloud,
      mixcloud,
      primaryPronoun,
      secondaryPronoun,
      tertiaryPronoun,
      soundcloudEmbed,
    };

    return updatedGang;
  });

  return extractedGang;
};

export const extractAllNewsPostsData = (responseData) => {
  const { items } = responseData;
  // console.log('news items', items);
  const extractedNewsPosts = items.map((item) => {
    const { fields } = item;
    const image = fields.image.fields.file.url;
    const { title } = fields;
    const { slug } = fields;
    const { author } = fields;
    const { createdDate } = fields;
    const { summary } = fields;
    const content = getHTMLData(fields.postContent);
    console.log('content', content);

    const updatedNewsPost = {
      image,
      title,
      slug,
      author,
      createdDate,
      summary,
      content,
    };

    return updatedNewsPost;
  });

  return extractedNewsPosts;
};
