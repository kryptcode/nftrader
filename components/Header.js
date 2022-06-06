import { useState } from 'react'
import { useRouter } from 'next/router'
import { ChevronDownIcon, SearchIcon, XCircleIcon } from '@heroicons/react/outline'
import { useAddress, useMetamask, useDisconnect } from '@thirdweb-dev/react'

const Header = () => {
    const [dropdown, setDropdown] = useState(false)
    const router  = useRouter()
    const connectWithMetamask = useMetamask()
    const address = useAddress()
    const disconnect = useDisconnect()

  return (
    <div className='flex justify-between items-center py-3 px-3 sticky h-14 top-0 bg-white z-20'>
        <div className='uppercase text-xl font-semibold tracking-wider text-[#1c2147]' onClick={() => router.push('/')}>
            nftrader
        </div>
        <div className='hidden md:flex space-x-3 items-center border-[0.2px] border-blue-300 px-4'>
            <SearchIcon className='h-5' />
            <input 
                type="text" 
                placeholder='Search items...'
                className='px-3 py-2 outline-none  placeholder:text-semibold '  
            />
        </div>
        <div className='hidden md:flex space-x-6 text-lg text-gray-600 font-semibold'>
            <p className='cursor-pointer' onClick={() => router.push('/marketplace')}>
                Marketplace
            </p>
            <p className='cursor-pointer'>
                Swaps
            </p>
            <p className='cursor-pointer'>
                Create
            </p>
        </div>
        <div className='relative'>
            {
                address ? (
                    <div className='flex space-x-2 items-center cursor-pointer py-1.5 px-3 bg-gray-100 ' onClick={() => setDropdown(!dropdown)}>
                        <img src="./assets/pfp.svg" alt="" className='h-8' />
                        <p>
                        {address.slice(0, 10).toLowerCase()}...
                        </p>
                        <ChevronDownIcon className='h-4' />
                    </div>
                ) : (
                    <div>
                        <button className='py-1.5 px-3 bg-blue-500 rounded-lg text-white uppercase' onClick={connectWithMetamask}>
                            Connect <span className='hidden md:inline-block'>Wallet</span>
                        </button>
                    </div>
                )
            }
        </div>
        {
            dropdown && (
                <div className='absolute right-5 top-16 bg-white p-3 px-2 rounded-md'>
                    <div className={`space-x-4 items-center px-8 py-1.5 hover:bg-gray-100 cursor-pointer ${!address ? 'hidden' : 'flex'}`} onClick={disconnect}>
                        <XCircleIcon className='h-5 text-red-400' />
                        <p className='text-lg font-medium'>
                            Sign Out
                        </p>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Header