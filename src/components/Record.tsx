import { FC } from 'react'
import { Card, Title, Text } from '@tremor/react';

interface RecordProps {}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

function createUsers() {
    const users: User = {
        id: 1,
        name: 'Steve Thomas',
        username: "Rudy",
        email: 'adm'
    }
    return users
}

const Record: FC<RecordProps> = ({}) => {
    const temp: User = createUsers()

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl bg-stone-100">
        <Title>Users</Title>
        <Text>
            A list of users retrieved from the database
        </Text>
        <Card className='mt-6'>
            <div className='flex w-full flex-row justify-center bg-stone-50 rounded-lg border-solid shadow-xl'>
                <div className='p-2 w-40 font-bold text-lg'>Id</div>
                <div className='p-2 w-60 font-bold text-lg'>Name</div>
                <div className='p-2 w-60 font-bold text-lg'>Username</div>
                <div className='p-2 w-60 font-bold text-lg'>Email</div>
            </div>
            <div>
                Hi
            </div>
        </Card>
    </main>
  )
}

export default Record