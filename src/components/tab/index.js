const Tab = () => {
  return (
    <>
      <div class="lg:w-1/2 w-full flex lg:justify-end   mt-5">
        <nav class="grid grid-cols-3 mx-auto  lg:flex   lg:flex-row flex:col text-center px-1 leading-[30px] ">
          <a
            href="#"
            class=" lg:px-4  text-black hover:text-red-500 hover:border-b-2 hover:border-red-500"
          >
            Mobile Phones
          </a>
          <a
            href="#"
            class=" lg:px-4  text-black hover:text-red-500 hover:border-b-2 hover:border-red-500"
          >
            Laptops
          </a>
          <a
            href="#"
            class=" lg:px-4  text-black hover:text-red-500 hover:border-b-2 hover:border-red-500"
          >
            Tablets
          </a>

          <a
            href="#"
            class=" lg:px-4    text-black hover:text-red-500 hover:border-b-2 hover:border-red-500"
          >
            Televisions
          </a>
          <a
            href="#"
            class=" lg:px-4 col-span-2    text-black hover:text-red-500 hover:border-b-2 hover:border-red-500"
          >
            Washing machine
          </a>
        </nav>
      </div>
    </>
  );
};

export default Tab;
