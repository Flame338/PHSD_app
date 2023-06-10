import Link from 'next/link'
import { FC } from 'react'
import { api } from '~/utils/api'

interface dashboardProps {}

const dashboard: FC<dashboardProps> = ({}) => {

  return (
    <div className='flex h-screen w-full items-center justify-center gap-8 font-medium'>
        <Link className='p-2 bg-gray-100 rounded-md' href = '/dashboard/users'>
            Users
        </Link>

        <Link className='p-2 bg-gray-100 rounded-md' href = '/dashboard/records'>
            Records
        </Link>
    </div>
  )
}

export default dashboard