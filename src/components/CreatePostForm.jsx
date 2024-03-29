import react, { useState } from 'react';

function CreatePostForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    let handleSubmit = (event) => {
        event.preventDefault();

        if (title === "" || content === "") {
            alert("Post title and post content are required!");
        } else {
            console.log(title, content);
            props.onNewSubmit({title, content});
            setTitle("");
            setContent("");
        }
    }

    let handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    let handleContentChange = (event) => {
        setContent(event.target.value);
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label for="postTitle">Create title for post: </label>
            <input type="text" name="postTitle" onChange={handleTitleChange} value={title}/>
            <br />
            <label for="postContent">Content: </label>
            <textarea type="textarea" name="postContent" onChange={handleContentChange} value={content}></textarea>
            <br />
            <br />
            <input type="submit" disabled={title === "" || content === ""}/>
        </form>
    )
};

export default CreatePostForm