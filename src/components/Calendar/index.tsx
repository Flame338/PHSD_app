import { Dispatch, FC, SetStateAction, useState } from 'react'
import ReactCalendar from 'react-calendar'
import {add, format} from 'date-fns'
import { type DateTime } from '~/utils/types'

interface indexProps {
  date: DateType
  setDate: Dispatch<SetStateAction<DateType>>
}

interface DateType {
    justDate: Date | null
    dateTime: Date | null
}

const index: FC<indexProps> = ({ setDate, date }) => {
  

  const getTimes = () => {
    if(!date.justDate) return

    const {justDate} = date

    const beginning = add(justDate, {hours: 9}) //same here
    const end = add(justDate, {hours: 17}) //convert this to dynamic values when you figure out how to change it
    const interval = 30 //interval is gonna be the difference between beginning and end

    const times = []
    for(let i = beginning; i <= end; i = add(i, {minutes: interval})) {
        times.push(i)
    }
    return times
  }

  const times = getTimes()

  return (
    <div className='h-screen flex flex-col justify-center items-center '>
       {date.justDate ? 
       (<div className='flex gap-4'>
            {times?.map((time, i) => (
                <div key={`time-${i}`} className='rounded-sm bg-gray-100 p-2'>
                    <button type='button' onClick={() => setDate((prev) => ({...prev, dateTime: time}))}>
                        {format(time, 'kk:mm')}
                    </button>
                </div>
            ))}
       </div>) :
       ( <ReactCalendar 
        maxDate={new Date()} 
        className='REACT-CALENDAR p-2' 
        view='month'
        onClickDay={(date) => setDate((prev) => ({ ...prev, justDate: date}))}  
        />
        )}
    </div>
  )
}

export default index