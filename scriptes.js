const table = document.getElementById("tablas")
let innertable = ""


function LoadStuff() {
    for (let index = 0; index < userlist.length; index++) {

        const element = userlist[index];
        const userid = element["userId"]
        const title = element["title"]
        const body = element["body"]
        if (index % 3 == 0) {
            innertable+= "</tr></tr><tr id='card_row'>"
        }
        innertable += "<td id='card'><h2 id='titlecard'>"+title+ userid +"</h2><p id='bodycard'>"+body+"</p></td>"
    }

    //<h1 id='felhasz'>"+"felhasz id: WWWAWAW"+userid+"WAWAWA</h1>
    table.innerHTML = innertable
}