import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import axios from "axios"
import { FactComponent } from "@/components/FactComponent"
import { factModal } from "@/components/factModal"

const Home = () => {
  const router = useRouter()
  const [data, setData] = useState([])

  useEffect (() => {
    const UserLoggedIn = () => {
      const User = localStorage.getItem('user')
      if (User === null || User === false) {
        router.replace('/login')
      }
    } 
    const fetchData = async() => {
      const response = await axios.get('http://quiz-app-backend-service-d7p2.onrender.com/facts')
      setData(response.data)
    }
    UserLoggedIn()
    fetchData()
  }, [])

  console.log(data)

  return (
  <div>
    <div className="white"></div>
      <h1>facts</h1>
      <factModal/>
      {
        data.map((factData) => (
          <FactComponent factData={factData} />
          ))
        }
  </div>
  )
}

export default Home