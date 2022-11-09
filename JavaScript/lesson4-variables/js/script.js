
// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərflərə həssasdır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
// 9.Eyni dəyişkən adını dəişkən ifadələrində istifadə etmək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield


// let      -> let              -> local
// const    -> constant         -> local
// var      -> variable         -> global


// const a =5;
// console.log(a);


// global

// if (true) {
//     let a = 5;
//     // local global
//     if (true) {
//         // local global
//         if (true) {
//             // local 
//             console.log(a);
//         }
//     }
// }


//  CONDITION

// if => eger 
// else => deyilse 
// else if => deyilse eger 

// const dataTime = 10 ;
// if (dataTime > 5 && dataTime < 13) {
//     console.log('good morning');
//     if (dataTime === 9) {
//         console.log('get up');
//     }else if(dataTime === 10){
//         console.log('have a breakfast');
//     }
// }else if(dataTime >= 13 && dataTime < 17){
//     console.log('good afternoon');
    
// }else if(dataTime >= 17 && dataTime < 21){
//     console.log('good evening');

// }else if(dataTime >= 21 && dataTime < 23){
//     console.log('good night');

// }else{
//     console.log('no time');
// }


// let mydata = 5;

// if (mydata <= 5) {
    
//     mydata = 10;
//     if (mydata >= 10 && mydata < 15) {
//         mydata = "Hello";
//         mydata == "Hello" ? console.log('hello everyone'):console.log('err 3');;
//     }else{
//         console.log('err 2');
//     }
// }else{
//     console.log('err 1');
// }


// const data = 5;

// switch (true) {
//     case (data>3):
//         console.log('this is 5');
//         break;
//     case 15:
//         console.log('this is 15');
//         break;
//         case "Hello":
//             console.log('this is hello');
//             break;
//     default:
//         console.log('err 1');
//         break;
// }

// let data = 5;

// switch (data) {
//     case 5:
//         if (data<10) {
//             data = 20;
//             data == 20 ? console.log(20):console.log(10);;
//         }
//         break;
//     case 15:
//         console.log('this is 15');
//         break;
//         case "Hello":
//             console.log('this is hello');
//             break;
//     default:
//         console.log('err 1');
//         break;
// }
// try {
//     throw 'everything is ok'
//     consolae.log("hello");
// } catch (err) {
//     console.log(err);
//     // console.log('burada sehv var');
// }finally{
//     console.log('im running everytime');
// }

