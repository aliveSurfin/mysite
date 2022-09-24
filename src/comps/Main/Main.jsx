import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
function Main() {
    return (
        <main>main


            <Routes>
                <Route path="/a" >test</Route>
                <Route path="/b">this is b</Route>
                <Route path="/c">this is c</Route>
                <Route path="/d">this is d</Route>
                <Route path="/">this is nothing</Route>

            </Routes>
        </main>
    )
}

export default Main
