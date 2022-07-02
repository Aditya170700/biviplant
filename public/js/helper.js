let confirmation = async (message) => {
    return await Swal.fire({
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
            return res.isConfirmed;
        });
}
