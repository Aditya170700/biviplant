import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import moment from 'moment'

const toast = useToast();

export const imageReader = (files, target) => {
    const reader = new FileReader
    reader.onload = e => {
        target.value = e.target.result;
    }
    reader.readAsDataURL(files)
}

export const toastSuccess = (message) => {
    createToast(message, {
        type: 'success',
        timeout: 3000,
        position: 'top-right',
        showIcon: true,
        toastBackgroundColor: '#188753',
    });
    // toast.success(message, {
    //     position: "top-right",
    //     timeout: 3000,
    //     closeOnClick: true,
    //     pauseOnFocusLoss: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     draggablePercent: 0.6,
    //     showCloseButtonOnHover: false,
    //     hideProgressBar: true,
    //     closeButton: "button",
    //     icon: true,
    //     rtl: false
    // });
}

export const toastError = (message) => {
    createToast(message, {
        type: 'danger',
        timeout: 3000,
        position: 'top-right',
        showIcon: true,
        toastBackgroundColor: '#dc3545',
    });
    // toast.error(message, {
    //     position: "top-right",
    //     timeout: 3000,
    //     closeOnClick: true,
    //     pauseOnFocusLoss: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     draggablePercent: 0.6,
    //     showCloseButtonOnHover: false,
    //     hideProgressBar: true,
    //     closeButton: "button",
    //     icon: true,
    //     rtl: false
    // });
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

export const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(number);
}

export const formatDate = (date, format) => {
    return date == '-' ? date : moment(date).format(format);
}
