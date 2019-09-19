import React, { useContext } from 'react'
import CollectionsContext from '../../contexts/collections/collections.context'
import PreviewCollection from '../preview-collection/preview-collection.component'

import './collections-overview.styles.scss'

const CollectionsOverview = () => {
  const collectionsMap = useContext(CollectionsContext)
  const collections = Object.keys(collectionsMap).map(
    key => collectionsMap[key]
  )

  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

export default CollectionsOverview
