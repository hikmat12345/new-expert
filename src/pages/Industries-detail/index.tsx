import React,{useEffect} from 'react'

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}



function Industries(posts:any) {

  useEffect(() => {
    console.log("details",posts);

  }, [])

  
  return (
    <div>
                 
    </div>
  )
}

export default Industries