import '../App.css'
import React, { useState ,useEffect } from 'react'
import { useLazyGetSummaryQuery } from '../Store/ArticleApi'
import loader from '../images/loader.svg'
import logo from '../images/logo2.png'






const SearchSection = () => {
  const [article, setarticle] = useState({
    url:'',
    summary:''
  })

  const [updatedURL, setarticleURL] = useState([])

  const [loading ,setloading ]=useState(false);

  const [getSummary ,{error , isfetching} ]=useLazyGetSummaryQuery();
  console.log(isfetching ,"fetching data first")

 async function formHandler(e){
  e.preventDefault();
  setloading(true)
 const {data} =await getSummary ({
  articleURL :article.url

 })

 if(data?.summary){
  const newArticle = {...article , summary:data.summary}

  const newarticleURL= [newArticle , ...updatedURL]

  setarticle(newArticle)

 setarticleURL(newarticleURL)

  console.log(newArticle)
  console.log(newarticleURL)
  console.log (updatedURL ,"url state")
  console.log(article ,"article state")
  console.log(isfetching , "fetching ")
  setloading(false)
 }

  }

  function inputHandler(e){

    setarticle({...article ,url:e.target.value})


  }


  return (
<section className='Search-section-container'>
    <div>
    <form className='Searchbar-form' onSubmit={formHandler} >
      <div>
      &#128279;
      <input type="url" required placeholder='Enter a url' value={article.url} onChange={inputHandler}/>
      </div>
      
      <button> &#x21A9;</button>

    </form>
    {/* history will be here  */}

    <div>
      {updatedURL.map((item )=>(
        <div className='urldiv' onClick={()=>window.open(item.url)}>
          {item.url}
          
          </div>

          
          
      )

      )}
    </div>

    
    
    </div>

    <div>
        {loading ?   <img src={loader} alt="" />  
        : error ?(<p>error happend</p>) : ( updatedURL && <div >
           {updatedURL.map((item,index)=>(
        <div key={index} className='summary-div' > 
        <h1>Article <span className='specialtext'>Summary</span></h1>
        <div className='summary-box'> 
        {item.summary}
        </div>
          
          
          </div>
      )
      )}
          </div>

        )

        }
        


    </div>


    {/* <div>
    {updatedURL.map((item,index)=>(
        <div key={index}>
          {item.summary}
          
          </div>
      )
      )}
  
    
    </div> */}

</section>


  )
}

export default SearchSection