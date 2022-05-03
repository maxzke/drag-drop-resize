// function move(id){
//     let dragValue = null;
//     let element = document.getElementById(id);
//     console.log('clickElement'+element)
//     element.onmousedown = function () {
//         dragValue = element;
//         console.log('click'+id)
//     }
//     document.onmousemove = function(e){
//         if (dragValue != null) {                    
//             let x = e.pageX;
//             let y = e.pageY;
//             dragValue.style.left = x+'px';
//             dragValue.style.top = y+'px';
//         }
//     }
//     document.onmouseup = function(){
//         dragValue = null;
//     }
// }
let selected;
let draggable = false;
function drag(){
    draggable = !draggable;
    console.log(draggable);
}
function move(element){
    const elements = document.querySelectorAll('.element');
    if (draggable === true) {
        elements.forEach(element => {
            element.addEventListener('mousedown',()=>{
                selected = element;
                document.onmousemove = (e)=>{
                    if (selected != null && draggable == true) {
                        let x = e.pageX;
                        let y = e.pageY;
                        selected.style.left = x -50+"px";
                        selected.style.top = y -50+"px";
                    }                
                }
                document.onmouseup = function(e){
                    selected = null;
                }
    
            });
        });
    }    
}