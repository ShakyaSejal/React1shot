import React from 'react'

const Form = () => {
  return (
    <> <div class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 class="text-2xl font-bold mb-6 text-center">Edit Profile</h1>
        
        <form action="#" method="POST" class="space-y-4">
            {/* <!-- Name Field --> */}
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="John Doe" 
                    required/>
            </div>

            {/* <!-- Email Field --> */}
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="john.doe@example.com" 
                    required/>
            </div>

            {/* <!-- Bio Field --> */}
            <div>
                <label for="bio" class="block text-sm font-medium text-gray-700">Bio</label>
                <textarea 
                    id="bio" 
                    name="bio" 
                    rows="4" 
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Tell us something about yourself"></textarea>
            </div>

            {/* <!-- Submit Button --> */}
            <div class="flex justify-end">
                <button 
                    type="submit" 
                    class="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Save Changes
                </button>
            </div>
        </form>
    </div>
    </div></>
  )
}

export default Form