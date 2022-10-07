import React, {Component, useState, useReducer, useEffect, useCallback} from 'react'
import {Navigate, useLocation, useNavigate} from 'react-router-dom'
import '../App.css'

const  Carlos=() =>{
  return <div className='carlos'>
      <h2>Welcome to Carlos' page</h2>
      {<a href="https://www.linkedin.com/in/carloslopezferrer/">linkedin</a>}

<a href='https://github.com/lopezferrer'>github</a>
  </div>;
}

export default Carlos;