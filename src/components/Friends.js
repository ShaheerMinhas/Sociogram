import React, { useEffect, useState } from 'react'
// Css in Dashboard.css



const Friends = () => {
    const [friendList, setFriendList] = useState([])
    const friends = async () => {
        const res = await fetch(`http://localhost:3000/friendpeople?userId=${localStorage.getItem('logid')}`)
        const data = await res.json()
        setFriendList(data)
    }
    useEffect(() => {
        friends()

    }, [])
    return (
        <div className='friendContainer'>
            <div>
                <h1 className='friendsHeading'>Your Friends</h1>
            </div>
            <ul>
                {friendList.map((friend) => {
                    return (
                        <li key={friend.id}>
                            <div>
                                <h3>{friend.name}</h3>
                                <p>{friend.email}</p>
                            </div>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default Friends