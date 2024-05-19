import React from 'react'
import { Helmet } from "react-helmet-async";
import { useNavigate } from 'react-router-dom';
import "./Error.scss"
function ErrorPage() {

    const navigate = useNavigate()

    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>ErrorPage</title>
            </Helmet>
            <div id={'ErrorPage'}>
                <h1 className={'error'}>404</h1>
                <h2 className={'message'}>The page cannot be found.</h2>
                <p className={'info'}>{"Sorry! The page you were looking for could not be found."} {"Try searching for it or browse through our website."}</p>
                <button onClick={()=>navigate("/")} className={`BorderButton toHome`}>Back to Home</button>
                
                {/* <marquee onMouseOver={(e)=>e.target.stop()} onMouseOut={(e)=>e.target.start()} loop="infinite" behaviour="sliding" direction="right">fdafdgadg</marquee> */}
            </div>
        </>
    )
}

export default ErrorPage
