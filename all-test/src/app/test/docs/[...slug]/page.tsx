export default  function Docts({params}:{
    params: {
        slug: string[]
    }
}) {
    if(params.slug.length===1){
        return <h1>Hello {params.slug[0]}</h1>
    }
    else if (params.slug.length===2){
        return <h1>hi {params.slug[0]} and {params.slug[1]}</h1>
    }
    
    return <h1>Docts page</h1>
  }
  