function Search() {
  return (
    <>
      <div className="bg-white text-black w-full h-16 rounded-xl mb-3 shadow-lg p-2">
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Search"
          className="w-full h-full text-2xl rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
    </>
  )
}

export default Search
