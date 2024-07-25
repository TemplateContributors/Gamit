function App() {

  return (
    <>
      <div class="w-screen">
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
                  <span class="py-2 border-t-2 w-6 absolute top-0 transition-all duration-300" id="upCross"></span>
                  <span class="py-1 border-t-2 w-6 absolute top-[0.625rem] shift-rigth" id="disappear"></span>
                  <span class="border-t-2 w-6 absolute top-5 transition-all duration-300" id="downCross"></span>
                </button>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </>
  )
}

export default App
