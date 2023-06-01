function copyToClipboard() {
    navigator.clipboard.writeText('https://media.rss.com/paicip-pod/feed.xml');
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
}