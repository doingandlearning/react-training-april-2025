import Hello from "@/components/Hello"
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push("/product")
    }, 2000)
  }, [])


  return <>
    <Hello />
    <p>Welcome home!</p>
    <Link href="/product">Product page</Link>
  </>
}