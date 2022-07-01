export const imageReader = (files, target) => {
    const reader = new FileReader
    reader.onload = e => {
        target.value = e.target.result;
    }
    reader.readAsDataURL(files)
}

export  const dataURLtoFile = (dataurl) => {

    let arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], 'haha', {type:mime});
}

export const slugify = (text, ampersand = 'and') => {
    const a = 'àáäâèéëêìíïîòóöôùúüûñçßÿỳýœæŕśńṕẃǵǹḿǘẍźḧ'
    const b = 'aaaaeeeeiiiioooouuuuncsyyyoarsnpwgnmuxzh'
    const p = new RegExp(a.split('').join('|'), 'g')

    return text.toString().toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(p, c => b.charAt(a.indexOf(c)))
    .replace(/&/g, `-${ampersand}-`)
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '')
}
