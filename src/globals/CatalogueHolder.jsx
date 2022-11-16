import React from 'react'
import Navigation from '../staff/Navigation'
import Catalogue from './Catalogue'
function CatalogueHolder() {
  return (
    <div>
        <Navigation />
        <div className="container">
            <Catalogue />
        </div>

    </div>
  )
}

export default CatalogueHolder