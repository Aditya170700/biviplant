let success = (message) => {
    swal({
        title: "Success",
        text: message,
        icon: "success",
        button: "Oke",
    });
}

let failed = (message) => {
    swal({
        title: "Error",
        text: message,
        icon: "error",
        button: "Oke",
    });
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
