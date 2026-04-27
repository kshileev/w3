function show_hide_divs() {
    for (let div of document.querySelectorAll('.technology, .old_project, .cisco, .my_private')) {
        div.style.display = 'none';
    }
    if (this.value != 'EMPTY') {
        var div = document.querySelector(this.value);
        div.style.display = 'block';
    }
}

var main_selector = document.getElementById('main_selector');
main_selector.onchange = show_hide_divs;

for (let str of ['my_private', 'technology', 'old_project', 'cisco']) {
    main_selector.innerHTML += '<option value="EMPTY">🚥🚥🚥🚥🚥 Choose ' + str + ' 🚥🚥🚥🚥🚥</option>';
    var divs = document.getElementsByClassName(str);
    for (let div of divs) {
        let h2 = div.querySelector('h2') || div.id;
        main_selector.innerHTML += '<option value="#' + div.id + '">' + h2.innerHTML + '</option>';
    }
}

for (let link of document.querySelectorAll('a')) {
    link.target = '_blank';
}
