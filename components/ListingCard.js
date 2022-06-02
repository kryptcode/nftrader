import React from 'react'

const ListingCard = ({ listing }) => {
  return (
    <div className='w-full rounded-md shadow-md hover:shadow-2xl cursor-pointer transition-all duration-200'>
        <div>
            <img src={listing.asset.image} className='w-full rounded-t-md mb-4' alt="" />
        </div>
        <div className='p-2'>
          <p className='text-lg font-medium mb-4'>
            {listing.asset.name}
          </p>
          <p className='flex space-x-2 items-center font-semibold'>
          <img src="https://raw.githubusercontent.com/kryptcode/opensea-semibuild/fe2fbfe9a49afebc5536ca3b03b8f02224cb0771/public/weth-logo.svg" className='h-6' alt="" />
          <span>
          {listing.buyoutCurrencyValuePerToken.displayValue} ETH
          </span>
          </p>
        </div>
    </div>
  )
}

export default ListingCard