/*

<ul>
    <li><a href='gals.html'>Gals</a></li>
    <li><a href='gals.html'>Guys</a></li>
    <li><a href='gals.html'>Gays</a></li>
    <li><a href='gals.html'>Gasp!</a></li>
    <li><a href='gals.html'>Gas</a></li>
    <li><a href='gals.html'>Goodbyes</a></li>
    <li><a href='gals.html'>Galactic</a></li>
    <li><a href='gals.html'>Get Some</a></li>
    <li><a href='gals.html'>Who Are These Hussies</a></li>
</ul>

*/

function myNavInsert() {
    const ul = document.getElementById("navList");
    let html = "<li><a href='gals.html'>Gals</a></li><li><a href='gals.html'>Guys</a></li><li><a href='gals.html'>Gays</a></li><li><a href='gals.html'>Gasp!</a></li><li><a href='gals.html'>Gas</a></li><li><a href='gals.html'>Goodbyes</a></li><li><a href='gals.html'>Galactic</a></li><li><a href='gals.html'>Get Some</a></li><li><a href='gals.html'>Who Are These Hussies</a></li>";
        
    ul.insertAdjacentHTML("afterend", html);
    console.log("You did it!!");
}