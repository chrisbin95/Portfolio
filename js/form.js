function init() {
  window.onbeforeunload = function(){
    document.getElementById("contact-form").reset();;
};
}

init();
