import Image from 'next/image'
import Sidebar from '@/components/sidebar/sidebar'
import Main from '@/components/main/main'

export default function Home() {
  return (
    <div className="flex gap-3 bg-black h-full">
      <Sidebar/>
      <Main/>
    </div>
  )
}
