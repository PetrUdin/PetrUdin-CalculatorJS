document.addEventListener("DOMContentLoaded", () => {
    let header = document.querySelector(".header");
    header.addEventListener("click", () => {
        location.reload()
    });

    document.querySelector('.answer').readOnly = true;
    let screen = document.querySelector('.answer');
    let buttons = document.querySelectorAll('button');
    let screenValue = '';
    for (item of buttons) {
        item.addEventListener('click', (event) => {
            buttonText = event.target.innerText;
            if (buttonText == 'X') {
                buttonText = '*';
                screenValue += buttonText;
                screen.value = screenValue;
            }
            else if (buttonText == 'C') {
                screenValue = "";
                screen.value = screenValue;
            }
            else if (buttonText == '=') {
                screen.value = eval(screenValue);
            }
            else {
                screenValue += buttonText;
                screen.value = screenValue;
            }
    
        })
    }
    
    document.addEventListener("keydown", (event) => {
        if(event.shiftKey==57){
            event.key = '(';
        }
        else if(event.shiftKey==48){
            event.key = ')';
        }
        else if(event.shiftKey==53){
            event.key = '%';
        }
        if(event.keyCode==88){
            screenValue += '*';
            screen.value = screenValue;
        }
        if(event.key<=9 || event.key=='+' || event.key=='-' || event.key=='*' || event.key=='.' || event.key=='/' || event.key=='%' || event.key=='(' || event.key==')'){
            screenValue += event.key;
            screen.value = screenValue;
        }
        if(event.keyCode == 13 || event.keyCode == 187)
        {
            screen.value = eval(screenValue);
        }
        else if(event.keyCode == 46){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(event.keyCode == 8){
            screenValue = screenValue.slice(0, -1);
            screen.value = screenValue;
        }
        else if(event.keyCode == 67){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(event.keyCode == 82){
            location.reload();
        }
      })
    
      window.onerror = function(){
          alert("Недопустимое выражение");
          screenValue = "";
          screen.value = screenValue;
      }
});
