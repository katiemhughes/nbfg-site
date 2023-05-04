import React, { useState, useEffect, useCallback } from 'react';
import { client } from './Client';
import { cleanUpCarouselSlides, cleanUpAbout, cleanUpContact, cleanUpNavbar, cleanUpMobileCarouselSlides } from './Helpers';

export const Context = React.createContext();

export const Provider = (props) => {
    const [isCarouselLoading, setIsCarouselLoading] = useState(false);
    const [carouselSlides, setCarouselSlides] = useState([]);
    const [isMobileCarouselLoading, setIsMobileCarouselLoading] = useState(false);
    const [mobileCarouselSlides, setMobileCarouselSlides] = useState([]);
    const [about, setAbout] = useState({});
    const [isAboutLoading, setIsAboutLoading] = useState(false);
    const [contact, setContact] = useState({});
    const [isContactLoading, setIsContactLoading] = useState(false);
    const [navbar, setNavbar] = useState({});
    const [isNavbarLoading, setIsNavbarLoading] = useState(false);

    const saveCarouselData = useCallback((carouselData) => {
        const cleanCarouselData = cleanUpCarouselSlides(carouselData);
        setCarouselSlides(cleanCarouselData)
    }, []);

    const getCarouselSlides = useCallback(async () => {
        setIsCarouselLoading(true);
        try {
            const response = await client.getEntries({ content_type: 'homepageCarousel' });
            console.log('response', response);
            const responseData = response.items;
            console.log('responseData', responseData);
            if (responseData) {
                saveCarouselData(responseData);
            } else {
                setCarouselSlides([]);
            }
            setIsCarouselLoading(false);
        } catch (error) {
            console.log(error);
            setIsCarouselLoading(false);
        }
    }, [saveCarouselData]);

    useEffect(() => {
        getCarouselSlides();
    }, [getCarouselSlides]);

    const saveAboutData = useCallback((aboutData) => {
        const cleanAboutData = cleanUpAbout(aboutData);
        setAbout(cleanAboutData);
    }, []);

    const getAbout = useCallback(async () => {
        setIsAboutLoading(true);

        try {
            const response = await client.getEntry('602KUf13tbtYPvq8dwkcOo');
            console.log('response', response);
            if (response) {
                saveAboutData(response);
            } else {
                setAbout({});
            }
            setIsAboutLoading(false);
        } catch (error) {
            console.log(error);
            setIsAboutLoading(false);
        }
    }, [saveAboutData]);

    useEffect(() => {
        getAbout();
    }, [getAbout]);

    const saveContactData = useCallback((contactData) => {
        const cleanContactData = cleanUpContact(contactData);
        setContact(cleanContactData);
    }, []);

    const getContact = useCallback(async () => {
        setIsContactLoading(true);

        try {
            const response = await client.getEntry('1Sf2q4ypdfNYF3fqAPcf4y');
            console.log('response', response);
            if (response) {
                saveContactData(response);
            } else {
                setContact({});
            }
            setIsContactLoading(false);
        } catch (error) {
            console.log(error);
            setIsContactLoading(false);
        }
    }, [saveContactData]);

    useEffect(() => {
        getContact();
    }, [getContact]);

    const saveNavbarData = useCallback((navbarData) => {
        const cleanNavbarData = cleanUpNavbar(navbarData);
        setNavbar(cleanNavbarData);
    }, []);

    const getNavbar = useCallback(async () => {
        setIsNavbarLoading(true);

        try {
            const response = await client.getEntry('1gxLcXmajwyd4djRqFx1OL');
            console.log('response', response);
            if (response) {
                saveNavbarData(response);
            } else {
                setNavbar({});
            }
            setIsNavbarLoading(false);
        } catch (error) {
            console.log(error);
            setIsNavbarLoading(false);
        }
    }, [saveNavbarData]);

    useEffect(() => {
        getNavbar();
    }, [getNavbar]);

    const saveMobileCarouselData = useCallback((mobileCarouselData) => {
        const cleanMobileCarouselData = cleanUpMobileCarouselSlides(mobileCarouselData);
        setMobileCarouselSlides(cleanMobileCarouselData)
    }, []);

    const getMobileCarouselSlides = useCallback(async () => {
        setIsMobileCarouselLoading(true);
        try {
            const response = await client.getEntries({ content_type: 'homepageCarouselMobile' });
            console.log('response', response);
            const responseData = response.items;
            console.log('responseData', responseData);
            if (responseData) {
                saveMobileCarouselData(responseData);
            } else {
                setMobileCarouselSlides([]);
            }
            setIsMobileCarouselLoading(false);
        } catch (error) {
            console.log(error);
            setIsMobileCarouselLoading(false);
        }
    }, [saveMobileCarouselData]);

    useEffect(() => {
        getMobileCarouselSlides();
    }, [getMobileCarouselSlides]);


    const contextData = {
        carouselSlides,
        mobileCarouselSlides,
        isCarouselLoading,
        isMobileCarouselLoading,
        about,
        isAboutLoading,
        contact,
        isContactLoading,
        navbar,
        isNavbarLoading,
    }

    return (
        <Context.Provider value={contextData}>
            {props.children}
        </Context.Provider>
    )
}
