function copyRssToClipboard() {
  if (navigator.permissions) {
    navigator.clipboard.writeText("https://media.rss.com/paicip-pod/feed.xml").then(f => success('RSS Feed')).catch(e => err('RSS Feed'));
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
        success('RSS Feed');
      } else {
        err('RSS Feed');
      }
    } catch (ex) {
      err('RSS Feed');
    }
  }
}
function copyEmailToClipboard() {
  if (navigator.permissions) {
    navigator.clipboard.writeText("paicippod@gmail.com").then(f => success('Email')).catch(e => err('Email'));
  } else {
    try {
      var textarea = document.createElement("textarea");
      textarea.textContent = "paicippod@gmail.com";
      textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in Microsoft Edge.
      document.body.appendChild(textarea);
      textarea.select();
      let result = document.execCommand("copy"); // Security exception may be thrown by some browsers.
      document.body.removeChild(textarea);
      if (result) {
        success('Email');
      } else {
        err('Email');
      }
    } catch (ex) {
      err('Email');
    }
  }
}
function success(type) {
  console.log(type);
  Swal.fire({
    title: "Success!",
    text: type + ' successfully copied to clipboard',
    icon: "success",
    timer: 1800,
    timerProgressBar: true,
    showCancelButton: false,
    showCloseButton: false,
    showConfirmButton: false,
  });
}
function err(type) {
  Swal.fire({
    title: "Failure!",
    text: 'Error copying ' + type + ' to clipboard',
    icon: "error",
    timer: 1800,
    timerProgressBar: true,
    showCancelButton: false,
    showCloseButton: false,
    showConfirmButton: false,
  });
}