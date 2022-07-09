import React from "react"

export default function App() {
    
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        password2: "",
        okayToEmail: false
    })
    
    function handleSubmit(event) {
        event.preventDefault()
        if (formData.password === formData.password2) {
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
            return
        }
        
        if (formData.okayToEmail) {
            console.log("Thanks for signing up for our newsletter!")
        }
    }
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="password2"
                    value={formData.password2}
                    onChange={handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        checked={formData.okayToEmail}
                        name="okayToEmail"
                        onChange={handleChange}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}