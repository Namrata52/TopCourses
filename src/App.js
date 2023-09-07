import {apiUrl, filterData} from "./data";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Cards from './components/Cards';
import './App.css'
import React from "react";
import Spinner from "./components/Spinner";
import {useEffect, useState} from "react";
import {toast} from "react-toastify"


const App = () => {
    const [loading, setLoading] = useState(true);
    let [courses, setCourses] = useState(null);
    let[category,setCategory]=useState(filterData[0].title);

    async function fetchData() {
        setLoading(true);
        try {
            const response = await fetch(apiUrl);
            const output = await response.json();
            setCourses(output.data);
        } catch (error) {
            toast.error("something went wrong")
        }
        setLoading(false);
    }

    useEffect( ()=>{
        fetchData();
    },[])

    return (
        <div className="min-h-screen flex flex-col bg-slate-800">
            <div>
                <Navbar/>
            </div>
            <div>
                <Filter filterData={filterData} category ={category} setCategory={setCategory}/>
            </div>
            <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center flex-wrap min-h-[50vh] items-center">
                {
                    loading? (<Spinner/>): (<Cards category ={category} courses={courses}/>)
                }

            </div>
        </div>
    );
}
export default App;