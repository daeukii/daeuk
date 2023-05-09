import React from 'react';
import PostList from './PostList';

const PostMain = props => {
    return (
        <div className='ot'>
            <h2 align="center" className='ot1'>센츠헤븐 게시판</h2>
            <PostList />
        </div>
    )
}

export default PostMain;