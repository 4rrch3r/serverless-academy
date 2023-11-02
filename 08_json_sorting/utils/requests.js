async function sendSeveralRequests(endpoint, requestQuantity) {
    let endpointRespone=null;
    for (let i = 0; i < requestQuantity; i++) {
      try {
        //send request and parse it to json
        endpointRespone = await fetch(endpoint).then((res) => res.json());
      } catch (error) {
          //error occured during fetching data
          endpointRespone=null;
      }
      //response data exists, break the cycle
      if (endpointRespone) break;
    }
    return endpointRespone;
  }

export{
sendSeveralRequests
}