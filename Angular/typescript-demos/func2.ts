function doMath
    (n1:number, n2:number, opr: string)
    :number
{
    let ans:any;
    ans = ()=>{
            switch(opr){
                case '+':
                return n1+n2;
                case '-':
                return n1-n2;
            }
    }
    return ans();
}