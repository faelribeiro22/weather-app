import { FaSearch } from 'react-icons/fa'

function Search() {
  return (
    <>
      <div className="bg-white text-black w-full h-16 rounded-xl mb-3 shadow-lg p-2 relative">
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Search"
          className="w-full h-full text-2xl rounded-lg focus:outline-none focus:ring focus:border-blue-300 pl-4 pr-12"
        />
        <button
          type="submit"
          className="absolute right-8 p-3 text-gray-600 hover:text-gray-800 focus:outline-none"
          aria-label="Search"
        >
          <FaSearch size={24} />
        </button>
      </div>
    </>
  )
}

export default Search
