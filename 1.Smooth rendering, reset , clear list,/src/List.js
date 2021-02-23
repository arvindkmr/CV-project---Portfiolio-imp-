import React from 'react';

const List = ({person}) => {
  return (
    <>
     {
       person.map((obj)=>{
         const {name,id,age,image}= obj;
         return <article key={id}  className="person">
            <img src={image} alt=""/>
            <div>
              <h4>{name}</h4>
              <p>{age} Years Old</p>
            </div>
         </article>
       })
     }
    </>
  );
};

export default List;
