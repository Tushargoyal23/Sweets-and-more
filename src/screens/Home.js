import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Slides from '../components/Slides'
export default function Home() {
  const [foodCat, setFoodCat] = useState([]);// creating the function to set the category data 
  const [foodItem, setFoodItem] = useState([]);// set the dishes

  // fetching the data from display data page
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    setFoodCat(response[1]);// set category
    setFoodItem(response[0]);// set dishes
    console.log(response[0], response[1]);
  }
  // the function is useful to load data instantly at the time of loading the page first time
  // this function loading can also be controlled by putting the required condition in the brakets below  
  useEffect(() => {
    loadData()
  }, [])
  return (
    <div className='bg-dark'>
      <div><Navbar /></div>
      {/* <div className="progress">
        <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div> */}
      <div><Slides /></div>

      <div className='container'>
        { // checking the condition for displaying the food categories if data is available the map function display the aquired data
          foodCat !== []
            ? foodCat.map((data) => {
              return (
                <div className='row mb-3'>
                  <div key={data._id} className='fs-3 m-3 text-light'>{data.CategoryName}</div>
                  {/* displaying the category names
                   further we use the food items foer the same to display is the correct manner with the help of filter and map function
                */}
                  <hr className='bg-light' />
                  {foodItem !== [] ? foodItem.filter((item) => item.CategoryName === data.CategoryName).map(filterItems => {
                    return (
                      <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'><Card
                        foodItem={filterItems} 
                        options={filterItems.options[0]} ></Card></div>
                    )
                  })
                    : <div>data not found</div>

                  }
                </div>

              )
            })
            : <div>error</div>
        }
      </div>
      <div><Footer /></div>
    </div>
  )
}
