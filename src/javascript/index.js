//IMPORTS
import './components/Book.js';
import './components/Loader.js';
import './components/Background.js';

/*global window, document */
document.addEventListener("DOMContentLoaded", function(event) {
   window.experience.loader.initLoader();
   window.experience.book.initBook();
   window.experience.background.initBackground();
});
