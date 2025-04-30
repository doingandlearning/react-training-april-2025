import { useEffect, useState } from "react"

interface APIResponseShape {
  name: string
}

export function useFetch(url: string) {
  const [data, setData] = useState<APIResponseShape | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const res = await fetch(url)
        if (!res.ok) {
          throw new Error(`Status: ${res.status}, ${res.statusText}`)
        }
        const json = await res.json()
        setData(json)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return { loading, error, data }
}