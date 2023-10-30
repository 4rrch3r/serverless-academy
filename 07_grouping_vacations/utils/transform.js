function transformVacationsData(rawVacations)
{
    let transformedVacations = [];
     //iterate throught raw vacations data to transform it 
  rawVacations.forEach((rawVacation) => {
    //try to find in transformed data user with the same id
    let indexOfTransfromedVacation = transformedVacations.findIndex((transformedVacation) =>transformedVacation?.userId == rawVacation?.user["_id"]);
    //user does not exist in transformed vacations
    if (indexOfTransfromedVacation === -1) {
        //add user in transformed format
      transformedVacations.push({
        userId: rawVacation?.user["_id"],
        userName: rawVacation?.user?.name,
        vacations: [
          {
            startDate: rawVacation?.startDate,
            endDate: rawVacation?.endDate,
          },
        ],
      });
    }
    //user was found in transformed data 
    else {
        //try to find the same vacations in transformed data
        let sameVacations = transformedVacations[indexOfTransfromedVacation]?.vacations.find(element=>element.startDate==rawVacation?.startDate&&rawVacation?.endDate)
        //if no duplicates were found then add the vacation to transformed data by index
        if(!sameVacations)
            transformedVacations[indexOfTransfromedVacation]?.vacations.push({
                startDate: rawVacation?.startDate,
                endDate: rawVacation?.endDate,
            });
    }
  });

  return transformedVacations;
}

export {
    transformVacationsData
}