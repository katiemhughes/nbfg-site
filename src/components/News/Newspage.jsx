import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import { Context } from '../../Context/Context';
// import Loader from '../Loader/Loader';
// import NotFound from '../NotFound/NotFound';

function Newspage() {
  const { newsArticle } = useParams();
  console.log('newsArticleUrlParam', newsArticle);
  // const { newsPosts, isNewsPostsLoading } = useContext(Context);
  // console.log('newsPosts', newsPosts);
  // const [newsArticle, setNewsArticle] = useState();

  // useEffect(() => {
  //   const matchedArticle = newsPosts.find((post) => post.slug === newsArticleUrlParam);
  //   console.log('matchedArticle', matchedArticle);
  //   setNewsArticle(matchedArticle);
  // }, [newsPosts, newsArticleUrlParam]);

  // if (isNewsPostsLoading) {
  //   return <Loader />;
  // }

  // if (!newsPosts) {
  //   return <NotFound />;
  // }

  const {
    image,
    title,
    slug,
    author,
    createdDate,
    summary,
  } = newsArticle;

  return (
    <div className="newspage" id="id">
      <Link to="/news">Back to latest news</Link>
      <section className="newspage__article" key={slug}>
        <header>
          <img className="newspage__image" src={image} alt={title} />
          <h2>{title}</h2>
          <p>
            By
            {' '}
            {author}
          </p>
          <p>{createdDate}</p>
        </header>
        <div>
          <p>{summary}</p>
        </div>
      </section>
    </div>
  );
}

export default Newspage;
