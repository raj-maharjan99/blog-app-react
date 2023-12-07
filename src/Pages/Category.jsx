import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Category() {
  let { cat } = useParams();

  const [post, setPost] = useState([]);
  console.log(post);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?category=${cat}&apiKey=c05a527e341c44b288beab6d23922b49`
    )
      .then((response) => response.json())
      .then((data) => setPost(data.articles));
  }, []);

  return (
    <>
      <div className="container py-3">
        <h2 className="text-uppercase">{cat}</h2>
        <div className="row">
          {post.map((a, index) => (
            <div className="col-4 py-2 " key={index}>
              <div className="shadow px-2 py-3">
                <img className="w-100" src={a.urlToImage} alt="" />
                <h4 className="py-2">{a.title}</h4>
                <p>{a.publishedAt}</p>

                <Link
                  className="btn btn-danger"
                  to={`/category/${encodeURIComponent(a.title)}`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;
