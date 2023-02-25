import React, { useState, useEffect } from "react";
import qs from "qs";
import Card from "components/card";
import { fetchAPI, getStrapiURL } from "../lib/api";


export default function Home() {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  async function initArticles() {
    const queryString = qs.stringify({});
    const requestUrl = `${getStrapiURL(
      `/api/articles${queryString ? `?${queryString}` : ""}`
    )}`;
    await fetch(requestUrl)
        .then(response => response.json())
        .then(response => {
            setArticles(response.data);
            console.log(response.data);
        })
        .catch(err => console.error(err));
  }
  useEffect(() => {
    initArticles();
    if(articles) {
      setLoading(true);
    }
  }, []);
  return (
    <div>
      {loading}
      {!loading ?? articles.map((article) => {
            return (
              <Card
                article={article}
                key={`article_${article.attributes.slug}`}
              />
            );
          })}
          caca
    </div>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles] = await Promise.all([
    fetchAPI("/articles"),
  ]);

  console.log('stella', articles.data);

  return {
    props: { articles },
    revalidate: 1,
  };
}