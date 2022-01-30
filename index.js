const employee = {
    name: "Fred",
    streetAdress: "202 Fish Tank Ln",
}
function updateEmployeeWithKeyAndValue(obj,key,value){
    const newObj = {...obj}
    newObj[key] = value
    return newObj
}
const newEmp = updateEmployeeWithKeyAndValue(employee, "name","Carl")

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key]=value
    return obj;
}
const destructiveemplyee = destructivelyUpdateEmployeeWithKeyAndValue(employee,"streetAdress", "69 cage rd")

function deleteFromEmployeeByKey(employee, key){
    const newKey = Object.assign({}, employee)
    delete newKey[key]
    return newKey
}
const deletedEmployee = deleteFromEmployeeByKey(employee,"name")

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key]
    return employee
}
const deletedDestructively = destructivelyDeleteFromEmployeeByKey(employee,"name")