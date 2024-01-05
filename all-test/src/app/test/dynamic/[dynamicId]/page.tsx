export default  function Detail({params}:{
    params: {dynamicId: string}
}) {
    return <h1>Detail page {params.dynamicId}</h1>
  }
  