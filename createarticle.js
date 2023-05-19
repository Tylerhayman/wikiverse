import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import {View, TextInput} from 'react-native';

function createArticle() {
    const [author, setAuthor] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState("");


    const handleSubmit = () => {

    }
    <form>
        {/*  // This part of the code handles the input for the Author's name */}
        <label for="authorName">Enter the Author's name.</label>
        <input value={author} type="authorName" placeholder="John Doe" id="name" name="author"></input>

        <br></br>

        {/*  // This part of the code handles the input for the Author's email address */}   
        <label for="authorEmail">Enter the Author's email.</label>
        <input value={email} type="authorEmail" placeholder="email@email.com" id="email" name="email"></input>

        <br></br>

        {/*  // This part of the code handles the input for the title of the article */}
        <label for="articleTitle">Enter the title of the article.</label>
        <input value={title}  type="articleTitle" placeholder="Article Title" id="title" name="title"></input>

        <br></br>

        {/*  // This part of the code handles the input for the body of the article. */}
        <label for="articleBody">Enter the content of your article.</label>
        <input value={body} type="articleBody" placeholder="Article Body" id="body" name="body"></input>

        <br></br>

        {/*  // This part of the code handles the input for the tags of the article. */}
        <label for="articleTags">Enter the tags of your article, seperated by comma.</label>
        <input value={tags} type="articleTags" placeholder="Article, Tags" id="tags" name="tags"></input>

        <button>Submit Article</button>




    </form>
}





