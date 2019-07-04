export const getAuthority:(str?:string)=>string | string[] = (str) =>{
  const authorityString = typeof str === 'undefined' ? localStorage.getItem('todo-authority'):str;  
  let authority;
  try{
    if (authorityString){
      authority = JSON.parse(authorityString);
    }
  }
  catch{
    authority = authorityString;
  }

  if(typeof authority === 'string'){
    authority = [authority];
  }
  return authority;
}

export const setAuthority:(authority:string|string[])=>void = (authority)=>{
  const proAuthority = typeof authority === 'string'? [authority]:authority;
  localStorage.setItem('todo-authority', JSON.stringify(proAuthority));
}