let counter = 0;
export default
function uniqueId(){
  counter++;
  return 'uniqueId--' + counter;
}
