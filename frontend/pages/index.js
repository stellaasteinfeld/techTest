import React, { useState, useEffect } from "react";
import Card from "components/card";
import {Grid, Container} from '@mui/material';
import { getStrapiURL } from "../lib/api";


export default function Home() {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);

  async function initArticles() {
    const requestUrl = `${getStrapiURL(
      `/api/articles?populate=*`
    )}`;
    await fetch(requestUrl)
        .then(response => response.json())
        .then(response => {
            setArticles(response.data);
            if(response.data) {
              setLoading(false);
            }
        })
        .catch(err => console.error(err));
  }
  useEffect(() => {
    initArticles();
  }, []);
  return (
    <div>
      <Container fixed>
        <h1>Tech Challenge</h1>
        <h4>Stella Steinfeld 2023</h4>
        <Grid container spacing={3}>
        {!loading ? articles.map((article) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={article.id}>
              <Card
              article={article}
              key={`article_${article.attributes.slug}`}
            />
          </Grid>
          );}) : 'Loading'}
          </Grid>
        </Container>
    </div>
  );
}