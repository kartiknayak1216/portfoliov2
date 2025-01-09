import React, { ReactNode } from 'react'

export default function layout({ children }: { children: ReactNode }) {
    return (
        <div className='flex flex-col container relative'>{children}</div>
    )
}
