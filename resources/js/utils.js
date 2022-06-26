export const imageReader = (files, target) => {
    const reader = new FileReader
    reader.onload = e => {
        target.value = e.target.result;
    }
    reader.readAsDataURL(files)
}