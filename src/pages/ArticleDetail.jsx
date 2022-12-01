import React from "react";
import ArticleDetails from "../components/ArticleDetails";
import { Link } from "react-router-dom";

function ArticleDetail() {
  return (
    <div>
      <ArticleDetails />
      <Link to="/edit-article/:id">
        <p> Edit</p>
        uhhuh
      </Link>
    </div>
  );
}

export default ArticleDetail;
