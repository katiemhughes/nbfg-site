import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Context } from '../../Context/Context';
import Newspage from '../News/Newspage';
import { BrowserRouter } from 'react-router-dom';

describe('Newspage component', () => {
    const mockContext = {
        newsPosts: [
          {
            image: '/images/turning4.jpg',
            title: 'Test Post 1',
            slug: 'test-post-1',
            author: 'Katie',
            createdDate: '2022-01-01',
            summary: 'Test summary blah 1',
          },
          {
            image: '/images/nbfgconverse.jpg',
            title: 'Test Post 2',
            slug: 'test-post-2',
            author: 'Moll',
            content: 'This is another test post.',
            createdDate: '2022-01-02',
            summary: 'Test summary blah 2',
          },
        ],
        isNewsPostsLoading: false,
      };

    it('should render without errors', () => {
        render(
            <Context.Provider value={mockContext}>
                <BrowserRouter>
                    <Newspage />
                </BrowserRouter>
            </Context.Provider>
        );
        const newsElement = screen.getByRole('heading', { name: /turning 4!/i });
        expect(newsElement).toBeInTheDocument();
    });


});