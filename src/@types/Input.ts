export  type InputProps ={
    primary:Boolean,
        type:any,
        placeholder:String,
        value :string ,
        getValue:(str: string) => any,
        error: (str: any) => any,
        errorMessage:string,
        isRequired:boolean , 
        rest:any
 }