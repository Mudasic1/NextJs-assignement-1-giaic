'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
    <h1>Something went wrong</h1>
    </div>
  )
}