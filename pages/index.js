import {useState} from "react";
import axios from "axios";
import API from "../services/api";
import SearchForm from "../components/SearchForm";
import Result from "../components/Result";

export default function Home() {
  const [searchResult, setSearchResult] = useState('')
  const [serviceFields, setServiceFields] = useState({
    name: '',
    latitude: '',
    longitude: ''
  })

  const getResults = async () => {
    const {data} = await API.getSearchResult(serviceFields)
    setSearchResult(data)
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    getResults()
  }

  const handleFieldsChange = (name, value)=>{
   setServiceFields({...serviceFields, [name]: value})
  }


  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className="mt-6 text-center text-4xl font-extrabold text-indigo-800">Searchables</h2>
              <p className="mt-2 mb-3 text-center text-sm text-blue-900 max-w">
                Search your service with name
              </p>
            </div>
            <SearchForm serviceFields={serviceFields} handleSubmit={handleFormSubmit} handleFieldsChange={handleFieldsChange} />
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"/>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Api Result</span>
                </div>
              </div>
             <Result searchResult={searchResult}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
