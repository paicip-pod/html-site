function copyToClipboard() {
    if (navigator.permissions) {
        alert('navigator 6')
        navigator.permissions.query({name: "clipboard-write"}).then((result) => {
            if (result.state === 'granted') {
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
              try {
                var textarea = document.createElement("textarea");
                textarea.textContent = 'https://media.rss.com/paicip-pod/feed.xml';
                textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
                document.body.appendChild(textarea);
                textarea.select();
                let result = document.execCommand("copy");  // Security exception may be thrown by some browsers.
                document.body.removeChild(textarea);
                if (result) {
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
                  
                } else {
                    Swal.fire({
                        title: 'Failure!',
                        text: 'else',
                        icon: 'error',
                        timer: 1800,
                        timerProgressBar: true,
                        showCancelButton: false,
                        showCloseButton: false,
                        showConfirmButton: false
                      });
                }
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
            }
        }).catch(err => {
            Swal.fire({
                title: 'Failure!',
                text: 'catch permission',
                icon: 'error',
                timer: 1800,
                timerProgressBar: true,
                showCancelButton: false,
                showCloseButton: false,
                showConfirmButton: false
              });
        });
    } else {
        alert('no navigator')
        Swal.fire({
            title: 'Failure!',
            text: 'catch permission',
            icon: 'error',
            timer: 1800,
            timerProgressBar: true,
            showCancelButton: false,
            showCloseButton: false,
            showConfirmButton: false
          });
    }
    
}