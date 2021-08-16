import React from 'react'
import { useField } from '../hooks/index'
import "../style.css"

const CreateNew = ({ addNew }) => {
    const content = useField('text')
    const author = useField('text')
    const url = useField('text')

    const handleSubmit = event => {
        event.preventDefault()
        addNew({
            content: content.value,
            author: author.value,
            info: url.value,
            votes: 0
        })
        content.reset()
        author.reset()
        url.reset()
    }

    const handleReset = (event) => {
        event.preventDefault()
        content.reset()
        author.reset()
        url.reset()
    }

    return (
        <div>
            <h2>Create New Anecdote</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-div">
                    <label for="content">Content:</label>
                    <br/>
                    <input {...content} required id="content"/>
                </div>
                <div className="input-div">
                    <label for="author">Author:</label>
                    <br/>
                    <input {...author} required id="author"/>
                </div>
                <div className="input-div">
                    <label for="url">Url for more info:</label>
                    <br/>
                    <input {...url} required id="url"/>
                </div>
                <div className="input-div">
                    <button>create</button>
                    <button onClick={handleReset}>clear</button>
                </div>
            </form>
        </div>
    )
}

export default CreateNew