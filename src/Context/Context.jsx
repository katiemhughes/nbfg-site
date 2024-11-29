import React, { useState, useEffect, useCallback } from 'react';
import { client } from './Client';
import {
  extractCarouselData,
  extractAboutData,
  extractContactData,
  extractNavbarData,
  extractUnderConstructionData,
  extractTheGangData,
  extractAllNewsPostsData,
} from './Helpers';

export const Context = React.createContext();

export function Provider(props) {
  const [isCarouselLoading, setIsCarouselLoading] = useState(false);
  const [carouselSlides, setCarouselSlides] = useState([]);
  const [about, setAbout] = useState({});
  const [isAboutLoading, setIsAboutLoading] = useState(false);
  const [contact, setContact] = useState({});
  const [isContactLoading, setIsContactLoading] = useState(false);
  const [navbar, setNavbar] = useState({});
  const [isNavbarLoading, setIsNavbarLoading] = useState(false);
  const [underConstruction, setUnderConstruction] = useState({});
  const [isUnderConstructionLoading, setIsUnderConstructionLoading] = useState(false);
  const [theGang, setTheGang] = useState([]);
  const [isTheGangLoading, setIsTheGangLoading] = useState(false);
  const [newsPosts, setNewsPosts] = useState([]);
  const [isNewsPostsLoading, setIsNewsPostsLoading] = useState(false);

  const saveCarouselData = useCallback((carouselData) => {
    const extractedCarouselData = extractCarouselData(carouselData);
    setCarouselSlides(extractedCarouselData);
  }, []);

  const getCarouselSlides = useCallback(async () => {
    setIsCarouselLoading(true);
    try {
      const response = await client.getEntries({
        content_type: 'homepageCarousel',
      });
      const responseData = response.items;

      if (responseData) {
        saveCarouselData(responseData);
      } else {
        setCarouselSlides([]);
      }
      setIsCarouselLoading(false);
    } catch (error) {
      console.error(error);
      setIsCarouselLoading(false);
    }
  }, [saveCarouselData]);

  useEffect(() => {
    getCarouselSlides();
  }, [getCarouselSlides]);

  const saveAboutData = useCallback((aboutData) => {
    const extractedAboutData = extractAboutData(aboutData);
    setAbout(extractedAboutData);
  }, []);

  const getAbout = useCallback(async () => {
    setIsAboutLoading(true);

    try {
      const response = await client.getEntry('602KUf13tbtYPvq8dwkcOo');

      if (response) {
        saveAboutData(response);
      } else {
        setAbout({});
      }
      setIsAboutLoading(false);
    } catch (error) {
      console.error(error);
      setIsAboutLoading(false);
    }
  }, [saveAboutData]);

  useEffect(() => {
    getAbout();
  }, [getAbout]);

  const saveContactData = useCallback((contactData) => {
    const extractedContactData = extractContactData(contactData);
    setContact(extractedContactData);
  }, []);

  const getContact = useCallback(async () => {
    setIsContactLoading(true);

    try {
      const response = await client.getEntry('1Sf2q4ypdfNYF3fqAPcf4y');

      if (response) {
        saveContactData(response);
      } else {
        setContact({});
      }
      setIsContactLoading(false);
    } catch (error) {
      console.error(error);
      setIsContactLoading(false);
    }
  }, [saveContactData]);

  useEffect(() => {
    getContact();
  }, [getContact]);

  const saveNavbarData = useCallback((navbarData) => {
    const extractedNavbarData = extractNavbarData(navbarData);
    setNavbar(extractedNavbarData);
  }, []);

  const getNavbar = useCallback(async () => {
    setIsNavbarLoading(true);

    try {
      const response = await client.getEntry('1gxLcXmajwyd4djRqFx1OL');

      if (response) {
        saveNavbarData(response);
      } else {
        setNavbar({});
      }
      setIsNavbarLoading(false);
    } catch (error) {
      console.error(error);
      setIsNavbarLoading(false);
    }
  }, [saveNavbarData]);

  useEffect(() => {
    getNavbar();
  }, [getNavbar]);

  const saveUnderConstructionData = useCallback((underConstructionData) => {
    const extractedConstructionData = extractUnderConstructionData(underConstructionData);
    setUnderConstruction(extractedConstructionData);
  }, []);

  const getUnderConstruction = useCallback(async () => {
    setIsUnderConstructionLoading(true);

    try {
      const response = await client.getEntry('4EAhzDVCXu0hdYluOwISZs');

      if (response) {
        saveUnderConstructionData(response);
      } else {
        setUnderConstruction({});
      }
      setIsUnderConstructionLoading(false);
    } catch (error) {
      console.error(error);
      setIsUnderConstructionLoading(false);
    }
  }, [saveUnderConstructionData]);

  useEffect(() => {
    getUnderConstruction();
  }, [getUnderConstruction]);

  const getTheGang = useCallback(async () => {
    setIsTheGangLoading(true);

    try {
      const response = await client.getEntries({
        content_type: 'collectiveMemberPage',
      });

      if (response) {
        const extractedGangData = extractTheGangData(response);
        setTheGang(extractedGangData);
      } else {
        setTheGang([]);
      }
      setIsTheGangLoading(false);
    } catch (error) {
      console.error(error);
      setIsTheGangLoading(false);
    }
  }, []);

  useEffect(() => {
    getTheGang();
  }, [getTheGang]);

  const getAllNewsPosts = useCallback(async () => {
    setIsNewsPostsLoading(true);

    try {
      const response = await client.getEntries({
        content_type: 'blogPage',
      });

      if (response) {
        const extractedNewsPostsData = extractAllNewsPostsData(response);

        setNewsPosts(extractedNewsPostsData);
      } else {
        setNewsPosts([]);
      }
      setIsNewsPostsLoading(false);
    } catch (error) {
      console.error(error);
      setIsNewsPostsLoading(false);
    }
  }, []);

  useEffect(() => {
    getAllNewsPosts();
  }, [getAllNewsPosts]);

  const contextData = {
    carouselSlides,
    isCarouselLoading,
    about,
    isAboutLoading,
    contact,
    isContactLoading,
    navbar,
    isNavbarLoading,
    underConstruction,
    isUnderConstructionLoading,
    theGang,
    isTheGangLoading,
    newsPosts,
    isNewsPostsLoading,
  };

  const { children } = props;

  return (
    <Context.Provider value={contextData}>
      {children}
    </Context.Provider>
  );
}
