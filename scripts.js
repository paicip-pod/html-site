function copyToClipboard() {
  if (navigator.permissions) {
    navigator.clipboard.writeText("https://media.rss.com/paicip-pod/feed.xml").then((f) => {
        Swal.fire({
          title: "Success!",
          text: "navigator success",
          icon: "success",
          timer: 1800,
          timerProgressBar: true,
          showCancelButton: false,
          showCloseButton: false,
          showConfirmButton: false,
        });
      }).catch((err) => {
        Swal.fire({
          title: "Failure!",
          text: "navigator failure",
          icon: "error",
          timer: 1800,
          timerProgressBar: true,
          showCancelButton: false,
          showCloseButton: false,
          showConfirmButton: false,
        });
      });
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
        Swal.fire({
          title: "Success!",
          text: "exec copy success",
          icon: "success",
          timer: 1800,
          timerProgressBar: true,
          showCancelButton: false,
          showCloseButton: false,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          title: "Failure!",
          text: "exec copy failure",
          icon: "error",
          timer: 1800,
          timerProgressBar: true,
          showCancelButton: false,
          showCloseButton: false,
          showConfirmButton: false,
        });
      }
    } catch (ex) {
      Swal.fire({
        title: "Failure!",
        text: "exec copy catch",
        icon: "error",
        timer: 1800,
        timerProgressBar: true,
        showCancelButton: false,
        showCloseButton: false,
        showConfirmButton: false,
      });
    }
  }
}
