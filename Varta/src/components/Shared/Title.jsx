import React from 'react'
import {Helmet} from 'react-helmet-async'

function Title({title='Varta', description = 'This is the chatApp Varta'}) {
  return (
    <Helmet>
        <title>{title}</title>
        <link rel="icon" type="image/svg+xml" href="/finaltitle.png" />
        <meta name='description' content={description} />
    </Helmet>
  )
}

export default Title