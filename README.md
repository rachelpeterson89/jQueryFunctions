# jQueryFunctions
Coding Dojo jQuery Assignment

Assignment: jQuery Functions

Create a web page that uses the following jQuery functions: Don't randomly start writing jQuery and find elements to attach jQuery code to. Think about what each function could be useful for! This is an assignment that previous students have often reverted back to so as to brush up on their jQuery in later weeks! Use the mockup as motivation, but feel free to embellish!

Do not spend more than 4-8 hours on this assignment.

Important: Sometimes students spend so much time going through the documentation that it prevents them from actually building things. Skim through the documentation quickly and casually play around to get familiar with only the following jQuery methods. Once you have spent 4-5 hours on this assignment, move on as you'll get to learn more about how you can use these jQuery methods to build some amazing things later on.  The wireframe on the right shows only 3 functions being tested.  In this assignment, we want you to add more and test all 17 jQuery functions shown below. 

.click
.hide
.show
.toggle
.slideDown
.slideUp
.slideToggle
.fadeIn
.fadeOut
.addClass
.before
.after
.append
.html
.attr
.val
.text

Learn These Tags Only!

There are over a hundred jQuery functions in the library. This is a lot of jQuery! You can easily build anything you can imagine using these functions. Take time to learn the functions we believe are most important. Once you know these, you can be a jQuery expert. For the exercise in this section, make sure to design your page in such a way that you make it very apparent the jQuery function you are using and what you expect it to do.

IMPORTANT - For jQuery, we have you go through jQuery's official documentation to learn these tags.  The reason we do this, compared to creating a video for each of these methods, is because we want you to start getting familiar with reading technical documentation and think jQuery's technical documentation is a good place to start. A good developer must know how to read technical documentation and jQuery's documentation is one of the best out there.

Study only these tags!

Effects (functions to do some cool animation effects)
.hide()
.show()
.toggle()
.slideUp()
.slideDown()
.slideToggle()
.fadeOut()
.fadeIn()

CSS (adding or removing a class for any HTML element/DOM)
.addClass()
.removeClass()
.css()

Manipulation (retrieving or setting value or text in any HTML element)
.after()
.append()
.prepend()
.attr()
.before()
.html()
.text()
.val()

Events (functions to handle an event)
.click()
.on()
.live() - deprecated (JQuery 1.7)
.hover()

Note that for the manipulation jQuery functions, there are few distinctions to make. The functions .html() and .text() are different in a key way: .html() can be used to insert new HTML markup, meaning new HTML tags. .text() is used to get or set just the text value of an HTML element. For instance, you could use .text() to change the text of a paragraph, but if you want to put an ordered list inside of the paragraph, you need to use .html() to insert the appropriate tags into the paragraph.

Similarly, .append() and .html() do nearly the same thing; they both can alter the HTML content of the selected item. The function .append will add markup to the element in question, whereas .html() will overwrite the markup with whatever is run inside the parentheses. So keep in mind that if you want to add content, use .append(), but if you want to replace content, use .html().