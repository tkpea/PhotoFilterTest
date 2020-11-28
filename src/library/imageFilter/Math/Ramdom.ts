export function UnduplicateRandom(min:number, max:number, count:number = 0):number[] {
    const randoms: number[] = [];
    if(count === 0) count = max;
    for(let i = min; i <= count; i++){
        while(true){
            var tmp = RandomRange(min, max);
            if(!randoms.includes(tmp)){
            randoms.push(tmp);
            break;
            }
        }
    }
    return randoms
}
export function RandomRange(min:number, max:number):number{
  return Math.floor( Math.random() * (max - min + 1)) + min;
}