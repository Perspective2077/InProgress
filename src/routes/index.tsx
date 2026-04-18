import { Title } from "@solidjs/meta";
import MyCustomHeader from "~/theme/Header";
import "./index.css"

export default function Home() {
  return (
    <>
      <Title>My Product</Title>
      <div class="flex flex-col w-screen h-screen">
        <MyCustomHeader />
        <section class="landingpage flex text-black flex-1">
          <div class="flex flex-col gap-[2rem] pl-[2rem]">
            <div class="">
              <h1 class="text-[7rem] leading-[5rem] pt-[3rem] pb-[1rem]">Web Docs</h1>
              <h1 class="text-[2rem] text-pink-600">Documentation for Mern Stack and many more libraries</h1>
              <p class="text-[1.2rem] text-white">This is under dev doc i am currently transferring all my docs from txt or simple i have made into this site </p>
            </div>
            <div class="sections w-[50rem]">
              <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">


                <a href="/javascript/introduction" class="group rounded-xl border border-white/10 bg-black/67 p-6 transition hover:border-white/20 hover:bg-white/10" >
                  <h3 class="text-lg font-semibold text-white">
                    Javascript
                  </h3>
                  <p class="mt-2 text-sm text-white/60">
                    Step-by-step tutorials and examples
                  </p>
                </a>
                <a href="/typescript/introduction" class="group rounded-xl border border-white/10 bg-black/67 p-6 transition hover:border-white/20 hover:bg-white/10" >
                  <h3 class="text-lg font-semibold text-white">
                    Typescript
                  </h3>
                  <p class="mt-2 text-sm text-white/60">
                    Step-by-step tutorials and examples
                  </p>
                </a>
                <a href="/mongodb/introduction" class="group rounded-xl border border-white/10 bg-black/67 p-6 transition hover:border-white/20 hover:bg-white/10" >
                  <h3 class="text-lg font-semibold text-white">
                    Mongodb
                  </h3>
                  <p class="mt-2 text-sm text-white/60">
                    Step-by-step tutorials and examples
                  </p>
                </a>
                <a href="/react/introduction" class="group rounded-xl border border-white/10 bg-black/67 p-6 transition hover:border-white/20 hover:bg-white/10" >
                  <h3 class="text-lg font-semibold text-white">
                    React
                  </h3>
                  <p class="mt-2 text-sm text-white/60">
                    Step-by-step tutorials and examples
                  </p>
                </a>
                <a href="/interview/web" class="group rounded-xl border border-white/10 bg-black/67 p-6 transition hover:border-white/20 hover:bg-white/10" >
                  <h3 class="text-lg font-semibold text-white">
                    Interview Questions
                  </h3>
                  <p class="mt-2 text-sm text-white/60">
                    Step-by-step tutorials and examples
                  </p>
                </a>
                <a href="/web/regex" class="group rounded-xl border border-white/10 bg-black/67 p-6 transition hover:border-white/20 hover:bg-white/10" >
                  <h3 class="text-lg font-semibold text-white">

                    Regex
                  </h3>
                  <p class="mt-2 text-sm text-white/60">
                    Step-by-step tutorials and examples
                  </p>
                </a>
                <a href="/Network" class="group rounded-xl border border-white/10 bg-black/67 p-6 transition hover:border-white/20 hover:bg-white/10" >
                  <h3 class="text-lg font-semibold text-white">

                    Network Requests
                  </h3>
                  <p class="mt-2 text-sm text-white/60">
                    urls and domains
                  </p>
                </a>
                <a href="/web/regex" class="group rounded-xl border border-white/10 bg-black/67 p-6 transition hover:border-white/20 hover:bg-white/10" >
                  <h3 class="text-lg font-semibold text-white">

                    Headers & Cookies
                  </h3>
                  <p class="mt-2 text-sm text-white/60">
                    About Headers and Cookies in a https request
                  </p>
                </a>
              </div>
            </div>
          </div>

        </section>
      </div>
    </>
  );
}
