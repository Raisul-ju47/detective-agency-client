import React from 'react';
import './Blogs.css';
import BlogPost from '../BlogPost/BlogPost';
import sherlock from '../../../images/sherlock.jpg';
import watson from '../../../images/watson.jpg';
import mycroft from '../../../images/mycroft.jpg';


const blogData = [
    {
        title : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Sherlock Holmes',
        authorImg : sherlock,
        date : '23 April 2019'
    },
    {
        title : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'John Watson',
        authorImg : watson,
        date : '23 April 2019'
    },
    {
        title : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Mycroft Holmes',
        authorImg : mycroft,
        date : '23 April 2019'
    },
]

const Blogs = () => {
    return (
        <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-uppercase">our blog</h5>
                    <h1>From Our Blog News</h1>
               </div>
               <div className="row row-cols-1 row-cols-md-3 g-5 mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Blogs;