import React from 'react'
import { useParams } from 'react-router-dom'

import PageHeader from '../components/PageHeader/PageHeader';

import { category as cate } from '../api/tmdbApi';
import { MovieGrid } from '../components/Movie-Grid/MovieGrid';

export default function Catalog() {
  const {category} = useParams();

  return (
    <>
      <PageHeader>
        {category === cate.movie ? 'Movies' : 'TV Series'}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category}/>
        </div>
      </div>
    </>
  )
}
