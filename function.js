var n, res, opp ,op , num1 , num2 , base;

function add1(n)
{
    document.getElementById("n1").value+=n;
    document.getElementById("result").value="";
}
function add(opp)
{
    num1=parseFloat(document.getElementById("n1").value);
    document.getElementById("n1").value="";
    op=opp;
}

function clr()
{
    document.getElementById("n1").value="";
    document.getElementById("result").value="";
} 

function conver(base)
{
    if(num1!=null||num2!=null)
    {
        document.getElementById("n1").value="";
        document.getElementById("result").value="";
        num1=num1.toString(base);
        num2=num2.toString(base);
    }
    converres(base);
    
}
function converres(base)
{
    if(res!=null)
    {
        document.getElementById("result").value=res.toString(base);
    }
}

function equ()
{
    num2=parseFloat(document.getElementById("n1").value);
    switch(op)
    {
            case 1:
            {
                res=(num1+num2);
                break;
            }
            case 2:
            {
                res=num1-num2;
                break;
            }
            case 3:
            {
                res=num1*num2;
                break;
            }
            case 5:
            {
                if(num2>0)
                {
                    res=num1/num2;
                    document.getElementById("result").value=res;
                }
                else
                {
                    alert("Can't divid by Zero");
                }
                break;
            }
            case 4:
            {
                res=num1%num2;
                break;
            }
            default:
            {
                alert("Error");
            }
        }
    document.getElementById("result").value=res;
    document.getElementById("n1").value="";
}