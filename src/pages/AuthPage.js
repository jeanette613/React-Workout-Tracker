import SignUpForm from "../components/SignUpForm/SignUpForm";
import { useState } from "react"

export default function AuthPage({ setUser }) {
    //    const [showSignUp, setShowSignUp] = useState(falsey)
    return (<main>
        <h1>Auth Page PlaceHolder</h1>

        <SignUpForm setUser={setUser} />

    </main>)
}