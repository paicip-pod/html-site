function copyToClipboard() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('https://media.rss.com/paicip-pod/feed.xml').then(f => {
        Swal.fire({
          title: 'Success!',
          text: 'RSS Feed successfully copied to clipboard',
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
          text: 'Error copying RSS Feed to clipboard',
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
            document.execCommand("copy");  // Security exception may be thrown by some browsers.
            Swal.fire({
              title: 'Failure!',
              text: 'Error copying RSS Feed to clipboard',
              icon: 'error',
              timer: 1800,
              timerProgressBar: true,
              showCancelButton: false,
              showCloseButton: false,
              showConfirmButton: false
            });
        }
        catch (ex) {
            Swal.fire({
                title: 'Failure!',
                text: 'Error copying RSS Feed to clipboard',
                icon: 'error',
                timer: 1800,
                timerProgressBar: true,
                showCancelButton: false,
                showCloseButton: false,
                showConfirmButton: false
            });
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
}