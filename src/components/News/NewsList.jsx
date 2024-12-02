import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
import Loader from '../Loader/Loader';
import NotFound from '../NotFound/NotFound';

function NewsList() {
  const { newsPosts, isNewsPostsLoading } = useContext(Context);

  if (isNewsPostsLoading) {
    return <Loader />;
  }

  if (!newsPosts) {
    return <NotFound />;
  }

  return (
    <div className="news-list" id="id">
      <h1 className="news-list__heading">What&apos;s the latest from NOT BAD FOR A GIRL?</h1>
      {newsPosts.map((post) => (
        <div key={post.id}>
          <hr className="news-list__divider" />
          <section className="news-list__article">
            <Link
              type="button"
              className="news-list__button"
              to={`/news/articles/${post.slug}`}
            >
              <p className="news-list__date">{post.createdDate.split('-').reverse().join('/')}</p>
              <div className="news-list__content">
                <div className="news-list__header">
                  <h2 className="news-list__title">{post.title}</h2>
                  <p className="news-list__author">
                    By
                    {' '}
                    {post.author}
                  </p>
                </div>
                <p className="news-list__summary">{post.summary}</p>
              </div>
              <div className="news-list__image-container">
                <img className="news-list__image" src={post.image} alt={post.title} />
              </div>
            </Link>
          </section>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
