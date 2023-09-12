// Landing Page (http://localhost:3000 - index.tsx)
import * as elements from "typed-html";

export default async () => {
  return (
    <html>
      <head>
        <title>Index</title>
      </head>
      <body class="w-screen h-screen flex flex-col px-12 items-center justify-center 2xl:px-28 xl:px-28 lg:px-28 text-center">
        <h1 class="text-5xl font-bold">Cordia Chat</h1>
        <p class="2xl:w-2/4 xl:w-2/4 lg:w-2/4 md:w-2/4 text-lg my-5">
          Cordia is a minimalist, real-time text groupal, chat app. It's place
          where you can talk and interact with people like you, make new
          friends, share new thoughts and, most importantly, have fun being
          yourself... Just like Discord but way uglier.
        </p>
        <Modal />
      </body>
    </html>
  );
};

const ModalProvider = ({ children }: elements.Children) => `
<div 
    x-data="{ fullscreenModal: false }"
    x-init="
    $watch('fullscreenModal', function(value){
            if(value === true){
                document.body.classList.add('overflow-hidden');
            }else{
                document.body.classList.remove('overflow-hidden');
            }
        })
    "
    @keydown.escape="fullscreenModal=false"
    >
${children}
</div>
`;

const ModalButton = ({ children }: elements.Children) => `
    <button
      @click="fullscreenModal=true"
      class="px-5 py-2 font-medium border border-b-4 border-r-4 ease-in-out delay-150 border-black rounded-lg shadow-lg hover:border-r-2 hover:border-b-2 transition">
    ${children}
    </button>
`;

const ModalCloseButton = ({ children }: elements.Children) => `
            <button @click="fullscreenModal=false" class="absolute top-0 right-0 z-30 flex items-center justify-center px-3 py-2 mt-3 mr-3 space-x-1 text-xs font-medium uppercase border rounded-md border-neutral-200 text-neutral-600 hover:bg-neutral-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                <span>${children}</span>
            </button>
`;

const Modal = () => (
  <ModalProvider>
    <ModalButton>Click here to continue</ModalButton>
    <template x-teleport="body">
      <div
        x-show="fullscreenModal"
        x-transition:enter="transition ease-out duration-100"
        x-transition:enter-start="opacity-0"
        x-transition:enter-end="opacity-100"
        x-transition:leave="transition ease-in duration-100"
        x-transition:leave-start="opacity-100"
        x-transition:leave-end="opacity-0"
        class="flex fixed inset-0 z-[99] w-screen h-screen bg-white"
      >
        <ModalCloseButton>Close</ModalCloseButton>
        <div class="relative flex flex-wrap items-center w-full h-full px-8">
          <div class="relative w-full max-w-sm mx-auto lg:mb-0">
            <div class="relative text-center">
              <div class="flex flex-col mb-6 space-y-2">
                <h1 class="text-2xl font-semibold tracking-tight">
                  Create an account
                </h1>
                <p class="text-sm text-neutral-500">
                  Enter your email below to create your account
                </p>
              </div>
              <form onsubmit="event.preventDefault();" class="space-y-2">
                <input
                  type="text"
                  placeholder="name@example.com"
                  class="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <input
                  type="password"
                  placeholder="*********"
                  class="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <button
                  type="button"
                  class="inline-flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-200 rounded-md bg-neutral-950 hover:bg-neutral-900 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 focus:shadow-outline focus:outline-none"
                >
                  Sign up
                </button>
              </form>
            </div>
            <p class="mt-6 text-sm text-center text-neutral-500">
              Already have an account?{" "}
              <a href="/login" class="relative font-medium text-blue-600 group">
                <span>Login here</span>
                <span class="absolute bottom-0 left-0 w-0 group-hover:w-full ease-out duration-300 h-0.5 bg-blue-600"></span>
              </a>
            </p>
            <p class="px-8 mt-1 text-sm text-center text-neutral-500">
              By continuing, you agree to our{" "}
              <a
                class="underline underline-offset-4 hover:text-primary"
                href="/terms"
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                class="underline underline-offset-4 hover:text-primary"
                href="/privacy"
              >
                Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </template>
  </ModalProvider>
);
