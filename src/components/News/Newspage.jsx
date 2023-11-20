import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Context } from '../../Context/Context';
import Loader from '../Loader/Loader';
import NotFound from '../NotFound/NotFound';

function Newspage() {
  const { newsArticle: newsArticleUrlParam } = useParams();
  // console.log('newsArticleUrlParam', newsArticleUrlParam);
  const { newsPosts, isNewsPostsLoading } = useContext(Context);
  // console.log('newsPosts', newsPosts);
  const [newsArticle, setNewsArticle] = useState({});
  const scroll = Scroll.animateScroll;

  useEffect(() => {
    const matchedArticle = newsPosts.find((post) => post.slug === newsArticleUrlParam);
    // console.log('matchedArticle', matchedArticle);
    setNewsArticle(matchedArticle);
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
    postContent,
  } = newsArticle;

  const handleClick = () => {
    scroll.scrollToTop({
      duration: 200,
      delay: 0,
      smooth: true,
      offset: 0,
    });
  };

  // console.log('image', image);
  // console.log('title', title);
  // console.log('slug', slug);
  // console.log('author', author);
  // console.log('createdDate', createdDate);

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
            <img className="newspage__image" src={image} alt={title} />
          </div>
        </header>
        <div className="newspage__content">
          <p className="newspage__copy">{postContent}</p>
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
