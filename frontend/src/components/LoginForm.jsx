import "./loginForm.scss"
import { useState } from "react";

function LoginForm({ onLogin, onUserName, onSignup }) {

    const [formData, setFormData] = useState(
        {
            email: "",
            password: ""
        }
    )

    const handleLogin = () => {
        onLogin()
    }

    const handleChange = (e) => {
        // Update the formData state when input fields change
        const { name, value } = e.target;
        if (value.length < 20) {
            setFormData({
                ...formData,
                [name]: value,
            });
            console.log(e.target.name)
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const postAccountData = async (formData) => {
            const response = await fetch('http://Localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            return response.json()
        }
        try {
            const response = await (postAccountData(formData))
            if (response.data == "found") {
                console.log(response)
                sendUserName(response.firstName, response.lastName)
                handleLogin()
            }
            else (
                console.log("user Does not Exist")
            )

        }
        catch (error) {
            console.error(error)
        }
    }
  
   const sendUserName = (fName, lName) =>{
     onUserName(fName,lName)
   }

   const handleSignupActionButton = () =>{
     onSignup()
   }
    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <p>Log In</p>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
            />
            <button type="submit">LOG IN</button>
            <div className="signup-action-container">
            <p>New to Beemart? <span className="signup-action-button" onClick= {handleSignupActionButton}>Sign Up</span></p>
            </div>
        </form>
    )
}

export default LoginForm