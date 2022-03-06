import React from 'react'

const SearchForm = ({serviceFields, handleSubmit, handleFieldsChange},) => {
  return (
    <form className="space-y-6" onSubmit={(event) => handleSubmit(event)}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Enter name of service
        </label>
        <div className="mt-1">
          <input
            id="serviceName"
            type='text'
            required
            value={serviceFields.name}
            onChange={(event) => {
              handleFieldsChange('name', event.target.value )
            }}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Enter Lat
        </label>
        <div className="mt-1">
          <input
            id="latitude"
            name="latitude"
            type="text"
            required
            value={serviceFields.latitude}
            onChange={(event) => {
              handleFieldsChange('latitude', event.target.value )
            }}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Enter Longitude
        </label>
        <div className="mt-1">
          <input
            id="longitude"
            name="longitude"
            type="text"
            required
            value={serviceFields.longitude}
            onChange={(event) => {
              handleFieldsChange('longitude', event.target.value )
            }}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div className='flex justify-center'>
        <button
          type="submit"
          className="inline-flex flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          Search
        </button>
      </div>
    </form>
  )
}
export default SearchForm