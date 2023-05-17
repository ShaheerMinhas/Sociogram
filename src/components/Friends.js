import React, { useEffect, useState } from 'react'
// Css in Dashboard.css



const Friends = () => {
    const [friendList, setFriendList] = useState([])
    const friends = async () => {
        console.log('friends')
        // const res = await fetch(`http://localhost:5000/friendpeople?userId=${localStorage.getItem('logid')}`,
        const res = await fetch(`http://localhost:5000/friendpeople`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: localStorage.getItem('logid')
                })

            }
        )
        const data = await res.json()
        console.log({ data })
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
                            <img src='https://picsum.photos/seed/picsum/300/500' alt="Avatar" className="imgdp" />
                                <h3>{friend.username}</h3>
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