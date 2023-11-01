async function sendSeveralRequests(endpoint, requestQuantity) {
    let endpointRespone;
    for (let i = 0; i < requestQuantity; i++) {
      endpointRespone = null;
      try {
        //send request and parse it to json
        endpointRespone = await fetch(endpoint).then((res) => res.json());
      } catch (error) {
          //error occured during fetching data
      }
      //response data exists, break the cycle
      if (endpointRespone) break;
    }
    return endpointRespone;
  }

export{
sendSeveralRequests
}