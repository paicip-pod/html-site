function copyToClipboard() {
  if (navigator.permissions) {
    navigator.clipboard.writeText("https://media.rss.com/paicip-pod/feed.xml").then(f => success()).catch(e => err());
  } else {
    try {
      var textarea = document.createElement("textarea");
      textarea.textContent = "https://media.rss.com/paicip-pod/feed.xml";
      textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in Microsoft Edge.
      document.body.appendChild(textarea);
      textarea.select();
      let result = document.execCommand("copy"); // Security exception may be thrown by some browsers.
      document.body.removeChild(textarea);
      if (result) {
        success();
      } else {
        err();
      }
    } catch (ex) {
      err();
    }
  }
}
function success() {
  Swal.fire({
    title: "Success!",
    text: 'RSS Feed successfully copied to clipboard',
    icon: "success",
    timer: 1800,
    timerProgressBar: true,
    showCancelButton: false,
    showCloseButton: false,
    showConfirmButton: false,
  });
}
function err() {
  Swal.fire({
    title: "Failure!",
    text: 'Error copying RSS Feed to clipboard',
    icon: "error",
    timer: 1800,
    timerProgressBar: true,
    showCancelButton: false,
    showCloseButton: false,
    showConfirmButton: false,
  });
}