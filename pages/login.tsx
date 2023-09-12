import * as elements from "typed-html";

export default () => (
  <body x-teleport="body">
    <div class="flex fixed inset-0 z-[99] w-screen h-screen bg-white">
      <div class="relative flex flex-wrap items-center w-full h-full px-8">
        <div class="relative w-full max-w-sm mx-auto lg:mb-0">
          <div class="relative text-center">
            <div class="flex flex-col mb-6 space-y-2">
              <h1 class="text-2xl font-semibold tracking-tight">
                Log In now and start the party 🎉
              </h1>
              <p class="text-sm text-neutral-500">
                Enter your email below to sign in to your account
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
            Don't you have an account?{" "}
            <a href="/" class="relative font-medium text-blue-600 group">
              <span>Sign Up here</span>
              <span class="absolute bottom-0 left-0 w-0 group-hover:w-full ease-out duration-300 h-0.5 bg-blue-600"></span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </body>
);
