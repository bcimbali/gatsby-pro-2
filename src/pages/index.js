import Layout from '../components/layout'
import Listing from '../components/listing';
import React from 'react'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <Listing />
  </Layout>
)

export default IndexPage
