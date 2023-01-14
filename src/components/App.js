import React from "react";
import blogData from "../data/blog";


function Header({name}){
  return (
    <header> <h1> {name} </h1> </header>
  )
}

function  About({about, logo , image="https://via.placeholder.com/215" }){
  return(
    <aside>
      <img src={image} alt={logo}/>
      <p>{about}</p>
    </aside>
  )
}function Article({title,date="January 1, 1970",preview, minutes}){
  return(
    <article>
      <h3>{title}</h3>

      <small>{`${date} • ${minutes<30? "☕️".repeat(Math.ceil(minutes/5))+ `${minutes}` :"🍱".repeat(Math.ceil(minutes/10)) +`${minutes}` } mins read`}</small>
      <p>{preview}</p>

    </article>
  )

}
function Articlelist({posts}){
  const article=posts.map((post)=>{
    return(
      <Article key={post.id}title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
    )
  })
  return(
    <main>
      {article}
      
    </main>
  )
}

 
function App() {
 
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About img={blogData.image} logo={blogData.logo} about={blogData.about}/>
      <Articlelist posts={blogData.posts}/>
    </div>
  )

}

export default App;
