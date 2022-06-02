import React from 'react'
import { useRouter } from 'next/router'
import { useAddress } from '@thirdweb-dev/react'

const Banner = () => {
  const router = useRouter()
  const address = useAddress()

  function browse() {
    if(address) {
      router.push('/marketplace')
    } else {
      alert('Please connect your metamask wallet!!!');
    }
  }
  
  function create() {
    if(address) {
      router.push('/create')
    } else {
      alert('Please connect your metamask wallet!!!');
    }
  }

  return (
    <div className="banner py-24 text-center ">
        <div className='text-5xl tracking-wider text-white font-semibold w-[40%] mx-auto mb-6'>
        All Chains, all NFTs, one platform
        </div>
        <div className='space-x-5 '>
            <button className='text-white bg-blue-600 py-1.5 px-10 font-medium tracking-wide rounded-md' onClick={browse}>
                BROWSE
            </button>
            <button className='bg-white text-blue-600 py-1.5 px-10 font-medium tracking-wide rounded-md' onClick={create}>
                CREATE
            </button>
        </div>
    </div>
  )
}

export default Banner