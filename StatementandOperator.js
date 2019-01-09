/*Object declaration*/
const Persons=[
       {
  
        name: 'Euler',
        discipline: 'math',
        genesis: 'man'
        },
       {
         name:'Socrates',
         discipline:'philosophy',
         genesis:'man'
  
        },
        {
          name :'Galileo',
          discipline:'astronomer',
          genesis:'man'          
  
         },
         {
           name:'Tesla',
           discipline:'scientists',
           genesis:'man'
  
         },
         {
           name:'Pasteur',
           discipline:'chemist',
           genesis:'man'
    
         }
];
  /*variable declaration*/
const searchedPerson="Socrates";
let personFound=false;
let messageFound="";

//array.forEach(function(currentValue))
Persons.forEach(function(findname){
  if {(findname.name === searchedPerson  &&  findname.genesis === 'man'); 
   let messageFound = searchedPerson + ' is ' + 'mortal';   
   let personFound = true;
    }else if{(findname.name === searchedPerson && findname.genesis !== 'man');      
    let  messageFound ='Therefore'+ searchedPerson + ' is ' + 'mortal';        
    let personFound = true;
    }else{
    let  messageFound='All men are mortal' ;        
    }
});
if(personFound){
    console.log(searchedPerson + ' exist');
    console.log(messageFound);
} else {
    console.log(searchedPerson + ' DON\'T exist');
}
//cake issue
const cakeFlavour = 'vanilla';
const primaryTest = 'chocolate';
let Cake = 
  {
    flavour: cakeFlavour,
    taste: true,
    price: 5
  };
if (!(Cake.flavour === primaryTest || Cake.flavour === cakeFlavour)) {
  console.log('Your cake  do not have the flavour \n either vanilla or chocolate but '
   + someCake.flavour);
}else {
  if (Cake.flavour === primaryTest) {
        console.log('Your cake has chocolate flavour');
  } else {
        console.log('Your cake has vanilla flavour');
  }
}
/*Thank You*/
