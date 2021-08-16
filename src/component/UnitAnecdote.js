import React from 'react';

const UnitAnecdote = ({anecdote, vote}) => {

    return (
        <div>
            <h1>{anecdote.content} by {anecdote.author}</h1>

            <p>has <b>{anecdote.votes}</b> Votes</p>
            
            <button onClick={()=> vote(anecdote.id)} style={{backgroundColor: "blue", color: "white", padding: 10, border: "none"}}> Kindly Votes this Anecdote as Favorite</button>
            <br />
            <p>for more information, see <a href='/'>{anecdote.info}</a></p>

        </div>
    )
}

export default UnitAnecdote