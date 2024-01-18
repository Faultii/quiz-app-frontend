import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/router"

const Signup = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()
    console.log(email, username, age, password)
        const userSignUp = async() => {
            const responseback = await axios.post('https://quiz-app-backend-service-d7p2.onrender.com/signup',
            {
                email,
                username,
                age,
                password
            }
            )
            console.log(responseback)
            if(responseback.status === 403) alert('The email is already taken.') 
            else if (responseback.status === 200) alert("User created."), router.push('/login')
        }
    return (
    <div>
        <div className="white">
        </div>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <div className="box1">
                    <input className="input" type="text" placeholder="Please enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                    <input className="input" type="text" placeholder="Please enter your username" value={username} onChange={(e) => setUsername(e.target.value)} required></input>
                    <input className="input" type="number" placeholder="Please enter your age" value={age} onChange={(e) => setAge(e.target.value)} required></input>
                    <input className="input" type="text" placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                    <button className="button2" onClick={userSignUp}>Done</button>
                </div>
            </div>
    </div>
 )   
}

export default Signup