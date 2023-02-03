import fs from 'fs';

export const updateImg = () => {

   try{
    const encoding = 'utf-8';
    const img = fs.readFileSync('../img/jardim.jpg', encoding);
    console.log(img);
   }catch(err){
       console.log(err);
   }

}