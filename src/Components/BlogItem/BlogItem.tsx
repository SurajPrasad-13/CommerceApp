import React from 'react'

const BlogItem = () => {
  return (
    <div className='blogItem group'>
      <div className="imgWrapper w-full overflow-hidden rounded-md">
        <img src="https://serviceapi.spicezgold.com/download/1760239113701_NewProject(4).jpg" alt="blog image" className="w-full transition-all group-hover:scale-105 cursor-pointer" />
      </div>
      <div className="info"></div>
    </div>
  )
}

export default BlogItem