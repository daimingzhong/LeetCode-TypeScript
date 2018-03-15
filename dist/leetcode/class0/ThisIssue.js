// (function() {
//     const that = this;
//
//     setTimeout(function() {
//         console.log("function 1");
//         console.log(this); // this is Timeout{}
//         console.log("=============================================");
//         console.log(that);  // that is {console}
//         console.log("=============================================");
//         console.log(this === that);  // false
//     });
//
//     setTimeout(() => {
//         console.log("function 2");
//         console.log(this);  // this is {console}
//         console.log("=============================================");
//         console.log(that);  // that is {console}
//         console.log("=============================================");
//         // console.log("function 3");  // true
//         console.log(this === that);
//     });
//
// })();
//# sourceMappingURL=ThisIssue.js.map