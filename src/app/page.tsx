import Image from 'next/image'
import {Hero} from './components/Hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24">
      <Hero />
      <div className='h-96'>hola</div>
    </main>
  )
}
