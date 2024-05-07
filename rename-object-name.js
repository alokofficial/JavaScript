const object={
firstName:"alok",
lastName:"kumar",
age:22
}

const renameObject=(object)=>{
    object.fullName=object.firstName+" "+object.lastName
    delete object.firstName
    delete object.lastName
    return object
}
console.log(renameObject(object))