export default class Helpers{

    // JSON clone: 
   // + Creates true deep copy
   // + This is faster and more reliable than native looping
   // - Functions are not copied 
   // - Dates ares returned in ISO date-string format
   static Clone<T>(x:T|{} = {}):T{
      return JSON.parse(JSON.stringify(x));
   }

   // JSON close with date parsing
   // + attempts to revive parsed datestrings
   // - less performant
   // - should be tested case by case
   static cloneWithDates(x:React.ReactNode = {}){
      const dateTimeReviver = (key:string, value:string) => {
         if (typeof value === "string" && /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(value)) {
            return new Date(value);
         }
         return value;
      };  
      return JSON.parse(JSON.stringify(x), dateTimeReviver);
   }

   // Converts bytes to human readable string
   public static bytesToSize(bytes:number) {
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
   
      if (bytes === 0) {
         return '0 Byte';
      }
      const i = Math.floor(Math.log(bytes) / Math.log(1024));
      return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
   }
}