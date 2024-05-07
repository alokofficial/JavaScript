const coalesce = (...args) => {
    // for (const arg of args) {
    //     if (arg !== null && arg !== undefined) {
    //         return arg
    //     }

    return args.find(_=> ![null, undefined].includes(_))
    }
    // return null     


console.log( 
    coalesce(null, undefined, "Value One", 
                1, 2, 3, null) 
  ); 