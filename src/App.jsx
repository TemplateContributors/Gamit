function App() {

  return (
    <>
      <div class="w-full" dir="rtl">
        <section class="bg-[#3B5D50] xl:h-[40rem] lg:h-[59rem] sm:h-[50rem] flex flex-col items-center">
          {/* NAV::START */}
          <nav class="relative flex flex-wrap lg:flex-nowrap justify-between items-start w-3/4 p-5 ">
            <div class="h-20 text-3xl xl:text-4xl font-extrabold text-white after:content-[''] after:inline-block after:w-2 after:mr-1 after:h-2 after:rounded-full after:bg-gray-400">
              مبلمان
            </div>
            <div class="flex sm:hidden h-10 w-1/12" id="Hamburger">
              <svg class="mb-1 w-6 hover:fill-white fill-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
            </div> 
            <div class="w-11/12 lg:w-7/12 lg:text-lg sm:text-sm sm:w-9/12 sm:flex-row justify-around xl:w-6/12 hidden sm:flex" id="HamburgerMenu">
              <a href="#" class="text-white sm:border-b-4 duration-300 border-yellow-500 sm:-mt-0 -mt-4">خانه</a>
              <a href="#" class="py-2 sm:py-0 relative text-gray-400 hover:text-white duration-300 group"><span class="hidden sm:flex absolute left-0 bottom-0 w-0 h-1 bg-yellow-500 group-hover:w-full duration-300"></span>درباره ما</a>
              <a href="#" class="py-2 sm:py-0 relative text-gray-400 hover:text-white duration-300 group"><span class="hidden sm:flex absolute left-0 bottom-0 w-0 h-1 bg-yellow-500 group-hover:w-full duration-300"></span>خدمات</a>
              <a href="#" class="py-2 sm:py-0 relative text-gray-400 hover:text-white duration-300 group"><span class="hidden sm:flex absolute left-0 bottom-0 w-0 h-1 bg-yellow-500 group-hover:w-full duration-300"></span>بلاگ</a>
              <a href="#" class="py-2 sm:py-0 relative text-gray-400 hover:text-white duration-300 group"><span class="hidden sm:flex absolute left-0 bottom-0 w-0 h-1 bg-yellow-500 group-hover:w-full duration-300"></span>تماس با ما</a>
              <a href="#" class="py-2 sm:py-0 ">
                <img class="xl:w-8" src="/src/assets/img/cart.svg" alt="cart" />
              </a>
              <a href="#" class="py-2 sm:py-0">
                <img class="xl:w-7" src="/src/assets/img/user.svg" alt="user" />
              </a>
            </div>
          </nav>
          {/* NAV::END */}
          <div class="mt-[-2rem] flex flex-col xl:flex-row items-center w-3/4 p-5">
            {/* RIGHT SECTION::START */}
            <div class="w-full xl:w-[35rem] h-[15rem] lg:h-[20rem] 2xl:h-[30rem] flex flex-col items-center justify-center">
                <p class="2xl:w-96 font-extrabold text-white 2xl:leading-[5rem] mt-16 sm:mt-0 sm:text-xl lg:text-3xl 2xl:text-6xl">زیباترین مبلمان طراحی حرفه ای</p>
                <p class="text-center xl:w-1/2 2xl:w-[22rem] mt-6 text-gray-400 text-lg xl:text-xl">طراحی بهترین مبلمان با بهترین قیمت و کیفیت سفارشی سازی آن با کمترین هزینه برای سرتاسر مردم جهان. فقط کافیست یک بار محصول ما را امتحان کنید. </p>
                <div class="flex flex-wrap sm:flex-nowrap justify-center text-lg font-extrabold mt-5 w-full">
                  <button class="text-[#2f2f2f] bg-yellow-500 hover:bg-yellow-400 rounded-full w-1/2 sm:w-28 h-12">سفارش بده!</button>
                  <button class="text-white border-gray-400 hover:border-white border-2 rounded-full sm:mt-0 mt-2 w-1/2 sm:w-28 h-12 mr-2">فروشگاه</button>
                </div>
            </div>
            {/* RIGHT SECTION::END */}

            {/* LEFT SECTION::START */}
            <div class="w-full xl:w-[50rem] 2xl:mr-56 mr-0 flex xl:mt-0 sm:mt-[-10] mt-16">
              <img class="z-10 " src="/src/assets/img/couch.png" alt="couch" />
              <img class="hidden lg:flex z-0 w-60 h-60 mr-[-10rem] mt-8" src="/src/assets/img/dots.png" alt="dots" />
            </div>
            {/* LEFT SECTION::END */}
          </div>
        </section>
        {/* CENTER SHOP::START */}
        <div class="flex flex-col xl:flex-row justify-center bg-[#EFF2F1] pt-10">
          <div class="text-center w-full xl:w-1/6 flex flex-col items-center justify-center">
            <p class="font-extrabold text-black mt-10 text-2xl text-nowrap 2xl:text-3xl">تنوع در طراحی و نقش ها</p>
            <p class="text-center xl:w-64 2xl:w-72 mt-6 text-gray-400 p-4 text-lg xl:text-xl">طراحی بهترین مبلمان با بهترین قیمت و کیفیت سفارشی سازی آن با کمترین هزینه برای سرتاسر مردم جهان. فقط کافیست یک بار محصول ما را امتحان کنید. شما میتوانید با مشاهده انواع مبل ها از فروشگاه ما در سرتاسر جهان خرید کنید و سفارشتان را تحویل بگیرید! </p>
            <button class="text-white bg-[#2f2f2f] hover:bg-[#000000] rounded-full w-52 h-12 mt-3 text-lg xl:text-2xl">فروشگاه</button>
          </div>
          <div class="w-full xl:w-3/6 flex flex-col justify-center items-center sm:flex-row text-lg xl:text-2xl">
          <div class="w-80 sm:w-1/3 flex flex-col items-center group relative">
              <img class="z-10 mt-10 group-hover:mt-0 duration-300" src="/src/assets/img/product-1.png" alt="product-3" />
              <p class="z-10 mt-2 group-hover:mt-12 text-[#2f2f2f] duration-300">مبل راحتی</p>
              <p class="z-10 my-2 font-extrabold">341.000 تومان</p>
              <span class="absolute bottom-0 w-full rounded-3xl h-0 group-hover:h-2/3 bg-[#DCE5E4] duration-300"></span>
              <img class="hidden absolute bottom-[-1.5rem] z-10 p-2 rounded-full group-hover:flex bg-black duration-300" src="/src/assets/img/cross.svg" alt="cross" />
            </div>
            <div class="w-80 sm:w-1/3 flex flex-col items-center group relative">
              <img class="z-10 mt-10 group-hover:mt-0 duration-300" src="/src/assets/img/product-2.png" alt="product-3" />
              <p class="z-10 mt-2 group-hover:mt-12 text-[#2f2f2f] duration-300">مبل ابریشمی</p>
              <p class="z-10 my-2 font-extrabold">574.000 تومان</p>
              <span class="absolute bottom-0 w-full rounded-3xl h-0 group-hover:h-2/3 bg-[#DCE5E4] duration-300"></span>
              <img class="hidden absolute bottom-[-1.5rem] z-10 p-2 rounded-full group-hover:flex bg-black duration-300" src="/src/assets/img/cross.svg" alt="cross" />
            </div>
            <div class="w-80 sm:w-1/3 flex flex-col items-center group relative">
              <img class="z-10 mt-10 group-hover:mt-0 duration-300" src="/src/assets/img/product-3.png" alt="product-3" />
              <p class="z-10 mt-2 group-hover:mt-12 text-[#2f2f2f] duration-300">صندلی مهمانی</p>
              <p class="z-10 my-2 font-extrabold">205.000 تومان</p>
              <span class="absolute bottom-0 w-full rounded-3xl h-0 group-hover:h-2/3 bg-[#DCE5E4] duration-300"></span>
              <img class="hidden absolute bottom-[-1.5rem] z-10 p-2 rounded-full group-hover:flex bg-black duration-300" src="/src/assets/img/cross.svg" alt="cross" />
            </div>
          </div>
        </div>
        {/* CENTER SHOP::END */}
        {/* CHOOS US::START */}
        <div class="flex flex-col 2xl:flex-row justify-center items-center bg-[#EFF2F1] pt-36">
          <div class="w-full 2xl:w-2/6">
            <div class="flex flex-wrap ml-10">
              <div class="px-3 w-full text-center 2xl:text-start">
                <p class="font-extrabold text-black mt-10 text-2xl xl:text-3xl">از ما خرید کنید</p>
                <p class="mt-6 text-gray-400 py-6 text-lg xl:text-xl">ویژگی های زیر باعث شده که ما به بزرگترین وب مرجع فروش مبلمان زینتی و راحتی تبدیل شویم و این باعث افتخار ماست !</p>
              </div>
              <div class="w-1/2 px-5 lg:px-12 2xl:px-3 py-3 text-lg xl:text-xl">
                <img src="/src/assets/img/truck.svg" alt="truck" />
                <p class="text-black mt-1">ارسال رایگان</p>
                <p class="mt-1 text-gray-400">این ویژگی باعث شده که خیلی از مشتری های خارج از کشور به تیم ما سفارش دهند و ارسال رایگان را یکی از مزایای خود می دانیم</p>
              </div>
              <div class="w-1/2 px-5 lg:px-12 2xl:px-3 py-3 text-lg xl:text-xl">
                <img src="/src/assets/img/bag.svg" alt="truck" />
                <p class="text-black mt-1">خرید آسان</p>
                <p class="mt-1 text-gray-400">وبسایت ما کار خرید و سفارش را خیلی ساده کرده و نیازی به مراجعه حضوری شما جهت ثبت سفارش نیست.</p>
              </div>
              <div class="w-1/2 px-5 lg:px-12 2xl:px-3 py-3 text-lg xl:text-xl">
                <img src="/src/assets/img/support.svg" alt="truck" />
                <p class="text-black mt-1">پشتیبانی تمام وقت</p>
                <p class="mt-1 text-gray-400">تیم بیار قوی پشتیبانی حتی در روز های تعطیل هم به شما سرویس دهی خواهند کرد و به سوالاتتان پاسخ خواهند داد.</p>
              </div>
              <div class="w-1/2 px-5 lg:px-12 2xl:px-3 py-3 text-lg xl:text-xl">
                <img src="/src/assets/img/return.svg" alt="truck" />
                <p class="text-black mt-1">ضمانت کالا</p>
                <p class="mt-1 text-gray-400">تمامی محصولات ما دارای ضمانت هستند. در صورت عدم رضایت، وجه پرداختی به خریدار عودت داده می شود.</p>
              </div>
            </div>
          </div>
          <div class="item-center xl:w-[50rem] flex xl:mt-16 sm:mt-[-10] mt-4">
            <img class="hidden 2xl:flex z-0 w-72 h-72 -ml-40 -mt-20" src="/src/assets/img/yellow-dots.svg" alt="yellow-dots" />
            <img class="z-10 rounded-xl " src="/src/assets/img/why-choose-us.jpg" alt="why-choose-us" />
          </div>
        </div>
        {/* CHOOS US::END */}
        {/* FOOTER::BLOG */}
        <div class="bg-[#EFF2F1] pb-44">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              <div class="flex w-full justify-between">
                <h2 class="text-2xl font-bold text-gray-900">بلاگ</h2>
                <a class="underline" href="#">مشاهده ی همه</a>
              </div>

              <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                <div class="group relative">
                  <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img src="src\assets\img\post-1.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center"/>
                  </div>
                  <h3 class="mt-6 text-sm text-gray-500">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      خبری
                    </a>
                  </h3>
                  <p class="text-base font-semibold text-gray-900">جدید ترین محصولات دانش بنیان</p>
                </div>
                <div class="group relative">
                  <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img src="src\assets\img\post-2.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center"/>
                  </div>
                  <h3 class="mt-6 text-sm text-gray-500">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      مشاوره / آموزشی
                    </a>
                  </h3>
                  <p class="text-base font-semibold text-gray-900">تاثیر رنگ مبل بر دلباز بودن خانه</p>
                </div>
                <div class="group relative">
                  <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img src="src\assets\img\post-3.jpg" alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center"/>
                  </div>
                  <h3 class="mt-6 text-sm text-gray-500">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      دانستی / آموزشی
                    </a>
                  </h3>
                  <p class="text-base font-semibold text-gray-900">انتخاب مواد اولیه چه اهمیتی دارد؟</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FOOTER::END */}
        {/* FOOTER::START */}
        <footer class="w-full flex justify-center">
          <div class="flex flex-col w-[68%]">
            <div class="flex flex-col 2xl:flex-row items-center">
              <div class="2xl:w-3/4 w-full flex flex-col items-center 2xl:mt-12 mt-56 lg:items-center 2xl:items-start ">
                <div class="flex py-3 ">
                  <img class="w-7" src="src\assets\img\envelope-outline.svg" alt="envelope-outline" />
                  <p class="text-xl">عضو باشگاه ما شوید</p>
                </div>
                <form class="w-full items-center justify-center lg:flex-row lg:h-20 flex-col h-44 text-sm xl:text-lg flex lg:justify-center 2xl:justify-start">
                  <input class="mt-2 text-lg rounded-2xl border-[1px] px-2 border-gray-400 w-64 h-14 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:shadow-lg focus:border-black" placeholder="نام خود را وارد کنید." type="text"/>
                  <input class="mt-2 text-lg rounded-2xl mx-2 border-[1px] px-2 border-gray-400 h-14 w-64 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:shadow-lg focus:border-black" placeholder="ایمیل خود را وارد کنید." type="email"/>
                  <button class="mt-2 rounded-2xl shadow hover:bg-gray-400 bg-[#3b5d50]  w-64 lg:w-20 h-14  focus:shadow-outline focus:outline-none flex justify-center items-center" type="submit">
                      <svg class="fill-white w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
                  </button>
                </form>
              </div>
              <div class="lg:w-[25rem] w-[20rem]">
                <img class="scale-x-[-1] -mt-[33rem] 2xl:mr-44 2xl:-mt-48" src="src\assets\img\sofa.png" alt="sofa" />
              </div>
            </div>
            <div class="pt-20 flex flex-col 2xl:flex-row items-center">

              <div class="flex flex-col 2x:items-start items-center 2xl:w-96 w-full 2xl:text-start text-center">
                <div class="h-20 text-3xl xl:text-4xl font-extrabold text-[#3B5D50]
                          after:content-[''] after:inline-block after:w-2 after:mr-1 after:h-2 after:rounded-full after:bg-[#3B5D50]">
                  مبلمان
                </div>
                <div class="flex flex-col">
                  <p class="text-gray-400">
                    سایت مبلمان تنها مرجع رسمی از لحاظ ایده های نو و استفاده از لوازم و مواد زیست تخریب پذیر که ارسال تمامی تولیدات این شرکت به تمامی نقاط جهان امکان پذیر است. سفارش ساده از سایت، مارا به بزرگترین مرجع فروش مبلمان در ایران و جهان تبدیل کرده است 
                  </p>
                  <div class="flex pt-7 2xl:justify-start justify-center">
                    <div class="flex w-9 h-9 duration-300 bg-[#dce5e4] hover:bg-[#3B5D50] justify-center items-center rounded-full group">
                      <svg class="w-3 duration-300 group-hover:fill-white fill-[#3B5D50]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                    </div>
                    <div class="flex mx-2 w-9 h-9 duration-300 bg-[#dce5e4] hover:bg-[#3B5D50] justify-center items-center rounded-full group">
                      <svg class="w-4 duration-300 group-hover:fill-white fill-[#3B5D50]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    </div>
                    <div class="flex w-9 h-9 duration-300 bg-[#dce5e4] hover:bg-[#3B5D50] justify-center items-center rounded-full group">
                      <svg class="w-3 duration-300 group-hover:fill-white fill-[#3B5D50]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
                    </div>
                    <div class="flex mr-2 w-9 h-9 duration-300 bg-[#dce5e4] hover:bg-[#3B5D50] justify-center items-center rounded-full group">
                      <svg class="w-4 duration-300 group-hover:fill-white fill-[#3B5D50]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pb-10 pt-28 px-28 flex lg:justify-between justify-center xl:w-[55.4rem] w-full text-nowrap ">
                <div class="flex w-full flex-col lg:flex-row">
                  <div class="flex flex-col w-1/2">
                    <a href="#" class="hover:text-gray-400 mb-5">درباره ما</a>
                    <a href="#" class="hover:text-gray-400 mb-5">تماس با ما</a>
                    <a href="#" class="hover:text-gray-400 mb-5">خدمات</a>
                    <a href="#" class="hover:text-gray-400 hidden lg:flex">بلاگ</a>
                  </div>
                  <div class="flex flex-col w-1/2">
                    <a href="#" class="hover:text-gray-400 mb-5">پشتیبانی</a>
                    <a href="#" class="hover:text-gray-400 mb-5">اطلاعات</a>
                    <a href="#"  class="hover:text-gray-400">لایو چت</a>
                  </div>
                </div>
                <div class="flex w-full flex-col lg:flex-row lg:items-start items-end">
                  <div class="flex flex-col w-1/2">
                    <a href="#" class="hover:text-gray-400 mb-5">شغل ها</a>
                    <a href="#" class="hover:text-gray-400 mb-5">تیم ما</a>
                    <a href="#" class="hover:text-gray-400 mb-5">حریم شخصی</a>
                    <a href="#" class="hover:text-gray-400 hidden lg:flex">سفارشات</a>
                  </div>
                  <div class="flex flex-col w-1/2">
                    <a href="#" class="hover:text-gray-400 mb-5 ">مبل راحتی</a>
                    <a href="#" class="hover:text-gray-400 mb-5">صندلی ابریشمی</a>
                    <a href="#" class="hover:text-gray-400">مبل مجلسی</a>
                  </div>
                </div>
              </div> 
            </div>
            <div class="border-b-2 py-4">
            </div>
            <div class="flex flex-col xl:flex-row justify-between">
              <div class="flex text-sm text-nowrap justify-between py-4">
                <a href="#" class="pl-3">شرایط و ضوابط</a>
                <a href="#">حریم خصوصی</a>
              </div>
              <div class="flex xl:justify-end justify-center">
                <p class="py-8 xl:py-4 text-gray-600 text-center">Copyright ©2024. All Rights Reserved. — Designed with love by <a class="text-black font-bold" href="https://untree.co/">Untree.co</a></p>
              </div>
            </div>
          </div>

        </footer>
        {/* FOOTER::END */}
      </div>
    </>
  )
}

export default App
