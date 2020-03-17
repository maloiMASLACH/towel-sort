module.exports = function towelSort (matrix) {
 
  var a=[];
  
   if(!matrix) return a;if(matrix.length==0)  return [];
    for(var i=0;i<matrix.length;i++)
    if (i%2==0)
      for(var j=0;j<matrix[i].length;j++)
a.push(matrix[i][j]);
else for(var j=matrix[i].length-1;j>-1;j--)
a.push(matrix[i][j]);
  

 return a;
}
