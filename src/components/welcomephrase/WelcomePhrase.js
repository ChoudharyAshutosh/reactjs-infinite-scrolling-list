import './WelcomePhrase.css'
export default function WelcomePhrase({message}){
    //welcome message
    return(
        <div className="welcome-phrase">{message}</div>
    )
}