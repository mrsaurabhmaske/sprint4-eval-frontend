import { useState,useEffect} from 'react'
import { baseURL } from '../api';
import axios from 'axios';
import PostCard from '../components/PostCard';

function AllPosts() {

    const [posts, setPosts] = useState([])

    const getUserPosts = async () => { 
        try {
            let res = await axios.get(`${baseURL}/posts`, {
                headers: {
                    "Authorization": `${localStorage.getItem('token')}`
                }
            });
            
            setPosts(res.data.allPosts)
        } catch (error) {
            console.log(error)
        }
    } 

    useEffect(() => { 
        getUserPosts();
    },[])

    return (
        <>
            <h1>{(posts.length)?"All Posts":"No Posts found"}</h1>
        <div className='AllPosts'>
            { posts.map((post) => {
                return (
                    <PostCard title={post.title} body={post.body} device={post.device} key={post._id}/>
                    )
                })}
        </div>
                </>
        
    )
}

export default AllPosts
