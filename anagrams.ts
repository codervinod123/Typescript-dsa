// check for anagram string

//  const anagram=(a:string,b:string):boolean=>{
//           a=a.split("").sort().join("");
//            return a===b;
//   }
//   console.log(anagram("vinod","dinov"));



// optimization  # 2nd Approach
// key value pair


const anagram=(a:string,b:string):boolean=>{
        if(a.length !== b.length) return false;
        const obj1: { [key: string]: number } ={};
        const obj2: { [key: string]: number } ={};
        
         for(let i=0; i <= a.length; i++){
                obj1[a[i]]=(obj1[a[i]] || 0)+1;
                obj2[b[i]]=(obj2[b[i]] || 0)+1;
         }

         for(const key in obj1){
            if(obj1[key] !== obj2[key]) return false;
         }

        return true;
        
  }
  console.log(anagram("vinod","vindo"));


