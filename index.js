var recipes = {}

function updateObjectWithKeyAndValue(obj,key,val) {
  return Object.assign({[key]: val}, obj)
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,val) {
  obj[key] = val
  return obj
}