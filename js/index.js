function scrollToId(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function hasClassName(htmlElement, className) {
    /**
     * Checks the provided ```htmlElement``` for the given ```className```
     */
    return (' ' + htmlElement.className + ' ').indexOf(' ' + className + ' ') > -1;
   
}

function addToClassName(htmlElement, className) {
    /**
     * Given the ```htmlElement``` add the provided ```className```
     */
    if (!hasClassName(htmlElement, className)) {
        htmlElement.className += (' ' + className)
    }
}

function expandPost(post) {
    /**
     * Given a .post HTML element, expand it.
     */
    addToClassName(post, 'expanded');
}

function hideReadMoreLink(readMoreLink) {
    /**
     * Given a .read-more HTML element, hide it.
     */
    addToClassName(readMoreLink, 'hidden');
}

function handlePostClick (event) {
    /**
     * When a user clicks on a .post, expand it and hide the .read-more link.
     */
    // Grab the clicked .post div
    var clickedPost = event.currentTarget;
    // Grab the /read-more link
    var readMoreLink = clickedPost.getElementsByClassName('read-more')[0];

    // Expand the div
    expandPost(clickedPost);
    // Hide the .read-more link
    hideReadMoreLink(readMoreLink);
}

function addClickEventToTosts () {
    /**
     * Add the 'click' event handlers to the .post elements.
     */
    // Grab our .post divs
    var posts = document.getElementsByClassName('post');

    // Iterate through the .post divs and add event listeners
    for (var i=0; i < posts.length; i++) {
        // Grab out .post div
        var post = posts[i];

        // Add event listener
        post.addEventListener('click', function (event) {
            handlePostClick(event);
        }); 
    }
}


document.addEventListener("DOMContentLoaded", function () {
    addClickEventToTosts();
});