import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import CollectionsContext from '../../contexts/collections/collections.context'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ match }) => {
  const [loading, setLoading] = useState(true)
  const [collections, setCollections] = useState(null)

  useEffect(() => {
    const collectionRef = firestore.collection('collections')

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      setCollections(collectionsMap)
      setLoading(false)
    })
  }, [collections])
  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionsContext.Provider value={collections}>
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          </CollectionsContext.Provider>
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionsContext.Provider value={collections}>
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          </CollectionsContext.Provider>
        )}
      />
    </div>
  )
}

export default ShopPage
