import Products from '@/components/products'
import React, { Suspense } from 'react'

const AllProducts = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
                <Products/>
        </Suspense>
  )
}

export default AllProducts