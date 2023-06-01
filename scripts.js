function copyToClipboard() {
    if (!!navigator.clipboard) {
      navigator.clipboard.writeText('https://media.rss.com/paicip-pod/feed.xml').then(f => {
        Swal.fire({
          title: 'Success!',
          text: 'navigator',
          icon: 'success',
          timer: 1800,
          timerProgressBar: true,
          showCancelButton: false,
          showCloseButton: false,
          showConfirmButton: false
        });
      }).catch(err => {
        Swal.fire({
          title: 'Failure!',
          text: 'this error', //'Error copying RSS Feed to clipboard',
          icon: 'error',
          timer: 1800,
          timerProgressBar: true,
          showCancelButton: false,
          showCloseButton: false,
          showConfirmButton: false
        });
      });
    } else {
        var textarea = document.createElement("textarea");
        textarea.textContent = 'https://media.rss.com/paicip-pod/feed.xml';
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        }
        catch (ex) {
            Swal.fire({
                title: 'Failure!',
                text: 'that errpr',
                icon: 'error',
                timer: 1800,
                timerProgressBar: true,
                showCancelButton: false,
                showCloseButton: false,
                showConfirmButton: false
            });
        }
        finally {
            Swal.fire({
                title: 'Success!',
                text: 'finally',
                icon: 'success',
                timer: 1800,
                timerProgressBar: true,
                showCancelButton: false,
                showCloseButton: false,
                showConfirmButton: false
              });
            document.body.removeChild(textarea);
        }
    }
}