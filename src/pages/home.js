function HomePage(){
  return(
    <div className="app">
      <div className="flex w-full p-4 bg-white-50 columns-2">
        <div className="w-[-90%] mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
          <form>
            <div className="mb-4 sm:mb-8">
              <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Full name</label>
              <input type="text" id="hs-feedback-post-comment-name-1" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Full name"/>
            </div>
    
            <div className="mb-4 sm:mb-8">
              <label for="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium dark:text-white">Email address</label>
              <input type="email" id="hs-feedback-post-comment-email-1" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Email address"/>
            </div>
    
            <div>
              <label for="hs-feedback-post-comment-textarea-1" className="block mb-2 text-sm font-medium dark:text-white">Comment</label>
              <div className="mt-1">
                <textarea id="hs-feedback-post-comment-textarea-1" name="hs-feedback-post-comment-textarea-1" rows="3" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Leave your comment here..."></textarea>
              </div>
            </div>
    
            <div className="mt-6 grid">
              <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Submit</button>
            </div>
          </form>
        </div>
        <div className="w-full mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
          <form>
            <div className="mb-4 sm:mb-8">
              <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Full name</label>
              <input type="text" id="hs-feedback-post-comment-name-1" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Full name"/>
            </div>
    
            <div className="mb-4 sm:mb-8">
              <label for="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium dark:text-white">Email address</label>
              <input type="email" id="hs-feedback-post-comment-email-1" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Email address"/>
            </div>
    
            <div>
              <label for="hs-feedback-post-comment-textarea-1" className="block mb-2 text-sm font-medium dark:text-white">Comment</label>
              <div className="mt-1">
                <textarea id="hs-feedback-post-comment-textarea-1" name="hs-feedback-post-comment-textarea-1" rows="3" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Leave your comment here..."></textarea>
              </div>
            </div>
    
            <div className="mt-6 grid">
              <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>    
  )
}

export default HomePage;
    