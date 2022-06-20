let success = (message) => {
    Toastify({
        text: message,
        className: "rounded",
        style: {
            background: "#0d9618",
        },
        close: true,
    }).showToast();
}

let failed = (message) => {
    Toastify({
        text: message,
        className: "rounded",
        style: {
            background: "#e72d2e",
        },
        close: true,
    }).showToast();
}

let confirmation = async (message) => {
    let result = await Swal.fire({
        title: "Yakin?",
        text: message,
        icon: "warning",
        buttons: true,
        showCancelButton: true,
        confirmButtonText: "Oke",
        cancelButtonText: "Batal",
        dangerMode: true,
    })
    .then((res) => {
        if (res.isConfirmed) {
            return true;
        }

        return false;
    });

    return result;
}
