import JsonP from 'jsonp'
export default class axios{
    static jsonp(options){
        return new Promise((resolve,reject)=>{
            JsonP(options.url,{
                 param:'callback'
            },function(err,response){
                if(err){
                    reject(err.message);
                }else{
                    console.log("response")
                    resolve(response);
                }
            })
        })
    }
}