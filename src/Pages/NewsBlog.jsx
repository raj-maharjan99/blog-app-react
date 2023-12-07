import React, { useEffect, useState } from "react";

function NewsBlog(props) {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(
      // `https://newsapi.org/v2/top-headlines?category=${props.title}&apiKey=f10caf484dd1491f8882376a02d929f6`
      `https://newsapi.org/v2/top-headlines?category=${props.title}&apiKey=c05a527e341c44b288beab6d23922b49`
    )
      .then((response) => response.json())
      .then((data) => setPost(data.articles))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <section className="border py5 my-4">
        <div className="container">
          <h4 className="text-uppercase">{props.title}</h4>
          <div className="row">
            {post.map((a, index) => (
              <div className="col-4 py-2 " key={index}>
                <div className="shadow px-3 py-3">
                  <img className="w-100" src={a.urlToImage} alt="" />
                  <h4 className="py-2">{a.title}</h4>

                  <p>{a.publishedAt}</p>
                  <button className="btn btn-danger">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsBlog;
