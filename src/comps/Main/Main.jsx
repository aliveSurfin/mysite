import React from 'react'
import {
    Route,
    Routes,
  } from "react-router-dom";

  import "./main.scss"
function Main() {
    return (
        <main>main {" "}


            <Routes>
                <Route path="/resume" element={"resume"}/>
                <Route path="/blog" element ={"blog"}/>
                <Route path="/projects" element ={"projects"}/>
                <Route path="/" element={"home"}></Route>

            </Routes>
        </main>
    )
}

export default Main
