import React from 'react'
import Article from '../../components/article/Article'
import {blog01,blog02,blog03,blog04,blog05} from './imports'
import './Blog.css'

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening. We are bloogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container__groupA">
          <Article imgURL={blog01} date="Sep 26, 2023" title="GPT-3 and OpenAI is the future. Let us explore how it is?"/>
        </div>
        <div className="gpt3__blog-container__groupB">
          <Article imgURL={blog02} date="Sep 26, 2023" title="GPT-3 and OpenAI is the future. Let us explore how it is?"/>
          <Article imgURL={blog03} date="Sep 26, 2023" title="GPT-3 and OpenAI is the future. Let us explore how it is?"/>
          <Article imgURL={blog04} date="Sep 26, 2023" title="GPT-3 and OpenAI is the future. Let us explore how it is?"/>
          <Article imgURL={blog05} date="Sep 26, 2023" title="GPT-3 and OpenAI is the future. Let us explore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog