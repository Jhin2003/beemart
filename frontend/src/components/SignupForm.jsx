import "./signupForm.scss"
import { useState } from "react";

function SignupForm ({onSignup, onLogin}) {

    const [formData, setFormData] = useState(
        {   
            firstname : "",
            lastname : "",
            email: "",
            password: ""
        }
    )

    const [SignedUp, setSignedUp] = useState(false)

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
            const response = await fetch('http://Localhost:3000/signup', {
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
            if(response.data == "posted"){
                console.log("posted")
               setSignedUp(true)
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    const handleLoginActionButton = () =>{
        onLogin()
    }

 
    return(
        <>
        <form className= {SignedUp ? "signup-form inactive" : "signup-form active"} onSubmit={handleSubmit}>
            <p>Sign Up</p>
            <input
                type = "text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="First Name"
            />
              <input
                type = "text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Last Name"
            />
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
            <button type="submit">SIGN UP</button>
            <div className="login-action-container">
            <p>Already have an account? <span className="login-action-button" onClick={handleLoginActionButton}>Log in</span></p>
            </div>
        </form>
        {SignedUp &&
        <>
        <p>Sign Up Succesful, You may now Login</p>
        <button  onClick={handleLoginActionButton}>sdsd</button>
        </>
        }
        </>
 )
}

export default SignupForm