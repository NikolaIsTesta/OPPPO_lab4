var reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');
export function loadFile() {
    reader.open('get', 'task-list.txt', true); 
    reader.onreadystatechange = () => {
            if(reader.readyState==4) {
                displayContents()
            }
    }
    reader.send(null);
}

export function displayContents() {
    var el = document.getElementById('main');
    el.outerText =  "\n" + reader.responseText;
}