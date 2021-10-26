import React, {useEffect, useState} from 'react'

function AccountManagment({apiUrl}) {
    const [userData, setUserData]=useState([]);
    useEffect(() =>{
        fetch(`${apiUrl}`)
        .then((response)=> response.json())
        .then((data => setUserData(data)));
    },[]);


    return (
        <div>
            
        </div>
    )
}

export default AccountManagment
