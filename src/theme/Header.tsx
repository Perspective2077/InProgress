
export default function MyCustomHeader() {
   return (
      <header class="_header_88ipo_1">
         <div>
            <a href="/" class="_logo-link_88ipo_43">
               <div class="flex gap-[0.5rem]">
                  <div class="w-[1.6rem]">
                     <img src="/favicon.ico" alt="" />
                  </div>
                  <span>InProgress</span>
               </div>
            </a>

            <div class="_top-nav_88ipo_102 bg-red-500">
               <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  data-closed=""
                  class="_mobile-nav-menu_88ipo_51"
                  aria-label="Open navigation"
               >
                  <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" class="_menu-icon_88ipo_125">
                     <path fill="currentColor" d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z" />
                  </svg>

                  <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" class="_close-icon_88ipo_126">
                     <path
                        fill="currentColor"
                        d="M10.586 12L2.793 4.207l1.414-1.414L12 10.586l7.793-7.793l1.414 1.414L13.414 12l7.793 7.793l-1.414 1.414L12 13.414l-7.793 7.793l-1.414-1.414z"
                     />
                  </svg>
               </button>

               <a class="_navLink_88ipo_156" href="/guide" data-matched="true">
                  Guide
               </a>

               <a class="_navLink_88ipo_156" href="/reference">
                  Reference
               </a>

               <div role="group" class="">
                  <button
                     type="button"
                     aria-haspopup="listbox"
                     aria-expanded="false"
                     aria-label="change locale"
                     data-closed=""
                     class="_trigger_ni2rj_27"
                  >
                     <span>English</span>
                  </button>
               </div>

               <div role="group" class="">
                  <button
                     type="button"
                     aria-haspopup="listbox"
                     aria-expanded="false"
                     aria-label="Change theme mode"
                     data-closed=""
                     class="_trigger_ni2rj_27"
                  >
                     <span>
                        <div aria-label="Dark">
                           {/* SVG icons */}
                           <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" class="_system-light_ni2rj_74">
                              <path fill="currentColor" d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12m0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8" />
                           </svg>

                           <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" class="_system-dark_ni2rj_75">
                              <path fill="currentColor" d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2" />
                           </svg>
                        </div>
                     </span>
                  </button>
               </div>
            </div>
         </div>

         <div class="_nav-container_88ipo_197"></div>

         <div class="_mobile-bar_88ipo_32">
            <button type="button" aria-label="Open navigation" class="_mobile-menu_88ipo_50">
               <svg viewBox="0 0 24 24" width="1.2em" height="1.2em">
                  <path fill="currentColor" d="M3 4h18v2H3zm0 7h12v2H3zm0 7h18v2H3z" />
               </svg>
               Menu
            </button>

            <button
               type="button"
               aria-haspopup="dialog"
               aria-expanded="false"
               data-closed=""
               class="_mobile-menu_88ipo_50"
               aria-label="Open table of contents"
            >
               On this page
               <svg viewBox="0 0 24 24" width="1.2em" height="1.2em">
                  <path fill="currentColor" d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z" />
               </svg>
            </button>
         </div>

         <div class="_toc-container_88ipo_196"></div>
      </header>
   );
}
