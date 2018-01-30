var recipes = {}

function updateObjectWithKeyAndValue(obj,key,val) {
  return Object.assign({[key]: val}, obj)
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,val) {
  obj[key] = val
  return obj
}

function deleteFromObjectByKey(obj,key) {
  var nobj = Object.assign({}, obj)
  return nobj
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,val) {
  obj[key] = val
  return obj
}