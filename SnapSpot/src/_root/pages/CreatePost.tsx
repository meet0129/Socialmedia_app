import PostForm from "@/components/Forms/PostForm"

const CreatePost = () => {
  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="flex-start gap-3 max-w-5xl justify-start w-full">
        <img src="assets\icons\add-post.svg" alt="add" width={26} height={26}/>
        <h2 className="h3-bold md:h2-bold text-left w-full">Create Post</h2>
        </div>

        <PostForm action="Create"/>
      </div>
    </div>
  )
}

export default CreatePost