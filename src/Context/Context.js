import React, { useState, useEffect, useCallback } from 'react';
import { client } from './Client';
import { cleanUpCarouselSlides, cleanUpAbout, cleanUpContact } from './Helpers';

export const Context = React.createContext();

export const Provider = (props) => {
    const [isCarouselLoading, setIsCarouselLoading] = useState(false);
    const [carouselSlides, setCarouselSlides] = useState([]);
    const [about, setAbout] = useState({});
    const [isAboutLoading, setIsAboutLoading] = useState(false);
    const [contact, setContact] = useState({});
    const [isContactLoading, setIsContactLoading] = useState(false);

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



    const contextData = {
        carouselSlides,
        isCarouselLoading,
        about,
        isAboutLoading,
        contact,
        isContactLoading,
    }

    return (
        <Context.Provider value={contextData}>
            {props.children}
        </Context.Provider>
    )
}
