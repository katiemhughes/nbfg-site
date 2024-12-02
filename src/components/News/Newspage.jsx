/* eslint-disable react/no-danger */
import React, {
  useContext, useEffect, useState,
} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Context } from '../../Context/Context';
import Loader from '../Loader/Loader';
import NotFound from '../NotFound/NotFound';

function Newspage() {
  const { newsArticle: newsArticleUrlParam } = useParams();
  const { newsPosts, isNewsPostsLoading } = useContext(Context);
  const [newsArticle, setNewsArticle] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const matchedArticle = newsPosts.find((post) => post.slug === newsArticleUrlParam);
    setNewsArticle(matchedArticle);

    window.scrollTo(0, 0);
  }, [newsPosts, newsArticleUrlParam]);

  if (isNewsPostsLoading) {
    return <Loader />;
  }

  if (!newsPosts || !newsArticle) {
    return <NotFound />;
  }

  const {
    image,
    title,
    slug,
    author,
    createdDate,
    content,
    soundcloudEmbed,
  } = newsArticle;

  const soundcloudEmbedString = soundcloudEmbed ? soundcloudEmbed.content[0]?.content[0]?.value : '';

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/news', { replace: true });
  };

  return (
    <div className="newspage" id={slug}>
      <section className="newspage__article" key={slug}>
        <header>
          <h2 className="newspage__heading">{title}</h2>
          <p className="newspage__author">
            By
            {' '}
            {author}
          </p>
          <p className="newspage__date">{createdDate ? createdDate.split('-').reverse().join('/') : ''}</p>
          <div className="newspage__image-container">
            <img className="newspage__image" src={image} alt={title} loading="lazy" />
          </div>
        </header>
        <div className="newspage__content">
          <div className="newspage__copy" dangerouslySetInnerHTML={{ __html: content }} />
          {soundcloudEmbed ? (
            <div className="meet__embed" dangerouslySetInnerHTML={{ __html: soundcloudEmbedString }} />
          ) : null}
          <Link
            className="newspage__cta"
            to="/news"
            onClick={handleClick}
            onKeyDown={handleClick}
          >
            Back to latest news
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Newspage;
