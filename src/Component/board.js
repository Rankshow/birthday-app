import React from 'react'
import './board.css';
import List from './list';


const info = [
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCW-b_8vszbCQJVoDGqwLNzXfubUHl1Sa2Iw&usqp=CAU",
    name: "Micheal Owen",
    birthday: "1990-11-12",
},
{
    img: "https://images.unsplash.com/photo-1667611209778-ba82bd262af3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    name: "Larry Shaw",
    birthday: "1996-11-12",
},
{
    img: "https://images.unsplash.com/photo-1667338614163-6efc1ca91b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    name: "Angela Smith",
    birthday: "1997-11-15",
},
{
    img: "https://images.unsplash.com/photo-1659598086265-4728c6fbce19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    name: "Angela Smith",
    birthday: "1998-11-15",
},
{
    img: "https://images.unsplash.com/photo-1650196186567-b42a5de15fb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    name: "Boyls Gabriel",
    birthday: "1995-01-14",
},
{
    img: "https://images.unsplash.com/photo-1652767935209-e0bf66690fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    name: "Cythia Gabriel",
    birthday: "1992-09-15",
}
];

export default function board() {
  return (
    <main id='site-main'>
        <h1 className="text-dark title">Birthday Reminder for 6 Person</h1>

        <div className="board">
        <List info={info}></List>
        <h2 className='upcoming'>Upcoming Birthday</h2>
      
        </div>
    </main>
  )
}

