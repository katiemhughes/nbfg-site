import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
import Loader from '../Loader/Loader';
import NotFound from '../NotFound/NotFound';

function NewsList() {
  const { newsPosts, isNewsPostsLoading } = useContext(Context);
  console.log('newsPosts', newsPosts);

  if (isNewsPostsLoading) {
    return <Loader />;
  }

  if (!newsPosts) {
    return <NotFound />;
  }

  return (
    <div className="news-list" id="id">
      <h1>What&apos;s the latest from Not Bad for a Girl?</h1>
      {newsPosts.map((post) => (
        <section className="news-list__article" key={post.slug}>
          <header>
            <img className="news-list__image" src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <p>
              By
              {' '}
              {post.author}
            </p>
            <p>{post.createdDate}</p>
          </header>
          <div>
            <p>{post.summary}</p>
            <Link
              type="button"
              className="news-list__button"
              to={`/${post.slug}`}
            >
              Read more
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
}

export default NewsList;
