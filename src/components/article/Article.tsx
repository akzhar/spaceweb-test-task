import React, { useState } from 'react';

import ArrowButton from '@components/arrow-button';

type TArticleProps = {
  title: string,
  body: string
};

const Article: React.FC<TArticleProps> = (props: TArticleProps) => {

  const [open, setOpen] = useState<boolean>(false);

  const onButtonClick = () => setOpen(!open);

  return (
    <article className="article">
      <div className="article__header">
        <h3>{props.title}</h3>
        <ArrowButton title="Открыть/закрыть статью" onClick={onButtonClick} isTurned={open} />
      </div>
      <p className={`article__body ${!open && 'visually-hidden'}`} dangerouslySetInnerHTML={{__html: props.body}} />
    </article>
  )
};

export default Article;
