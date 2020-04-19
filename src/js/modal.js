// Get the modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var imgs = document.querySelectorAll(".portfolio-modal-activator");

for (var i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function(){
        modal.style.display = "block";
        if(typeof this.src === "string") {
          modalImg.src = this.src;
        }
        else {
          modalImg.src = window.getComputedStyle(this)["background-image"].split("url(\"")[1].split("\")")[0];
        }
        captionText.innerHTML = this.alt;
      };
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} ;