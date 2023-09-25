

function PostCard({ title,body,device }) {
    return (
        <div className='PostCard'>
            <h3>Post Name</h3>
            <p>Post Body</p>
            <p>Device</p>
            <button>Edit Post</button>
            <button>Delete</button>
        </div>
    )
}

export default PostCard
