const Notify = (message: string) => {
	console.log(message);
};

export { Notify };
// import * as toastr from 'toastr';
// import settings from 'Utils/Settings';

// // TODO otetaan käyttöön kun typescript 3.0 tulee saataville
// // import key from './keys.json';
// // console.log(key);
// // const keys = require('./keys.json');
// // console.log(keys);
// // console.log(keys.USER_TIP_POSITION);

// export default class Notify {

// 	static getOptions =  {
//       closeButton: true,
//       debug: false,
//       newestOnTop: false,
//       progressBar: false,
//       positionClass: Notify.getPosition(),
//       preventDuplicates: false,
//       onclick: null as any,
//       showDuration: "300",
//       hideDuration: "1000",
//       timeOut: "6500",
//       extendedTimeOut: "3000",
//       showEasing: "swing",
//       hideEasing: "linear",
//       showMethod: "fadeIn",
//       hideMethod: "fadeOut"
//    };

//    static getPosition(){

//       const position = settings.getNotificationPosition();

//       switch (position){
//          case "top-right":
//             return "toast-top-right";
//          case "top-center":
//             return "toast-top-center";
//          case "bottom-right":
//             return "toast-bottom-right";
//          case "bottom-center":
//             return "toast-bottom-center";
//          default:
//             return "toast-top-right";
//       }
//    }

// 	static clear() {
// 		toastr.clear();
// 	}

// 	static announce(msg: string, title: string = null, type = "success", options = Notify.getOptions) {
// 		toastr[type](msg, title, options);
//    }
//    static success(msg: string, title: string = null) {
// 		toastr.success(msg, title);
//    }
//    static error(msg: string, title: string = null) {
// 		toastr.error(msg, title);
//    }
//    static info(msg: string, title: string = null) {
// 		toastr.info(msg, title);
//    }
//    static warning(msg: string, title: string = null) {
// 		toastr.warning(msg, title);
// 	}
// }
