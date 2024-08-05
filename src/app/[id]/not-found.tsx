import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col justify-between'>
      <div>Not Found</div>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}