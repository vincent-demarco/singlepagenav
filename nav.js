// Created by Joseph De Marco in the latter part of 2024

// This script is intended to be used to help organize small sites
// into different sections, which can be displayed or hidden instantly
// as they are all in the same HTML document.  Larger sites like blogs
// or blog sites should use traditional links, CMS, or other routing
// systems.

// User guide:
//  Add this script to your HTML file.
//  For each "page" you want to display separately, add a custom id
//  and a class="page".

//  Example: <section id="001_main" class="page">[...Page content... ]</section>
//
//  I typically use either <section> or <div> for these elements, but the choice
//  is up to you.

//  To link to a page add a "data-page" and class="nav-link" to the <a> tag:
//    <a class="nav-link" data-page="001_main" href="#">Main</a>
//    <a class="nav-link" data-page="002_examples" href="#">Examples</a>

//  Any content that doesn't appear in a "page" class element is always
//  displayed.

//  By default the script looks for the element with id "001_main" and
//  displays that first.

//Hide every section
document.querySelectorAll(".page").forEach((page) => {
  page.style.display = "none";
});

// Show main section. Change the ID as you please.
document.getElementById("001_main").style.display = "block";

// Enable Navigation as SPA
// No routing
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    const pageToShow = this.getAttribute("data-page");

    // Hide all sections
    document.querySelectorAll(".page").forEach((page) => {
      page.style.display = "none";
    });

    // Show the selected section
    document.getElementById(pageToShow).style.display = "block";
  });
});
   
