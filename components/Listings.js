import { useMarketplace } from "@thirdweb-dev/react";

import { useState, useEffect } from 'react'
import ListingCard from "./ListingCard";

const Listings = () => {
  const [listings, setListings] = useState([])
  const marketplace = useMarketplace('0x937ee9cD5D230c8f91f2938c5c672111e591068d')


  
  async function getListings() {
    const list = await marketplace.getActiveListings()

    setListings(list)
  }

  getListings()




    


  return (
    <div className="my-10  w-[90%] md:w-[80%] mx-auto">
        {
          listings.length > 0 ? (
            <div className='flex flex-col md:flex-row justify-between items-start space-y-5 md:space-y-0 space-x-0 md:space-x-8 py-6'>
              {
                listings?.slice(0,4)?.map((listing, index) => (
                  <ListingCard key={index} listing={listing} />
                ))
                
              }
            </div>
          ): 
          (
            <div>
              loading...
            </div>
          )
        }
    </div>
  )
}

export default Listings
