import React from 'react'

import './article.css'

const Article = ({ imgUrl, date, title }) => {
	return (
		<div className="gpt3__blog-container_article">
			<div className="gpt3__blog-container_article-image">
				<img src={imgUrl} alt="About the blog" />
			</div>
			<div className="gpt3__blog-container_article-content">
				<div>
					<p>{date}</p>
					<h3>{title}</h3>
				</div>
				<a href="#">Read full article >></a>
			</div>
		</div>
	)
}

export default Article