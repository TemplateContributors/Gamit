function App() {

  return (
    <>
      <div class="w-screen" dir="rtl">
        <section class="bg-[#3B5D50] w-screen h-[40rem] flex justify-center">
          <nav class="flex justify-between w-3/4 p-5">
            <div class="w-32 h-20 text-3xl font-extrabold text-white after:content-[''] after:inline-block after:w-2 after:mr-1 after:h-2 after:rounded-full after:bg-gray-400">
              مبلمان
            </div>

            <div class="flex justify-around w-6/12 h-7">
              <a href="#" class="text-white border-b-4 border-yellow-500">خانه</a>
              <a href="#" class="relative text-gray-400 hover:text-white duration-300 group"><span class="absolute left-0 bottom-0 w-0 h-1 bg-yellow-500 group-hover:w-full duration-300"></span>درباره ما</a>
              <a href="#" class="relative text-gray-400 hover:text-white duration-300 group"><span class="absolute left-0 bottom-0 w-0 h-1 bg-yellow-500 group-hover:w-full duration-300"></span>خدمات</a>
              <a href="#" class="relative text-gray-400 hover:text-white duration-300 group"><span class="absolute left-0 bottom-0 w-0 h-1 bg-yellow-500 group-hover:w-full duration-300"></span>بلاگ</a>
              <a href="#" class="relative text-gray-400 hover:text-white duration-300 group"><span class="absolute left-0 bottom-0 w-0 h-1 bg-yellow-500 group-hover:w-full duration-300"></span>تماس با ما</a>
              <a href="#" class="">
                <img src="/src/assets/img/cart.svg" alt="cart" />
              </a>
              <a href="#">
                <img src="/src/assets/img/user.svg" alt="user" />
              </a>

            </div>
          </nav>
        </section>
      </div>
    </>
  )
}

export default App
