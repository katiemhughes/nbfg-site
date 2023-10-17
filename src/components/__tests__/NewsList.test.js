import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Context } from '../../Context/Context';
import NewsList from '../News/NewsList';
import { BrowserRouter } from 'react-router-dom';

describe('NewsList component', () => {
    const mockContext = {
        newsPosts: [
          {
            slug: 'test-post-1',
            title: 'Test Post 1',
            content: 'This is a test post.',
            date: '2022-01-01',
          },
          {
            slug: 'test-post-2',
            title: 'Test Post 2',
            content: 'This is another test post.',
            date: '2022-01-02',
          },
        ],
        isNewsPostsLoading: false,
      };

    it('should render without errors', () => {
        render(
            <Context.Provider value={mockContext}>
                <BrowserRouter>
                    <NewsList />
                </BrowserRouter>
            </Context.Provider>
        );
        const newsListElement = screen.getByRole('heading', { name: /the latest/i });
        expect(newsListElement).toBeInTheDocument();
    });

    it('should display the correct number of news articles', () => {
        render(
          <Context.Provider value={mockContext}>
            <BrowserRouter>
                <NewsList />
            </BrowserRouter>
          </Context.Provider>
        );
        const articleElements = screen.getAllByRole('img');
        expect(articleElements.length).toBe(mockContext.newsPosts.length);
      });


});