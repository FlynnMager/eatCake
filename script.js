function eat_cake(x){
    //I am reusing my same ends code here
    var end="";
    var first="";
    var last="";
    if(x.length%2==0){
        first= x.substring(0,x.length/2);
        last= x.substring(x.length/2, x.length);
    }else{
        first= x.substring(0,x.length/2+.5);
        last= x.substring(x.length/2+.5, x.length);
    }
    var y=0;
    for(var i=0;i<last.length;i++){
        if(last.substring(i,i+1)==first.substring(0,1)){
            y=0;
            for(var d=i;d<last.length;d++){

                if(last.substring(d,d+1)==first.substring(y,y+1)){

                }else{
                    break;
                }
                y++
                if(d==last.length-1){
                    end= first.substring(0,y);
                }
            }
        }
    }
    if(end==""){
        return 1;
    }
    return x.length/end.length;
}
