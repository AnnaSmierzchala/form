let isDark = false;

function buttonText (querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
  }
  buttonText ('.change--js', 'włącz tryb ciemny');

const button = document.querySelector('.change--js');


button.addEventListener('click', function() {
    if (isDark == false) {
    
    document.documentElement.style.setProperty(`--my-background`, `#444444`);
    document.documentElement.style.setProperty(`--my-color`, `white`);

    
    buttonText ('.change--js', 'włącz tryb jasny')

    isDark = true;
}

else {
    document.documentElement.style.setProperty(`--my-background`, `#f5f5f5`);
    document.documentElement.style.setProperty(`--my-color`, `black`);

    buttonText ('.change--js', 'włącz tryb ciemny')

    isDark = false;

   

}
})













