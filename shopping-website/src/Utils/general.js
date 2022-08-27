

const getAndUpdateinputValue =(event,updateFunction)=> {
  
  const data = event.target.value
  updateFunction(data)
 
    
  }

  export default getAndUpdateinputValue
