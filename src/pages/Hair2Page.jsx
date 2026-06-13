import ProductPage from '../components/ProductPage'
import { data } from './HairPage'

export default function Hair2Page() {
  return <ProductPage {...data} rating={4.8} reviewCount="3,200+" />
}
