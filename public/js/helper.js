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
    let result = await swal({
        title: "Are you sure?",
        text: message,
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((res) => {
        return res;
    });

    return result;
}
