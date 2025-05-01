import { useRouter } from "next/router"

export default function ProductPage() {
  const router = useRouter()

  return <div>
    <p>This is the page for product {router.query.productId}</p>
  </div>
}