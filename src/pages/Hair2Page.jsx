import ProductPage from '../components/ProductPage'
import { data } from './HairPage'
import hairBefore from '/assets/hair-result-before.webp'
import hairAfter from '/assets/hair-result-after.webp'

export default function Hair2Page() {
  return (
    <ProductPage
      {...data}
      rating={4.8}
      reviewCount="3,200+"
      beforeImage={hairBefore}
      afterImage={hairAfter}
      checkoutAmount={100}
    />
  )
}
