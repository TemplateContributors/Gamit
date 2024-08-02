function App() {

  return (
    <>
      <div class="w-full" dir="rtl">
        <section class="bg-[#3B5D50] xl:h-[40rem] lg:h-[59rem] sm:h-[50rem] flex flex-col items-center">
          {/* NAV::START */}
          <nav class="relative flex flex-wrap lg:flex-nowrap justify-between items-start w-3/4 p-5 ">
            <div class="h-20 text-3xl font-extrabold text-white 
                          after:content-[''] after:inline-block after:w-2 after:mr-1 after:h-2 after:rounded-full after:bg-gray-400">
              مبلمان
            </div>

            <div class="flex sm:hidden h-10 w-1/12" id="Hamburger">
              <svg class="mb-1 w-6 hover:fill-white fill-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
            </div> 
            
            <div class="w-11/12 lg:w-7/12 lg:text-lg sm:text-sm sm:w-9/12 sm:flex-row justify-around xl:w-6/12 hidden sm:flex slide-up" id="HamburgerMenu">
              <a href="#" class="text-white sm:border-b-4 duration-300 border-yellow-500">خانه</a>
              <a href="#" class="py-2 sm:py-0 relative text-gray-400 hover:text-white duration-300 group"><span class="hidden sm:flex absolute left-0 bottom-0 w-0 h-1 bg-yellow-500 group-hover:w-full duration-300"></span>درباره ما</a>
              <a href="#" class="py-2 sm:py-0 relative text-gray-400 hover:text-white duration-300 group"><span class="hidden sm:flex absolute left-0 bottom-0 w-0 h-1 bg-yellow-500 group-hover:w-full duration-300"></span>خدمات</a>
              <a href="#" class="py-2 sm:py-0 relative text-gray-400 hover:text-white duration-300 group"><span class="hidden sm:flex absolute left-0 bottom-0 w-0 h-1 bg-yellow-500 group-hover:w-full duration-300"></span>بلاگ</a>
              <a href="#" class="py-2 sm:py-0 relative text-gray-400 hover:text-white duration-300 group"><span class="hidden sm:flex absolute left-0 bottom-0 w-0 h-1 bg-yellow-500 group-hover:w-full duration-300"></span>تماس با ما</a>
              <a href="#" class="py-2 sm:py-0">
                <img src="/src/assets/img/cart.svg" alt="cart" />
              </a>
              <a href="#" class="py-2 sm:py-0">
                <img src="/src/assets/img/user.svg" alt="user" />
              </a>
            </div>
          </nav>
          {/* NAV::END */}
          <div class="mt-[-2rem] flex flex-col xl:flex-row items-center w-3/4 p-5">
            {/* RIGHT SECTION */}
            <div class="w-full xl:w-[35rem] h-[15rem] lg:h-[20rem] 2xl:h-[30rem] flex flex-col items-center justify-center">
                <p class="2xl:w-96 font-extrabold text-white 2xl:leading-[5rem] mt-10 sm:mt-0 sm:text-xl lg:text-3xl 2xl:text-6xl">زیباترین مبلمان طراحی حرفه ای</p>
                <p class="text-center xl:w-1/2 2xl:w-[22rem] mt-6 text-gray-400">طراحی بهترین مبلمان با بهترین قیمت و کیفیت سفارشی سازی آن با کمترین هزینه برای سرتاسر مردم جهان. فقط کافیست یک بار محصول ما را امتحان کنید. </p>
                <div class="flex flex-wrap sm:flex-nowrap justify-center text-lg font-extrabold mt-5 w-full">
                  <button class="text-[#2f2f2f] bg-yellow-500 hover:bg-yellow-400 rounded-full w-1/2 sm:w-28 h-12">سفارش بده!</button>
                  <button class="text-white border-gray-400 hover:border-white border-2 rounded-full sm:mt-0 mt-2 w-1/2 sm:w-28 h-12 mr-2">فروشگاه</button>
                </div>
            </div>
            {/* LEFT SECTION */}
            <div class="w-full xl:w-[50rem] flex xl:mt-0 sm:mt-[-10] mt-4">
              <img class="z-10 " src="/src/assets/img/couch.png" alt="couch" />
              <img class="hidden lg:flex z-0 w-60 h-60 mr-[-10rem] mt-8" src="/src/assets/img/dots.png" alt="dots" />
            </div>
          </div>
        </section>
        {/* CENTER SHOP */}
        <div class="flex flex-col xl:flex-row justify-center bg-[#EFF2F1]">
          <div class="text-center w-full xl:w-1/6 flex flex-col items-center justify-center">
            <p class="font-extrabold text-black mt-10 text-xl xl:text-2xl">تنوع در طراحی و نقش ها</p>
            <p class="text-center mt-6 text-gray-400 p-4">طراحی بهترین مبلمان با بهترین قیمت و کیفیت سفارشی سازی آن با کمترین هزینه برای سرتاسر مردم جهان. فقط کافیست یک بار محصول ما را امتحان کنید. شما میتوانید با مشاهده انواع مبل ها از فروشگاه ما در سرتاسر جهان خرید کنید و سفارشتان را تحویل بگیرید! </p>
            <button class="text-white bg-[#2f2f2f] hover:bg-[#000000] rounded-full w-52 h-12 mt-3">فروشگاه</button>
          </div>
          <div class="w-full xl:w-3/6 flex flex-col justify-center items-center sm:flex-row">
          <div class="w-80 sm:w-1/3 flex flex-col items-center group relative">
              <img class="z-10 mt-10 group-hover:mt-0 duration-300" src="/src/assets/img/product-1.png" alt="product-3" />
              <p class="z-10 mt-2 group-hover:mt-12 text-lg text-[#2f2f2f] duration-300">مبل راحتی</p>
              <p class="z-10 my-2 font-extrabold">341.000 تومان</p>
              <span class="absolute bottom-0 w-full rounded-3xl h-0 group-hover:h-2/3 bg-[#DCE5E4] duration-300"></span>
              <img class="hidden absolute bottom-[-1.5rem] z-10 p-2 rounded-full group-hover:flex bg-black duration-300" src="/src/assets/img/cross.svg" alt="cross" />
            </div>
            <div class="w-80 sm:w-1/3 flex flex-col items-center group relative">
              <img class="z-10 mt-10 group-hover:mt-0 duration-300" src="/src/assets/img/product-2.png" alt="product-3" />
              <p class="z-10 mt-2 group-hover:mt-12 text-lg text-[#2f2f2f] duration-300">مبل ابریشمی</p>
              <p class="z-10 my-2 font-extrabold">574.000 تومان</p>
              <span class="absolute bottom-0 w-full rounded-3xl h-0 group-hover:h-2/3 bg-[#DCE5E4] duration-300"></span>
              <img class="hidden absolute bottom-[-1.5rem] z-10 p-2 rounded-full group-hover:flex bg-black duration-300" src="/src/assets/img/cross.svg" alt="cross" />
            </div>
            <div class="w-80 sm:w-1/3 flex flex-col items-center group relative">
              <img class="z-10 mt-10 group-hover:mt-0 duration-300" src="/src/assets/img/product-3.png" alt="product-3" />
              <p class="z-10 mt-2 group-hover:mt-12 text-lg text-[#2f2f2f] duration-300">صندلی مهمانی</p>
              <p class="z-10 my-2 font-extrabold">205.000 تومان</p>
              <span class="absolute bottom-0 w-full rounded-3xl h-0 group-hover:h-2/3 bg-[#DCE5E4] duration-300"></span>
              <img class="hidden absolute bottom-[-1.5rem] z-10 p-2 rounded-full group-hover:flex bg-black duration-300" src="/src/assets/img/cross.svg" alt="cross" />
            </div>
          </div>
        </div>
        {/* CENTER SHOP */}
        <div class="flex flex-col xl:flex-row justify-center bg-[#EFF2F1]">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        </div>
      </div>
    </>
  )
}

export default App
