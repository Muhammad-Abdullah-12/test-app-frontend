import React from "react";

const Result = ({searchResult}) => {
  return (
    <div className="mt-6 flex justify-center">
      <div>
        {Object.keys(searchResult).length > 0 &&
          <div>
            <div>Total Documents: {searchResult.totalDocuments}</div>
            <div>Total Hits: {searchResult.totalHits}</div>
            <div>{searchResult.results?.map((service, index) => (
                <div key={service.id} className="mt-2">
                  <div className="block text-sm font-medium text-gray-700">{index + 1}:</div>
                  <div>Service Id: {service.id}</div>
                  <div>Service Name: {service.name}</div>
                  <div>Service Latitude: {service.position.lat}</div>
                  <div>Service Longitude: {service.position.lng}</div>
                  <div>Service Score: {service.score}</div>
                  <div>Service Distance: {service.distance} km</div>
                </div>
              )
            )
            }</div>

          </div>
        }
      </div>
    </div>
  )
}

export default Result
