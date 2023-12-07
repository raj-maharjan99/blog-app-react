import React from "react";
import NewsBlog from "./NewsBlog";

function Home() {
  return (
    <>
      <div className="container">
        <NewsBlog title="business" />
        <NewsBlog title="entertainment" />
        <NewsBlog title="general" />
        <NewsBlog title="health" />
        <NewsBlog title="science" />
        <NewsBlog title="sports" />
        <NewsBlog title="technology" />
      </div>
    </>
  );
}

export default Home;
