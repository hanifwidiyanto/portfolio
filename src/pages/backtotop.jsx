import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { TbArrowTopCircle } from 'react-icons/tb'


export default function BackToTop() {
    const [isBottom, setIsBottom] = useState(false)
 
    useEffect(() => {
        const checkScroll = (e) => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            const offset = 100;

            if (windowHeight + scrollTop > documentHeight - offset) {
                setIsBottom(true);
              } else {
                setIsBottom(false);
              }

        }
        document.addEventListener('scroll', checkScroll)
        return () => {
            document.removeEventListener('scroll', checkScroll)
        }
    }, [])
    return (
        <div className='my-48 flex items-center flex-col gap-6 w-full'>
            <Link href="#top" className={`p-4  w-fit rounded-full bg-gelap text-terang duration-700 ${isBottom ? 'rotate-0':'-rotate-180'}`}>
                <TbArrowTopCircle className="text-4xl" />
            </Link>
            <div className={`font-rubik font-bold text-4xl duration-500 ${isBottom ? 'opacity-100':'opacity-0'}`}>BACK TO TOP</div>
        </div>
    )
}
