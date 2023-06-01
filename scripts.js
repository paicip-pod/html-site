function copyToClipboard() {
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
            text: err,
            //text: 'Error copying RSS Feed to clipboard',
            icon: 'error',
            timer: 1800,
            timerProgressBar: true,
            showCancelButton: false,
            showCloseButton: false,
            showConfirmButton: false
        });
    });
}