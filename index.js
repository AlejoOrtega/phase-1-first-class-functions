const receivesAFunction = saySomething => {
    return saySomething()
}

const saySomething = () => "This is life";

const returnsANamedFunction = () =>{
    return function OneFunc(){}
}

const returnsAnAnonymousFunction = () => {
    return function(){}
}