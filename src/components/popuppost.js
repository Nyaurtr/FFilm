function Popuppost (props){
    return(props.trigger) ? (
        <div id="maindiv" onClick={props.onClose} className ="app z-[10000] fixed flex min-h-full min-w-full flex-col justify-center overflow-hidden bg-black bg-opacity-15 py-6 sm:py-12">
            <div class="w-7/12 mx-auto bg-white p-4 rounded-lg shadow-md ">
                <div class="flex items-center space-x-4 mb-4">
                <img class="w-12 h-12 rounded-full" src="https://via.placeholder.com/150" alt="User Avatar"/>
                <input class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" type="text" placeholder="What's on your mind?"/>
                </div>
                <div class="flex justify-between items-center">
                <div class="flex space-x-2">
                    <button class="flex items-center space-x-1 text-red-500 hover:bg-gray-100 p-2 rounded-lg">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.94 5H13v7h-2v-7H4.06L9 10l3-4 3 4z"></path></svg>
                    <span>Photo</span>
                    </button>
                </div>
                <button class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Post</button>
                </div>
            </div>
        </div>
    ) : "";
};
export default Popuppost;