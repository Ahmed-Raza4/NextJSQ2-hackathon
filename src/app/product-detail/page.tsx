import React from 'react';
import Image from 'next/image';

const ProductCard: React.FC = () => {
  return (
    <div className="flex bg-white p-5 rounded-lg shadow-md max-w-6xl mx-auto">
      <div className="">
        <Image
          src="/product-detail.png"
          alt="Nike Air Force 1"
          width={653}
          height={653}
          className="rounded-lg"
        />
      </div>
      <div className="flex-1 pl-5 flex flex-col justify-center">
        <h2 className="font-poppins text-4xl font-medium text-gray-900">
          Nike Air Force 1 PLT.AF.ORM
        </h2>
        <p className="font-poppins text-sm text-gray-900 my-2 leading-7">
          Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
        </p>
        <div className="flex items-center mt-5">
          <span className="font-poppins text-3xl font-medium text-gray-900 mr-5">
            ₹ 8695.00
          </span>

          <button type='button' className="bg-gray-900 text-white py-2 px-5 rounded-full flex items-center snipcart-add-item" 
          data-item-id="123"
          data-item-price="8695"
          data-item-image={"product-detail.png"}
          data-item-name="Nike Air Force 1 PLT.AF.ORM"
          data-item-description="Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette."
          data-item-url="/product-detail">
            <Image
              src="/Buy-Cart.png"
              alt="Cart Icon"
              width={29}
              height={29}
            />
            <span className="ml-2">Add To Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
