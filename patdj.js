var patch = (function(){
return function patch(base, path, leaf){
  var output = clone(base)
  var head   = path.slice(0, path.length - 1)
  var tail   = path.slice(-1)
  
  var node   = output
  
  for(var i = 0; i < path.length; i++){      
    node[path[i]] = clone(node[path[i]])
    
    node = node[path[i]]
  }
  
  node[tail] = leaf
  
  return output  
}

function clone(x){
  return Object.assign(
    Array.isArray(x)
    ? new Array(x.length)
    : {},
    
    x
  )
}
}())

if(typeof module === 'object')
  module.exports = patdj 
if(typeof window === 'object')
  window.patdj = patdj
