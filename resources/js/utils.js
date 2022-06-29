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
