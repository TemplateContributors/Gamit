function App() {

  return (
    <>
      <div class="w-screen" dir="rtl">
        <section class="bg-purple-600">
          <nav class="">
            <div class="flex justify-center items-center h-24">
              <div class="w-40 lg:w-36 mr-3">
                <img src="/src/assets/logo2.svg" alt="Logo"></img>
              </div>
              <div class="w-32 sm:w-64 lg:w-32 pr-3">
                <button class="flex bg-[#f00909] border-[1px] hover:bg-transparent duration-200 hover:text-[#ff4242] border-[#f00909] px-3 py-1 rounded text-xs text-white" id="lives">
                  <span class="hidden sm:flex font-bold">
                    LIVES
                  </span>
                   240
                  <span class="duration-700 mt-[0.2rem] mr-1 w-2 h-2 bg-white rounded-full" id="flasher"></span>
                </button>
              </div>  
              <div class="hidden lg:flex w-[38rem] justify-start text-sm text-[#ffffff80]">
                <a href="#" class="navigation relative pl-3 hover:text-white active">صفحه اصلی<div class="bottom-crcl bg-active absolute top-6 mr-8 w-[0.35rem] h-[0.35rem] bg-transparent rounded-full"></div></a>
                <a href="#" class="navigation relative px-4 hover:text-white">ریمیت ساب<div class="bottom-crcl absolute top-6 mr-8 w-[0.35rem] h-[0.35rem] bg-transparent rounded-full"></div></a>
                <a href="#" class="navigation relative px-4 hover:text-white">تعرفه ها<div class="bottom-crcl absolute top-6 mr-4 w-[0.35rem] h-[0.35rem] bg-transparent rounded-full"></div></a>
                <a href="#" class="navigation relative px-4 hover:text-white">خدمات<div class="bottom-crcl absolute top-6 mr-4 w-[0.35rem] h-[0.35rem] bg-transparent rounded-full"></div></a>
                <a href="#" class="navigation relative px-4 hover:text-white">پشتیبانی<div class="bottom-crcl absolute top-6 mr-5 w-[0.35rem] h-[0.35rem] bg-transparent rounded-full"></div></a>
                <a href="#" class="navigation relative px-4 hover:text-white">بلاگ<div class="bottom-crcl absolute top-6 mr-2 w-[0.35rem] h-[0.35rem] bg-transparent rounded-full"></div></a>
              </div>
              <div class="flex w-72 lg:w-64 justify-center">
              <button class="ml-3 px-3 w-16 h-10 hover:bg-[#ffffff80] rounded-full text-white duration-200">ورود</button>
                <button class="w-[4rem] sm:w-[5.5rem] ml-2 h-10 rounded-full bg-radial text-white">عضویت</button>
                {/* Hamburger Menu */}
                <button id="HAMBERGER" class="relative flex lg:hidden mt-2 mx-2">
                  <span class="py-2 border-t-[2.9px] w-6 absolute top-0 transition-all duration-300" id="upCross"></span>
                  <span class="py-1 border-t-[2.9px] w-6 absolute top-[0.625rem] shift-rigth" id="disappear"></span>
                  <span class="border-t-[2.9px] w-6 absolute top-5 transition-all duration-300" id="downCross"></span>
                </button>
              </div>
            </div>
              <div class="hidden lg:hidden w-screen bg-purple-600 flex-col text-[#ffffff80]" id="Hamburger">
                <a href="#" class="navigation relative mr-44 p-2 hover:text-white active"><div class="bottom-crcl bg-active absolute top-4 right-[-2rem] w-[0.35rem] h-[0.35rem] bg-transparent rounded-full"></div>صفحه اصلی</a>
                <a href="#" class="navigation relative mr-44 p-2 hover:text-white"><div class="bottom-crcl absolute top-4 right-[-2rem] w-[0.35rem] h-[0.35rem] bg-transparent rounded-full"></div>ریمیت ساب</a>
                <a href="#" class="navigation relative mr-44 p-2 hover:text-white"><div class="bottom-crcl absolute top-4 right-[-2rem] w-[0.35rem] h-[0.35rem] bg-transparent rounded-full"></div>تعرفه ها</a>
                <a href="#" class="navigation relative mr-44 p-2 hover:text-white"><div class="bottom-crcl absolute top-4 right-[-2rem] w-[0.35rem] h-[0.35rem] bg-transparent rounded-full"></div>خدمات</a>
                <a href="#" class="navigation relative mr-44 p-2 hover:text-white"><div class="bottom-crcl absolute top-4 right-[-2rem] w-[0.35rem] h-[0.35rem] bg-transparent rounded-full"></div>پشتیبانی</a>
                <a href="#" class="navigation relative mr-44 p-2 hover:text-white"><div class="bottom-crcl absolute top-4 right-[-2rem] w-[0.35rem] h-[0.35rem] bg-transparent rounded-full"></div>بلاگ</a>
              </div>
              <div class="w-screen h-[45.6rem] flex flex-col items-center">
                <div class="w-screen h-96 flex justify-center mt-20">
                  <svg class="fill-gray-300 ml-2 mt-48 h-6 hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/></svg>
                  <div class="w-1/4 h-96 bg-slate-300"></div>
                  <div class="w-1/4 h-96 bg-slate-500"></div>
                  <svg class="fill-gray-300 mr-2 mt-48 h-6 hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"/></svg>
                </div>
                <div class="mt-10 flex">
                  <div class="mx-2 w-2 h-2 bg-white rounded-full"></div>
                  <div class="mx-2 w-2 h-2 bg-white rounded-full"></div>
                  <div class="mx-2 w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
          </nav>
        </section>
      </div>
    </>
  )
}

export default App
