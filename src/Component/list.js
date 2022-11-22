import React from 'react'
import './list.css';



export default function list({info}) {
    console.log(info);
  return (
    <ul>
       {iterate(info)}
    </ul> 
          )
}

function iterate(data){
    if(!data) return;
    return(
        <>
            {
                data.map((person, index) => {
                    return (
                    <li key={index}>
                        <div className="flex">
                        <img className='image' src={person.img} alt="" />
                            <div className="title">
                                <h3 className='name'>{person.name}</h3>
                                <h4 className="age">{Old(person.birthday)} years</h4>
                            </div>
                        </div>
                    </li> 
                    )
                })
            }
        </>
    )
}

// check their Age
function Old(personAge){
    let year =new Date(personAge).getFullYear();
    let currentYear = new Date().getFullYear();

    let fullAge = currentYear - year;
    return fullAge;
}

