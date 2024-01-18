import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/router"

const login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    console.log(password, email)
    const userLogin = async () => {
        const response = await axios.post('https://quiz-app-backend-service-d7p2.onrender.com/login',
            {
                email,
                password
            }
        )
        console.log(response)
        if(response.status === 400) alert("Your email or password is incorrect.")
        else if(response.status === 200) alert("Successfully entered."), router.push('/')
    }
    const signupUser= async () => {
        document.getElementById("signUpButton").onclick = function () {
            router.push('/signup')
        }
    }
    return (
        <div>
            <div className="white">
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <div className="box">
                    <input className="input" type="text" placeholder="Email or phone number" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                    <input className="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                    <button className="button" onClick={userLogin} >Log in</button>
                    <div className="line"></div>
                    <button className="button2" id="signUpButton" onClick={signupUser}>Create new account</button>
                </div>
            </div>
        </div>
    )
}


export default login
