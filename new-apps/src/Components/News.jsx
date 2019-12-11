import React from 'react';
import New from './New';
import withLoader from '../HOC/withLoader';
const News = ({news}) => {
    return (
        <div className="row">
            {
               news.map(article =>
                 <New
                 key={article.url}
                 article={article}
               />
               )
            }
        </div>
    );
};

export default withLoader(News,'news');