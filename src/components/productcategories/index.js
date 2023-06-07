import React from 'react'

const Categories = () => {
  return (
    <>
 {/* div for check list */}

 <div class="space-y-2 bg-white px-4 py-10 w-[280px] ml-8 mb-7  border border-gray-300">
        <div>
        <h1 className="mb-5">Product categories</h1>
        </div>
        
  <label class="flex items-center">
    <input type="checkbox" class="form-checkbox text-gray-500" />
    <span class="ml-2 hover:underline hover:text-black ">Air Conditioner</span>
  </label>
  <label class="flex items-center">
    <input type="checkbox" class="form-checkbox text-gray-500" />
    <span class="ml-2 hover:underline hover:text-black  ">Computer &amp; Gaming</span>
  </label>
  <label class="flex items-center">
    <input type="checkbox" class="form-checkbox text-gray-500" />
    <span class="ml-2 hover:underline hover:text-black ">Home Appliances</span>
  </label>
  <label class="flex items-center">
    <input type="checkbox" class="form-checkbox text-gray-500" />
    <span class="ml-2 hover:underline hover:text-black  ">Laptops</span>
  </label>
  <label class="flex items-center">
    <input type="checkbox" class="form-checkbox text-gray-500" />
    <span class="ml-2 hover:underline hover:text-black  ">Mobiles</span>
  </label>
  <label class="flex items-center">
    <input type="checkbox" class="form-checkbox text-gray-500" />
    <span class="ml-2 hover:underline hover:text-black  ">Tablets</span>
  </label>
  <label class="flex items-center">
    <input type="checkbox" class="form-checkbox text-gray-500" />
    <span class="ml-2 hover:underline hover:text-black  ">Televisions</span>
  </label>
  <label class="flex items-center">
    <input type="checkbox" class="form-checkbox text-gray-500" />
    <span class="ml-2 hover:underline hover:text-black ">Uncategorized</span>
  </label>
  <label class="flex items-center">
    <input type="checkbox" class="form-checkbox text-gray-500" />
    <span class="ml-2 hover:underline hover:text-black ">Washing Machine</span>
  </label>
</div>

      
      {/* check list div closed */}

    
    </>
  )
}

export default  Categories 
